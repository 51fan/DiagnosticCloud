<template>
    <div class="mypanel">
        <div v-if="!showAnswerPage" style="padding: 16px;">
            <div class="centerHeader">
                <div class="md-layout" style="padding: 20px 10px;">
                    <div class="md-layout-item md-size-50" >
                        <el-tabs v-model="activeName"  @tab-click="searchCrad">
                            <el-tab-pane label="全部" name="first"></el-tab-pane>
                            <el-tab-pane label="测评中" name="second"></el-tab-pane>
                            <el-tab-pane label="已完成" name="third"></el-tab-pane>
                        </el-tabs>
                    </div>
                    <div class="md-layout-item md-size-50" style="display: inline-flex;">
                        <div class="md-layout-item md-size-20" ></div>
                        <div class="md-layout-item md-size-60" style="display: inline-flex;">
                            <input type="text" v-model="searchKey" placeholder="请输入" style="width: 100%;height: 44px;background: #efefef;border: 1px solid #dcdfe6;padding: 0 15px;outline: none;" @change="searchfun"/>
                            <i class="material-icons" style="cursor: pointer;background-color: #009199;color:white;padding: 8px 8px 12px 8px;" @click="searchfun()">search</i>
                        </div>
                        <div class="md-layout-item md-size-20" ></div>
                    </div>
                </div>
            </div>
            <div class="centerBody">
                <div v-if="!hasNoReslut">
                  <div v-if="!hasTest">
                    <md-card>
                        <md-ripple>
                            <div class="md-layout" style="width:100%;cursor: pointer;" @click="goEvalution()">
                                <div class="md-layout-item md-size-20" ></div>
                                <div class="md-layout-item md-size-60" style="text-align: center;height: 400px;padding: 8%;">
                                    <div style="font-size: x-large;padding: 20px;">无正在进行或已完成的测评</div>
                                    <span style="color: #009199;text-decoration: underline;font-size: medium;">去测评</span>
                                </div>
                                <div class="md-layout-item md-size-20" ></div>
                            </div>
                        </md-ripple>
                    </md-card>
                  </div>
                  <div v-if="hasTest">
                      <div v-for="info in InfoArray" :key="info.idx" :info="info">
                          <md-card>
                              <md-ripple>
                                  <div class="md-layout" style="width:100%">
                                      <div class="md-layout-item md-xlarge-size-40 md-large-size-40 md-medium-size-40 md-small-size-100 md-xsmall-size-100" >
                                          <md-card-content>
                                              <div class="md-layout">
                                                  <div class="md-layout-item md-size-15" >
                                                      <img :src="imgSrc" >
                                                  </div>
                                                  <div class="md-layout-item md-size-85" >
                                                      <div style="padding: 10px 5px;font-size: 18px;font-weight: 600;">{{info.name}}</div>
                                                      <div style="padding: 0 5px;color: rgba(120, 120, 120, 1);">{{info.remark}}</div>
                                                  </div>
                                              </div>
                                          </md-card-content>
                                      </div>
                                      <div class="md-layout-item md-xlarge-size-15 md-large-size-20 md-medium-size-25 md-small-size-45 md-xsmall-size-100" >
                                          <md-card-content style="margin: 24px 0;color: rgba(120, 120, 120, 1);">
                                              <div>测评时间：{{info.startTime.slice(0, 10)}}</div>
                                              <div>完成时间：{{info.endTime?info.endTime.slice(0, 10):"--"}}</div> 
                                          </md-card-content>
                                      </div>
                                      <div class="md-layout-item md-xlarge-size-30 md-large-size-25 md-medium-size-20 md-small-size-40 md-xsmall-size-100" >
                                          <md-card-content style="margin: 28px 0;">
                                              <el-progress v-if="info.completeStatus == 1" :percentage="100" status="success"></el-progress>
                                              <el-progress v-if="info.completeStatus == 0" :percentage="info.complete_degree" ></el-progress>
                                          </md-card-content>
                                      </div>
                                      <div class="md-layout-item md-xlarge-size-15 md-large-size-15 md-medium-size-15 md-small-size-15 md-xsmall-size-100" style="text-align: center;" >
                                          <md-card-content style="margin: 24px 0;">
                                              <span v-if="info.completeStatus == 1" style="color:rgba(16, 129, 165, 0.9);cursor: pointer;" @click="gohead(info)">查看报告</span>
                                              <span v-if="info.completeStatus == 0" style="color:rgba(16, 129, 165, 0.9);cursor: pointer;margin-right:10%" @click="gohead(info)">继续</span>
                                              <span v-if="info.completeStatus == 0" style="color:rgba(16, 129, 165, 0.9);cursor: pointer;" @click="showDeleDialog(info)">废弃</span>
                                          </md-card-content>
                                      </div>
                                  </div>
                              </md-ripple>
                          </md-card>
                      </div>
                  </div>
                </div>
                <div v-if="hasNoCompletedTest">
                    <md-card>
                        <md-ripple>
                            <div class="md-layout" style="width:100%;cursor: pointer;" @click="goEvalution()">
                                <div class="md-layout-item md-size-20" ></div>
                                <div class="md-layout-item md-size-60" style="text-align: center;height: 400px;padding: 8%;">
                                    <div style="font-size: x-large;padding: 20px;">无已完成的测评</div>
                                    <span style="color: #009199;text-decoration: underline;font-size: medium;">去测评</span>
                                </div>
                                <div class="md-layout-item md-size-20" ></div>
                            </div>
                        </md-ripple>
                    </md-card>
                </div>
                <div v-if="hasNodisCompletedTest">
                    <md-card>
                        <md-ripple>
                            <div class="md-layout" style="width:100%;cursor: pointer;" @click="goEvalution()">
                                <div class="md-layout-item md-size-20" ></div>
                                <div class="md-layout-item md-size-60" style="text-align: center;height: 400px;padding: 8%;">
                                    <div style="font-size: x-large;padding: 20px;">无正在进行中的测评</div>
                                    <span style="color: #009199;text-decoration: underline;font-size: medium;">去测评</span>
                                </div>
                                <div class="md-layout-item md-size-20" ></div>
                            </div>
                        </md-ripple>
                    </md-card>
                </div>
                <div v-if="hasNoReslut">
                  <md-card>
                        <md-ripple>
                            <div class="md-layout" style="width:100%;cursor: pointer;">
                                <div class="md-layout-item md-size-20" ></div>
                                <div class="md-layout-item md-size-60" style="text-align: center;height: 400px;padding: 8%;">
                                    <div style="font-size: x-large;padding: 20px;">搜索无合适结果,请重新搜素</div>
                                    <!-- <span style="color: #009199;text-decoration: underline;font-size: medium;">去测评</span> -->
                                </div>
                                <div class="md-layout-item md-size-20" ></div>
                            </div>
                        </md-ripple>
                    </md-card>
                </div>
            </div>
            <el-pagination
                v-if="hasTest"
                style="text-align: right;"
                background
                layout="prev, pager, next, jumper"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :total="totalItems">
            </el-pagination>
        </div>
        <md-dialog-alert style="z-index: 111"
                  class="md-primary md-raised"
                  :md-active.sync="showAlert"
                  :md-content="AlertMessage"
                  md-confirm-text="知道了" />
        <md-dialog-confirm
                    :md-active.sync="showDeleted"
                    :md-title="deleDialogTitle"
                    md-content="废弃测评会导致当前测评产品已答完的问题成果丢失，确认废弃吗？"
                    md-confirm-text="确定"
                    md-cancel-text="取消"
                    @md-cancel="onCancel"
                    @md-confirm="deleteTest" />
    </div>
