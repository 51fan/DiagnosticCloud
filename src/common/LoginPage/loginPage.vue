<template>
    <div class="mypanel">
        <div>
            <md-field style="width:400px">
                <!-- <label>手机/邮箱</label> -->
                <md-input v-model="phoneOrEmail" placeholder="请输入手机/邮箱"></md-input>
            </md-field>
            <md-field style="width:400px">
                <!-- <label>密码</label> -->
                <md-input v-model="passWord" placeholder="请输入密码"></md-input>
            </md-field>
            <div>
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
                    <span>忘记密码</span>
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
        </div>
    </div>
</template>

<style scoped>
.mypanel {
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 10%;
  text-align: center;
  text-align: -webkit-center;
}
</style>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "loginPage",
  data: () => ({
    phoneOrEmail: null,
    passWord: null,
    checkPicture: null,
    autoLogin: false
  }),
  computed: {
    menuVisible() {
      // debugger
      return this.$store.state.home.menuVisible;
    },
    loginPage() {
      return this.$store.state.home.loginPage;
    }
  },
  methods: {
    loginFun() {
      let logindata = {};
      debugger;
      //隐藏登录按钮
      this.$store.commit("home/showLogin");
      //显示导航菜单
      this.$store.commit("home/showTabsFun");
      //显示用户中心
      this.$store.commit("home/showUserCenter");

      this.$router.push("/overview");
    },
    registerFun() {
      //隐藏登录按钮
      this.$store.commit("home/showLogin");
      
      //this.$store.commit("home/showTabsFun");
      this.$router.push("/register");
    }
  }
};
</script>


