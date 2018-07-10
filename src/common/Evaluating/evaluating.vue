<template>
    <div style="overflow: hidden;">
        <div v-if="!showevaluatingPage">
            <div  class="panelHeader">
              <div class="panelHeaderTitle">
                  <h3>请选择你要测评的产品</h3>
              </div>
              <!-- 搜索栏 -->
              <div style="width: 30%;margin-left: 35%;">
                  <md-field>
                      <md-input v-model="searchKey" placeholder="关键字搜索"></md-input>
                      <i class="material-icons">search</i>
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
    </div>
</template>

<style lang="scss" scoped>
.mypanel {
  padding-left: 10%;
  padding-right: 10%;
}
.md-field label {
  top: 17px;
}

.panelHeader {
  text-align: center;
  padding: 0px;
  width: 80%;
  margin: 30px 10%;
  background-color: rgba(126, 207, 210, 0.7);
}

.panelHeaderTitle {
  text-align: left;
  padding: 1px 3%;
  font-size: x-large;
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
  data: () => ({
    searchKey: "",
    category: Object,
    categories: [],
    evalutionLists: [],
    evalutionAllLists: [],
    evalution: Object
  }),
  props: {
    //evalution:Object
  },
  mounted: function() {
    this.$store.commit("evlaluating/changeShowevaluatingPage", false);
    let apikey = "",
      request = {},
      type = "GET",
      url = "/static/jsons/datas.json";
      // type = "POST",
      // url = "/IBUS/DAIG_SYS/getTestInfo";
    let param = {
      apikey,
      request
    };
    this.getCategory(type, url, param);
  },
  methods: {
    categorySelectFun(name) {
      let self = this,
        targetArrays = [];
      if (name == "全部") {
        self.evalutionLists = self.evalutionAllLists;
      } else {
        self.evalutionAllLists.forEach(function(item) {
          item.categories.forEach(function(category) {
            if (category == name) {
              targetArrays.push(item);
            }
          });
        });
        self.evalutionLists = targetArrays;
      }
    },
    getCategory(type, url, param) {
      let _this = this;
      _this
        .$http({
          method: type,
          url: url,
          data: param
        })
        .then(res => {
          res.data.return.categories.forEach(item => {
            _this.categories.push({
              name: item
            });
          });
          _this.evalutionLists = res.data.return.evaluations;
          _this.evalutionAllLists = res.data.return.evaluations;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    showevaluatingPage() {
      return this.$store.state.evlaluating.evlaluating.showevaluatingPage;
    }
  }
};
</script>





