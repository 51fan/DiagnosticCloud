<template>
    <div class="mypanel">
        <div style="text-align: center;text-align: -webkit-center;background: white;padding-bottom: 5%;">
            <div class="pogressHead">
                <div class="md-layout-item md-size-100">
                  <el-steps :active="activeStep" finish-status="success" simple>
                    <el-step title="验证身份" ></el-step>
                    <el-step title="修改邮箱" ></el-step>
                    <el-step title="完成" ></el-step>
                  </el-steps>
                </div>
            </div>

            <div class="modifyBody">
                <div class="md-layout-item md-size-100" style="display: inline-flex;">
                  <div class="md-layout-item md-size-15"></div>
                  <div class="md-layout-item md-size-70">
                      <div v-if="currentStep1">
                        <div class="md-layout-item md-size-100" style="text-align:center;">
                          <span style="font-size: x-large;margin: 20px;">修改邮箱前我们需要验证您的身份</span>
                        </div>
                        
                        <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0 15px;">
                          <div class="md-layout-item md-size-50" style="text-align:right;padding: 0 65px;">
                              <md-radio v-model="checkWay" value="mobile"  class="md-primary" >通过手机验证</md-radio>
                          </div>
                          <div class="md-layout-item md-size-50" style="padding: 0 70px;">
                              <md-radio v-model="checkWay" value="email"  class="md-primary">通过邮箱验证</md-radio>
                          </div>
                      </div>
                      <div v-if="changeCheckWay">
                            <div class="md-layout-item md-size-100" style="padding: 0 6% 3% 6%;width: 100%;text-align:center;display: inline-flex;">
                              <div class="md-layout-item md-size-25"></div>
                              <div class="md-layout-item md-size-50" style="display: inline-flex;">
                                  <div style="padding: 0 6% 3% 6%;text-align: left;">
                                    <span>我们将会向您的手机</span><span style="color: rgb(0, 145, 153);">+86{{usermobile}}</span><span> 发送验证短信，请将收到的验证码填入下方完成验证</span>
                                  </div>
                              </div>
                              <div class="md-layout-item md-size-25"></div>
                            </div>
                            <div  class="md-layout-item md-size-100" style="padding: 0 6% 0 6%;width: 100%;text-align:center;display: inline-flex;">
                                <div class="md-layout-item md-size-25"></div>
                                <div class="md-layout-item md-size-50" style="display: inline-flex;">
                                    <div class="md-layout-item md-size-10"></div>
                                    <div class="md-layout-item md-size-50">
                                        <el-input  v-model="VerificationCode" placeholder="输入验证码" v-on:input ="inputFunc(2)" @click="showTips(2)"></el-input>
                                        <div class="inputError">
                                            <span v-if="showVCErr">{{vcErrText}}</span>
                                        </div>
                                    </div>
                                    <div class="md-layout-item md-size-40">
                                        <el-button v-if="!showCount" style="background-color: #F1F3F7;"   @click="getVerificationCode(1)">{{verftext}}</el-button>
                                        <el-button v-if="showCount" style="background-color: #F1F3F7;" disabled  @click="getVerificationCode(1)">{{phonetime}}{{verftext}}</el-button>
                                    </div>
                                </div>
                                <div class="md-layout-item md-size-25"></div>
                            </div>
                      </div>
                      <div v-if="!changeCheckWay">
                        <div class="md-layout-item md-size-100" style="padding: 0 6% 3% 6%;width: 100%;text-align:center;display: inline-flex;">
                          <div class="md-layout-item md-size-25"></div>
                          <div class="md-layout-item md-size-50" style="display: inline-flex;">
                            <div style="padding: 0 6% 3% 6%;text-align: left;">
                              <span>我们将会向您的邮箱</span>
                              <span style="color: rgb(0, 145, 153);">{{useremail}}</span>
                              <span> 发送验证邮件，请将收到的验证码填入下方完成验证</span>
                            </div>
                          </div>
                          <div class="md-layout-item md-size-25"></div>
                        </div>
                        <div  class="md-layout-item md-size-100" style="padding: 0 6% 0 6%;width: 100%;text-align:center;display: inline-flex;">
                            <div class="md-layout-item md-size-25"></div>
                            <div class="md-layout-item md-size-50" style="display: inline-flex;">
                              <div class="md-layout-item md-size-10"></div>
                                <div class="md-layout-item md-size-50">
                                    <el-input  v-model="VerificationCode" placeholder="输入验证码" v-on:input ="inputFunc(1)" @click="showTips(1)"></el-input>
                                    <div class="inputError">
                                        <span v-if="showVCErr">{{vcErrText}}</span>
                                    </div>
                                </div>
                                <div class="md-layout-item md-size-40">
                                  <el-button v-if="!showCount" style="background-color: #F1F3F7;"  @click="getVerificationCode(2)">{{verftext}}</el-button>
                                  <el-button v-if="showCount" style="background-color: #F1F3F7;" disabled @click="getVerificationCode(2)">{{emailtime}}{{verftext}}</el-button>
                                </div>
                            </div>
                            <div class="md-layout-item md-size-25"></div>
                        </div>
                      </div>
                  </div>
                  </div>
                  <div class="md-layout-item md-size-15"></div>
                </div>

                <div class="md-layout-item md-size-100" style="display: inline-flex;">
                    <div class="md-layout-item md-size-15"></div>
                    <div class="md-layout-item md-size-70">
                        <div v-if="currentStep2">
                            <div class="md-layout-item md-size-100" style="text-align:left;display: inline-flex;">
                                <div class="md-layout-item md-size-25"></div>
                                <div class="md-layout-item md-size-50">
                                    <span style="font-size: x-large;margin: 20px;">设置新邮箱</span>
                                </div>
                                <div class="md-layout-item md-size-25"></div>
                            </div>
                            <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0 15px;">
                                <div class="md-layout-item md-size-100" style="padding: 0 6% 3% 6%;width: 100%;text-align:center;display: inline-flex;">
                                    <div class="md-layout-item md-size-25"></div>
                                    <div class="md-layout-item md-size-50">
                                        <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 5% 0;">
                                            <el-input  v-model="NewEmail" placeholder="输入新的邮箱" v-on:input ="inputFunc(2)" @click="showTips(2)"></el-input>
                                        </div>
                                        <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                            <div class="md-layout-item md-size-60">
                                                <el-input  v-model="VerificationCode" placeholder="输入验证码" v-on:input ="inputFunc(1)" @click="showTips(1)"></el-input>
                                                <div class="inputError">
                                                    <span v-if="showVCErr">{{vcErrText}}</span>
                                                </div>
                                            </div>
                                            <div class="md-layout-item md-size-40" style="text-align: right;">
                                                <el-button v-if="!showCount" style="background-color: #F1F3F7;"   @click="getVerificationCode(3)">{{verftext}}</el-button>
                                                <el-button v-if="showCount" style="background-color: #F1F3F7;"   @click="getVerificationCode(3)">{{time}}{{verftext}}</el-button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="md-layout-item md-size-25"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md-layout-item md-size-15"></div>
                </div>
                <div v-if="currentStep3" style="text-align: center;">
                    <!-- <i class="material-icons md-size-5x" style="color: limegreen">check_circle</i> -->
                    <img src="/static/imgs/ic_hint_finish.png">
                    <div style="padding: 1% 6% 3% 6%;">邮箱修改成功</div>
                    <h2>您的账号关联的邮箱已经修改为<span style="color:green">{{NewEmail}}</span></h2>
                    <!-- <span style="color: blue;cursor: pointer;text-decoration-line: underline;" @click="goLoginR()">立即跳转</span> -->
                     <el-button  style="background-color: rgb(0, 145, 153);color: white;" @click="goPersonalCenter()">返回个人中心</el-button>
                </div>
            </div> 
            <div v-if="!currentStep3">
                <div class="md-layout-item md-size-100" style="display: inline-flex;">
                    <div class="md-layout-item md-size-15"></div>
                    <div class="md-layout-item md-size-70">
                        <div class="md-layout-item md-size-30"></div>
                        <div class="md-layout-item md-size-40">
                            <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                <div class="md-layout-item md-size-40" style="margin-right: 10px;">
                                    <el-button style="background-color: rgb(150, 150, 150);color: white;width: 100%;" @click="cancel()">取消</el-button>
                                </div>
                                <div class="md-layout-item md-size-60">
                                    <el-button v-if="currentStep1" style="background-color: rgb(0, 145, 153);color: white;width: 100%;" @click="nextStep()">下一步</el-button>
                                    <el-button v-if="currentStep2" style="background-color: rgb(0, 145, 153);color: white;width: 100%;" @click="nextStep()">完成</el-button>
                                </div>
                            </div>
                        </div>
                        <div class="md-layout-item md-size-30"></div> 
                    </div>
                    <div class="md-layout-item md-size-15"></div>
                </div>
            </div>
            <md-dialog-alert
                  class="md-primary md-raised"
                  :md-active.sync="showAlert"
                  :md-content="AlertMessage"
                  md-confirm-text="知道了" />
        </div>
    </div>
