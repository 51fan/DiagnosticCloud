<template>
  <div class="mypanel">
    <div style="padding-top: 7%;" v-if="activescuuess">
         <!-- <i class="material-icons md-size-5x" style="color: limegreen">check_circle</i> -->
          <img src="/static/imgs/ic_hint_finish.png">
          <div style="padding: 20px;font-size: xx-large;margin: 20px;">
           <span>你的帐户</span>
           <!-- <span style="color:#009199">{{email}}</span> -->
           <span>激活成功</span>
          </div>
          <div>
            <span style="color:red">{{time}}</span><span>秒后跳转至登录页面，若未能成功跳转请点击下方按钮跳转。</span>
          </div>
          
         <!-- <div style="padding-bottom: 15px;">5秒后跳转至登录页面，若未能成功跳转请点击下方按钮跳转。</div> -->
          <!-- <md-button class="md-dense  md-primary" style="background: #009199;" @click="goLoginR()">立即跳转</md-button> -->
          <div style="color:#009199;cursor: pointer;text-decoration-line: underline;margin: 20px;" @click="goLoginR()">立即跳转</div>
    </div>
    <div v-if="!activescuuess" style="padding: 7% 15% 15%;background-color: white;">
        <md-icon class="md-size-5x" style="color: burlywood">info</md-icon>
         <!-- <i class="material-icons md-size-5x" style="color: burlywood">info</i> -->
          <!-- <img src="/static/imgs/info.png" style="color: burlywood"> -->
          <div style="padding: 20px;font-size: xx-large;margin: 20px;">
            <div>激活链接已失效</div>
          </div>
          <div style="font-size: large;color: #8e8989;padding-bottom: 2%;">请重新注册并及时激活您的账号。</div>
          <!-- <div>
            <span>未收到邮件？</span>
            <span v-if="!showCount" style="color:#009199;cursor: pointer;" @click="reSendActiveEmail()">重新发送</span>
            <span v-if="showCount"><span  style="color:red">{{time}}</span><span style="color:#009199;cursor: pointer;" @click="reSendActiveEmail()">秒后可重新获取</span></span>
          </div> -->
          
         <div>
            <div class="md-layout-item md-size-100">
              <div class="md-layout-item md-size-20"></div>
              <div class="md-layout-item md-size-60">
                  <div class="md-layout-item md-size-20"></div>
                  <div class="md-layout-item md-size-60">
                    <div class="md-layout-item md-size-100" style="display: inline-flex;">
                      <div class="md-layout-item md-size-30"></div>
                      <div class="md-layout-item md-size-40">
                        <md-button class="md-dense  md-primary" style="background: #009199;color: white;width: 80%;" @click="goRegister()">去注册</md-button>
                      </div>
                      <div class="md-layout-item md-size-30"></div>
                      <!-- <div class="md-layout-item md-size-60">
                        <md-button class="md-dense md-raised md-primary" style="margin-right: 2%;background-color: #009199;width: 90%;" @click="goEmail()">查看邮箱</md-button>
                      </div> -->
                    </div>
                  </div>
                  <div class="md-layout-item md-size-20"></div>
              </div>
              <div class="md-layout-item md-size-20"></div>
            </div>
        </div>
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
    showAlert: false,
    AlertMessage: "",
    activescuuess: false
  }),
  mounted: function() {
    // console.log(window.location);
    // console.log(window.location.href);
    const loading = this.$loading({
            lock: true,
            text: "Loading",
            spinner: "el-icon-loading",
            background: "rgba(61, 61, 61, 0.7)"
          });
    //隐藏导航菜单
    this.$store.commit("home/showTabsFun", false);
    this.$store.commit("home/changeShowHomeBgImge", false);
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
        email: this.email
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
        if (res.data.errorCode !== 0 && res.data.errorCode !== -6) {
          loading.close();
          $this.showAlert = true;
          $this.AlertMessage = res.data.errorMsg;
        } else if (res.data.errorCode == -6) {
          loading.close();
          $this.activescuuess = false;
        } else {
          loading.close();
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
      this.$store.commit("home/changeShowHomeBgImge", true);
      // this.$store.commit("loginPage/getUserImage", "");
      //隐藏登录按钮
      this.$store.commit("home/showLogin", false);
      //显示用户中心
      this.$store.commit("home/showUserCenter", false);
      this.$router.push("/loginPage");
    },
    goRegister(){
      this.$router.push("/register");
    }
  },
  watch: {
    time: function(newVal, oldVal) {
      //   debugger;
      if (newVal == 0) {
        clearInterval(this.counter);
        //隐藏导航菜单
        this.$store.commit("home/showTabsFun", false);
        this.$store.commit("home/changeShowHomeBgImge", true);
        this.$store.commit("loginPage/getUserImage", "");
        //隐藏登录按钮
        this.$store.commit("home/showLogin", false);
        //显示用户中心
        this.$store.commit("home/showUserCenter", false);
        this.$router.push("/loginPage");
      }
    }
  }
};
</script>

