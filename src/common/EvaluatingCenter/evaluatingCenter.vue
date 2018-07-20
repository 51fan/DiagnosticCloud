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
                                    <span v-if="info.completeStatus == 1" style="cursor: pointer;color:rgba(16, 129, 165, 0.9);" @click="gohead(info,1)">查看报告</span>
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
                layout="prev, pager, next, jumper"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :total="totalItems">
            </el-pagination>
            <!-- <div class="block">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
                </el-pagination>
            </div> -->
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
    showAnswerPage: false,
    currentPage: 1,
    totalItems: "",
    pageDatas: [],
    pages: ""
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
            // $this.InfoArray = res.data.return.info;
            $this.allTestInfo = res.data.return.info;
            $this.pages = Math.ceil($this.allTestInfo.length / 5);
            $this.totalItems = $this.pages * 10;
            for (var j = 0; j < $this.pages; j++) {
              $this.pageDatas[j] = [];
              for (var i in $this.allTestInfo) {
                if (Math.floor(i / 5) == j) {
                  $this.pageDatas[j].push($this.allTestInfo[i]);
                }
              }
            }
            $this.InfoArray = $this.pageDatas[$this.currentPage - 1];
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    gohead(e, index) {
      let $this = this;
      switch (index) {
        case 1:
          $this.$store.commit("evlaluating/changeShowevaluatingPage", true);
          $this.$store.commit("evlaluating/changeEvaluationfinished", false);
          //隐藏试卷
          $this.$store.commit("evlaluating/changeEvaluationStart", false);
          //显示报告
          $this.$store.commit("evlaluating/changeIsShowReport", true);
          $this.$store.commit("evlaluating/getReportParm", {
            key: "idx",
            value: e.idx
          });
          $this.$store.commit("evlaluating/getReportParm", {
            key: "name",
            value: e.name
          });
          $this.$store.commit("evlaluating/getReportParm", {
            key: "evaluationId",
            value: e.id
          });
          $this.$store.commit("evlaluating/getReportParm", {
            key: "name",
            value: e.name
          });
          $this.$store.commit("evlaluating/getCurrentEvaluationId", e.id);
          $this.$store.commit("evlaluating/getCurrentEvaluationIdx", e.idx);
          $this.$router.push("/evaluating");
          setTimeout(function() {
            $this.$root.eventBus.$emit("viewReport", true);
          });
          break;
        case 2:
          $this.$store.commit("evlaluating/changeShowevaluatingPage", true);
          $this.$store.commit("evlaluating/getCurrentEvaluationId", e.id);
          $this.$store.commit("evlaluating/getCurrentEvaluationIdx", e.idx);
          $this.$store.commit("evlaluating/getCurrentEvaluationName", e.name);
          $this.$store.commit("evlaluating/getCurrentIndex", e.answered_count+1);
          $this.$store.commit("evlaluating/getQuestionIndex", e.answered_count+1);
          $this.$store.commit("evlaluating/changeEvaluationStart", true);
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
        //   $this.InfoArray = $this.completeTestInfo;
          $this.pages = Math.ceil($this.completeTestInfo.length / 5);
          $this.totalItems = $this.pages * 10;
          for (var j = 0; j < $this.pages; j++) {
            $this.pageDatas[j] = [];
            for (var i in $this.completeTestInfo) {
              if (Math.floor(i / 5) == j) {
                $this.pageDatas[j].push($this.completeTestInfo[i]);
              }
            }
          }
          $this.InfoArray = $this.pageDatas[$this.currentPage - 1];
          break;
        case 2:
          $this.discompleteTestInfo = [];
          for (var i in this.allTestInfo) {
            if ($this.allTestInfo[i].completeStatus == 0) {
              $this.discompleteTestInfo.push($this.allTestInfo[i]);
            }
          }
        //   $this.InfoArray = $this.discompleteTestInfo;
          $this.pages = Math.ceil($this.discompleteTestInfo.length / 5);
          $this.totalItems = $this.pages * 10;
          for (var j = 0; j < $this.pages; j++) {
            $this.pageDatas[j] = [];
            for (var i in $this.discompleteTestInfo) {
              if (Math.floor(i / 5) == j) {
                $this.pageDatas[j].push($this.discompleteTestInfo[i]);
              }
            }
          }
          $this.InfoArray = $this.pageDatas[$this.currentPage - 1];
          break;
        case 3:
        //   $this.InfoArray = $this.allTestInfo;
          $this.pages = Math.ceil($this.allTestInfo.length / 5);
          $this.totalItems = $this.pages * 10;
          for (var j = 0; j < $this.pages; j++) {
            $this.pageDatas[j] = [];
            for (var i in $this.allTestInfo) {
              if (Math.floor(i / 5) == j) {
                $this.pageDatas[j].push($this.allTestInfo[i]);
              }
            }
          }
          $this.InfoArray = $this.pageDatas[$this.currentPage - 1];
          break;
        default:
          break;
      }
    },
    getData(val) {
      this.InfoArray = this.pageDatas[this.currentPage - 1];
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getData(val);
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

