<template>
    <div class="mypanel">
      <div style="padding-top: 6%;padding-left: 10%;padding-right: 10%;">
        <v-stepper v-model="currentStep" style="background-color: white;">
          <v-layout row>
            <v-stepper-step :complete="currentStep> 1" style="padding: 24px 8px 24px 24px;" step="1">验证身份</v-stepper-step>
            <v-divider style="margin-top: 36px;"></v-divider>
            <v-stepper-step :complete="currentStep> 2"  style="padding: 24px 10px 24px 10px;" step="2">重设密码</v-stepper-step>
            <v-divider style="margin-top: 36px;"></v-divider>
            <v-stepper-step step="3" style="padding: 24px 24px 24px 10px;">完成</v-stepper-step>
          </v-layout>

          <v-stepper-items>
            <v-stepper-content step="1">
                <div class="md-layout-item md-size-100" style="text-align:center;margin: 20px;">
                  <span style="font-size: x-large;">修改密码需要验证您的身份</span>
                </div>

                <v-layout row wrap>
                  <v-flex xl6 lg6 md6 sm6 xs12>
                    <v-card dark tile flat>
                      <v-card-text style="text-align: right;"><md-radio v-model="checkWay" value="mobile"  class="md-primary" >通过手机验证</md-radio></v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xl6 lg6 md6 sm6 xs12>
                    <v-card dark tile flat>
                      <v-card-text style="text-align: left;"><md-radio v-model="checkWay" value="email"  class="md-primary">通过邮箱验证</md-radio></v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>

                <v-layout row wrap>
                  <v-flex xl3 lg3 md1 hidden-sm-and-down></v-flex>
                  <v-flex xl6 lg6 md10 sm12 xs12>
                    <v-card dark tile flat>
                      <v-layout row wrap>
                        <v-flex xl1 hidden-xl-and-down></v-flex>
                        <v-flex xl10 lg12 md12 sm12 xs12>
                          <v-card-text>
                            <div v-if="changeCheckWay">
                              <div class="md-layout-item md-size-100" style="padding: 0 6% 3% 6%;text-align: left;">
                                <span>我们将会向您的手机</span>
                                <span style="color: rgb(0, 145, 153);">{{usermobile}}</span>
                                <span> 发送验证短信，请将收到的验证码填入下方完成验证</span>
                              </div>
                              <v-layout row wrap>
                                <v-flex xl7 lg7 md7 sm7 xs12 style="padding: 0 6% 3% 6%">
                                  <el-input v-model="VerificationCode" v-on:input ="inputFunc(1)" @click="showTips(1)" placeholder="输入验证码"></el-input>
                                  <div class="inputError">
                                      <span  v-if="showVCEmpty">{{vcErrText}}</span>
                                  </div>
                                </v-flex>
                                <v-flex xl5 lg5 md5 sm5 xs12>
                                    <el-button v-if="!showPhoneCount" style="margin-left: -16%;" @click="getVerificationCode(1)">{{PhoneCounttext}}</el-button>
                                    <el-button v-if="showPhoneCount" disabled style="margin-left: -16%;" @click="getVerificationCode(1)">{{phonetime}}{{PhoneCounttext}}</el-button>
                                </v-flex>
                              </v-layout>
                            </div>
                            <div v-if="!changeCheckWay">
                              <div class="md-layout-item md-size-100" style="padding: 0 6% 3% 6%;text-align: left;">
                                <span>我们将会向您的邮箱</span>
                                <span style="color: rgb(0, 145, 153);">{{useremail}}</span>
                                <span> 发送验证邮件，请将收到的验证码填入下方完成验证</span>
                              </div>
                              <v-layout row wrap>
                                <v-flex xl7 lg7 md7 sm7 xs12 style="padding: 0 6% 3% 6%">
                                  <el-input v-model="VerificationCode" v-on:input ="inputFunc(1)" @click="showTips(1)" placeholder="输入验证码"></el-input>
                                  <div class="inputError">
                                      <span  v-if="showVCEmpty">{{vcErrText}}</span>
                                  </div>
                                </v-flex>
                                <v-flex xl5 lg5 md5 sm5 xs12>
                                  <el-button v-if="!showEmialCount" style="margin-left: -16%;"  @click="getVerificationCode(2)">{{EmialCounttext}}</el-button>
                                  <el-button v-if="showEmialCount" disabled style="margin-left: -16%;"  @click="getVerificationCode(2)">{{emailtime}}{{EmialCounttext}}</el-button>
                                </v-flex>
                              </v-layout>
                            </div>
                          </v-card-text>
                        </v-flex>
                        <v-flex xl1 hidden-xl-and-down></v-flex>
                      </v-layout>
                    </v-card>
                  </v-flex>
                  <v-flex xl3 lg3 md1 hidden-sm-and-down></v-flex>
                </v-layout>

                <v-layout row wrap>
                  <v-flex xl3 lg2 md1 sm1 xs12></v-flex>
                  <v-flex xl6 lg8 md10 sm10 xs12>
                    <v-layout row wrap>
                      <v-flex xl2 lg2 md2 hidden-sm-and-down></v-flex>
                      <v-flex xl3 lg3 md3 sm5 xs5>
                        <v-btn flat style="background-color: rgb(150, 150, 150);color: white;width:100%;" @click="cancel()">取消</v-btn>
                      </v-flex>
                      <v-flex xl5 lg5 md5 sm7 xs7 style="padding: 0 10px;">
                        <v-btn   style="width:100%;color: white;background-color: rgb(0, 145, 153);" @click="nextStep()">下一步</v-btn>
                      </v-flex>
                    </v-layout>
                    <v-flex xl2 lg2 md2 hidden-sm-and-down></v-flex>
                  </v-flex>
                  <v-flex xl3 lg2 md1 sm1 xs12></v-flex>
                </v-layout>

            </v-stepper-content>

            <v-stepper-content step="2">
                <div class="md-layout-item md-size-100" style="text-align:center;margin: 20px;">
                  <span style="font-size: x-large;">重新设置账号{{acconut}} 密码</span>
                </div>
                <v-layout row wrap>
                  <v-flex xl3 lg3 md1 hidden-sm-and-down></v-flex>
                  <v-flex xl6 lg6 md10 sm12 xs12 style="padding: 0 6% 0 6%;">
                    <div>
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
                  </v-flex>
                  <v-flex xl3 lg3 md1 hidden-sm-and-down></v-flex>
                </v-layout>

                <v-layout row wrap>
                  <v-flex xl3 lg2 md1 sm1 xs12></v-flex>
                  <v-flex xl6 lg8 md10 sm10 xs12>
                    <v-layout row wrap>
                        <v-flex xl2 lg2 md2 hidden-sm-and-down></v-flex>
                        <v-flex xl3 lg3 md3 sm5 xs5>
                          <v-btn flat style="background-color: rgb(150, 150, 150);color: white;width:100%;" @click="cancel()">取消</v-btn>
                        </v-flex>
                        <v-flex xl5 lg5 md5 sm7 xs7 style="padding: 0 10px;">
                          <v-btn style="width:100%;background-color: rgb(0, 145, 153);color: white;" @click="nextStep()">完成</v-btn>
                        </v-flex>
                    </v-layout>
                    <v-flex xl2 lg2 md2 hidden-sm-and-down></v-flex>
                  </v-flex>
                  <v-flex xl3 lg2 md1 sm1 xs12></v-flex>
                </v-layout>
            </v-stepper-content>

            <v-stepper-content step="3">
              <div class="md-layout-item md-size-100" style="text-align:center;margin: 20px;">
                <md-icon class="md-size-5x" style="color: #009199">check_circle_outline</md-icon>
                <div style="margin: 20px;;padding: 10px;">
                  <span style="font-size: xx-large;">找回密码成功</span>
                </div>
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
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </div>
      
      <md-dialog-alert
                  class="md-primary md-raised"
                  :md-active.sync="showAlert"
                  :md-content="AlertMessage"
                  md-confirm-text="知道了" />
    </div>
