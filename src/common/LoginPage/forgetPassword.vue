<template>
    <div class="mypanel">
        <div style="text-align: center;text-align: -webkit-center;">
            <div class="pogressHead">
                <div class="md-layout-item md-size-100">
                  <el-steps :active="activeStep" finish-status="success" simple>
                    <el-step title="验证身份" ></el-step>
                    <el-step title="重设密码" ></el-step>
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
                        <span style="font-size: x-large;margin: 20px;">找回密码前我们需要验证您的身份</span>
                      </div>
                      
                      <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0 15px;">
                        <div class="md-layout-item md-size-50" style="text-align:right;padding: 0 20px;">
                            <!-- <md-checkbox v-model="checkWay" class="md-primary" value="mobile">通过手机找回密码</md-checkbox> -->
                            <md-radio v-model="checkWay" value="mobile"  class="md-primary" >通过手机找回密码</md-radio>
                        </div>
                        <div class="md-layout-item md-size-50" style="padding: 0 20px;">
                            <!-- <md-checkbox v-model="checkWay" class="md-primary" value="email">通过邮箱找回密码</md-checkbox> -->
                            <md-radio v-model="checkWay" value="email"  class="md-primary">通过邮箱找回密码</md-radio>
                        </div>
                    </div>
                    <div v-if="changeCheckWay">
                          <div class="md-layout-item md-size-100" style="padding: 0 6% 3% 6%;width: 100%;text-align:center;display: inline-flex;">
                            <div class="md-layout-item md-size-25"></div>
                            <div class="md-layout-item md-size-50" style="display: inline-flex;">
                                <md-field md-clearable style="min-width: 50%;display: inline-flex;" :class="phoneNumMessageClass">
                                  <label>输入注册的手机号</label>
                                  <span class="md-prefix" style="font-size: medium;">+86</span>
                                  <md-input v-model="mobile"  placeholder="" v-on:input ="inputFunc(4)" @click="showTips(4)"></md-input>
                                  <span class="md-error" v-if="showPhoneNumEmpty">手机号码不能为空</span>
                                  <span class="md-error" v-if="showPhoneNumError">手机号填写不正确</span>
                                </md-field>
                            </div>
                            <div class="md-layout-item md-size-25"></div>
                          </div>
                          <div  class="md-layout-item md-size-100" style="padding: 0 6% 0 6%;width: 100%;text-align:center;display: inline-flex;">
                              <div class="md-layout-item md-size-25"></div>
                              <div class="md-layout-item md-size-50" style="display: inline-flex;">
                                <div class="md-layout-item md-size-68">
                                    <md-field style="display: inline-flex;" :class="VCMessageClass">
                                      <md-input v-model="VerificationCode"  placeholder="输入验证码" v-on:input ="inputFunc(1)" @click="showTips(1)"></md-input>
                                      <span class="md-error" v-if="showVCEmpty">{{vcErrText}}</span>
                                    </md-field>
                                </div>
                                <div class="md-layout-item md-size-30">
                                  <el-button v-if="!showCount" style="margin: 13px 0 0 5px;" @click="getVerificationCode(1)">{{verftext}}</el-button>
                                  <el-button v-if="showCount" style="margin: 13px 0 0 5px;" @click="getVerificationCode(1)">{{phonetime}}{{verftext}}</el-button>
                                </div>
                              </div>
                              <div class="md-layout-item md-size-25"></div>
                          </div>
                    </div>
                    <div v-if="!changeCheckWay">
                          <div class="md-layout-item md-size-100" style="padding: 0 6% 3% 6%;width: 100%;text-align:center;display: inline-flex;">
                            <div class="md-layout-item md-size-25"></div>
                            <div class="md-layout-item md-size-50" style="display: inline-flex;">
                                <md-field md-clearable  :class="emailMessageClass" >
                                  <md-input v-model="email" placeholder="输入注册使用的邮箱" v-on:input ="inputFunc(5)" @click="showTips(5)" required></md-input>
                                  <span class="md-error" v-if="showEmailEmpty">邮箱不能为空</span>
                                  <span class="md-error" v-if="showEmailError">邮箱格式不正确</span>
                                </md-field>
                            </div>
                            <div class="md-layout-item md-size-25"></div>
                          </div>
                          <div  class="md-layout-item md-size-100" style="padding: 0 6% 0 6%;width: 100%;text-align:center;display: inline-flex;">
                            <div class="md-layout-item md-size-25"></div>
                            <div class="md-layout-item md-size-50" style="display: inline-flex;">
                              <div class="md-layout-item md-size-68">
                                <md-field style="display: inline-flex;" :class="VCMessageClass">
                                  <md-input v-model="VerificationCode"  placeholder="输入验证码" v-on:input ="inputFunc(1)" @click="showTips(1)"></md-input>
                                    <span class="md-error" v-if="showVCEmpty">{{vcErrText}}</span>
                                    <!-- <span class="md-error" v-if="showVCError">短信验证码错误</span> -->
                                </md-field>
                              </div>
                            <div class="md-layout-item md-size-30">
                              <el-button v-if="!showCount" style="margin: 13px 0 0 5px;"  @click="getVerificationCode(2)">{{verftext}}</el-button>
                              <el-button v-if="showCount" style="margin: 13px 0 0 5px;"  @click="getVerificationCode(2)">{{emailtime}}{{verftext}}</el-button>
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
                      <div class="md-layout-item md-size-100" style="text-align:center;">
                          <span style="font-size: x-large;margin: 20px;">重新设置账号{{acconut}} 密码</span>
                      </div>
                      <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0 15px;">
                          <div class="md-layout-item md-size-100" style="padding: 0 6% 3% 6%;width: 100%;text-align:center;display: inline-flex;">
                            <div class="md-layout-item md-size-25"></div>
                            <div class="md-layout-item md-size-50">
                               <md-field :class="passwordFMessageClass" >
                                    <md-input v-model="passwordFirst" type="password" placeholder="6 - 16位密码，区分大小写" v-on:input ="inputFunc(2)" @click="showTips(2)"></md-input>
                                    <span class="md-error" v-if="showPasswordfEmpty">{{passWordFerrText}}</span>
                                    <span class="md-error" v-if="showPasswordfError">{{passWordFerrText}}</span>
                                </md-field>
                                <md-field :class="passwordSMessageClass">
                                    <md-input v-model="passwordSecond" type="password" placeholder="确认密码" v-on:input ="inputFunc(3)" @click="showTips(3)"></md-input>
                                    <span class="md-error" v-if="showPasswordsEmpty">{{passWordSerrText}}</span>
                                    <span class="md-error" v-if="showPasswordsError">{{passWordSerrText}}</span>
                                </md-field>
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
                    <div v-if="currentStep3" style="text-align: center;">
                        <div class="md-layout-item md-size-100" style="text-align:center;margin: 20px;">
                          <!-- <i class="material-icons md-size-5x" style="color: rgb(0, 145, 153)">check_circle</i> -->
                          <!-- <img src="/static/imgs/ic_hint_finish.png"> -->
                          <span style="font-size: xx-large;">找回密码成功</span>
                        </div>
                        <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0 15px;">
                          <div class="md-layout-item md-size-100" style="padding: 0 6% 3% 6%;width: 100%;text-align:center;display: inline-flex;">
                            <div class="md-layout-item md-size-25"></div>
                            <div class="md-layout-item md-size-50">
                              <span style="color:red">{{time}}</span><span>秒后跳转至登录页面</span>
                              <div style="color:#009199;cursor: pointer;text-decoration-line: underline;margin: 20px;" @click="goLoginR()">立即跳转</div>
                            </div>
                            <div class="md-layout-item md-size-25"></div>
                          </div>
                        </div>
                    </div>
                </div>
                <div class="md-layout-item md-size-15"></div>
              </div>
              
            </div> 
            <div v-if="!currentStep3">
              <div class="md-layout-item md-size-35"></div>
              <div class="md-layout-item md-size-30">
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
              <div class="md-layout-item md-size-35"></div>
            </div>
        </div>
        <md-dialog-alert
                  class="md-primary md-raised"
                  :md-active.sync="showAlert"
                  :md-content="AlertMessage"
                  md-confirm-text="知道了" />
    </div>
