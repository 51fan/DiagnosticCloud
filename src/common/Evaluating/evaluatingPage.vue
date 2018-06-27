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
                <label>{{questionIndex}}/{{questionCounts}}</label>
            </div>
            <!-- <md-button v-if="questionIndex==questionCounts" class="md-primary" @click="submit()">提交</md-button> -->
   
            <md-button v-if="questionIndex==questionCounts" class="md-primary md-raised" @click="submit()">提交</md-button>
            
        </div>

        <!--答题区  -->
        <div v-if="evaluationStart" class="panelContent">
            <!--试题标题  -->
            
            <div class="panelContentbody">
                <!--上一题  -->
                <div  class="panelContentbodyleft" @click="preItem()">
                    <md-icon class="md-size-5x"  >keyboard_arrow_left</md-icon>
                </div>
            
                <!--试题正文  -->
                <answerPage v-for="question in questionsList" :key="question.id" :question="question"  @selectedAnswer="pushAnswer"></answerPage>
                <!--下一题  -->
                <div class="panelContentbodyRight" @click="nextItem()">
                    <md-icon class="md-size-5x"  >keyboard_arrow_right</md-icon>
                </div>
            </div>
        </div>

        <!--答题完成界面 -->
        <evaluationEnd v-if="evaluationfinished" @viewfinishedReport="isViewReport"></evaluationEnd>

        <!-- 答题报告-->
        <evaluationsReport v-if="isShowReport" :evaluationName="name"></evaluationsReport>
    </div>
</template>

<style lang="scss" scoped>
.panelContent {
  background-color: rgba(255, 250, 240, 0.2);
  margin: 0 10%;
}

.panelHeader {
  text-align: center;
  padding: 10px 0px 0px;
  width: 80%;
  margin: 30px 10%;
  background-color: rgba(126, 207, 210, 0.7);
}
.md-progress-bar {
  margin: 24px;
}
.panelHeaderTitle {
  display: inline-flex;
}
.panelContentTitle {
  padding: 15px 40px;
  margin-left: -32%;
}
.progressBar {
  display: inline;
  padding: 0 10%;
}
.progressBarFill {
  width: 600px;
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
    second: false,
    evaluationId: "",
    name: "",
    questionCounts: "",
    questionIndex: 1,
    currentIndex: 1,
    fillValue: 10,
    questionsAllList: [],
    questionsList: [],
    question: Object,
    userAnswer: "",
    userAnswerlist: [],
    questionsListsId: [],
    savedata: Object,
    evaluationStart:true,
    evaluationfinished:false,
    isShowReport:false
    //selectedItem:9
  }),
  created: function() {},
  mounted: function() {
    let apiKry = "",
      self = this,
      require = {};

    self.evaluationId = this.$route.query.id;
    self.name = this.$route.query.name;
    //self.evaluationName = self.name
    require.id = self.evaluationId;
    self.$http
      .get("/static/jsons/evaluation.json", {
        apiKry,
        require
      })
      .then(res => {
        //console.log(res.data.return)
        //debugger;
        self.questionsAllList = res.data.return;
        self.questionCounts = res.data.count;
        self.questionsList.push(self.questionsAllList[self.questionIndex - 1]);
        //console.log(self.questionsList);
      });
  },
  methods: {
    preItem: function() {
      if (this.currentIndex == 1) return;
      this.questionIndex--;
      this.currentIndex--;

      //更新进度条
      this.fillValue = this.currentIndex / this.questionCounts * 100;

      this.questionsList = [];
      this.questionsList.push(this.questionsAllList[this.questionIndex - 1]);

      //console.log(this.savedata)
      //this.selectedItem = this.userAnswerlist[this.currentIndex-1];
    },
    nextItem: function() {
      if (this.currentIndex == this.questionCounts) return;
      this.questionIndex++;
      this.currentIndex++;

      //更新进度条
      this.fillValue = this.currentIndex / this.questionCounts * 100;

      this.questionsList = [];
      //this.questionsAllList[this.questionIndex - 2].answered? this.questionsAllList[this.questionIndex - 2].answered= this.savedata.answer:this.questionsAllList[this.questionIndex - 2].answered= this.savedata.answer;
      this.questionsList.push(this.questionsAllList[this.questionIndex - 1]);

      this.userAnswerlist.push(this.savedata.answer);

      //保存答题选项
      //this.$http.post().then();
    },
    submit: function() {
      //debugger;
      // this.$router.push({path:'/evaluationEnd'});
      this.evaluationStart = false;
      this.evaluationfinished = true;
    },
    pushAnswer: function(answer) {
      this.userAnswer = answer[0].answer;
      this.questionsAllList[this.questionIndex - 1].answered = this.userAnswer;
      this.savedata = {
        questionId: answer[0].questionId,
        answer: this.userAnswer,
        evaluationId: this.evaluationId,
        status: this.currentIndex == this.questionCounts ? 1 : 0,
        idx: answer[0].idx
      };
      //console.log(this.savedata)
    },
    isViewReport:function (bool) {
      // debugger
      this.evaluationfinished = false;
      this.isShowReport = bool;
    }
    
  }
};
</script>


