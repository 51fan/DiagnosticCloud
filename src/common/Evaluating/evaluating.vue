<template>
    <div style="overflow: hidden;">
        <div v-if="!showevaluatingPage">
            <div  class="panelHeader md-layout-item" >
              <div class="panelHeaderTitle">
                  <h3>请选择你要测评的产品</h3>
              </div>
              <!-- 搜索栏 -->
              <div style="width: 30%;margin-left: 35%;padding-bottom: 52px;">
                  <md-field>
                      <input type="text" v-model="searchKey" @change="searchfun" placeholder="请输入" style="width: 100%;background:rgba(87, 174, 179, 0.3);border:none;padding: 0 15px;outline: none;"/>
                      <i class="material-icons" style="cursor: pointer;background-color: #009199;padding: 4px;" @click="searchfun()">search</i>       
                  </md-field>
              </div>
          </div>
          <div style="width: 80%;margin: 0 10%;background-color: white;">
            <el-tabs v-model="categoryName" style="padding: 0 20px;" @tab-click="categorySelectFun">
              <el-tab-pane style="padding:0 20px;" v-for="category in categories" :label="category.name" :key="category.name" :name="category.name"></el-tab-pane>

            </el-tabs>
          </div>

          <div class="md-layout mypanel">
            <v-layout row wrap>
               <v-flex xl12 lg12 md12 sm12 xs12>
                 <v-layout row wrap>
                   <v-flex xl3 lg4 md6 sm6 xs12 v-for="evalution in evalutionLists" :key="evalution.id">
                      <EvaluationCard :evalution="evalution" style="width：100%;margin: 10px 5px;"></EvaluationCard>
                   </v-flex>
                 </v-layout>
                 <div v-if="hasNoReslut">
                    <md-card style="width: 100%;margin: 10px 0;">
                       <div class="md-layout" style="width:100%;">
                           <div class="md-layout-item md-size-20" ></div>
                           <div class="md-layout-item md-size-60" style="text-align: center;height: 400px;padding: 8%;">
                               <div style="font-size: x-large;padding: 20px;">搜索无合适结果,请重新搜素</div>
                           </div>
                           <div class="md-layout-item md-size-20" ></div>
                       </div>
                    </md-card>
                 </div>
               </v-flex>
            </v-layout>
          </div>
        </div>
        <div v-if="showevaluatingPage">
          <EvaluatingPage></EvaluatingPage>
        </div>

        <md-dialog-alert
                  class="md-primary md-raised"
                  :md-active.sync="showErrAlert"
                  :md-content="alertMessage"
                  md-confirm-text="知道了" />
    </div>
</template>

<style lang="scss" scoped>
.mypanel {
  padding-left: 10%;
  padding-right: 10%;
  // padding: 0;
}
.md-field label {
  top: 17px;
}

.panelHeader {
  text-align: center;
  padding: 10px 0px 0px;
  width: 100%;
  margin: 0;
  color: white;
  background-color: #002c42;
}

.panelHeaderTitle {
  text-align: center;
  padding: 0 3%;
  // font-size: x-large;
  line-height: initial;
  font-size: 30px;
  padding-top: 71px;
  padding-bottom: 34px;
}
.mygutter {
  margin-bottom: 12px;
}
</style>
<style scoped>
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  /* WebKit browsers */
  color: white;
}
input:-moz-placeholder,
textarea:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: white;
}
input::-moz-placeholder,
textarea::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: white;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: white;
}
</style>
<style>
.el-tabs__item {
  font-size: 16px !important;
  font-weight: 600 !important;
}
</style>


<script>
import EvaluationCard from "./evaluationsCards/evaluationCard.vue";
import EvaluatingPage from "./evaluatingPage.vue";
import Vue from "vue";
import Axios from "axios";
export default {
  components: {
    EvaluationCard,
    EvaluatingPage
  },
  data: () => {
    return {
      searchKey: "",
      category: Object,
      categories: [],
      evalutionLists: [],
      evalutionAllLists: [],
      evalution: Object,
      // showmask: false,
      searchArry: [],
      showEvaluationArray: [],
      alertMessage: "正在答卷数量不能超过三个,请先完全其他正在答题的测评",
      categoryName: "全部",
      hasNoReslut: false
    };
  },
  props: {
    //evalution:Object
  },
  mounted: function() {
    let apikey = "",
      request = {},
      // type = "GET",
      // url = "/static/jsons/datas.json";
      type = "POST",
      url = "/IBUS/DAIG_SYS/getTestInfo";
    let param = {
      apikey,
      request
    };
    if (!this.isShowReport) {
      this.getCategory(type, url, param);
    }
  },
  methods: {
    categorySelectFun(e) {
      this.searchKey = '';
      let targetArrays = [];
      if (e.label == "全部") {
        this.hasNoReslut = false;
        this.evalutionLists = this.evalutionAllLists;
      } else {
        this.hasNoReslut = false;
        this.evalutionAllLists.forEach(function(item) {
          if (item.categories == e.label) {
            targetArrays.push(item);
          }
        });
        this.evalutionLists = targetArrays;
      }
    },
    getCategory(type, url, param) {
      let $this = this;
      // $this.showmask = true;
      $this
        .$http({
          method: type,
          url: url,
          data: param
        })
        .then(res => {
          res.data.return.categories.forEach(item => {
            $this.categories.push({
              name: item
            });
          });
          $this.evalutionLists = res.data.return.evaluations;
          $this.evalutionAllLists = res.data.return.evaluations;
          // $this.showmask = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    searchfun() {
      let $this = this,
        apikey = "",
        type = "post",
        url = "/IBUS/DAIG_SYS/getTestId ",
        request = {
          keywords: this.searchKey
        },
        param = {
          apikey,
          request
        };
      if (this.searchKey == "") {
        $this.hasNoReslut = false;
        $this.evalutionLists = $this.evalutionAllLists;
      } else {
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
              $this.searchArry = res.data.result;
              if ($this.searchArry && $this.searchArry.length > 0) {
                $this.hasNoReslut = false;
                let array = [];
                for (var i in $this.searchArry) {
                  for (var j in $this.evalutionLists)
                    if ($this.searchArry[i].id == $this.evalutionLists[j].id) {
                      array.push($this.evalutionLists[j]);
                    }
                }
                $this.evalutionLists = array;
              } else {
                $this.hasNoReslut = true;
                $this.evalutionLists = [];
              }
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  },
  computed: {
    showevaluatingPage: {
      get: function() {
        return this.$store.state.evlaluating.evlaluating.showevaluatingPage;
      },
      set: function(newValue) {
        this.$store.state.evlaluating.evlaluating.showevaluatingPage = newValue;
      }
    },
    showErrAlert: {
      get: function() {
        return this.$store.state.evlaluating.evaluationCard.showErrAlert;
      },
      set: function(newValue) {
        this.this.$store.state.evlaluating.evaluationCard.showErrAlert = newValue;
      }
    },
    isShowReport() {
      return this.$store.state.evlaluating.evaluatingPage.isShowReport;
    }
  },
  created: () => {}
};
</script>





