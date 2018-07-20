<template>
    <div class="mypanel">
        <div v-if="showRegisterPage" class="cardstyle">
            <div style="width: 100%;text-align: center;padding-bottom: 30px;font-size: x-large;">企业用户注册</div>
                <md-field md-clearable style="width:400px" :class="emailMessageClass" >
                    <md-input v-model="email" placeholder="邮箱" v-on:input ="inputFunc(1)" @click="showTips(1)" required></md-input>
                    <span class="md-error" v-if="showEmailEmpty">邮箱不能为空</span>
                    <span class="md-error" v-if="showEmailError">邮箱格式不正确</span>
                </md-field>
                <md-field style="width:400px" :class="passwordFMessageClass" >
                    <md-input v-model="passwordFirst" type="password" placeholder="6 - 16位密码，数字和字母组合，区分大小写" v-on:input ="inputFunc(2)" @click="showTips(2)"></md-input>
                    <span class="md-error" v-if="showPasswordfEmpty">密码不能为空</span>
                    <span class="md-error" v-if="showPasswordfError">密码格式不正确,密码最少需要6位/密码不能超过16位</span>
                </md-field>
                <md-field style="width:400px" :class="passwordSMessageClass">
                    <md-input v-model="passwordSecond" type="password" placeholder="确认密码" v-on:input ="inputFunc(3)" @click="showTips(3)"></md-input>
                    <span class="md-error" v-if="showPasswordsEmpty">密码不能为空</span>
                    <span class="md-error" v-if="showPasswordsError">两次输入密码不一致</span>
                </md-field>
                <div style="width: 100%;text-align: center;">
                    <md-button class="md-dense md-raised md-primary" disabled style="display: inline-flex;margin: 18px 0 0 0;">+86</md-button>
                    <md-field style="width: 308px;display: inline-flex;" :class="phoneNumMessageClass">
                        <md-input v-model="phoneNum"  placeholder="11位手机号" v-on:input ="inputFunc(4)" @click="showTips(4)"></md-input>
                        <span class="md-error" v-if="showPhoneNumEmpty">手机号码不能为空</span>
                        <span class="md-error" v-if="showPhoneNumError">手机号填写不正确</span>
                    </md-field>
                </div>
                <div style="width: 100%;text-align: center;">
                    <div v-if="!showCount">
                        <md-field style="width: 51%;display: inline-flex;" :class="VCMessageClass">
                            <md-input v-model="VerificationCode"  placeholder="输入验证码" v-on:input ="inputFunc(5)" @click="showTips(5)"></md-input>
                            <span class="md-error" v-if="showVCEmpty">短信验证码不能为空</span>
                            <span class="md-error" v-if="showVCError">短信验证码错误</span>
                        </md-field>
                        <md-button class="md-dense md-raised md-primary" style="display: inline-flex;margin: 18px 0 0 0;" @click="getVerificationCode()">{{verftext}}</md-button>
                    </div>
                    <div v-if="showCount">
                        <md-field style="width: 30%;display: inline-flex;" :class="VCMessageClass">
                            <md-input v-model="VerificationCode"  placeholder="输入验证码" v-on:input ="inputFunc(5)" @click="showTips(5)"></md-input>
                            <span class="md-error" v-if="showVCEmpty">短信验证码不能为空</span>
                            <span class="md-error" v-if="showVCError">短信验证码错误</span>
                        </md-field>
                        <md-button class="md-dense md-raised md-primary" style="display: inline-flex;margin: 18px 0 0 0;" @click="getVerificationCode()">{{verftext}}</md-button>
                        <span v-if="showText" style="color:red">{{time}}</span><span v-if="showText">秒后重新获取</span>
                    </div>
                </div>
                 <md-dialog-alert
                  class="md-primary md-raised"
                  :md-active.sync="showAlert"
                  :md-content="AlertMessage"
                  md-confirm-text="知道了" />
                <div style="width:400px;text-align: left;">
                    <md-button  class="md-dense md-raised md-primary" style="width:150px;display: inline-flex;margin:18px 0 0 0;" @click="registerFun()">注册</md-button>
                    <div style=" margin-top: 30px;cursor: pointer;float: right;" @click="OldAccountsLogin()">
                        <span @click="goLoginPge()" style="cursor: pointer;">使用已有账户登录</span>
                    </div>
            </div>
        </div>
        <registerSuccess v-if="!showRegisterPage"></registerSuccess>
    </div>
