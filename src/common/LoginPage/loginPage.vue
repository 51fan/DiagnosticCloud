<template>
    <div class="mypanel">
        <div v-if="showLoginPage" class="cardstyle">
            <div class="loginHeadTitle">账号密码登陆</div>
            <md-field style="width:400px">
                <!-- <label>手机/邮箱</label> -->
                <md-input v-model="phoneOrEmail" placeholder="请输入手机/邮箱"></md-input>
            </md-field>
            <md-field style="width:400px">
                <!-- <label>密码</label> -->
                <md-input v-model="passWord" placeholder="请输入密码"></md-input>
            </md-field>
            <div v-if="showVerificationCode">
                <md-field style="width:280px;display: inline-flex;">
                <!-- <label>图片验证码</label> -->
                <md-input v-model="checkPicture" placeholder="请输入右侧图片中的内容"></md-input>
            </md-field> <div style="    display: inline-block;padding: 0 0 0 10px;"><img src="../../assets/images/check.png"/></div>
            </div>
            <div>
                 <div style="width:400px;cursor: pointer;">
                    <!-- <md-checkbox style="float:left" v-model="autoLogin">自动登录</md-checkbox>
                    <span style="float:right;width: auto;margin: 17px 16px 16px 0;display: inline-flex;position: relative;">忘记密码</span> -->
                    <md-checkbox style="width:80%" v-model="autoLogin">自动登录</md-checkbox>
                    <span @click="forgetPassword()">忘记密码</span>
                </div>     
            </div>
                <md-button class="md-dense md-raised md-primary" style="width:400px;margin-top:2%"  @click="loginFun()">登录</md-button>
            <div>
                 <div style="width:400px;text-align: right;margin-top: 10px;cursor: pointer;" @click="registerFun()">
                    <!-- <md-checkbox style="float:left" v-model="autoLogin">自动登录</md-checkbox>
                    <span style="float:right;width: auto;margin: 17px 16px 16px 0;display: inline-flex;position: relative;">忘记密码</span> -->
                    <!-- <md-checkbox style="width:80%" v-model="autoLogin">自动登录</md-checkbox> -->
                    <span>注册用户</span>
                </div>     
            </div>
            <md-dialog-alert
                  class="md-primary md-raised"
                  :md-active.sync="showAlert"
                  :md-content="AlertMessage"
                  md-confirm-text="知道了" />
        </div>
        <forgetPassword v-if="!showLoginPage"></forgetPassword>
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
.cardstyle {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  position: relative;
  z-index: 1;
  border-radius: 6px;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: color, background-color;
  will-change: color, background-color;
  width: 40%;
  padding: 5%;
  border: 1px solid lightgray;
}
.loginHeadTitle {
  min-height: 48px;
  margin: 4px 0 24px;
  padding-top: 16px;
  display: flex;
  position: relative;
  font-family: inherit;
  width: 400px;
}
</style>
<script>
import { mapGetters, mapState } from "vuex";
import forgetPassword from "./forgetPassword.vue";
export default {
  name: "loginPage",
  components: {
    forgetPassword
  },
  data: () => ({
    phoneOrEmail: null,
    passWord: null,
    checkPicture: null,
    autoLogin: false,
    showVerificationCode: false,
    showAlert: false,
    AlertMessage: "",
  }),
  computed: {
    menuVisible() {
      return this.$store.state.home.menuVisible;
    },
    loginPage() {
      return this.$store.state.home.loginPage;
    },
    showLoginPage() {
      return this.$store.state.loginPage.showLoginPage;
    },
    firstLogin(){
      return this.$store.state.loginPage.firstLogin;
    }
  },
  methods: {
    loginFun() {
      let $this = this,
        apikey = "",
        type = "post",
        url = "/IBUS/DAIG_SYS/login",
        request = {
          id: this.email,
          password: this.password,
          captchCode: this.VerificationCode
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
          console.log(res);
          if (res.data.errorCode !== 0) {
            $this.showVerificationCode = true;
            $this.showAlert = true;
            $this.AlertMessage = res.data.errorMsg;
          } else {
            // $this.session_id = res.data.session_id;
            this.$store.commit("loginPage/getSession_id", res.data.session_id);
            this.$store.commit("loginPage/changefirstLogin", res.data.firstLogin);
            //修改登录状态
            $this.$store.commit("loginPage/changeLoginState", true);
            //隐藏登录按钮
            $this.$store.commit("home/showLogin", false);
            //显示导航菜单
            $this.$store.commit("home/showTabsFun", true);
            //显示用户中心
            $this.$store.commit("home/showUserCenter", true);

            $this.$router.push("/overview");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    registerFun() {
      //隐藏登录按钮
      this.$store.commit("home/showLogin", false);

      //this.$store.commit("home/showTabsFun");
      this.$router.push("/register");
    },
    forgetPassword() {
      //隐藏登录界面
      this.$store.commit("loginPage/changeLoginShowState", false);
    }
  }
};
</script>


