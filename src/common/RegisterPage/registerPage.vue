<template>
    <div class="mypanel">
        <div v-if="showRegisterPage" class="md-layout-item md-size-100" style="display: inline-flex;height:600px;">
          <div class="md-layout-item md-xlarge-1 md-large-1 md-medium-1    md-small-size-10 md-xsmall-hide"></div>
          <div class="md-layout-item  md-xlarge-size-65   md-large-size-65   md-medium-size-60 md-small-hide    md-xsmall-hide" style="color: white;font-size: xx-large;">
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
              <div class="md-layout-item md-size-100" style="display: inline-flex;">
                <div class="md-layout-item md-size-10" ></div>
                <div class="md-layout-item md-size-80" >
                  <span class="loginHeadTitle">企业用户注册</span>
                </div>
                <div class="md-layout-item md-size-10" ></div>
              </div>
              <div class="md-layout-item md-size-100" style="display: inline-flex;">
                <div class="md-layout-item md-size-10" ></div>
                <div class="md-layout-item md-size-80" style="margin: 5% 0 0 0;">
                  <md-field md-clearable :class="emailMessageClass" >
                      <md-input v-model="email" placeholder="邮箱" v-on:input ="inputFunc(1)" @click="showTips(1)" required></md-input>
                      <!-- <span class="md-error" v-if="showEmailEmpty"></span> -->
                      <span class="md-error" v-if="showEmailError">{{emailErrText}}</span>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-10" ></div>
              </div>
              <div class="md-layout-item md-size-100" style="display: inline-flex;">
                <div class="md-layout-item md-size-10" ></div>
                <div class="md-layout-item md-size-80" >
                  <md-field :class="passwordFMessageClass" >
                      <md-input v-model="passwordFirst" type="password" placeholder="6 - 16位密码，区分大小写" v-on:input ="inputFunc(2)" @click="showTips(2)"></md-input>
                      <!-- <span class="md-error" v-if="showPasswordfEmpty">{{fpassWordErrText}}</span> -->
                      <span class="md-error" v-if="showPasswordfError">{{fpassWordErrText}}</span>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-10" ></div>
              </div>
              <div class="md-layout-item md-size-100" style="display: inline-flex;">
                <div class="md-layout-item md-size-10" ></div>
                <div class="md-layout-item md-size-80" >
                  <md-field  :class="passwordSMessageClass">
                      <md-input v-model="passwordSecond" type="password" placeholder="确认密码" v-on:input ="inputFunc(3)" @click="showTips(3)"></md-input>
                      <!-- <span class="md-error" v-if="showPasswordsEmpty">{{spassWordErrText}}</span> -->
                      <span class="md-error" v-if="showPasswordsError">{{spassWordErrText}}</span>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-10" ></div>
              </div>
              <div class="md-layout-item md-size-100" style="display: inline-flex;">
                <div class="md-layout-item md-size-10" ></div>
                <div class="md-layout-item md-size-80" >
                      <md-field style="display: inline-flex;" :class="phoneNumMessageClass">
                        <md-input v-model="phoneNum"  placeholder="11位手机号" v-on:input ="inputFunc(4)" @click="showTips(4)"></md-input>
                        <!-- <span class="md-error" v-if="showPhoneNumEmpty"></span> -->
                        <span class="md-error" v-if="showPhoneNumError">{{phoneErrText}}</span>
                      </md-field>
                </div>
                <div class="md-layout-item md-size-10" ></div>
              </div>
              <div class="md-layout-item md-size-100" style="display: inline-flex;">
                <div class="md-layout-item md-size-10" ></div>
                <div class="md-layout-item md-size-80" >
                    <div  class="md-layout-item md-size-100" style="display: inline-flex;">
                      <div class="md-layout-item md-size-65" >
                         <el-input  v-model="VerificationCode" placeholder="输入验证码" v-on:input ="inputFunc(5)" @click="showTips(5)"></el-input>
                         <div class="inputError" v-if="showVCError" >
                             <span>{{vccodeErrText}}</span>
                         </div>
                          <!-- <md-field  :class="VCMessageClass">
                            <md-input v-model="VerificationCode"  placeholder="输入验证码" v-on:input ="inputFunc(5)" @click="showTips(5)"></md-input>
                            <span class="md-error" v-if="showVCError">{{vccodeErrText}}</span>
                          </md-field>  -->
                      </div>
                      <div class="md-layout-item md-size-35" >
                          <md-button v-if="!showCount" class="md-dense md-raised md-primary" style="display: inline-flex;background-color: #f9f9fb;color: black;" @click="getVerificationCode()">{{verftext}}</md-button>
                          <el-button v-if="showCount"  @click="getVerificationCode(1)" disabled>{{time}}{{verftext}}</el-button>
                      </div>
                    </div>  
                </div>
                <div class="md-layout-item md-size-10" ></div>
              </div>
              
              <div>
                <el-checkbox v-model="agreeChecked">您已阅读并同意</el-checkbox><span style="color:#009199;cursor: pointer;text-decoration-line: underline;" @click="openProtocol()">《华制诊断云用户协议》</span>
              </div>

              <div class="md-layout-item md-size-100" style="display: inline-flex;">
                <div class="md-layout-item md-size-10" ></div>
                <div class="md-layout-item md-size-80" >
                      <md-button class="md-dense md-raised md-primary" style="width:95%;border-radius: 65px;margin: 5% 0 0 0;background-color: #009199;"  @click="registerFun()">注册</md-button>
                </div>
                <div class="md-layout-item md-size-10" ></div>
              </div>



              <div class="md-layout-item md-size-100">
                    <div style=" margin-top: 30px;cursor: pointer;" @click="OldAccountsLogin()">
                        <span @click="goLoginPge()" style="cursor: pointer;color:#009199;">使用已有账户登录</span>
                    </div>
                <div class="md-layout-item md-size-10" ></div>
              </div>
              
              <md-dialog-alert
                    class="md-primary md-raised"
                    :md-active.sync="showAlert"
                    :md-content="AlertMessage"
                    md-confirm-text="知道了" />

              <md-dialog :md-active.sync="showProtocol" style="width: 600px;height: 700px;">
                <md-dialog-title>用户协议</md-dialog-title>

                <iframe src="/static/华制诊断云最终用户使用协议.pdf" width="100%" height="100%" style="height: 600px;">
                  This browser does not support PDFs. Please download the PDF to view it: <a href="/static/华制诊断云最终用户使用协议.pdf" rel="external nofollow" >Download PDF</a>
                </iframe>

                <md-dialog-actions style="justify-content: center;">
                  <md-button class="md-primary" @click="showProtocol = false">已确认，我知道了</md-button>
                  <!-- <md-button class="md-primary" @click="showDialog = false">Save</md-button> -->
                </md-dialog-actions>
              </md-dialog>

            </div>
          </div>
          <div class="md-layout-item md-xlarge-1 md-large-1 md-medium-1    md-small-size-10 md-xsmall-hide"></div>
        </div>
        <registerSuccess v-if="!showRegisterPage"></registerSuccess>
    </div>
