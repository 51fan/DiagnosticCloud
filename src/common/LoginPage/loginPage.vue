<template>
    <div class="mypanel">
      <!-- <v-layout row wrap v-if="showLoginPage" style="display: inline-flex;height:600px;">
        <v-flex only-sm2></v-flex>
        <v-flex xl8 lg8 md7  hidden-sm-and-down style="color: white;font-size: xx-large;">
          <div style="margin: 12% 0 0 0;">
            <span>中国企业核心能力</span>
          </div>
          <div style="margin: 3% 0 0 96px;">
            <span>测评分析和改善领域最大</span>
          </div>
          <div style="margin: 3% 99px 0 0;">
            <span>服务提供商</span>
          </div>
        </v-flex>
         <v-flex xl4 lg4 md5 sm8 xs12 style="color: white;">
           <div class="cardstyle">
            <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10% 0;">
              <div class="md-layout-item md-size-10" ></div>
              <div class="md-layout-item md-size-80" >
                <span class="loginHeadTitle">登录</span>
              </div>
              <div class="md-layout-item md-size-10" ></div>
            </div>
            <div class="md-layout-item md-size-100" style="display: inline-flex;">
              <div class="md-layout-item md-size-10" ></div>
              <div class="md-layout-item md-size-80" style="margin: 5% 0;">
                <md-field>
                    <label>请输入手机/邮箱</label>
                    <md-input v-model="phoneOrEmail" placeholder="账号"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-size-10" ></div>
            </div>
            <div class="md-layout-item md-size-100" style="display: inline-flex;">
              <div class="md-layout-item md-size-10" ></div>
              <div class="md-layout-item md-size-80" >
                <md-field>
                    <label>请输入密码</label>
                    <md-input v-model="passWord" type="password" placeholder="密码" maxlength="16"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-size-10" ></div>
            </div>
            
            <div v-if="showVerificationCode&&errCounter>1">
              <div class="md-layout-item md-size-100" style="display: inline-flex;">
                <div class="md-layout-item md-size-10" ></div>
                <div class="md-layout-item md-size-80" >
                  <div class="md-layout-item md-size-100" style="display: inline-flex;">
                    <div class="md-layout-item md-size-60" >
                        <md-field style="display: inline-flex;">
                            <label>请输入图片中的内容</label>
                            <md-input v-model="VerificationCode" placeholder="图片验证码" maxlength="4"></md-input>
                        </md-field> 
                    </div>
                    <div class="md-layout-item md-size-40" >
                        <div style="margin: 15% 0;cursor: pointer;" @click="getPicture()"><img :src="VerificationImagesrc"/></div>
                    </div>
                  </div>
                </div>
                <div class="md-layout-item md-size-10" ></div>
              </div> 
            </div>
            <div class="md-layout-item md-size-100" style="display: inline-flex;">
              <div class="md-layout-item md-size-10" ></div>
              <div class="md-layout-item md-size-80" >
                <div>
                    <div style="width:90%;cursor: pointer;display: inline-block;">
                       <div class="md-layout-item md-size-100" style="display: inline-flex;">
                         <div class="md-layout-item md-size-60" style="text-align: left;">
                           <md-checkbox style="display: inline-flex;" v-model="autoLogin">30天内自动登录</md-checkbox>
                         </div>
                         <div class="md-layout-item md-size-40" >
                           <div style="text-align:right;margin: 17px 0" @click="forgetPassword()"><span >忘记密码</span></div>
                         </div>
                       </div>
                    </div>     
                </div>
                    <md-button class="md-dense md-raised md-primary" style="width:95%;border-radius: 65px;margin: 15% 0 0 0;background-color: #009199;"  @click="loginFun()">登录</md-button>
                <div>
                    <div style="width: 90%;text-align: center;margin: 10% 0px 5%;cursor: pointer;color: #009199;" @click="registerFun()">
                        <span>注册用户</span>
                    </div>     
                </div>
              </div>
              <div class="md-layout-item md-size-10" ></div>
            </div>
            
            <md-dialog-alert
                  class="md-primary md-raised"
                  :md-active.sync="showAlert"
                  :md-content="AlertMessage"
                  md-confirm-text="知道了" />
          </div>
         </v-flex>
         <v-flex only-sm2></v-flex>
      </v-layout> -->
      
      <div v-if="showLoginPage" class="md-layout-item md-size-100" style="display: inline-flex;height:600px;">
        <div class="md-layout-item md-xlarge-size-1 md-large-size-1 md-medium-1    md-small-size-10 md-xsmall-hide"></div>
        <div class="md-layout-item md-xlarge-size-65   md-large-size-65   md-medium-size-60 md-small-hide    md-xsmall-hide" style="color: white;font-size: xx-large;">
          <div style="margin: 12% 0 0 0;">
            <span>中国企业核心能力</span>
          </div>
          <div style="margin: 3% 0 0 96px;">
            <span>测评分析和改善领域最大</span>
          </div>
          <div style="margin: 3% 99px 0 0;">
            <span>服务提供商</span>
          </div>
        </div>
        <div class="md-layout-item md-xlarge-size-30   md-large-size-40   md-medium-size-40 md-small-size-80 md-xsmall-size-100">
          <div class="cardstyle">
            <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10% 0;">
              <div class="md-layout-item md-size-10" ></div>
              <div class="md-layout-item md-size-80" >
                <span class="loginHeadTitle">登录</span>
              </div>
              <div class="md-layout-item md-size-10" ></div>
            </div>
            <div class="md-layout-item md-size-100" style="display: inline-flex;">
              <div class="md-layout-item md-size-10" ></div>
              <div class="md-layout-item md-size-80" style="margin: 5% 0;">
                <md-field>
                    <label>请输入手机/邮箱</label>
                    <md-input v-model="phoneOrEmail" placeholder="账号"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-size-10" ></div>
            </div>
            <div class="md-layout-item md-size-100" style="display: inline-flex;">
              <div class="md-layout-item md-size-10" ></div>
              <div class="md-layout-item md-size-80" >
                <md-field>
                    <label>请输入密码</label>
                    <md-input v-model="passWord" type="password" placeholder="密码" maxlength="16"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-size-10" ></div>
            </div>
            
            <div v-if="showVerificationCode&&errCounter>1">
              <div class="md-layout-item md-size-100" style="display: inline-flex;">
                <div class="md-layout-item md-size-10" ></div>
                <div class="md-layout-item md-size-80" >
                  <div class="md-layout-item md-size-100" style="display: inline-flex;">
                    <div class="md-layout-item md-size-60" >
                        <md-field style="display: inline-flex;">
                            <label>请输入图片中的内容</label>
                            <md-input v-model="VerificationCode" placeholder="图片验证码" maxlength="4"></md-input>
                        </md-field> 
                    </div>
                    <div class="md-layout-item md-size-40" >
                        <div style="margin: 15% 0;cursor: pointer;" @click="getPicture()"><img :src="VerificationImagesrc"/></div>
                    </div>
                  </div>
                </div>
                <div class="md-layout-item md-size-10" ></div>
              </div> 
            </div>
            <div class="md-layout-item md-size-100" style="display: inline-flex;">
              <div class="md-layout-item md-size-10" ></div>
              <div class="md-layout-item md-size-80" >
                <div>
                    <div style="width:90%;cursor: pointer;display: inline-block;">
                       <div class="md-layout-item md-size-100" style="display: inline-flex;">
                         <div class="md-layout-item md-size-60" style="text-align: left;">
                           <md-checkbox style="display: inline-flex;" v-model="autoLogin" >30天内自动登录</md-checkbox>
                         </div>
                         <div class="md-layout-item md-size-40" >
                           <div style="text-align:right;margin: 17px 0" @click="forgetPassword()"><span >忘记密码</span></div>
                         </div>
                       </div>
                    </div>     
                </div>
                    <md-button class="md-dense md-raised md-primary" style="width:95%;border-radius: 65px;margin: 15% 0 0 0;background-color: #009199;"  @click="loginFun()">登录</md-button>
                <div>
                    <div style="width: 90%;text-align: center;margin: 10% 0px 5%;cursor: pointer;color: #009199;" @click="registerFun()">
                        <span>注册用户</span>
                    </div>     
                </div>
              </div>
              <div class="md-layout-item md-size-10" ></div>
            </div>
            
            <md-dialog-alert
                  class="md-primary md-raised"
                  :md-active.sync="showAlert"
                  :md-content="AlertMessage"
                  md-confirm-text="知道了" />
          </div>
        </div>
        <div class="md-layout-item md-xlarge-size-1 md-large-size-1 md-medium-1   md-small-size-10  md-xsmall-hide"></div>
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
  /* box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12); */
  box-shadow: 0 14px 1px -2px rgba(0, 0, 0, 0.2),
    0 14px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 14px 0 rgba(0, 0, 0, 0.12);
  position: relative;
  z-index: 1;
  border-radius: 20px;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: color, background-color;
  will-change: color, background-color;
  /* width: 40%; */
  padding: 5%;
  border: 1px solid lightgray;
  /* background-color: rgba(235, 238, 245, 0.64); */
  background-color: white;
}
.loginHeadTitle {
  min-height: 48px;
  margin: 4px 0 24px;
  padding-top: 16px;
  font-size: x-large;
  /* display: flex; */
  position: relative;
  font-family: inherit;
  /* width: 400px; */
}
</style>
<script>
import { mapGetters, mapState } from "vuex";
import forgetPassword from "./forgetPassword.vue";
import base64 from "js-base64";

