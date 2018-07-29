<template>
    <div class="mypanel">
        <!--标题头部  -->
        <div v-if="evaluationStart" class="panelHeader">
            <div class="panelHeaderTitle">
                <h3>{{name}}</h3>
            </div>
            <div class="progressBar">
                <label>当前进度：</label>
                    <md-progress-bar md-mode="determinate" :md-value="fillValue" class="progressBarFill"></md-progress-bar>
                <label >{{questionIndex}}/{{questionCounts}}</label>
            </div>
            <!-- <md-button v-if="questionIndex==questionCounts" class="md-primary" @click="submit()">提交</md-button> -->
   
            <md-button v-if="questionIndex==questionCounts" class="md-primary md-raised" @click="submit()">提交</md-button>
            
        </div>

        <!--答题区  -->
        <div v-if="evaluationStart" class="panelContent">
            <!--试题标题  -->
            
                        <!-- <div class="panelContentbody"> -->
              <div class="md-layout">
              
                <!--上一题  -->
                <!-- <div class="panelContentbodyleft" @click="preItem()"> -->
                <div  class="md-layout-item md-size-10 textCenter highlight" style="padding-top: 25%;" @click="preItem()">
                    <md-icon class="iconSize"  >keyboard_arrow_left</md-icon>
                </div>
            
                <!--试题正文  -->
                <div class="md-layout-item textCenter">
                  <answerPage v-for="question in questionsList" :key="question.id" :question="question"  @selectedAnswer="pushAnswer"></answerPage>
                </div>

                <!--下一题  -->
                <!-- <div class="panelContentbodyRight" @click="nextItem()"> -->
                <div  class="md-layout-item md-size-10 textCenter highlight" style="padding-top: 25%;" @click="nextItem()">
                    <md-icon class="iconSize"  >keyboard_arrow_right</md-icon>
                </div>
                 <md-dialog-alert
                  class="md-primary md-raised"
                  :md-active.sync="showAlert"
                  :md-content="AlertMessage"
                  md-confirm-text="知道了" />
            </div>
        </div>

        <!--答题完成界面 -->
        <evaluationEnd v-if="evaluationfinished" @viewfinishedReport="isViewReport"></evaluationEnd>

        <!-- 答题报告-->
        <evaluationsReport v-if="isShowReport && reportParm.datas.testTime" :reportParm="reportParm" ></evaluationsReport>
    </div>
</template>

<style lang="scss" scoped>
.panelContent {
  background-color: rgba(255, 250, 240, 0.2);
  margin: 0 2%;
}

.panelHeader {
  text-align: center;
  // padding: 10px 0px 0px;
  // width: 90%;
  margin: 20px 10%;
  // background-color: rgba(126, 207, 210, 0.7);
}

.md-progress-bar {
  margin: 24px;
}
.panelHeaderTitle {
  // display: inline-flex;
}
.panelContentTitle {
  padding: 15px 40px;
  margin-left: -32%;
}
.progressBar {
  display: inline;
  padding: 0 5%;
}
.progressBarFill {
  width: 50%;
  display: inline-flex;
  height: 12px;
  border-radius: 12px;
}

.panelContentbodyleft {
  opacity: 0.2;
  width: 20%;
  display: inline-block;
  vertical-align: text-bottom;
  height: 280px;
  cursor: pointer;
}

.panelContentbodyCenter {
  width: 59%;
  text-align: left;
  display: inline-block;
}

.panelContentbodyCenter div {
  padding: 10px;
}
.panelContentbodyRight {
  opacity: 0.2;
  width: 20%;
  display: inline-block;
  text-align: right;
  vertical-align: text-bottom;
  height: 280px;
  cursor: pointer;
}

.textCenter {
  text-align: center;
}
.iconSize {
  height: 120px;
  font-size: 120px !important;
}
.highlight:hover {
  cursor: pointer;
  background-color: rgba(83, 83, 83, 0.3);
}
.md-layout-item {
  // height: 40px;

  &:after {
    width: 100%;
    display: block;
    background: md-get-palette-color(green, 200);
    content: " ";
  }
}
</style>

