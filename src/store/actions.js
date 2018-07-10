// import Vue from "vue";
// import Axios from "axios";

const actions = {

  //获取试卷分类
  getCategory(request) {
    let _this = this,
    apikey = "";
    _this.$http
      .get("/static/jsons/datas.json", {
        apikey,
        request
      }).then(res = {

      }).catch(err = {
          
      })
  }

}

export default {
  namespaced: true,
  actions
}
