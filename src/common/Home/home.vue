<template>
<div>
    <div>
        <md-app :md-scrollbar='scrollbar' >
          <md-app-toolbar class="md-large md-dense md-transparent">
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

            <div class="md-toolbar-row" style="margin: 1px 0px;">
                <div class="md-layout-item md-size-10">
                    <!-- <img src="/static/imgs/logo_magpie.png" @click="gohome()" style="cursor: pointer;" alt="扁鹊云"> -->
                    
                </div>
                <div class="md-layout-item md-size-80" style="display: inline-flex;">
                  <div class="md-toolbar-section-start">
                    <img style="width: 180px" src="/static/imgs/huazhilogo.png" alt="扁鹊云">
                  </div>
                  <div style="text-align: end;" v-if="showTabs">
                    <el-menu :default-active="tabsActiveIndex" style="display: inline-flex;padding-right: 35%;"  mode="horizontal" @select="handleSelect">
                      <el-menu-item index="1">工作台</el-menu-item>
                      <el-menu-item index="2">测评产品</el-menu-item>
                      <el-menu-item index="3" >测评中心</el-menu-item>
                      <el-menu-item index="4">企业设置</el-menu-item>
                    </el-menu>
                  </div>
                  <div class="md-toolbar-section-end" v-if="showLogin">
                      <md-menu>
                        <md-button class="md-icon-button"  md-menu-trigger>
                            <!-- <md-icon v-if="!showPersonalimageSrc">account_circle</md-icon> -->
                            <md-avatar style="width: 48px;height: 48px;"><img :src="PersonalimageSrc" style="border-radius: 50%;" /></md-avatar>
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
                <div class="md-layout-item md-size-10">
                  
                </div>
            </div>
          </md-app-toolbar>

          <md-app-content style="background-color: #f1f3f4" :class="{'homebgImge':showHomeBgImge}">
            <router-view></router-view>
          </md-app-content>
            
        </md-app>
    </div>
</div>
</template>
<style>
.el-menu--horizontal > .el-menu-item {
  color: #000000 !important;
}
.el-menu-item.is-active {
  border-bottom-color: #009199 !important;
  color: #066666 !important;
}
.el-menu-item {
  font-size: larger !important;
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
    PersonalimageSrc: "/static/imgs/ic_user.png",
    showPersonalimageSrc: false,
    scrollbar:false
  }),
  mounted: function() {
    if (this.userImage !== null && this.userImage !== "") {
      this.showPersonalimageSrc = true;
      this.PersonalimageSrc = "/IMAGE/" + this.userImage;
    } else {
      this.showPersonalimageSrc = false;
      this.PersonalimageSrc = "/static/imgs/ic_user.png";
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
      if (newVal !== "" && newVal !== null) {
        this.showPersonalimageSrc = true;
        this.PersonalimageSrc = "/IMAGE/" + newVal;
      } else {
        this.showPersonalimageSrc = false;
        this.PersonalimageSrc =  "/static/imgs/ic_user.png";
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
                //隐藏导航菜单
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