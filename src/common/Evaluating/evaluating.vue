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
                <md-tab id="tab-home" md-label="全部"></md-tab>
                <md-tab id="tab-pages" md-label="汽车行业"></md-tab>
                <md-tab id="tab-posts" md-label="3C行业"></md-tab>
                <md-tab id="tab-favorites" md-label="政府机构"></md-tab>
            </md-tabs>
        </div>

        <div class="md-layout md-gutter  mypanel">
            <ManufacturingEvaluation class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"></ManufacturingEvaluation>
            <ManufacturingEvaluation class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"></ManufacturingEvaluation>
            <ManufacturingEvaluation class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"></ManufacturingEvaluation>
            <ManufacturingEvaluation class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"></ManufacturingEvaluation>
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
import ManufacturingEvaluation from "./Evaluatiions/manufacturingEvaluation.vue";
import Vue from 'vue';
export default {
  components: {
    ManufacturingEvaluation
  },
  data: () => ({
    searchKey: ""
  }),
  mounted:function () {
      var apiKry = "";
      var require = {};
      var host = "";
      Vue.$http.post('../../assets/jspns/test.json',{
         apiKry, require
      }).then(res=>{
          
      })
  },
};
</script>