<script>
import answerPage from "./answerPage.vue";
import evaluationEnd from "./evaluationEnd.vue";
import evaluationsReport from "./evaluationsReports/evaluationsReport.vue";

export default {
  name: "evaluatingPage",
  components: {
    answerPage,
    evaluationEnd,
    evaluationsReport
  },
  props: [],
  data: () => ({
    showAlert: false,
    // showErrAlert:false,
    AlertMessage: "",
    second: false,
    evaluationId: "",
    name: "",
    questionCounts: "",
    // questionIndex: 1,
    // currentIndex: 1,
    fillValue: 10,
    questionsAllList: [],
    questionsList: [],
    question: Object,
    userAnswer: "",
    userAnswerlist: [],
    questionsListsId: [],
    savedata: Object,
    // evaluationfinished: false,
    // isShowReport: false,
    idx: ""
    // currentAnswer:"",
    // currentExpert:"",
    // reportParm: {
    //   name: "",
    //   evaluationId: this.evaluationId,
    //   idx: this.idx,
    //   datas: Object
    // }
    //selectedItem:9
  }),
  created: function() {},
  mounted: function() {
    let $this = this;
    this.$store.commit("evlaluating/getCurrentIndex", 1);
    this.$store.commit("evlaluating/getQuestionIndex", 1);
    if (!this.seeReport) {
      let apikey = "",
        request = {
          id: this.currentEvaluationId,
          session_id: this.session_id
        },
        url = "/static/jsons/evaluation.json",
        type = "GET",
        // url = "/IBUS/DAIG_SYS/getQuestion",
        // type = "POST",
        param = {
          apikey,
          request
        };

      this.evaluationId = this.currentEvaluationId;
      this.idx = this.currentEvaluationIdx;
      this.name = this.currentEvaluationName;
      this.$store.commit("evlaluating/getReportParm", {
        key: "name",
        value: this.currentEvaluationName
      });
      this.$store.commit("evlaluating/getReportParm", {
        key: "evaluationId",
        value: this.currentEvaluationId
      });
      this.getQuestionData(type, url, param);
    } else {
      $this.isViewReport(true);
    }

    // this.$root.eventBus.$on("viewReport", function(bool) {

    // });
  },
  methods: {
    preItem() {
      if (this.currentIndex == 1) return;
      this.questionIndex--;
      this.currentIndex--;

      //更新进度条
      this.fillValue = this.currentIndex / this.questionCounts * 100;

      this.questionsList = [];
      this.questionsList.push(this.questionsAllList[this.questionIndex - 1]);
      this.savedata.answer = this.questionsList[0].answered;
      this.savedata.expectData = this.questionsList[0].expected;
      //console.log(this.savedata)
      //this.selectedItem = this.userAnswerlist[this.currentIndex-1];
    },
    nextItem() {
      if (this.currentIndex == this.questionCounts) return;
      this.addAnswerFun();
    },
    submit() {
      // this.evaluationfinished = true;
      //提交后台，将评价主表ID和答案{questionId:"问题id",answer:"题目序号",evaluationId:"问卷id",status:"0未完成 1完成",idx:"评测主表id"}发到后台
      this.submitAnsewrFun();
    },
    pushAnswer(answer) {
      // debugger;
      this.userAnswer = answer.answer;
      this.questionsAllList[this.questionIndex - 1].answered = this.userAnswer;
      this.questionsAllList[this.questionIndex - 1].expected = answer.expected;
      this.savedata = {
        questionId: answer.questionId,
        answer: this.userAnswer,
        expectData: answer.expected,
        evaluationId: this.evaluationId,
        status: this.currentIndex == this.questionCounts ? 1 : 0,
        idx: answer.idx,
        session_id: this.session_id
      };
      // console.log("savedata");
      // console.log(this.savedata);
    },
    isViewReport(bool) {
      //debugger;
      let apikey = "";
      let request = {
          evaluationId: this.currentEvaluationId,
          idx: this.currentEvaluationIdx,
          session_id: this.session_id
        },
        param = {
          apikey,
          request
        },
        // type = "GET",
        // url = "/static/jsons/sorce.json";
        type = "POST",
        url = "/IBUS/DAIG_SYS/getTotalScoreInfo";
      this.$store.commit("evlaluating/changeEvaluationfinished", false);
      // this.evaluationfinished = false;
      // this.isShowReport = bool;
      this.$store.commit("evlaluating/changeIsShowReport", bool);

      //提交后台，将评价主表ID和答案{questionId:"问题id",answer:"题目序号",evaluationId:"问卷id",status:"0未完成 1完成",idx:"评测主表id"}发到后台

      this.getTotalScoreInfo(type, url, param);
    },
    getQuestionData(type, url, param) {
      let $this = this;
      $this
        .$http({
          method: type,
          url: url,
          data: param
        })
        .then(res => {
          //debugger;
          if (res.data.errorCode !== 0) {
            if (res.data.errorCode == "-8") {
              $this.$store.commit(
                "evlaluating/changeShowevaluatingPage",
                false
              );
              $this.$store.commit("evlaluating/changeShowErrAlert", true);
            } else {
              $this.showAlert = true;
              $this.AlertMessage = res.data.errorMsg;
            }
          } else {
            $this.$store.commit("evlaluating/changeShowevaluatingPage", true);
            $this.questionsAllList = res.data.return;
            $this.questionCounts = res.data.count;
            $this.questionsList.push(
              $this.questionsAllList[$this.questionIndex - 1]
            );
          }
          // console.log($this.questionsList);
        })
        .catch(err => {
          console.log(err);
        });
    },
    addAnswerFunService(type, url, param) {
      let $this = this;
      $this
        .$http({
          method: type,
          url: url,
          data: param
        })
        .then(res => {})
        .catch(err => {
          console.log(err);
        });
    },
    submitAnsewrFun() {
      let $this = this;
      if (
        this.savedata.answer &&
        this.savedata.answer !== "" &&
        this.savedata.expectData &&
        this.savedata.expectData !== ""
      ) {
        if (this.currentIndex < this.questionCounts) {
          this.questionIndex++;
          this.currentIndex++;
        } else {
          this.savedata.status = 1;
        }

        //更新进度条
        this.fillValue = this.currentIndex / this.questionCounts * 100;

        this.questionsList = [];
        this.questionsList.push(this.questionsAllList[this.questionIndex - 1]);

        // console.log(this.questionsList);
        //保存答案
        this.userAnswerlist.push({
          answered: this.savedata.answer,
          expected: this.savedata.expectData
        });

        //保存答题选项
        //提交后台，将评价主表ID和答案{questionId:"问题id",answer:"题目序号",evaluationId:"问卷id",status:"0未完成 1完成",idx:"评测主表id"}发到后台
        this.currentEvaluationIdx = this.questionsList[0].idx;
        this.$store.commit("evlaluating/getReportParm", {
          key: "idx",
          value: this.questionsList[0].idx
        });
        // this.reportParm.idx = this.questionsList[0].idx;

        // let request = {
        //     evaluationId: $this.evaluationId,
        //     idx: $this.idx
        //   },
        let request = this.savedata,
          apikey = "",
          type = "POST",
          url = "/IBUS/DAIG_SYS/addAnswer",
          param = {
            apikey,
            request
          };
        $this
          .$http({
            method: type,
            url: url,
            data: param
          })
          .then(res => {
            $this.$store.commit("evlaluating/changeEvaluationStart", false);
            $this.$store.commit("evlaluating/changeEvaluationfinished", true);
            $this.$store.commit("evlaluating/getCurrentIndex", 1);
            $this.$store.commit("evlaluating/getQuestionIndex", 1);
          })
          .catch(err => {
            console.log(err);
          });
        // $this.savedata.answer = "";
        // $this.savedata.expectData = "";
        // this.$store.commit("evlaluating/getCurrentChooseObj", "");
        // this.$store.commit("evlaluating/getCurrentexpertObj", "");
      } else {
        this.showAlert = true;
        this.AlertMessage = "请完成当前答题再提交";
      }
    },
    addAnswerFun() {
      if (
        this.savedata.answer &&
        this.savedata.answer !== "" &&
        this.savedata.expectData &&
        this.savedata.expectData !== ""
      ) {
        if (this.currentIndex < this.questionCounts) {
          this.questionIndex++;
          this.currentIndex++;
        } else {
          this.savedata.status = 1;
        }

        //更新进度条
        this.fillValue = this.currentIndex / this.questionCounts * 100;

        this.questionsList = [];
        this.questionsList.push(this.questionsAllList[this.questionIndex - 1]);

        // console.log(this.questionsList);
        //保存答案
        this.userAnswerlist.push({
          answered: this.savedata.answer,
          expected: this.savedata.expectData
        });

        //保存答题选项
        //提交后台，将评价主表ID和答案{questionId:"问题id",answer:"题目序号",evaluationId:"问卷id",status:"0未完成 1完成",idx:"评测主表id"}发到后台
        this.currentEvaluationIdx = this.questionsList[0].idx;
        this.$store.commit("evlaluating/getReportParm", {
          key: "idx",
          value: this.questionsList[0].idx
        });
        // this.reportParm.idx = this.questionsList[0].idx;

        // let request = {
        //     evaluationId: $this.evaluationId,
        //     idx: $this.idx
        //   },
        let request = this.savedata,
          apikey = "",
          type = "POST",
          url = "/IBUS/DAIG_SYS/addAnswer",
          param = {
            apikey,
            request
          };
        this.addAnswerFunService(type, url, param);
        // $this.savedata.answer = "";
        // $this.savedata.expectData = "";
        // this.$store.commit("evlaluating/getCurrentChooseObj", "");
        // this.$store.commit("evlaluating/getCurrentexpertObj", "");
      } else {
        this.showAlert = true;
        this.AlertMessage = "请完成当前答题后再进入下一题";
      }
    },
    getTotalScoreInfo(type, url, param) {
      let $this = this;
      this.$http({
        method: type,
        url: url,
        data: param
      }).then(res => {
        if (res.data.errorCode !== 0) {
          console.log(res.data.errorMsg);
          return;
        }
        $this.$store.commit("evlaluating/getReportParm", {
          key: "datas",
          value: res.data.return
        });
      });
    }
  },
  computed: {
    currentEvaluationName() {
      return this.$store.state.evlaluating.evlaluating.currentEvaluationName;
    },
    currentEvaluationId() {
      return this.$store.state.evlaluating.evlaluating.currentEvaluationId;
    },
    currentEvaluationIdx: {
      get() {
        return this.$store.state.evlaluating.evlaluating.currentEvaluationIdx;
      },
      set(newValue) {
        this.$store.state.evlaluating.evlaluating.currentEvaluationIdx = newValue;
      }
    },
    reportParm() {
      return this.$store.state.evlaluating.evaluatingPage.reportParm;
    },
    session_id() {
      return this.$store.state.loginPage.session_id;
    },
    evaluationStart() {
      return this.$store.state.evlaluating.evaluatingPage.evaluationStart;
    },
    currentIndex: {
      get() {
        return this.$store.state.evlaluating.evaluatingPage.currentIndex;
      },
      set(newValue) {
        this.$store.state.evlaluating.evaluatingPage.currentIndex = newValue;
      }
    },
    questionIndex: {
      get() {
        return this.$store.state.evlaluating.evaluatingPage.questionIndex;
      },
      set(newValue) {
        this.$store.state.evlaluating.evaluatingPage.questionIndex = newValue;
      }
    },
    isShowReport() {
      return this.$store.state.evlaluating.evaluatingPage.isShowReport;
    },
    evaluationfinished() {
      return this.$store.state.evlaluating.evaluatingPage.evaluationfinished;
    },
    seeReport() {
      return this.$store.state.evlaluating.evaluatingPage.seeReport;
    }
  },
  created: () => {}
};
</script>


