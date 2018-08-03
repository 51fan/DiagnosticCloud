<template>
<div class="page-container">
    <!-- <md-app md-waterfall style="background-image:url('./static/imgs/bluecloud.jpg');background-size:cover;"> -->
    <md-app>
      <md-app-toolbar class="md-large md-dense md-transparent" >
        <!-- <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="toggleMenu" v-if="showUserCenterButton" >
              <md-icon >menu</md-icon>
            </md-button>
            <span class="md-title" @click="gohome()" style="cursor: pointer;">扁鹊云</span>
          </div>

          <div class="md-toolbar-section-end" v-if="showLogin">
              <md-menu>
                <md-button class="md-icon-button"  md-menu-trigger>
                    <md-icon>account_circle</md-icon>
                </md-button>

                <md-menu-content>
                  <md-menu-item @click="loginFun()">
                    <md-icon>perm_identity</md-icon>
                    <span>登录</span>
                  </md-menu-item>

                  <md-menu-item  @click="handleSelect(5)">
                    <md-icon>edit</md-icon>
                    <span>修改密码</span>
                  </md-menu-item>

                  <md-menu-item @click="handleSelect(6)">
                    <md-icon>exit_to_app</md-icon>
                    <span>退出登录</span>
                  </md-menu-item>
                </md-menu-content>
              </md-menu>
          </div>
        </div> -->

        <div class="md-toolbar-row">
            <div class="md-layout-item md-size-10">
                <!-- <img src="/static/imgs/logo_magpie.png" @click="gohome()" style="cursor: pointer;" alt="扁鹊云"> -->
                <div class="md-toolbar-section-end">
                  <img src="/static/imgs/logo_magpie.png" alt="扁鹊云">
                </div>
            </div>
            <div class="md-layout-item md-size-80">
              <div style="text-align: end;" v-if="showTabs">
                <el-menu :default-active="tabsActiveIndex" style="display: inline-flex;padding-right: 35%;"  mode="horizontal" @select="handleSelect">
                  <el-menu-item index="1">工作台</el-menu-item>
                  <el-menu-item index="2">测评产品</el-menu-item>
                  <el-menu-item index="3" >测评中心</el-menu-item>
                  <el-menu-item index="4">企业设置</el-menu-item>
                </el-menu>
              </div>
            </div>
            <div class="md-layout-item md-size-10">
              <div class="md-toolbar-section-start" v-if="showLogin">
                  <md-menu>
                    <md-button class="md-icon-button"  md-menu-trigger>
                        <md-icon v-if="!showPersonalimageSrc">account_circle</md-icon>
                        <md-avatar v-if="showPersonalimageSrc"><img :src="PersonalimageSrc" style="    width: 24px;height: 24px;border-radius: 50%;" /></md-avatar>
                    </md-button>

                    <md-menu-content>
                      <md-menu-item @click="loginFun()" v-if="!loginSuccess">
                        <md-icon>perm_identity</md-icon>
                        <span>登录</span>
                      </md-menu-item>
                      <md-menu-item  @click="handleSelect(7)" v-if="loginSuccess">
                        <md-icon>person</md-icon>
                        <span>个人信息</span>
                      </md-menu-item>
                      <md-menu-item  @click="handleSelect(5)" v-if="loginSuccess">
                        <md-icon>vpn_key</md-icon>
                        <span>修改密码</span>
                      </md-menu-item>

                      <md-menu-item @click="handleSelect(6)" v-if="loginSuccess">
                        <md-icon>exit_to_app</md-icon>
                        <span>退出登录</span>
                      </md-menu-item>
                    </md-menu-content>
                  </md-menu>
              </div>
            </div>
        </div>
      </md-app-toolbar>

      <!-- <md-app-drawer :md-active.sync="showUserCenter" md-persistent="full">
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
      </md-app-drawer> -->

      <md-app-content style="background-color: #f1f3f4" :class="{'homebgImge':showHomeBgImge}">
       <router-view></router-view>
      </md-app-content>
        
    </md-app>
</div>
</template>
<style>
.el-menu--horizontal>.el-menu-item{
  color: #000000!important;
}
.el-menu-item.is-active{
  border-bottom-color:#009199!important;
  color: #066666!important;
}
</style>

