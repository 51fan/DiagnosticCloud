<template>
    <div style="overflow: hidden;">
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
                <!-- <md-tab id="tab-all" md-label="全部"></md-tab>
                <md-tab id="tab-vehicle" md-label="汽车行业"></md-tab>
                <md-tab id="tab-3C" md-label="3C行业"></md-tab>
                <md-tab id="tab-gov" md-label="政府机构"></md-tab>    -->
            </md-tabs>
        </div>

        <div class="md-layout md-gutter  mypanel">
            <EvaluationCard  class="md-layout-item md-size-25  md-medium-size-33 md-small-size-50 md-xsmall-size-100" v-for="evalution in evalutionLists" :evalution="evalution" :key="evalution.id"></EvaluationCard>
            <!-- <EvaluationCard class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"></EvaluationCard>
            <EvaluationCard class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"></EvaluationCard>
            <EvaluationCard class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"></EvaluationCard>
            <EvaluationCard class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"></EvaluationCard> -->
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
  padding: 10px 0px 0px;
  width: 80%;
  margin: 30px 10%;
  background-color: rgba(126, 207, 210, 0.7);
}

.panelHeaderTitle {
  text-align: left;
  padding: 0 3%;
  font-size: x-large;
}
</style>
<script>
import EvaluationCard from "./evaluationsCards/evaluationCard.vue";
import Vue from "vue";
import Axios from "axios";
export default {
  components: {
    EvaluationCard
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
    let apiKry = "",
      self = this,
      require = {};

    self.$http
      .get("/static/jsons/datas.json", {
        apiKry,
        require
      })
      .then(res => {
        res.data.return.categories.forEach(item => {
          self.categories.push({
            name: item
          });
        });
        self.evalutionLists = res.data.return.evaluations;
        self.evalutionAllLists = res.data.return.evaluations;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    categorySelectFun: function(name) {
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
    }
  }
};
</script>