export default {
  name: "loginPage",
  components: {
    forgetPassword
  },
  data: () => ({
    phoneOrEmail: "",
    passWord: "",
    checkPicture: "",
    autoLogin: false,
    showVerificationCode: false,
    showAlert: false,
    AlertMessage: "",
    VerificationCode: "",
    // VerificationImagesrc:"/static/imgs/check.png"
    // VerificationImagesrc: "http://139.159.141.232:8080/Captch?" + Math.random(),
    VerificationImagesrc: "/Captch?" + Math.random(),
    errCounter: 0
  }),
  mounted: function() {
    // let $this = this;
    // if (this.autoLogin30days) {
    //   let url = "/IBUS/DAIG_SYS/check_login",
    //     type = "post",
    //     param = {},
    //     apikey = "";
    //   $this.http({
    //     method: type,
    //     url: url,
    //     data: param
    //   }).then(res => {
    //     console.log("autologin")
    //   });
    // }else{
    //   console.log("noautologin")
    // }
  },
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
    firstLogin() {
      return this.$store.state.loginPage.firstLogin;
    },
    autoLogin30days() {
      return this.$store.state.autoLogin30days;
    }
  },
  methods: {
    loginFun() {
      let $this = this;
      let apikey = "";
      let type = "post";
      let url = "/IBUS/DAIG_SYS/login";
      let request = {
        id: this.phoneOrEmail,
        password: Base64.encode(this.passWord),
        captchCode: this.VerificationCode
      };
      let param = {
        apikey,
        request
      };
      if ($this.checkformat(this.phoneOrEmail)) {
        $this.showAlert = true;
        $this.AlertMessage = "请输入正确的手机号码或者邮箱";
      } else {
        if (this.errCounter > 1 && this.VerificationCode == "") {
          $this.showAlert = true;
          $this.AlertMessage = "请输入验证码";
        } else {
          const loading = this.$loading({
            lock: true,
            text: "Loading",
            spinner: "el-icon-loading",
            background: "rgba(61, 61, 61, 0.7)"
          });
          $this
            .$http({
              method: type,
              url: url,
              data: param
            })
            .then(res => {
              // console.log(res);
              if (res.data.errorCode !== 0 && res.data.errorCode !== -6) {
                $this.showVerificationCode = true;
                $this.showAlert = true;
                $this.AlertMessage = res.data.errorMsg;
                $this.errCounter++;
                console.log($this.errCounter);
                loading.close();
              } else if (res.data.errorCode == -6) {
                //隐藏首页背景图
                $this.$store.commit("home/changeShowHomeBgImge", false);
                $this.$store.commit("home/showTabsFun", false);
                $this.$store.commit("loginPage/getUseremail", res.data.return.email);
                $this.$store.commit("loginPage/getUsermobile", res.data.return.mobile);
                $this.$router.push("/registerNoActive");
                loading.close();
              } else {
                // $this.session_id = res.data.session_id;
                $this.$store.commit("SET_TOKEN", res.data.session_id);
                $this.$store.commit("GET_USER", res.data.email);
                $this.$store.commit("SET_UsereMail", res.data.email);
                $this.$store.commit("SET_UsereMobile", res.data.mobile);
                if (res.data.image !== null) {
                  $this.$store.commit("SET_UserImage", res.data.image);
                }else{
                  $this.$store.commit("SET_UserImage", "");
                }
                $this.$store.commit("loginPage/getUseremail", res.data.email);
                $this.$store.commit("loginPage/getUsermobile", res.data.mobile);
                if (res.data.image !== null) {
                  $this.$store.commit("loginPage/getUserImage", res.data.image);
                } else {
                  $this.$store.commit("loginPage/getUserImage", "");
                }
                $this.$store.commit(
                  "loginPage/getSession_id",
                  res.data.session_id
                );
                $this.$store.commit(
                  "loginPage/changefirstLogin",
                  res.data.firstLogin
                );
                if (res.data.firstLogin) {
                  $this.$store.commit("UserCenter/changeShowCityPicker", true);
                  $this.$store.commit("SET_FirstLogin", true);
                }
                if ($this.autoLogin) {
                  $this.$store.commit("AUTOLOGIN", true);
                } else {
                  $this.$store.commit("AUTOLOGIN", false);
                }
                //修改登录状态
                $this.$store.commit("loginPage/changeLoginState", true);
                //显示导航菜单
                $this.$store.commit("home/showTabsFun", true);
                $this.$store.commit("home/showLogin", true);
                //隐藏首页背景图
                $this.$store.commit("home/changeShowHomeBgImge", false);
                //激活菜单选中项
                $this.$store.commit("home/getTabsactiveIndex", "1");
                $this.$store.commit("ACTIVE", "1");
                $this.$router.push("/overview");
                loading.close();
              }
            })
            .catch(error => {
              console.log(error);
              loading.close();
            });
        }
      }
    },
    registerFun() {
      //隐藏登录按钮
      // this.$store.commit("home/showLogin", true);

      //this.$store.commit("home/showTabsFun");
      this.$router.push("/register");
    },
    forgetPassword() {
      //隐藏登录界面
      this.$store.commit("loginPage/changeLoginShowState", false);
      //隐藏首页背景图
      this.$store.commit("home/changeShowHomeBgImge", false);
      this.$store.commit("home/showTabsFun", false);
    },
    getPicture() {
      this.VerificationImagesrc = "";
      this.VerificationImagesrc = "/Captch?" + Math.random();
      // let $this = this,
      //   apikey = "",
      //   request = {};
      // $this.$http
      //   .get("http://139.159.141.232:8080/Captch")
      //   .then(res => {
      //     console.log(res.data.return);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    },
    checkformat(str) {
      if (this.isEmail(this.phoneOrEmail)) {
        return false;
      } else if (this.isTelCode(this.phoneOrEmail)) {
        return false;
      } else {
        return true;
      }
    },
    isEmail(str) {
      let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
      return reg.test(str);
    },
    isTelCode(str) {
      var reg = /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/;
      return reg.test(str);
    }
  }
};
</script>