</template>
<style>
.el-input__inner {
  background-color: #f3f6f9 !important;
}
</style>

<style scoped>
.mypanel {
  text-align: center;
  text-align: -webkit-center;
  padding: 1% 10% 5% 10%;
}

.pogressHead {
  display: inline-flex;
  width: 100%;
}

.modifyBody {
  padding-top: 2%;
  margin-top: 2%;
  text-align: left;
}
.stepBC {
  background-color: cornflowerblue;
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
  width: 100%;
  padding: 5%;
  border: 1px solid lightgray;
  background-color: rgba(211, 211, 211, 0.28);
}
.inputError {
  color: red;
  text-align: left;
}
</style>

<script>
import { mapGetters, mapState } from "vuex";
import base64 from "js-base64";
export default {
  name: "modifyPassword",
  data: () => ({
    activeStep: 0,
    phonetime: 0,
    emailtime: 0,
    time: 0,
    counter: "",
    showAlert: false,
    AlertMessage: "",
    showCount: false,
    VerificationCode: "",
    // showEmailText: false,
    // showPhoneText: false,
    verftext: "获取验证码",
    vcErrText: "",
    showVCErr: false,
    acconut: "",
    // showVCError:false,
    currentStep1: true,
    currentStep2: false,
    currentStep3: false,
    VCHasMessages: false,
    NewEmail: ""
  }),
  methods: {
    inputFunc(index) {
      switch (index) {
        case 1:
          this.showVCErr = false;
          //   this.VCHasMessages = false;
          if (this.VerificationCode == "") {
            this.showVCErr = true;
            // this.VCHasMessages = true;
            this.vcErrText = "验证码不能为空";
          }
          break;
        case 2:
          break;
        case 3:
          break;
        default:
          break;
      }
    },
    showTips(index) {
      this;
      switch (index) {
        case 1:
          if (this.VerificationCode == "") {
            this.showVCErr = true;
            // this.VCHasMessages = true;
            this.vcErrText = "验证码不能为空";
          }
          break;
        case 2:
          //如果为空，提示不能为空

          break;
        case 3:
          //如果为空，提示不能为空

          break;
        default:
          break;
      }
    },
    getVerificationCode(index) {
      if (this.changeCheckWay) {
        if (this.phonetime !== 0) return;
      } else {
        if (this.emailtime !== 0) return;
      }
      let $this = this,
        apikey = "",
        type = "post",
        url = "",
        request = {
          session_id: this.session_id
        },
        param = {
          apikey,
          request
        };
      //获取验证码
      switch (index) {
        case 1:
          url = "/IBUS/DAIG_SYS/sendSms";
          request.mobile = this.usermobile;
          request.type = 1;
          break;
        case 2:
          url = "/IBUS/DAIG_SYS/resetPasswordByEmail";
          request.email = this.useremail;
          request.type = 0;
          break;
        case 3:
          url = "/IBUS/DAIG_SYS/resetPasswordByEmail";
          request.email = this.NewEmail;
          request.type = 1;
          break;
        default:
          break;
      }
      //   this.verftext = "获取验证码";
      //请求接口
      $this
        .$http({
          method: type,
          url: url,
          data: param
        })
        .then(res => {
          if (res.data.errorCode !== 0) {
            $this.showVerificationCode = true;
            $this.showAlert = true;
            $this.AlertMessage = res.data.errorMsg;
          } else {
            $this.showCount = true;
            // $this.showPhoneText = true;
            $this.verftext = "秒后重新获取验证码";
            $this.goLogin(60);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    nextStep() {
      let $this = this,
        apikey = "",
        type = "post",
        url = "",
        request = {
          session_id: this.session_id
        },
        param = {
          apikey,
          request
        };

      if ($this.currentStep1) {
        if ($this.changeCheckWay) {
          if (this.VerificationCode == "") {
            this.showAlert = true;
            this.AlertMessage = "验证码为空";
            return;
          }
          url = "/IBUS/DAIG_SYS/checkVerifyCodeByMobile ";
          request.mobile = $this.usermobile;
          request.verifyCode = $this.VerificationCode;
          this.acconut = this.usermobile;
        } else {
          if (this.VerificationCode == "") {
            this.showAlert = true;
            this.AlertMessage = "验证码为空";
            return;
          }
          url = "/IBUS/DAIG_SYS/checkVerifyCodeByEmail ";
          request.verifyCode = $this.VerificationCode;
          request.email = $this.useremail;
          this.acconut = this.useremail;
        }
      } else if ($this.currentStep2) {
        if (this.NewEmail == "") {
          this.showAlert = true;
          this.AlertMessage = "新邮箱不能为空";
          return;
        }
        url = "/IBUS/DAIG_SYS/modifyUserEmail";
        request.session_id = this.session_id;
        request.new_email = this.NewEmail;
        request.verifyCode = this.VerificationCode;
      }

      //请求接口
      $this
        .$http({
          method: type,
          url: url,
          data: param
        })
        .then(res => {
          if (res.data.errorCode !== 0) {
            $this.showVerificationCode = true;
            $this.showAlert = true;
            $this.AlertMessage = res.data.errorMsg;
          } else {
            if ($this.currentStep1) {
              $this.currentStep1 = false;
              $this.currentStep2 = true;
              $this.currentStep3 = false;
              $this.activeStep = 2;
              $this.showVCErr = false;

              //   if ($this.VerificationCode == "") {
              //     $this.showVCErr = true;
              //     $this.vcErrText = "验证码不能为空";
              //   }
              $this.showCount = false;
              $this.verftext = "获取验证码";
              $this.phonetime = 0;
              $this.emailtime = 0;
              $this.time = 0;
              $this.VerificationCode = "";
            } else if ($this.currentStep2) {
              $this.currentStep1 = false;
              $this.currentStep2 = false;
              $this.currentStep3 = true;
              $this.activeStep = 3;

              $this.$store.commit("SET_UsereMail", $this.NewEmail);
              $this.$store.commit("loginPage/getUseremail", $this.NewEmail);
              //   $this.goLogin(5);
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    countDown() {
      // let _this = this;
      if (this.currentStep1) {
        if (this.changeCheckWay) {
          this.phonetime--;
        } else {
          this.emailtime--;
        }
      }
      if (this.currentStep2) {
        this.time--;
      }
      if (this.currentStep3) {
        this.time--;
      }
    },
    goLogin(num) {
      let _this = this;
      if (this.currentStep1) {
        if (this.changeCheckWay) {
          this.phonetime = num;
        } else {
          this.emailtime = num;
        }
        this.counter = setInterval(_this.countDown, 1000);
      }
      if (this.currentStep2) {
        this.time = num;
        this.counter = setInterval(_this.countDown, 1000);
      }
      //   if (this.currentStep3) {
      //     this.time = num;
      //     this.counter = setInterval(_this.countDown, 1000);
      //   }
    },
    goLoginR() {
      //隐藏导航菜单
      this.$store.commit("home/showTabsFun", false);
      //显示登录按钮
      this.$store.commit("home/showLogin", true);
      this.$store.commit("home/changeShowHomeBgImge", true);
      //显示用户中心
      this.$store.commit("home/showUserCenter", false);
      //清除session信息
      this.$store.commit("LOGOUT");
      this.$router.push("/loginPage");
    },
    cancel() {
      this.$store.commit("home/showLogin", true);
      this.$store.commit("home/getTabsactiveIndex", "1");
      this.$store.commit("ACTIVE", "1");
      this.$store.commit("home/showTabsFun", true);
      this.$router.push("/personalInfo");
    },
    goPersonalCenter() {
      this.$store.commit("home/showLogin", true);
      this.$store.commit("home/showTabsFun", true);
      this.$router.push("/overview");
    }
  },
  watch: {
    time: function(newVal, oldVal) {
      //   debugger;
      if (newVal == 0) {
        clearInterval(this.counter);
        if (this.showCount) {
          this.verftext = "重新获取验证码";
          this.showCount = false;
        }
        // if (this.currentStep3) {
        //   //隐藏导航菜单
        //   this.$store.commit("home/showTabsFun", false);
        //   //隐藏登录按钮
        //   this.$store.commit("home/showLogin", true);
        //   //显示用户中心
        //   this.$store.commit("home/showUserCenter", false);
        //   this.$store.commit("home/changeShowHomeBgImge", true);
        //   //显示登录界面
        //   this.$store.commit("loginPage/changeLoginShowState", true);
        //   //清除session信息
        //   this.$store.commit("LOGOUT");
        //   this.$router.push("/loginPage");
        // }
      }
    },
    changeCheckWay: function(newVal, oldVal) {
      if (newVal == true) {
        clearInterval(this.counter);
        this.phonetime = 0;
        this.showCount = false;
        this.verftext = "获取验证码";
      } else {
        clearInterval(this.counter);
        this.emailtime = 0;
        this.showCount = false;
        this.verftext = "获取验证码";
      }
    }
  },
  computed: {
    VCMessageClass() {
      return {
        "md-invalid": this.VCHasMessages
      };
    },
    changeCheckWay() {
      let showType = this.checkWay == "mobile" ? true : false;
      //this.showCount = false;
      return showType;
    },
    usermobile: {
      get: function() {
        return this.$store.state.loginPage.usermobile;
      },
      set: function(newValue) {
        this.$store.state.loginPage.usermobile = newValue;
      }
    },
    useremail: {
      get: function() {
        return this.$store.state.loginPage.useremail;
      },
      set: function(newValue) {
        this.$store.state.loginPage.useremail = newValue;
      }
    },
    session_id() {
      return this.$store.state.loginPage.session_id;
    },
    checkWay: {
      get: function() {
        return this.$store.state.UserCenter.modifyPassword.checkWay;
      },
      set: function(newValue) {
        this.$store.state.UserCenter.modifyPassword.checkWay = newValue;
      }
    }
    // VerificationCode: {
    //   get: function() {
    //     return this.$store.state.UserCenter.modifyPassword.VerificationCode;
    //   },
    //   set: function(newValue) {
    //     this.$store.state.UserCenter.modifyPassword.VerificationCode = newValue;
    //   }
    // }
  }
};
</script>