<style lang="scss" scoped>
.md-app {
  //max-height: 800px;
  min-height: 1040px;
  border: 1px solid rgba(#000, 0.12);
}
.md-app-content {
  padding: 0 !important;
}
// Demo purposes only
.md-drawer {
  width: 200px;
  max-width: calc(100vw - 125px);
}
.usercenterspan {
  cursor: pointer;
}

.itemactive:hover {
  border-bottom: 2px solid black;
}
.homebgImge {
  background-image: url("/static/imgs/home_bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.el-menu--horizontal {
  border-bottom: solid 0px #e6e6e6;
}
.md-toolbar.md-large.md-dense {
  min-height: 76px;
}
</style>

<script>
import evaluating from "../Evaluating/evaluating.vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "home",
  components: {
    evaluating
  },
  data: () => ({
    PersonalimageSrc: "",
    showPersonalimageSrc: false
  }),
  mounted: function() {
    if (this.userImage !== "") {
      this.showPersonalimageSrc = true;
      this.PersonalimageSrc = "/IMAGE/" + this.userImage;
    } else {
      this.showPersonalimageSrc = false;
      this.PersonalimageSrc = "";
    }
  },
  computed: {
    menuVisible() {
      return this.$store.state.home.menuVisible;
    },
    loginPage() {
      return this.$store.state.home.loginPage;
    },
    showTabs() {
      return this.$store.state.home.showTabs;
    },
    // showUserCenterButton() {
    //   return this.$store.state.home.showUserCenterButton;
    // },
    showUserCenter() {
      return this.$store.state.home.showUserCenter;
    },
    showLogin() {
      return this.$store.state.home.showLogin;
    },
    loginSuccess() {
      return this.$store.state.loginPage.loginSuccess;
    },
    useremail() {
      return this.$store.state.loginPage.useremail;
    },
    tabsActiveIndex() {
      return this.$store.state.home.tabsActiveIndex;
    },
    showHomeBgImge() {
      return this.$store.state.home.showHomeBgImge;
    },
    userImage() {
      return this.$store.state.loginPage.userImage;
    }
  },
  watch: {
    userImage: function(newVal, oldVal) {
      if (newVal !== "") {
        this.showPersonalimageSrc = true;
        this.PersonalimageSrc = "/IMAGE/" + newVal;
      } else {
        this.showPersonalimageSrc = false;
        this.PersonalimageSrc = "";
      }
    }
  },
  methods: {
    // toggleMenu() {
    //   this.$store.commit("home/showUserCenter", !this.showUserCenter);
    //   this.$store.commit(
    //     "home/showUserCenterButton",
    //     !this.showUserCenterButton
    //   );
    // },
    handleSelect(key, keyPath) {
      switch (key) {
        case "1":
          this.$store.commit("home/getTabsactiveIndex", "1");
          this.$store.commit("ACTIVE", "1");
          this.$store.commit("home/showTabsFun", true);
          this.$store.commit("evlaluating/changeShowevaluatingPage", false);
          //隐藏首页背景图
          this.$store.commit("home/changeShowHomeBgImge", false);
          this.$router.push("/overview");
          break;
        case "2":
          this.$store.commit("home/getTabsactiveIndex", "2");
          this.$store.commit("ACTIVE", "2");
          //隐藏首页背景图
          this.$store.commit("home/changeShowHomeBgImge", false);
          //显示导航菜单
          this.$store.commit("home/showTabsFun", true);
          //显示选择评测产品
          this.$store.commit("evlaluating/changeShowevaluatingPage", false);
          //显示答题区
          this.$store.commit("evlaluating/changeEvaluationStart", true);
          //隐藏答题完成界面
          this.$store.commit("evlaluating/changeEvaluationfinished", false);
          //隐藏报告
          this.$store.commit("evlaluating/changeIsShowReport", false);
          //重置查看报告状态
          this.$store.commit("evlaluating/changeSeeReport", false);
          //路由跳转
          this.$router.push("/evaluating");
          break;
        case "3":
          this.$store.commit("home/getTabsactiveIndex", "3");
          this.$store.commit("ACTIVE", "3");
          //隐藏首页背景图
          this.$store.commit("home/changeShowHomeBgImge", false);
          this.$store.commit("evlaluating/changeShowevaluatingPage", false);
          this.$router.push("/evaluatingCenter");
          break;
        case "4":
          this.$store.commit("home/getTabsactiveIndex", "4");
          this.$store.commit("ACTIVE", "4");
          //隐藏首页背景图
          this.$store.commit("home/changeShowHomeBgImge", false);
          this.$store.commit("evlaluating/changeShowevaluatingPage", false);
          this.$store.commit("UserCenter/changeShowCityPicker", false);
          this.$router.push("/enterpriseInfo");
          break;
        case 5:
          //隐藏首页背景图
          this.$store.commit("home/changeShowHomeBgImge", false);
          this.$store.commit("home/showTabsFun", false);

          this.$store.commit("home/showLogin", true);

          this.$store.commit("UserCenter/changePasswordmobile", "");
          this.$store.commit("UserCenter/changePasswordemail", "");
          this.$store.commit("UserCenter/changePasswordcheckWay", "email");
          this.$store.commit("UserCenter/changePasswordVerificationCode", "");
          this.$store.commit("UserCenter/changePasswordshowVCEmpty", false);
          this.$store.commit("UserCenter/changePasswordshowVCError", false);
          this.$store.commit("UserCenter/changePasswordVCHasMessages", false);
          this.$store.commit(
            "UserCenter/changePasswordpasswordFHasMessages",
            true
          );
          this.$store.commit(
            "UserCenter/changePasswordpasswordSHasMessages",
            false
          );
          this.$store.commit("UserCenter/changePasswordcurrentStep1", true);
          this.$store.commit("UserCenter/changePasswordcurrentStep2", false);
          this.$store.commit("UserCenter/changePasswordcurrentStep3", false);
          this.$store.commit("UserCenter/changePasswordpasswordFirst", "");
          this.$store.commit("UserCenter/changePasswordpasswordSecond", "");
          this.$store.commit(
            "UserCenter/changePasswordshowPasswordfEmpty",
            false
          );
          this.$store.commit(
            "UserCenter/changePasswordshowPasswordfError",
            true
          );
          this.$store.commit(
            "UserCenter/changePasswordshowPasswordsEmpty",
            false
          );
          this.$store.commit(
            "UserCenter/changePasswordshowPasswordsError",
            false
          );

          this.$router.push("/modifyPassword");
          break;
        case 6:
          let $this = this,
            apikey = "",
            request = {
              email: this.useremail
            };
          $this.$http
            .post("/IBUS/DAIG_SYS/logout", {
              apikey,
              request
            })
            .then(res => {
              if (res.data.errorCode !== 0) {
                $this.showAlert = true;
                $this.AlertMessage = res.data.errorMsg;
              } else {
                //修改登录状态
                $this.$store.commit("loginPage/changeLoginState", false);
                //显示登录按钮
                $this.$store.commit("home/showLogin", false);
                // //隐藏用户中心按钮
                // $this.$store.commit("home/showUserCenterButton", false);
                // //隐藏用户中心
                // $this.$store.commit("home/showUserCenter", false);
                //显示导航菜单
                $this.$store.commit("home/showTabsFun", false);
                //显示首页背景图
                $this.$store.commit("home/changeShowHomeBgImge", true);
                //清楚头像图片
                $this.$store.commit("loginPage/getUserImage", "");
                //清除session信息
                $this.$store.commit("LOGOUT");
                //跳转到登录页
                $this.$router.push("/loginPage");
              }
            })
            .catch(err => {
              console.log(err);
            });
          break;
        case 7:
          this.$store.commit("home/getTabsactiveIndex", "1");
          this.$store.commit("ACTIVE", "1");
          this.$store.commit("home/showTabsFun", true);
          this.$router.push("/personalInfo");
          break;
        default:
          break;
      }
    },
    loginFun() {
      this.$store.commit("home/showTabsFun", true);
      this.$store.commit("loginPage/changeLoginShowState", true);
      //显示首页背景图
      this.$store.commit("home/changeShowHomeBgImge", true);
      this.$router.push("/loginPage/");
    }
    // gohome() {
    //   //登录了，隐藏登录按钮
    //   if (this.getLoginState) {
    //     //隐藏登录按钮
    //     this.$store.commit("home/showLogin", true);
    //     //显示用户中心按钮
    //     this.$store.commit("home/showUserCenterButton", false);
    //     //隐藏用户中心
    //     this.$store.commit("home/showUserCenter", false);
    //   } else {
    //     //隐藏登录按钮
    //     this.$store.commit("home/showLogin", true);
    //     //隐藏用户中心按钮
    //     this.$store.commit("home/showUserCenterButton", false);
    //     //隐藏用户中心
    //     this.$store.commit("home/showUserCenter", false);
    //   }
    //   //隐藏首页背景图
    //   this.$store.commit("home/changeShowHomeBgImge", false);
    //   //显示导航菜单
    //   this.$store.commit("home/showTabsFun", true);
    //   this.$router.push("/overview");
    // }
  }
};
</script>