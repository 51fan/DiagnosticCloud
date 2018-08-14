<template>
    <div style="overflow: hidden;">
        <div v-if="!showevaluatingPage">
            <div  class="panelHeader md-layout-item" >
              <div class="panelHeaderTitle">
                  <h3>请选择你要测评的产品</h3>
              </div>
              <!-- 搜索栏 -->
              <div style="width: 30%;margin-left: 35%;">
                  <md-field>
                      <md-input v-model="searchKey" placeholder="关键字搜索" @change="searchfun" style="background-color: #406171;"></md-input>
                      <i class="material-icons" style="cursor: pointer;background-color: #009199;padding: 4px;" @click="searchfun()">search</i>
                  </md-field>
              </div>
              <md-tabs>
                  <md-tab :md-label="category.name" v-for="category in categories" :category="category" :key="category.name" @click="categorySelectFun(category.name)"></md-tab>
              </md-tabs>
          </div>
        
          <div class="md-layout md-gutter  mypanel">
              <EvaluationCard  class="md-layout-item md-size-25  md-medium-size-33 md-small-size-50 md-xsmall-size-100" v-for="evalution in evalutionLists" :evalution="evalution" :key="evalution.id"></EvaluationCard>
          </div>
        </div>
        <div v-if="showevaluatingPage">
          <EvaluatingPage></EvaluatingPage>
        </div>
        <!-- <div v-if="showmask">
          <md-progress-spinner class="md-primary" md-mode="indeterminate"></md-progress-spinner>
        </div> -->
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
  width: 80%;
  margin: 30px 10%;
  color: white;
  background-color: #002c42;
}

.panelHeaderTitle {
  text-align: center;
  padding: 0 3%;
  font-size: x-large;
  line-height: initial;
}
.mygutter {
  margin-bottom: 12px;
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
      alertMessage: "正在答卷数量不能超过三个,请先完全其他正在答题的测评"
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
    categorySelectFun(name) {
      let targetArrays = [];
      if (name == "全部") {
        this.evalutionLists = this.evalutionAllLists;
      } else {
        this.evalutionAllLists.forEach(function(item) {
          if (item.categories == name) {
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
                let array = [];
                for (var i in $this.searchArry) {
                  for (var j in $this.evalutionLists)
                    if ($this.searchArry[i].id == $this.evalutionLists[j].id) {
                      array.push($this.evalutionLists[j]);
                    }
                }
                $this.evalutionLists = array;
              } else {
                $this.evalutionLists = $this.evalutionAllLists;
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