</template>
<style>
.el-step__head.is-success {
  color: #009199;
  border-color: #009199;
}
.el-step__title.is-success {
  color: #009199;
}
</style>

<style scoped>
.mypanel {
  text-align: center;
  text-align: -webkit-center;
  padding: 5% 10% 5%;
  background-color: white;
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
  /* background-color: rgba(211, 211, 211, 0.28); */
}
</style>

<script>
import base64 from "js-base64";
export default {
  name: "modifyPassword",
  data: () => ({
    showAlert: false,
    AlertMessage: "",
    activeStep: 0,
    verftext: "获取验证码",
    time: 0,
    phonetime: 0,
    emailtime: 0,
    mobile: "",
    email: "",
    acconut: "",
    checkWay: "mobile",
    VerificationCode: "",
    showVCEmpty: false,
    // showVCError: false,
    VCHasMessages: false,
    phoneNumHasMessages: false,
    passwordFHasMessages: false,
    passwordSHasMessages: false,
    emailHasMessages: false,
    currentStep1: true,
    currentStep2: false,
    currentStep3: false,
    passwordFirst: "",
    passwordSecond: "",
    showPhoneNumEmpty: false,
    showPhoneNumError: false,
    showPasswordfEmpty: false,
    showPasswordfError: false,
    showPasswordsEmpty: false,
    showPasswordsError: false,
    showEmailEmpty: false,
    showEmailError: false,
    passWordFerrText: "",
    passWordSerrText: "",
    showCount: false,
    showText: false,
    counter: "",
    vcErrText: ""
  }),
  methods: {
    inputFunc(index) {
      switch (index) {
        case 1:
          this.showVCEmpty = this.VerificationCode == "" ? true : false;
          this.VCHasMessages = this.showVCEmpty;
          this.vcErrText = "短信验证码不能为空";
          break;
        case 2:
          if (this.passwordFirst.length == 0) {
            this.passwordFHasMessages = true;
            this.showPasswordfEmpty = true;
            this.showPasswordfError = false;
            this.passWordFerrText = "密码不能为空";
          } else {
            this.showPasswordfEmpty = false;
            this.showPasswordfError = false;
            this.passwordFHasMessages = false;
            if (this.passwordFirst.length < 5) {
              this.passWordFerrText = "密码最少需要6位";
              this.showPasswordfError = true;
              this.passwordFHasMessages = true;
            } else if (this.passwordFirst.length > 16) {
              this.passWordFerrText = "密码不能超过16位";
              this.showPasswordfError = true;
              this.passwordFHasMessages = true;
            } else if (!this.isPassword(this.passwordFirst)) {
              this.passWordFerrText = "密码格式不正确";
              this.showPasswordfError = true;
              this.passwordFHasMessages = true;
            }
          }
          break;
        case 3:
          if (this.passwordSecond.length == 0) {
            this.passwordSHasMessages = true;
            this.showPasswordsEmpty = true;
            this.showPasswordsError = false;
            this.passWordSerrText = "密码不能为空";
          } else {
            this.showPasswordsEmpty = false;
            this.showPasswordsError = false;
            this.passwordSHasMessages = false;
            if (this.passwordSecond.length < 5) {
              this.passWordSerrText = "密码最少需要6位";
              this.showPasswordsError = true;
              this.passwordSHasMessages = true;
            } else if (this.passwordSecond.length > 16) {
              this.passWordSerrText = "密码不能超过16位";
              this.showPasswordsError = true;
              this.passwordSHasMessages = true;
            } else if (!this.isPassword(this.passwordSecond)) {
              this.passWordSerrText = "密码格式不正确";
              this.showPasswordsError = true;
              this.passwordSHasMessages = true;
            } else if (this.passwordFirst !== this.passwordSecond) {
              this.passWordSerrText = "两次输入密码不一致";
              this.showPasswordsError = true;
              this.passwordSHasMessages = true;
            }
          }
          break;
        case 4:
          if (this.mobile.length == 0) {
            this.showPhoneNumEmpty = true;
          } else {
            this.showPhoneNumEmpty = false;
            this.showPhoneNumError = !this.isTelCode(this.mobile);
            this.phoneNumHasMessages = !this.isTelCode(this.mobile);
          }
          break;
        case 5:
          if (this.email.length == 0) {
            this.showEmailEmpty = true;
          } else {
            this.showEmailEmpty = false;
            this.showEmailError = !this.isEmail(this.email);
            this.emailHasMessages = !this.isEmail(this.email);
          }
          break;
        default:
          break;
      }
    },
    showTips(index) {
      switch (index) {
        case 1:
          //验证码为空就提示不能为空
          this.showVCEmpty = this.VerificationCode == "" ? true : false;
          this.VCHasMessages = this.showVCEmpty;
          this.vcErrText = "短信验证码不能为空";
          break;
        case 2:
          //如果密码为空，提示不能为空
          this.showPasswordfEmpty = this.passwordFirst == "" ? true : false;
          this.passWordFerrText = "密码不能为空";
          //不为空，判断格式是否正确
          this.showPasswordfError = this.showPasswordfEmpty
            ? false
            : !this.isPassword(this.passwordFirst);
          //显示警告
          this.passwordFHasMessages = this.showPasswordfEmpty
            ? true
            : this.showPasswordfError;
          break;
        case 3:
          //如果密码为空，提示不能为空
          this.showPasswordsEmpty = this.passwordSecond == "" ? true : false;
          this.passWordSerrText = "密码不能为空";
          //不为空，判断格式是否正确
          this.showPasswordsError = this.showPasswordsEmpty
            ? false
            : this.passwordFirst == this.passwordSecond ? false : true;
          //显示警告
          this.passwordSHasMessages = this.showPasswordsEmpty
            ? true
            : this.showPasswordsError;
          break;
        case 4:
          //如果手机为空，提示不能为空
          this.showPhoneNumEmpty = this.passwordSecond == "" ? true : false;
          //不为空，判断格式是否正确
          if (this.showPhoneNumEmpty) {
            this.phoneNumHasMessages = true;
          } else {
            this.showPhoneNumError = this.isTelCode(this.mobile);
            this.phoneNumHasMessages = this.showPhoneNumError;
          }
          break;
        case 5:
          //如果邮箱为空，提示不能为空
          this.showEmailEmpty = this.email == "" ? true : false;
          //不为空，判断格式是否正确
          if (this.showEmailEmpty) {
            this.emailHasMessages = true;
          } else {
            this.showEmailError = this.isEmail(this.mobile);
            this.emailHasMessages = this.showEmailError;
          }
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
      //获取验证码
      let $this = this,
        apikey = "",
        type = "post",
        url =
          index == 1
            ? " /IBUS/DAIG_SYS/sendSms"
            : "/IBUS/DAIG_SYS/resetPasswordByEmail1",
        request =
          index == 1
            ? {
                mobile: this.mobile,
                type: 1
                // session_id: this.session_id
              }
            : {
                email: this.email
                // session_id: this.session_id
              },
        param = {
          apikey,
          request
        };
      $this.verftext = "获取验证码";
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
            if ($this.changeCheckWay) {
              $this.showCount = true;
              // $this.showPhoneText = true;
              $this.verftext = "秒后重新获取验证码";
              $this.goLogin(60);
            } else {
              $this.showCount = true;
              // $this.showEmailText = true;
              $this.verftext = "秒后重新获取验证码";
              $this.goLogin(60);
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    nextStep() {
      let $this = this,
        url = "",
        apikey = "",
        type = "post",
        request = {};

      if (this.currentStep1) {
        if (this.changeCheckWay) {
          if (this.mobile == "") {
            this.showAlert = true;
            this.AlertMessage = "手机号码为空";
            return;
          }
          if (this.phoneNumHasMessages) return;
          if (this.VerificationCode == "") {
            this.showAlert = true;
            this.AlertMessage = "验证码为空";
            return;
          }
          url = "/IBUS/DAIG_SYS/checkVerifyCodeByMobile1";
          request.mobile = this.mobile;
          request.verifyCode = this.VerificationCode;
          this.acconut = this.mobile;
        } else {
          if (this.email == "") {
            this.showAlert = true;
            this.AlertMessage = "邮箱为空";
            return;
          }
          if (this.emailHasMessages) return;
          if (this.VerificationCode == "") {
            this.showAlert = true;
            this.AlertMessage = "验证码为空";
            return;
          }
          url = "/IBUS/DAIG_SYS/checkVerifyCodeByEmail1";
          request.verifyCode = this.VerificationCode;
          request.email = this.email;
          this.acconut = this.email;
        }
      } else if (this.currentStep2) {
        if (this.passwordFirst == "" || this.passwordSecond == "") {
          this.showAlert = true;
          this.AlertMessage = "密码不能为空";
          return;
        }
        if (this.passwordFHasMessages || this.passwordSHasMessages) return;
        url = " /IBUS/DAIG_SYS/resetPassword1";
        request.id = this.changeCheckWay ? this.mobile : this.email;
        request.password = Base64.encode(this.passwordFirst);
      }
      let param = {
        apikey,
        request
      };
      if (this.currentStep1) {
        this.checkVerifyCode(type, url, param);
      }
      if (this.currentStep2) {
        this.modifyPassWord(type, url, param);
      }
    },
    checkVerifyCode(type, url, param) {
      let $this = this;
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
            this.currentStep1 = false;
            this.currentStep2 = true;
            this.currentStep3 = false;
            this.activeStep = 2;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    modifyPassWord(type, url, param) {
      let $this = this;
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
            this.currentStep1 = false;
            this.currentStep2 = false;
            this.currentStep3 = true;
            this.activeStep = 3;
            $this.goLogin(5);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    isPassword(pass) {
      var reg = /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,16}$/;
      return reg.test(pass);
    },
    isTelCode(str) {
      var reg = /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/;
      return reg.test(str);
    },
    isEmail(str) {
      let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
      return reg.test(str);
    },
    countDown() {
      if (this.currentStep1) {
        if (this.changeCheckWay) {
          this.phonetime--;
        } else {
          this.emailtime--;
        }
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
      if (this.currentStep3) {
        this.time = num;
        this.counter = setInterval(_this.countDown, 1000);
      }
    },
    goLoginR() {
      //隐藏导航菜单
      this.$store.commit("home/showTabsFun", false);
      //隐藏登录按钮
      this.$store.commit("home/showLogin", true);
      //显示用户中心
      this.$store.commit("home/showUserCenter", false);
      this.$store.commit("home/changeShowHomeBgImge", true);
      //显示登录界面
      this.$store.commit("loginPage/changeLoginShowState", true);
    },
    cancel() {
      //隐藏登录界面
      this.$store.commit("loginPage/changeLoginShowState", true);
      //隐藏首页背景图
      this.$store.commit("home/changeShowHomeBgImge", true);
      this.$router.push("/loginPage/");
    }
  },
  watch: {
    time: function(newVal, oldVal) {
      if (newVal == 0) {
        clearInterval(this.counter);
        if (this.currentStep3) {
          //隐藏导航菜单
          this.$store.commit("home/showTabsFun", false);
          //隐藏登录按钮
          this.$store.commit("home/showLogin", true);
          //显示用户中心
          this.$store.commit("home/showUserCenter", false);
          this.$store.commit("home/changeShowHomeBgImge", true);
          //显示登录界面
          this.$store.commit("loginPage/changeLoginShowState", true);
        }
        if (this.showCount) {
          this.verftext = "重新获取验证码";
          this.showCount = false;
        }
      }
    },
    phonetime: function(newVal, oldVal) {
      //   debugger;
      if (newVal == 0) {
        clearInterval(this.counter);
        if (this.showCount) {
          this.verftext = "重新获取验证码";
          if (this.changeCheckWay) {
            this.showCount = false;
            // $this.showPhoneText = true;
          }
        }
      }
    },
    emailtime: function(newVal, oldVal) {
      //   debugger;
      if (newVal == 0) {
        clearInterval(this.counter);
        if (this.showCount) {
          this.verftext = "重新获取验证码";
          if (!this.changeCheckWay) {
            this.showCount = false;
            // $this.showPhoneText = true;
          }
        }
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
    phoneNumMessageClass() {
      return {
        "md-invalid": this.phoneNumHasMessages
      };
    },
    passwordFMessageClass() {
      return {
        "md-invalid": this.passwordFHasMessages
      };
    },
    passwordSMessageClass() {
      return {
        "md-invalid": this.passwordSHasMessages
      };
    },
    emailMessageClass() {
      return {
        "md-invalid": this.emailHasMessages
      };
    },
    changeCheckWay() {
      let showType = this.checkWay == "mobile" ? true : false;
      return showType;
    },
    step1Color() {
      return {
        stepBC: this.currentStep1
      };
    },
    step2Color() {
      return {
        stepBC: this.currentStep2
      };
    },
    step3Color() {
      return {
        stepBC: this.currentStep3
      };
    },
    session_id() {
      return this.$store.state.loginPage.session_id;
    },
    useremail() {
      return this.$store.state.loginPage.useremail;
    }
  }
};
</script>


