<template>
    <div class="mypanel">
      <v-stepper v-model="currentStep" style="background-color: white;">
              <!-- <v-stepper-header>
                <v-stepper-step :complete="currentStep > 1" step="1">验证身份</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="currentStep > 2" step="2">重设密码</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">完成</v-stepper-step>
              </v-stepper-header> -->
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
                      <span style="font-size: x-large;">找回密码前我们需要验证您的身份</span>
                    </div>
                    <v-layout row wrap>
                      <v-flex xl6 lg6 md6 sm6 xs12>
                        <v-card dark tile flat>
                          <v-card-text style="text-align: right;"><md-radio v-model="checkWay" value="mobile"  class="md-primary" >通过手机找回密码</md-radio></v-card-text>
                        </v-card>
                      </v-flex>
                      <v-flex xl6 lg6 md6 sm6 xs12>
                        <v-card dark tile flat>
                          <v-card-text style="text-align: left;"><md-radio v-model="checkWay" value="email"  class="md-primary">通过邮箱找回密码</md-radio></v-card-text>
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
                                    <div class="md-layout-item md-size-100" style="padding: 0 6% 3% 6%;">
                                      <el-input v-model="mobile" v-on:input ="inputFunc(4)" @click="showTips(4)" placeholder="输入注册的手机号"></el-input>
                                      <div class="inputError">
                                          <span  v-if="showPhoneErr">{{showPhoneErrText}}</span>
                                      </div>
                                      <!-- <md-field md-clearable style="min-width: 50%;display: inline-flex;" :class="phoneNumMessageClass">
                                        <label>输入注册的手机号</label>
                                        <span class="md-prefix" style="font-size: medium;">+86</span>
                                        <md-input v-model="mobile"  placeholder="" v-on:input ="inputFunc(4)" @click="showTips(4)"></md-input>
                                        <span class="md-error" v-if="showPhoneNumEmpty">手机号码不能为空</span>
                                        <span class="md-error" v-if="showPhoneNumError">手机号填写不正确</span>
                                      </md-field> -->
                                    </div>
                                    <v-layout row wrap>
                                      <v-flex xl8 lg8 md8 sm8 xs12 style="padding: 0 6% 3% 6%">
                                        <el-input v-model="VerificationCode" v-on:input ="inputFunc(1)" @click="showTips(1)" placeholder="输入验证码"></el-input>
                                        <div class="inputError">
                                            <span  v-if="showVCEmpty">{{vcErrText}}</span>
                                        </div>
                                        <!-- <md-field style="display: inline-flex;" :class="VCMessageClass">
                                          <md-input v-model="VerificationCode"  placeholder="输入验证码" v-on:input ="inputFunc(1)" @click="showTips(1)"></md-input>
                                          <span class="md-error" v-if="showVCEmpty">{{vcErrText}}</span>
                                        </md-field> -->
                                      </v-flex>
                                      <v-flex xl4 lg4 md4 sm4 xs12>
                                          <el-button v-if="!showCount" style="margin-left: -16%;" @click="getVerificationCode(1)">{{verftext}}</el-button>
                                          <el-button v-if="showCount" disabled style="margin-left: -16%;" @click="getVerificationCode(1)">{{phonetime}}{{verftext}}</el-button>
                                      </v-flex>
                                    </v-layout>
                                </div>
                                <div v-if="!changeCheckWay">
                                    <div class="md-layout-item md-size-100" style="padding: 0 6% 3% 6%;">
                                      <el-input v-model="email" v-on:input ="inputFunc(5)" @click="showTips(5)" placeholder="输入注册使用的邮箱"></el-input>
                                      <div class="inputError">
                                          <span  v-if="showEmailErr">{{showEmailErrText}}</span>
                                      </div>
                                      <!-- <md-field md-clearable  :class="emailMessageClass" >
                                        <md-input v-model="email" placeholder="输入注册使用的邮箱" v-on:input ="inputFunc(5)" @click="showTips(5)" required></md-input>
                                        <span class="md-error" v-if="showEmailEmpty">邮箱不能为空</span>
                                        <span class="md-error" v-if="showEmailError">邮箱格式不正确</span>
                                      </md-field> -->
                                    </div>
                                    <v-layout row wrap>
                                      <v-flex xl8 lg8 md8 sm8 xs12 style="padding: 0 6% 3% 6%">
                                        <el-input v-model="VerificationCode" v-on:input ="inputFunc(1)" @click="showTips(1)" placeholder="输入验证码"></el-input>
                                        <div class="inputError">
                                            <span  v-if="showVCEmpty">{{vcErrText}}</span>
                                        </div>
                                        <!-- <md-field style="display: inline-flex;" :class="VCMessageClass">
                                          <md-input v-model="VerificationCode"  placeholder="输入验证码" v-on:input ="inputFunc(1)" @click="showTips(1)"></md-input>
                                          <span class="md-error" v-if="showVCEmpty">{{vcErrText}}</span>
                                        </md-field> -->
                                      </v-flex>
                                      <v-flex xl4 lg4 md4 sm4 xs12>
                                        <el-button v-if="!showCount" style="margin-left: -16%;"  @click="getVerificationCode(2)">{{verftext}}</el-button>
                                        <el-button v-if="showCount" disabled style="margin-left: -16%;"  @click="getVerificationCode(2)">{{emailtime}}{{verftext}}</el-button>
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
                            <v-btn class="teal"  style="width:100%;" @click="nextStep()">下一步</v-btn>
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
                            <v-btn class="teal" style="width:100%;" @click="nextStep()">完成</v-btn>
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
.teal {
  border-color: #009199;
  background-color: #009199;
  color: white;
}
</style>

<style scoped>
.inputError {
  color: red;
  text-align: left;
}
</style>

<script>
import base64 from "js-base64";
export default {
  name: "modifyPassword",
  data: () => ({
    currentStep: 0,
    showAlert: false,
    AlertMessage: "",
    // activeStep: 0,
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
    // currentStep1: true,
    // currentStep2: false,
    // currentStep3: false,
    passwordFirst: "",
    passwordSecond: "",
    showPhoneErr: "",
    showPhoneErrText: "",
    showEmailErr: "",
    showEmailErrText: "",
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

      if (this.currentStep == 1) {
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
      } else if (this.currentStep == 2) {
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
      if (this.currentStep == 1) {
        this.checkVerifyCode(type, url, param);
      }
      if (this.currentStep == 2) {
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
            $this.currentStep = 2;
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
            $this.currentStep = 3;
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
      if (this.currentStep == 1) {
        if (this.changeCheckWay) {
          this.phonetime--;
        } else {
          this.emailtime--;
        }
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
        } else {
          this.emailtime = num;
        }
        this.counter = setInterval(_this.countDown, 1000);
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
        if (this.currentStep == 3) {
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