</template>

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
    counter:""
  }),
  methods: {
    OldAccountsLogin() {},
    isEmail(str) {
      let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
      return reg.test(str);
    },
    /*密码字母数字组合，6-16位,必须包含数字加字母 不能包含特殊符号等*/
    isPassword(pass) {
      var str = pass;
      if (str == null || str.length < 6) {
        return false;
      }
      var reg1 = new RegExp(/^[0-9A-Za-z]+$/);
      if (!reg1.test(str)) {
        return false;
      }
      var reg = new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/);
      if (reg.test(str)) {
        return true;
      } else {
        return false;
      }
    },
    isTelCode(str) {
      var reg = /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/;
      return reg.test(str);
    },
    inputFunc(index) {
      switch (index) {
        case 1:
          if (this.email.length == 0) {
            this.showEmailEmpty = true;
            this.showPasswordfEmpty = false;
            this.showPasswordsEmpty = false;
            this.showPhoneNumEmpty = false;
            this.showVCEmpty = false;
          } else {
            this.showEmailEmpty = false;
            this.showPasswordfEmpty = false;
            this.showPasswordsEmpty = false;
            this.showPhoneNumEmpty = false;
            this.showVCEmpty = false;
            this.showEmailError = !this.isEmail(this.email);
            this.emailHasMessages = !this.isEmail(this.email);
          }
          break;
        case 2:
          if (this.passwordFirst.length == 0) {
            this.showEmailEmpty = false;
            this.showPasswordfEmpty = true;
            this.showPasswordsEmpty = false;
            this.showPhoneNumEmpty = false;
            this.showVCEmpty = false;
            this.showPasswordfError = false;
          } else {
            this.showEmailEmpty = false;
            this.showPasswordfEmpty = false;
            this.showPasswordsEmpty = false;
            this.showPhoneNumEmpty = false;
            this.showVCEmpty = false;
            this.showPasswordfError = !this.isPassword(this.passwordFirst);
            this.passwordFHasMessages = !this.isPassword(this.passwordFirst);
          }
          break;
        case 3:
          if (this.passwordSecond.length == 0) {
            this.showEmailEmpty = false;
            this.showPasswordfEmpty = false;
            this.showPasswordsEmpty = true;
            this.showPhoneNumEmpty = false;
            this.showVCEmpty = false;
            this.showPasswordfError = false;
          } else {
            this.showEmailEmpty = false;
            this.showPasswordfEmpty = false;
            this.showPasswordsEmpty = false;
            this.showPhoneNumEmpty = false;
            this.showVCEmpty = false;
            this.showPasswordsError =
              this.passwordFirst == this.passwordSecond ? false : true;
            this.passwordSHasMessages =
              this.passwordFirst == this.passwordSecond ? false : true;
          }
          break;
        case 4:
          if (this.phoneNum.length == 0) {
            this.showEmailEmpty = false;
            this.showPasswordfEmpty = false;
            this.showPasswordsEmpty = false;
            this.showPhoneNumEmpty = true;
            this.showVCEmpty = false;
          } else {
            this.showEmailEmpty = false;
            this.showPasswordfEmpty = false;
            this.showPasswordsEmpty = false;
            this.showPhoneNumEmpty = false;
            this.showVCEmpty = false;
            this.showPhoneNumError = !this.isTelCode(this.phoneNum);
            this.phoneNumHasMessages = !this.isTelCode(this.phoneNum);
          }
          break;
        case 5:
          if (this.VerificationCode.length == 0) {
            this.showEmailEmpty = false;
            this.showPasswordfEmpty = false;
            this.showPasswordsEmpty = false;
            this.showPhoneNumEmpty = false;
            this.showVCEmpty = true;
          } else {
            this.showEmailEmpty = false;
            this.showPasswordfEmpty = false;
            this.showPasswordsEmpty = false;
            this.showPhoneNumEmpty = false;
            this.showVCEmpty = false;
            //后端校验
            // this.showVCError = !this.isTelCode(this.VerificationCode);
            // this.VCHasMessages = !this.isTelCode(this.VerificationCode);
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
          this.showPasswordfEmpty = this.passwordFirst == "" ? true : false;
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
          this.showPhoneNumEmpty = this.phoneNum == "" ? true : false;
          //不为空，判断格式是否正确
          this.showPhoneNumError = this.showPhoneNumEmpty
            ? false
            : !this.isTelCode(this.phoneNum);
          //显示警告
          this.phoneNumHasMessages = this.showPhoneNumEmpty
            ? true
            : this.showPhoneNumError;
          break;
        case 5:
          //如果手机为空，提示不能为空
          this.showVCEmpty = this.VerificationCode == "" ? true : false;
          //不为空，判断格式是否正确
          //   this.showVCError = this.showVCEmpty
          //     ? false
          //     : !this.isTelCode(this.VerificationCode);
          //显示警告
          this.VCHasMessages = this.showVCEmpty ? true : this.showVCError;
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
          verifyCode: this.VerificationCode
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
          if (res.data.errorCode !== 0) {
            $this.showVerificationCode = true;
            $this.showAlert = true;
            $this.AlertMessage = res.data.errorMsg;
          } else {
            $this.showRegisterPage = false;
            $this.$store.commit("registerPage/changeUseremail", $this.email)
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    goLoginPge() {
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
      }
    }
  }
};
</script>

<style scoped>
.mypanel {
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  text-align: center;
  text-align: -webkit-center;
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
  width: 50%;
  padding: 5%;
  border: 1px solid lightgray;
}
</style>


