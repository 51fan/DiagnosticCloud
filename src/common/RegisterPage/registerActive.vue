<template>
  <div class="mypanel">
    <div style="padding-top: 7%;" v-if="activescuuess">
         <i class="material-icons md-size-5x" style="color: limegreen">check_circle</i>
         <div style="padding: 20px;">你的帐户激活成功</div>
         <h2 style="padding-bottom: 15px;"><span style="color:red">{{time}}</span>秒后跳转至登录页面，若未能成功跳转请点击下方按钮跳转。</h2>
         <!-- <div style="padding-bottom: 15px;">5秒后跳转至登录页面，若未能成功跳转请点击下方按钮跳转。</div> -->
         <md-button class="md-dense  md-primary" style="background: lightgray;" @click="goLoginR()">立即跳转</md-button>
    </div>
    <md-dialog-alert
                  class="md-primary md-raised"
                  :md-active.sync="showAlert"
                  :md-content="AlertMessage"
                  md-confirm-text="知道了" />
</div>
    
    
</template>
<style scoped>
.mypanel {
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  text-align: center;
  text-align: -webkit-center;
}
</style>

<script>
export default {
  name: "registerActive",
  data: () => ({
    time: 0,
    counter: "",
    showAlert:false,
    AlertMessage:"",
    activescuuess:false
  }),
  mounted: function() {
    // console.log(window.location);
    // console.log(window.location.href);
    //隐藏导航菜单
    this.$store.commit("home/showTabsFun", false);
    let RegParam = window.location.href;
    let RegParams = RegParam.split("?");
    console.log(RegParams[1]);
    if (RegParams[1]) {
      // let regpararms = RegParams[1].split("&");
      // this.email = regpararms[0].split("=")[1];
      // this.paramtime = regpararms[1].split("=")[1];
       this.email = RegParams[1];
    }

    let $this = this,
      apikey = "",
      type = "post",
      url = "/IBUS/DAIG_SYS/activeAccount",
      request = {
        email: this.email,
        // time: this.paramtime
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
          $this.activescuuess = true;
          $this.goLogin();
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    countDown() {
      let _this = this;
      _this.time--;
    },
    goLogin() {
      let _this = this;
      _this.time = 5;
      _this.counter = setInterval(_this.countDown, 1000);
    },
    goLoginR() {
      clearInterval(this.counter);
      //隐藏导航菜单
      this.$store.commit("home/showTabsFun", false);
      //隐藏登录按钮
      this.$store.commit("home/showLogin", true);
      //显示用户中心
      this.$store.commit("home/showUserCenter", false);
      this.$router.push("/loginPage");
    }
  },
  watch: {
    time: function(newVal, oldVal) {
      //   debugger;
      if (newVal == 0) {
        clearInterval(this.counter);
        //隐藏导航菜单
        this.$store.commit("home/showTabsFun", false);
        //隐藏登录按钮
        this.$store.commit("home/showLogin", true);
        //显示用户中心
        this.$store.commit("home/showUserCenter", false);
        this.$router.push("/loginPage");
      }
    }
  }
};
</script>

