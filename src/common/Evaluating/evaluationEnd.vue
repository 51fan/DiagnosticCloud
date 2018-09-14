<template>
    <div class="concent">
       <i class="material-icons md-size-5x" style="color: limegreen">check_circle</i>
       <div style="padding: 10px;font-size: x-large;">
            评测完成
       </div>
       <div style="padding: 20px 0 35px 0;">您已经完成该项目的测评，请点击下方查看报告查看测评结果。</div>
       <md-button class="md-primary md-raised" @click="viewReport()">查看测评报告</md-button>
    </div>
</template>

<style scoped>
.concent {
  width: 80%;
  margin: 30px 10%;
  text-align: center;
  padding: 5%;
}
</style>

<script>
export default {
  name: "evaluationEnd",
  data: () => ({}),
  computed: {
    session_id() {
      return this.$store.state.loginPage.session_id;
    },
    currentEvaluationId() {
      return this.$store.state.evlaluating.evlaluating.currentEvaluationId;
    },
    currentEvaluationIdx() {
      return this.$store.state.evlaluating.evlaluating.currentEvaluationIdx;
    },
  },
  methods: {
    viewReport() {
      //   let apikey = "",
      //     self = this,
      //     request = {
      //         evaluationId:"",

      //     };
      //接口给后台传 试卷ID和评价主表ID，请求报告数据
      //   this.$http
      //     .get("/static/jsons/sorce.json", {
      //       apikey,
      //       request
      //     })
      //     .then(res => {

      //     });
      // let apikey = "";
      // let request = {
      //     evaluationId: this.currentEvaluationId,
      //     idx: this.currentEvaluationIdx,
      //     session_id: this.session_id
      //   },
      //   param = {
      //     apikey,
      //     request
      //   },
      //   // type = "GET",
      //   // url = "/static/jsons/sorce.json";
      //   type = "POST",
      //   url = "/IBUS/DAIG_SYS/report_datas_statistic";
      // this.getReport_datas_statistic(type, url, param);
      this.$emit("viewfinishedReport", true);
    },
    // getReport_datas_statistic(type, url, param) {
    //   let $this = this;
    //   this.$http({
    //     method: type,
    //     url: url,
    //     data: param
    //   }).then(res => {
    //     if (res.data.errorCode !== 0) {
    //       console.log(res.data.errorMsg);
    //       return;
    //     }
    //     $this.$store.commit("evlaluating/getReportParm", {
    //       key: "datas",
    //       value: res.data.return
    //     });
    //     $this.$emit("viewfinishedReport", true);
    //   });
    // }
  }
};
</script>