</template>
<style>
.el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 0 !important;
  border: none !important;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  border-bottom: 1px solid black !important;
}
</style>
<style scoped>
.mypanel {
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  text-align: center;
  text-align: -webkit-center;
}
.cardstyle {
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
.inputError {
  color: red;
  text-align: left;
  font-size: 12px;
}
</style>
<script>
import registerSuccess from "./registerSuccess.vue";
import base64 from "js-base64";

export default {
  name: "registerPage",
  components: {
    registerSuccess
  },
  data: () => ({
    verftext: "获取验证码",
    time: 0,
    showRegisterPage: true,
    email: "",
    passwordFirst: "",
    passwordSecond: "",
    phoneNum: "",
    VerificationCode: "",
    emailHasMessages: false,
    passwordFHasMessages: false,
    passwordSHasMessages: false,
    phoneNumHasMessages: false,
    VCHasMessages: false,
    showEmailEmpty: false,
    showEmailError: false,
    showPasswordfEmpty: false,
    showPasswordfError: false,
    showPasswordsEmpty: false,
    showPasswordsError: false,
    showPhoneNumEmpty: false,
    showPhoneNumError: false,
    showVCEmpty: false,
    showVCError: false,
    showAlert: false,
    AlertMessage: "",
    showCount: false,
    showText: false,
    counter: "",
    emailErrText: "邮箱不能为空",
    fpassWordErrText: "密码不能为空",
    spassWordErrText: "密码不能为空",
    phoneErrText: "手机号码不能为空",
    vccodeErrText: "验证码不能为空",
    agreeChecked: false,
    showProtocol: false
    // showdisableBtn:false
  }),
  methods: {
    OldAccountsLogin() {},
    isEmail(str) {
      let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
      return reg.test(str);
    },
    /*密码字母数字组合，6-16位,必须包含数字加字母 不能包含特殊符号等*/
    isPassword(pass) {
      var reg = /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,16}$/;
      return reg.test(pass);
    },
    isTelCode(str) {
      var reg = /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/;
      return reg.test(str);
    },
    inputFunc(index) {
      switch (index) {
        case 1:
          if (this.email.length == 0) {
            this.showEmailError = true;
            this.emailHasMessages = true;
            this.emailErrText = "邮箱不能为空";
          } else {
            this.showEmailError = !this.isEmail(this.email);
            this.emailHasMessages = !this.isEmail(this.email);
            this.emailErrText = "邮箱格式不正确";
          }
          break;
        case 2:
          this.showPasswordfError = false;
          this.passwordFHasMessages = false;
          if (this.passwordFirst.length == 0) {
            this.showPasswordfError = true;
            this.passwordFHasMessages = true;
            this.fpassWordErrText = "密码不能为空";
          } else {
            if (this.passwordFirst.length < 6) {
              this.showPasswordfError = true;
              this.passwordFHasMessages = true;
              this.fpassWordErrText = "密码最少需要6位";
            } else if (this.passwordFirst.length > 16) {
              this.showPasswordfError = true;
              this.passwordFHasMessages = true;
              this.fpassWordErrText = "密码不能超过16位";
            } else if (!this.isPassword(this.passwordFirst)) {
              this.showPasswordfError = true;
              this.passwordFHasMessages = true;
              this.fpassWordErrText =
                "必须包含大小写字母、数字、特殊符号中至少两种";
            }
          }
          break;
        case 3:
          if (this.passwordSecond.length == 0) {
            this.showPasswordsError = true;
            this.passwordSHasMessages = true;
            this.spassWordErrText = "密码不能为空";
          } else {
            this.showPasswordsError = false;
            this.showPasswordsError =
              this.passwordFirst == this.passwordSecond ? false : true;
            this.passwordSHasMessages = this.showPasswordsError;
            this.spassWordErrText = "两次输入密码不一致";
          }
          break;
        case 4:
          if (this.phoneNum.length == 0) {
            this.showPhoneNumError = true;
            this.phoneNumHasMessages = true;
            this.phoneErrText = "手机号码不能为空";
          } else {
            this.showPhoneNumError = !this.isTelCode(this.phoneNum);
            this.phoneNumHasMessages = !this.isTelCode(this.phoneNum);
            this.phoneErrText = "手机号填写不正确";
          }
          break;
        case 5:
          if (this.VerificationCode.length == 0) {
            this.showVCError = true;
            this.VCHasMessages = true;
            this.vccodeErrText = "验证码不能为空";
          } else {
            this.showVCError = false;
            // this.vccodeErrText = "短信验证码错误"
            //后端校验
          }
          break;
        default:
          break;
      }
    },
    showTips(index) {
      switch (index) {
        case 1:
          //如果邮箱为空，提示不能为空
          this.showEmailEmpty = this.email == "" ? true : false;
          //不为空，判断格式是否正确
          this.showEmailError = this.showEmailEmpty
            ? false
            : !this.isEmail(this.email);
          //显示警告
          this.emailHasMessages = this.showEmailEmpty
            ? true
            : this.showEmailError;
          break;
        case 2:
          //如果密码为空，提示不能为空
          // //不为空，判断格式是否正确
          if (this.passwordFirst == "") {
            this.showPasswordfError = true;
            this.passwordFHasMessages = true;
            this.fpassWordErrText = "密码不能为空";
          } else if (!this.isPassword(this.passwordFirst)) {
            this.showPasswordfError = true;
            this.passwordFHasMessages = true;
            this.fpassWordErrText =
              "必须包含大小写字母、数字、特殊符号中至少两种";
          } else {
            this.showPasswordfError = false;
            this.passwordFHasMessages = false;
          }
          break;
        case 3:
          //如果密码为空，提示不能为空
          //不为空，判断格式是否正确
          if (this.passwordSecond == "") {
            this.showPasswordsError = true;
            this.passwordSHasMessages = true;
            this.spassWordErrText = "密码不能为空";
          } else if (this.passwordFirst !== this.passwordSecond) {
            this.showPasswordsError = true;
            this.passwordSHasMessages = true;
            this.spassWordErrText = "两次输入密码不一致";
          } else {
            this.showPasswordsError = false;
            this.passwordSHasMessages = false;
          }
          break;
        case 4:
          //如果手机为空，提示不能为空
          //不为空，判断格式是否正确

          if (this.phoneNum.length == 0) {
            this.showPhoneNumError = true;
            this.phoneNumHasMessages = true;
            this.phoneErrText = "手机号码不能为空";
          } else {
            this.showPhoneNumError = !this.isTelCode(this.phoneNum);
            this.phoneNumHasMessages = !this.isTelCode(this.phoneNum);
            this.phoneErrText = "手机号填写不正确";
          }
          break;
        case 5:
          //如果手机为空，提示不能为空
          this.showVCError = this.VerificationCode == "" ? true : false;
          this.vccodeErrText = "验证码不能为空";
          this.VCHasMessages = this.showVCError;
          break;
        default:
          break;
      }
    },
    getVerificationCode() {
      if (this.time !== 0) return;
      //获取验证码
      let $this = this,
        apikey = "",
        type = "post",
        url = "/IBUS/DAIG_SYS/sendSms",
        request = {
          mobile: this.phoneNum,
          type: 0
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
            $this.showCount = true;
            $this.showText = true;
            $this.verftext = "秒后重新获取";
            // $this,showdisableBtn = true;
            $this.goLogin(60);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    registerFun() {
      let $this = this,
        apikey = "",
        type = "post",
        url = "/IBUS/DAIG_SYS/registerUser",
        request = {
          email: this.email,
          password: Base64.encode(this.passwordFirst),
          mobile: this.phoneNum,
          verifyCode: this.VerificationCode,
          protocol: this.agreeChecked
        },
        param = {
          apikey,
          request
        };
      if (this.email == "") {
        this.showAlert = true;
        this.AlertMessage = this.emailErrText;
        return;
      }
      if (this.emailHasMessages) {
        this.showAlert = true;
        this.AlertMessage = this.emailErrText;
        return;
      }
      if (this.passwordFirst == "") {
        this.showAlert = true;
        this.AlertMessage = this.fpassWordErrText;
        return;
      }
      if (this.passwordFHasMessages) {
        this.showAlert = true;
        this.AlertMessage = this.fpassWordErrText;
        return;
      }
      if (this.passwordSecond == "") {
        this.showAlert = true;
        this.AlertMessage = this.spassWordErrText;
        return;
      }
      if (this.passwordSHasMessages) {
        this.showAlert = true;
        this.AlertMessage = this.spassWordErrText;
        return;
      }
      if (this.phoneNum == "") {
        this.showAlert = true;
        this.AlertMessage = this.phoneErrText;
        return;
      }
      if (this.phoneNumHasMessages) {
        this.showAlert = true;
        this.AlertMessage = this.phoneErrText;
        return;
      }
      if (this.verifyCode == "") {
        this.showAlert = true;
        this.AlertMessage = this.vccodeErrText;
        return;
      }
      if (!this.agreeChecked) {
        this.showAlert = true;
        this.AlertMessage =
          "请先阅读用户协议然后勾选同意按钮，再进行下一步操作";
        return;
      }
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
            $this.showRegisterPage = false;
            $this.$store.commit("home/changeShowHomeBgImge", false);
            //显示导航菜单
            $this.$store.commit("home/showTabsFun", false);
            $this.$store.commit("home/showLogin", false);
            $this.$store.commit("registerPage/changeUseremail", $this.email);
            $this.$store.commit(
              "registerPage/changeUsermobile",
              $this.phoneNum
            );
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    goLoginPge() {
      //修改登录状态
      this.$store.commit("loginPage/changeLoginState", false);
      //隐藏登录按钮
      this.$store.commit("home/showLogin", false);
      //隐藏导航菜单
      this.$store.commit("home/showTabsFun", false);
      //显示首页背景图
      this.$store.commit("home/changeShowHomeBgImge", true);
      //清楚头像图片
      this.$store.commit("loginPage/getUserImage", "");
      this.$router.push("/loginPage/");
    },
    countDown() {
      let _this = this;
      _this.time--;
    },
    goLogin(num) {
      let _this = this;
      _this.time = num;
      _this.counter = setInterval(_this.countDown, 1000);
    },
    openProtocol() {
      this.showProtocol = true;
    }
  },
  computed: {
    emailMessageClass() {
      return {
        "md-invalid": this.emailHasMessages
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
    phoneNumMessageClass() {
      return {
        "md-invalid": this.phoneNumHasMessages
      };
    },
    VCMessageClass() {
      return {
        "md-invalid": this.VCHasMessages
      };
    }
  },
  watch: {
    time: function(newVal, oldVal) {
      if (newVal == 0) {
        clearInterval(this.counter);
        this.verftext = "重新获取验证码";
        this.showText = false;
        this.showCount = false;
        // this,showdisableBtn = false;
      }
    }
  }
};
</script>