</template>
<style>
.primary {
  border-color: #009199;
  background-color: #009199;
  color: white;
}
</style>

<style scoped>
.mypanel {
  padding-left: 10%;
  padding-right: 10%;
  text-align: center;
  text-align: -webkit-center;
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
    currentStep: 0,
    phonetime: 0,
    emailtime: 0,
    time: 0,
    counter: "",
    phonetimeCounter: "",
    emailtimeCounter: "",
    showAlert: false,
    AlertMessage: "",
    showPhoneCount: false,
    showEmialCount: false,
    VerificationCode: "",
    // verftext: "获取验证码",
    PhoneCounttext: "获取验证码",
    EmialCounttext: "获取验证码",
    vcErrText: "",
    showVCErr: false,
    acconut: "",
    VCHasMessages: false,
    showPasswordfEmpty: false,
    showPasswordfError: false,
    showPasswordsEmpty: false,
    showPasswordsError: false,
    passWordFerrTest: "",
    passWordSerrTest: "",
    passwordFirst: "",
    passwordSecond: "",
    passwordFHasMessages: false,
    passwordSHasMessages: false
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
          //如果手机为空，提示不能为空
          this.showPhoneErr = this.mobile == "" ? true : false;
          this.showPhoneErrText = "手机号码不能为空";
          //不为空，判断格式是否正确
          if (!this.showPhoneErr) {
            this.showPhoneErr = !this.isTelCode(this.mobile);
            this.showPhoneErrText = "手机号填写不正确";
          }
          break;
        case 5:
          this.showEmailErr = this.email == "" ? true : false;
          this.showEmailErrText = "邮箱不能为空";
          //不为空，判断格式是否正确
          if (!this.showEmailErr) {
            this.showEmailErr = !this.isEmail(this.email);
            this.showEmailErrText = "邮箱填写不正确";
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
          this.showPhoneErr = this.mobile == "" ? true : false;
          this.showPhoneErrText = "手机号码不能为空";
          //不为空，判断格式是否正确
          if (!this.showPhoneErr) {
            this.showPhoneErr = !this.isTelCode(this.mobile);
            this.showPhoneErrText = "手机号填写不正确";
          }
          break;
        case 5:
          //如果邮箱为空，提示不能为空
          this.showEmailErr = this.email == "" ? true : false;
          this.showEmailErrText = "邮箱不能为空";
          //不为空，判断格式是否正确
          if (!this.showEmailErr) {
            this.showEmailErr = !this.isEmail(this.email);
            this.showEmailErrText = "邮箱填写不正确";
          }
          break;
        default:
          break;
      }
    },
    getVerificationCode(index) {
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
          this.PhoneCounttext = "获取验证码";
          break;
        case 2:
          url = "/IBUS/DAIG_SYS/resetPasswordByEmail";
          request.email = this.useremail;
          request.type = 0;
          this.EmialCounttext = "获取验证码";
          break;
        default:
          // this.verftext = "获取验证码";
          break;
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
            if ($this.changeCheckWay) {
              $this.showPhoneCount = true;
              $this.showEmialCount = false;
              // $this.showPhoneText = true;
              $this.PhoneCounttext = "秒后重新获取验证码";
              $this.goLogin(60);
            } else {
              $this.showPhoneCount = false;
              $this.showEmialCount = true;
              // $this.showEmailText = true;
              $this.EmialCounttext = "秒后重新获取验证码";
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

      if ($this.currentStep == 1) {
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
      } else if ($this.currentStep == 2) {
        if (this.passwordFirst == "" || this.passwordSecond == "") {
          this.showAlert = true;
          this.AlertMessage = "密码不能为空";
          return;
        }
        if (this.passwordFHasMessages || this.passwordSHasMessages) return;
        if (this.passwordFirst !== this.passwordSecond) {
          this.showAlert = true;
          this.AlertMessage = "两次输入的密码不一致";
          return;
        }
        url = " /IBUS/DAIG_SYS/resetPassword";
        request.id = $this.changeCheckWay ? $this.usermobile : $this.useremail;
        request.password = Base64.encode($this.passwordFirst);
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
            if ($this.currentStep == 1) {
              $this.currentStep = 2;
            } else {
              $this.currentStep = 3;
              $this.goLogin(5);
            }
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
    isEmail(str) {
      let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
      return reg.test(str);
    },
    countDown() {
      if (this.currentStep == 1) {
        this.phonetime--;
        this.emailtime--;
        // if (this.changeCheckWay) {
        //   this.phonetime--;
        // } else {
        //   this.emailtime--;
        // }
      }
      if (this.currentStep == 3) {
        this.time--;
      }
    },
    goLogin(num) {
      let _this = this;
      if (this.currentStep == 1) {
        if (this.changeCheckWay) {
          this.phonetime = num;
          this.phonetimeCounter = setInterval(_this.countDown, 1000);
        } else {
          this.emailtime = num;
          this.emailtimeCounter = setInterval(_this.countDown, 1000);
        }
      }
      if (this.currentStep == 3) {
        this.time = num;
        this.counter = setInterval(_this.countDown, 1000);
      }
    },
    goLoginR() {
      //隐藏导航菜单
      this.$store.commit("home/showTabsFun", false);
      //隐藏登录按钮
      this.$store.commit("home/showLogin", false);
      this.$store.commit("home/changeShowHomeBgImge", true);
      //显示用户中心
      this.$store.commit("home/showUserCenter", false);
      //清除session信息
      this.$store.commit("LOGOUT");
      this.$router.push("/loginPage");
    },
    cancel() {
      this.$store.commit("home/showLogin", false);
      this.$store.commit("home/showTabsFun", true);
      this.$router.push("/overview");
    }
  },
  watch: {
    time: function(newVal, oldVal) {
      if (newVal == 0) {
        clearInterval(this.counter);
        if (this.currentStep == 3) {
          //隐藏导航菜单
          this.$store.commit("home/showTabsFun", false);
          //隐藏登录按钮
          this.$store.commit("home/showLogin", false);
          //显示用户中心
          this.$store.commit("home/showUserCenter", false);
          this.$store.commit("home/changeShowHomeBgImge", true);
          //显示登录界面
          this.$store.commit("loginPage/changeLoginShowState", true);
          //清除session信息
          this.$store.commit("LOGOUT");
          this.$router.push("/loginPage");
        }
      }
    },
    phonetime: function(newVal, oldVal) {
      if (newVal == 0) {
        clearInterval(this.phonetimeCounter);
        if (this.showPhoneCount) {
          this.PhoneCounttext = "重新获取验证码";
          if (this.changeCheckWay) {
            this.showPhoneCount = false;
            // $this.showPhoneText = true;
          }
        }
      }
    },
    emailtime: function(newVal, oldVal) {
      if (newVal == 0) {
        clearInterval(this.emailtimeCounter);
        if (this.showEmialCount) {
          this.EmialCounttext = "重新获取验证码";
          if (!this.changeCheckWay) {
            this.showEmialCount = false;
            // $this.showPhoneText = true;
          }
        }
      }
    },
    changeCheckWay: function(newVal, oldVal) {
      if (newVal == true) {
        if (this.phonetime > 0) {
          this.showPhoneCount = true;
          this.PhoneCounttext = "秒后重新获取验证码";
        } else {
          clearInterval(this.phonetimeCounter);
          this.phonetime = 0;
          this.showPhoneCount = false;
          this.PhoneCounttext = "获取验证码";
        }
      } else {
        if (this.emailtime > 0) {
          this.showEmialCount = true;
          this.EmialCounttext = "秒后重新获取验证码";
        } else {
          clearInterval(this.emailtimeCounter);
          this.emailtime = 0;
          this.showEmialCount = false;
          this.EmialCounttext = "获取验证码";
        }
      }
    }
  },
  computed: {
    VCMessageClass() {
      return {
        "md-invalid": this.VCHasMessages
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
    changeCheckWay() {
      let showType = this.checkWay == "mobile" ? true : false;
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
  }
};
</script>


