<template>
<div class="page-container">
    <md-app md-waterfall>
      <md-app-toolbar class="md-large md-dense md-transparent" style="background-color: #eee;" >
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="toggleMenu" v-if="showUserCenterButton" >
              <md-icon >menu</md-icon>
            </md-button>

            <span class="md-title" @click="gohome()" style="cursor: pointer;">扁鹊云</span>
          </div>

          <div class="md-toolbar-section-end" v-if="showLogin">
            <md-button class="md-icon-button" @click="loginFun()">
              <md-icon>account_circle</md-icon>
            </md-button>
          </div>
        </div>

        <div class="md-toolbar-row" v-if="showTabs">
          <md-tabs class="md-transparent" md-alignment="fixed" md-sync-route>
            <md-tab id="tab-home" md-label="主页" to="/overview"></md-tab>
            <md-tab id="tab-posts" md-label="测评体验" to="/evaluating"></md-tab>
            <md-tab id="tab-favorites" md-label="开发中" to="/example"></md-tab>
            <md-tab id="tab-pages" md-label="开发中" to="/expertTeam"></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="showUserCenter" md-persistent="full" >
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>用户中心</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text usercenterspan"  @click="goRouter(1)">个人信息</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text usercenterspan" @click="goRouter(2)">企业信息</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text usercenterspan" @click="goRouter(3)">修改密码</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text usercenterspan" @click="goRouter(4)">退出登录</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content style="background-color: rgba(216, 209, 202, 0.13);">
       <router-view></router-view>
      </md-app-content>
    </md-app>
</div>
</template>

<style lang="scss" scoped>
.md-app {
  //max-height: 800px;
  height: 1000px;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.usercenterspan {
  cursor: pointer;
}
</style>

<script>
import evaluating from "../Evaluating/evaluating.vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "LastRowFixed",
  components: {
    evaluating
  },
  data: () => ({
    // menuVisible: Boolean,
    // loginPage:Boolean,
  }),
  computed: {
    menuVisible() {
      // debugger
      return this.$store.state.home.menuVisible;
    },
    loginPage() {
      return this.$store.state.home.loginPage;
    },
    showTabs() {
      return this.$store.state.home.showTabs;
    },
    showUserCenterButton() {
      return this.$store.state.home.showUserCenterButton;
    },
    showUserCenter() {
      return this.$store.state.home.showUserCenter;
    },
    showLogin() {
      return this.$store.state.home.showLogin;
    },
    getLoginState() {
      return this.$store.state.loginPage.loginSuccess;
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit("home/showUserCenter", !this.showUserCenter);
      this.$store.commit(
        "home/showUserCenterButton",
        !this.showUserCenterButton
      );
    },
    loginFun() {
      this.$store.commit("home/showTabsFun", false);
      this.$router.push("/loginPage/");
    },
    goRouter(index) {
      switch (index) {
        case 1:
          this.$store.commit("home/showTabsFun", false);
          this.$router.push("/personalInfo");
          break;
        case 2:
          this.$store.commit("home/showTabsFun", false);
          this.$router.push("/enterpriseInfo");
          break;
        case 3:
          this.$store.commit("home/showTabsFun", false);

          this.$store.commit("UserCenter/changePasswordmobile", "");
          this.$store.commit("UserCenter/changePasswordemail", "");
          this.$store.commit("UserCenter/changePasswordcheckWay", "email");
          this.$store.commit("UserCenter/changePasswordVerificationCode", "");
          this.$store.commit("UserCenter/changePasswordshowVCEmpty", false);
          this.$store.commit("UserCenter/changePasswordshowVCError", false);
          this.$store.commit("UserCenter/changePasswordVCHasMessages", false);
          this.$store.commit("UserCenter/changePasswordpasswordFHasMessages",true);
          this.$store.commit("UserCenter/changePasswordpasswordSHasMessages",false);
          this.$store.commit("UserCenter/changePasswordcurrentStep1", true);
          this.$store.commit("UserCenter/changePasswordcurrentStep2", false);
          this.$store.commit("UserCenter/changePasswordcurrentStep3", false);
          this.$store.commit("UserCenter/changePasswordpasswordFirst", "");
          this.$store.commit("UserCenter/changePasswordpasswordSecond", "");
          this.$store.commit("UserCenter/changePasswordshowPasswordfEmpty",false);
          this.$store.commit("UserCenter/changePasswordshowPasswordfError", true);
          this.$store.commit("UserCenter/changePasswordshowPasswordsEmpty", false);
          this.$store.commit("UserCenter/changePasswordshowPasswordsError", false);

          this.$router.push("/modifyPassword");
          break;
        case 4:
          //修改登录状态
          this.$store.commit("loginPage/changeLoginState", false);
          //隐藏登录按钮
          this.$store.commit("home/showLogin", true);
          //隐藏用户中心按钮
          this.$store.commit("home/showUserCenterButton", false);
          //隐藏用户中心
          this.$store.commit("home/showUserCenter", false);
          //显示导航菜单
          this.$store.commit("home/showTabsFun", true);
          this.$router.push("/overview");
          break;
        default:
          break;
      }
    },
    gohome() {
      debugger;
      //登录了，隐藏登录按钮
      if (this.getLoginState) {
        //隐藏登录按钮
        this.$store.commit("home/showLogin", false);
        //显示用户中心按钮
        this.$store.commit("home/showUserCenterButton", true);
        //隐藏用户中心
        this.$store.commit("home/showUserCenter", false);
      } else {
        //隐藏登录按钮
        this.$store.commit("home/showLogin", true);
        //隐藏用户中心按钮
        this.$store.commit("home/showUserCenterButton", false);
        //隐藏用户中心
        this.$store.commit("home/showUserCenter", false);
      }

      //显示导航菜单
      this.$store.commit("home/showTabsFun", true);
      this.$router.push("/overview");
    }
  }
};
</script>