</template>
<style>
.el-tabs__nav-wrap:after {
  height: 0 !important;
}
.el-tabs__active-bar {
  background-color: rgb(0, 145, 153) !important;
}
.el-tabs__item.is-active {
  color: rgb(0, 145, 153) !important;
}
.md-dialog-content {
  color: red;
}
.el-tabs__header {
  margin: 0 !important;
}
</style>

<style scoped>
.mypanel {
  padding-left: 10%;
  padding-right: 10%;
}

.centerHeader {
  width: 100%;
  padding-bottom: 1%;
  background-color: white;
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
  margin: 4px 0;
  display: inline-block;
  vertical-align: top;
  box-shadow: 0 0 0 0 white, 0 0 0 0 white, 0 0 0 0 white !important;
}
.md-app-content .md-card {
  margin-right: 0 !important;
  margin-left: 0 !important;
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
    hasTest: false,
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
    pages: "",
    searchArry: [],
    searchShowArray: [],
    showAlert: false,
    AlertMessage: "",
    showDeleted: false,
    hasNoCompletedTest: false,
    hasNodisCompletedTest: false,
    deleDialogTitle: "",
    hasNoReslut: false
  }),
  mounted: function() {},
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
            if ($this.allTestInfo.length && $this.allTestInfo.length > 0) {
              $this.hasTest = true;
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
              if ($this.showCompletedReport) {
                $this.searchCrad({ index: "2" });
              }
            } else {
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    gohead(e) {
      let $this = this;
      $this.$store.commit("home/getTabsactiveIndex", "2");
      $this.$store.commit("ACTIVE", "2");
      switch (e.completeStatus) {
        case 0:
          $this.$store.commit("evlaluating/changeShowevaluatingPage", true);
          $this.$store.commit("evlaluating/getCurrentEvaluationId", e.id);
          $this.$store.commit("evlaluating/getCurrentEvaluationIdx", e.idx);
          $this.$store.commit("evlaluating/getCurrentEvaluationName", e.name);
          $this.$store.commit("evlaluating/changeSeeReport", false);
          $this.$store.commit("evlaluating/changeIsShowReport", false);
          $this.$store.commit(
            "evlaluating/getCurrentIndex",
            e.answered_count + 1
          );
          $this.$store.commit(
            "evlaluating/getQuestionIndex",
            e.answered_count + 1
          );
          $this.getQuestionData(e.id);
          break;
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
            key: "enterpriseId",
            value: e.enterpriseId
          });
          $this.$store.commit("evlaluating/getCurrentEvaluationId", e.id);
          $this.$store.commit("evlaluating/getCurrentEvaluationIdx", e.idx);
          $this.$store.commit("evlaluating/changeSeeReport", true);
          $this.$router.push("/evaluating");
          //   setTimeout(function() {
          //     $this.$root.eventBus.$emit("viewReport", true);
          //   });
          break;
        default:
          break;
      }
    },
    searchCrad(e) {
      let $this = this;
      switch (e.index) {
        case "0":
          this.handleCurrentChange(1);
          this.hasNodisCompletedTest = false;
          this.hasNoCompletedTest = false;
          if (this.allTestInfo.length > 0) {
            this.hasTest = true;
            this.pages = Math.ceil(this.allTestInfo.length / 5);
            this.totalItems = this.pages * 10;
            for (var j = 0; j < this.pages; j++) {
              $this.pageDatas[j] = [];
              for (var i in $this.allTestInfo) {
                if (Math.floor(i / 5) == j) {
                  $this.pageDatas[j].push($this.allTestInfo[i]);
                }
              }
            }
            this.InfoArray = this.pageDatas[this.currentPage - 1];
          } else {
            this.hasTest = false;
            this.InfoArray = [];
          }
          break;
        case "1":
          this.handleCurrentChange(1);
          this.hasTest = true;
          this.hasNoCompletedTest = false;
          this.discompleteTestInfo = [];
          for (var i in this.allTestInfo) {
            if ($this.allTestInfo[i].completeStatus == 0) {
              $this.discompleteTestInfo.push($this.allTestInfo[i]);
            }
          }
          if (this.discompleteTestInfo.length > 0) {
            this.hasNodisCompletedTest = false;
            this.pages = Math.ceil(this.discompleteTestInfo.length / 5);
            this.totalItems = $this.pages * 10;
            for (var j = 0; j < $this.pages; j++) {
              $this.pageDatas[j] = [];
              for (var i in $this.discompleteTestInfo) {
                if (Math.floor(i / 5) == j) {
                  $this.pageDatas[j].push($this.discompleteTestInfo[i]);
                }
              }
            }
            this.InfoArray = this.pageDatas[this.currentPage - 1];
          } else {
            this.hasNodisCompletedTest = this.hasNoReslut ? false : true;
            this.InfoArray = [];
          }
          break;
        case "2":
          this.handleCurrentChange(1);
          this.hasTest = true;
          this.hasNodisCompletedTest = false;
          this.completeTestInfo = [];
          for (var i in this.allTestInfo) {
            if ($this.allTestInfo[i].completeStatus == 1) {
              $this.completeTestInfo.push($this.allTestInfo[i]);
            }
          }
          if (this.completeTestInfo.length > 0) {
            this.hasNoCompletedTest = false;
            this.pages = Math.ceil(this.completeTestInfo.length / 5);
            this.totalItems = this.pages * 10;
            for (var j = 0; j < $this.pages; j++) {
              $this.pageDatas[j] = [];
              for (var i in $this.completeTestInfo) {
                if (Math.floor(i / 5) == j) {
                  $this.pageDatas[j].push($this.completeTestInfo[i]);
                }
              }
            }
            this.InfoArray = this.pageDatas[this.currentPage - 1];
          } else {
            this.hasNoCompletedTest = this.hasNoReslut ? false : true;
            this.InfoArray = [];
          }
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
    },
    searchfun() {
      let $this = this,
        apikey = "",
        type = "post",
        url = "/IBUS/DAIG_SYS/getUserTestAllInfo ",
        request = {
          session_id: this.session_id,
          key: this.searchKey,
          status:
            this.activeName == "first" ? 3 : this.activeName == "second" ? 2 : 1
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
            $this.searchArry = res.data.return.info;
            $this.allTestInfo = res.data.return.info;

            if ($this.searchArry && $this.searchArry.length > 0) {
              $this.InfoArray = $this.searchArry;

              $this.pages = Math.ceil($this.InfoArray.length / 5);
              $this.totalItems = $this.pages * 10;
              for (var j = 0; j < $this.pages; j++) {
                $this.pageDatas[j] = [];
                for (var i in $this.InfoArray) {
                  if (Math.floor(i / 5) == j) {
                    $this.pageDatas[j].push($this.InfoArray[i]);
                  }
                }
              }
              $this.hasNoReslut = false;
              $this.InfoArray = $this.pageDatas[$this.currentPage - 1];
            } else {
              $this.hasNoReslut = true;
              $this.hasNoCompletedTest = false;
              $this.hasNodisCompletedTest = false;
              // $this.hasTest = false;
              $this.InfoArray = [];
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    goEvalution() {
      this.$store.commit("home/getTabsactiveIndex", "2");
      this.$store.commit("ACTIVE", "2");
      //隐藏首页背景图
      this.$store.commit("home/changeShowHomeBgImge", false);
      //显示导航菜单
      this.$store.commit("home/showTabsFun", true);
      //显示选择评测产品
      this.$store.commit("evlaluating/changeShowevaluatingPage", false);
      //显示答题区
      this.$store.commit("evlaluating/changeEvaluationStart", true);
      //隐藏答题完成界面
      this.$store.commit("evlaluating/changeEvaluationfinished", false);
      //隐藏报告
      this.$store.commit("evlaluating/changeIsShowReport", false);
      //重置查看报告状态
      this.$store.commit("evlaluating/changeSeeReport", false);
      //路由跳转
      this.$router.push("/evaluating");
    },
    showDeleDialog(info) {
      this.showDeleted = true;
      this.deleDialogTitle = "您确认废弃【" + info.name + "】测评？";
      this.deleID = info.id;
    },
    deleteTest() {
      let $this = this,
        apikey = "",
        type = "post",
        url = "/IBUS/DAIG_SYS/deleteTesting ",
        request = {
          session_id: this.session_id,
          id: this.deleID
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
            //删除成功，1、在未完成测评数组中删除该测评；2、在所以测评数组中删除该测评
            for (var i in $this.allTestInfo) {
              if ($this.allTestInfo[i].id == $this.deleID) {
                // if (i == $this.allTestInfo.length - 1) {
                //   $this.allTestInfo.splice(-1, 0);
                // } else {
                //   $this.allTestInfo.splice(i, i);
                // }
                $this.allTestInfo.splice(i, 1);
              }
            }

            // for (let i in $this.discompleteTestInfo) {
            //   if ($this.discompleteTestInfo[i].id == $this.deleID) {
            //     $this.discompleteTestInfo.splice(i , i);
            //   }
            // }

            for (var i in $this.InfoArray) {
              if ($this.InfoArray[i].id == $this.deleID) {
                // if (i == $this.InfoArray.length - 1) {
                //   $this.InfoArray.splice(-1, 0);
                // } else {
                //   $this.InfoArray.splice(i, i);
                // }
                $this.InfoArray.splice(i, 1);
              }
            }
            if ($this.InfoArray.length == 0) {
              $this.hasTest = false;
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    onCancel() {
      //   this.value = "Disagreed";
    },
    getQuestionData(id) {
      let $this = this;
      let apikey = "",
        request = {
          id: id,
          session_id: this.session_id
        },
        // url = "/static/jsons/evaluation.json",
        // type = "GET",
        url = "/IBUS/DAIG_SYS/getQuestion",
        type = "POST",
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
          //debugger;
          if (res.data.errorCode !== 0) {
            if (res.data.errorCode == "-8") {
              $this.$store.commit(
                "evlaluating/changeShowevaluatingPage",
                false
              );
              // $this.$store.commit("evlaluating/changeShowErrAlert", true);
              $this.showErrAlert = true;
              $this.AlertMessage = res.data.errorMsg;
            } else {
              $this.showAlert = true;
              $this.AlertMessage = res.data.errorMsg;
            }
          } else {
            console.log("card");

            $this.$store.commit("evlaluating/changeShowevaluatingPage", true);
            $this.$store.commit(
              "evlaluating/getCurrentEvaluationName",
              this.name
            );
            $this.$store.commit("evlaluating/getCurrentEvaluationId", id);
            $this.$store.commit("evlaluating/changeQuestions", res.data);
            $this.$store.commit("evlaluating/changeEvaluationStart", true);

            $this.$router.push("/evaluating");
          }
          // console.log($this.questionsList);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created: function() {
    this.getUserTestAllInfo();
  },
  computed: {
    session_id() {
      return this.$store.state.loginPage.session_id;
    },
    activeName() {
      return this.$store.state.evaluatingCenter.activeName;
    },
    showCompletedReport() {
      return this.$store.state.evaluatingCenter.showCompletedReport;
    }
  }
};
</script>

