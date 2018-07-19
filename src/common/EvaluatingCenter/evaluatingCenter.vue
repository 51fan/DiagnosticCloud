<template>
    <div class="mypanel">
        <div v-if="!showAnswerPage">
            <div class="centerHeader">
                <div class="md-layout">
                    <div class="md-layout-item md-size-50" ></div>
                    <div class="md-layout-item md-size-50" >
                        <div style="display: inline-flex;">
                            <md-tabs style="">
                                <md-tab id="tab-all" md-label="全部" @click="searchCrad(3)"></md-tab>
                                <md-tab id="tab-testing" md-label="测评中" @click="searchCrad(2)"></md-tab>
                                <md-tab id="tab-testEnd" md-label="已完成" @click="searchCrad(1)"></md-tab>
                            </md-tabs>
                            <md-field style="margin:0;background:white">
                                <md-input v-model="searchKey" placeholder="" style="width:100%"></md-input>
                                <i class="material-icons">search</i>
                            </md-field>
                        </div>
                    </div>
                </div>
            </div>
            <div class="centerBody">
                <md-card v-for="info in InfoArray" :key="info.idx" :info="info">
                    <md-ripple>
                        <div class="md-layout" style="width:100%">
                            <div class="md-layout-item md-size-40" >
                                <md-card-content>
                                    <div class="md-layout">
                                        <div class="md-layout-item md-size-15" >
                                            <img :src="imgSrc" >
                                        </div>
                                        <div class="md-layout-item md-size-85" >
                                            <div style="padding: 10px 5px;">{{info.name}}</div>
                                            <div style="padding: 0 5px;">{{info.remark}}</div>
                                        </div>
                                    </div>
                                </md-card-content>
                            </div>
                            <div class="md-layout-item md-size-15" >
                                <md-card-content style="margin: 24px 0;">
                                    <div>测评时间：{{info.startTime.slice(0, 10)}}</div>
                                    <div v-if="info.endTime">完成时间：{{info.endTime.slice(0, 10)}}</div> 
                                </md-card-content>
                            </div>
                            <div class="md-layout-item md-size-30" >
                                <md-card-content style="margin: 28px 0;">
                                    <el-progress v-if="info.completeStatus == 1" :percentage="100" status="success"></el-progress>
                                    <el-progress v-if="info.completeStatus == 0" :percentage="info.complete_degree" ></el-progress>
                                </md-card-content>
                            </div>
                            <div class="md-layout-item md-size-15" style="text-align: center;" >
                                <md-card-content style="margin: 24px 0;">
                                    <span v-if="info.completeStatus == 1" style="cursor: pointer;color:rgba(16, 129, 165, 0.9);" @click="gohead(1)">查看报告</span>
                                    <span v-if="info.completeStatus == 0" style="cursor: pointer;color:rgba(16, 129, 165, 0.9);" @click="gohead(info,2)">继续</span>
                                </md-card-content>
                            </div>
                        </div>
                    </md-ripple>
                </md-card>
            </div>
            <el-pagination
                style="text-align: right;"
                background
                layout="prev, pager, next"
                :total="10">
            </el-pagination>
        </div>
        <!-- <div v-if="showAnswerPage">
            <EvaluatingPage></EvaluatingPage>
        </div> -->
    </div>
</template>

<style scoped>
.mypanel {
  padding-left: 10%;
  padding-right: 10%;
}

.centerHeader {
  width: 100%;
  text-align: right;
  padding-bottom: 1%;
}
.headerItem {
  width: 5%;
  margin: 15px 0 0 0;
  text-align: center;
  line-height: 48px;
}
.centerBody {
}
.md-ripple {
  display: inline-flex;
}
.md-card {
  width: 100%;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>

<script>
import EvaluatingPage from "../Evaluating/evaluatingPage.vue";
export default {
  name: "evalustionCenter",
  components: {
    EvaluatingPage
  },
  data: () => ({
    searchKey: "",
    evaluationTime: "2018-5-30",
    imgSrc: "/static/imgs/ico.png",
    evaluationName: "智能制造成熟度测评 V3.0",
    evaluationDesc: "针对智能制造标准的十个维度，全方位对企业现状进行评测",
    InfoArray: "",
    allTestInfo: [],
    completeTestInfo: [],
    discompleteTestInfo: [],
    questionsAllList: [],
    questionCounts: [],
    questionsList: [],
    showAnswerPage: false
  }),
  mounted: () => {},
  methods: {
    getUserTestAllInfo() {
      let $this = this,
        apikey = "",
        type = "post",
        url = "/IBUS/DAIG_SYS/getUserTestAllInfo",
        request = {
          status: 3,
          key: this.searchKey,
          session_id: this.session_id
        },
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
          if (res.data.errorCode !== 0) {
            $this.showAlert = true;
            $this.AlertMessage = res.data.errorMsg;
          } else {
            $this.InfoArray = res.data.return.info;
            $this.allTestInfo = res.data.return.info;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    gohead(e, index) {
      console.log(e);
      let $this = this;
      switch (index) {
        case 1:
          break;
        case 2:
          //   let apikey = "",
          //     request = {
          //       id: e.id,
          //       session_id: $this.session_id
          //     },
          //     // url = "/static/jsons/evaluation.json",
          //     // type = "GET",
          //     url = "/IBUS/DAIG_SYS/getQuestion",
          //     type = "POST",
          //     param = {
          //       apikey,
          //       request
          //     };
          //   $this.getQuestionData(type, url, param);
          this.$store.commit("evlaluating/changeShowevaluatingPage", true);
          this.$store.commit("evlaluating/getCurrentEvaluationId", e.id);
          this.$store.commit("evlaluating/getCurrentEvaluationName", e.name);
          this.$store.commit("evlaluating/getCurrentIndex", e.answered_count);
          this.$store.commit("evlaluating/getQuestionIndex", e.answered_count);
          this.$store.commit("evlaluating/changeEvaluationStart", true);
          $this.$router.push("/evaluating");
          break;
        default:
          break;
      }
    },
    searchCrad(index) {
      let $this = this;
      switch (index) {
        case 1:
          $this.completeTestInfo = [];
          for (var i in this.allTestInfo) {
            if ($this.allTestInfo[i].completeStatus == 1) {
              $this.completeTestInfo.push($this.allTestInfo[i]);
            }
          }
          $this.InfoArray = $this.completeTestInfo;
          break;
        case 2:
          $this.discompleteTestInfo = [];
          for (var i in this.allTestInfo) {
            if ($this.allTestInfo[i].completeStatus == 0) {
              $this.discompleteTestInfo.push($this.allTestInfo[i]);
            }
          }
          $this.InfoArray = $this.discompleteTestInfo;
          break;
        case 3:
          $this.InfoArray = $this.allTestInfo;
          break;
        default:
          break;
      }
    }
  },
  created: function() {
    this.getUserTestAllInfo();
  },
  computed: {
    session_id() {
      return this.$store.state.loginPage.session_id;
    }
  }
};
</script>

