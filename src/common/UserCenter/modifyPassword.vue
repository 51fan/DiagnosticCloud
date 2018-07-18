<template>
    <div class="mypanel">
        <div style="text-align: center;text-align: -webkit-center;">
            <div class="pogressHead">
                <md-avatar style="border: 1px solid lightblue;margin:0;margin-left: 5%;" :class="step1Color">
                        <span>1</span>
                    </md-avatar>
                <span style="margin: 0.7% 0 0 1%;font-weight: 600;font-size: medium;">验证身份</span>
                <div style="width:30%;border-bottom: 2px solid lightgrey;margin: 1.5%;"></div>
                <md-avatar style="border: 1px solid lightblue;margin:0;" :class="step2Color">
                        <span>2</span>
                    </md-avatar>
                <span style="margin: 0.7% 0 0 1%;font-weight: 600;font-size: medium;">修改密码</span>
                <div style="width:30%;border-bottom: 2px solid lightgrey;margin: 1.5%;"></div>
                 <md-avatar style="border: 1px solid lightblue;margin:0;" :class="step3Color">
                        <span>3</span>
                    </md-avatar>
                <span style="margin: 0.7% 0 0 1%;font-weight: 600;font-size: medium;">完成</span>
            </div>

            <div class="modifyBody">
                <div v-if="currentStep1" class="cardstyle">
                    <div style="padding: 3% 6% 3% 6%;">修改密码需要验证您的身份</div>
                    <div>
                        <div style="padding: 0 6% 3% 6%;display: inline-block;">验证方式：</div>
                        <md-radio v-model="checkWay" value="mobile" >通过手机验证</md-radio>
                        <md-radio v-model="checkWay" value="email" >通过邮箱验证</md-radio>
                    </div>
                    <div v-if="changeCheckWay">
                        <div style="padding: 0 6% 3% 6%">
                            我们将会向您的手机 {{usermobile}} 发送验证短信，请将收到的验证码填入下方完成验证
                        </div>
                        <div v-if="!showCount" style="padding: 0 6% 3% 6%">
                            <md-field style="width: 20%;display: inline-flex;" :class="VCMessageClass">
                                <md-input v-model="VerificationCode"  placeholder="输入验证码" v-on:input ="inputFunc()" @click="showTips()"></md-input>
                                <span class="md-error" v-if="showVCEmpty">短信验证码不能为空</span>
                                <span class="md-error" v-if="showVCError">短信验证码错误</span>
                            </md-field>
                            <md-button class="md-dense md-raised md-primary" style="display: inline-flex;margin: 18px 0 0 0;" @click="getVerificationCode(1)">{{verftext}}</md-button>
                        </div>
                        <div v-if="showCount" style="padding: 0 6% 3% 6%">
                            <md-field style="width: 40%;display: inline-flex;" :class="VCMessageClass">
                                <md-input v-model="VerificationCode"  placeholder="输入验证码" v-on:input ="inputFunc()" @click="showTips()"></md-input>
                                <span class="md-error" v-if="showVCEmpty">短信验证码不能为空</span>
                                <span class="md-error" v-if="showVCError">短信验证码错误</span>
                            </md-field>
                            <md-button class="md-dense md-raised md-primary" style="display: inline-flex;margin: 18px 0 0 0;" @click="getVerificationCode(1)">{{verftext}}</md-button>
                            <span v-if="showPhoneText" style="color:red">{{phonetime}}</span><span v-if="showPhoneText">秒后重新获取</span>
                        </div>
                    </div>
                    <div v-if="!changeCheckWay">
                        <div style="padding: 0 6% 3% 6%">
                            我们将会向您的邮箱 {{useremail}} 发送验证邮件，请将收到的验证码填入下方完成验证
                        </div>
                        <div v-if="showCount" style="padding: 0 6% 3% 6%">
                            <md-field style="width: 20%;display: inline-flex;" :class="VCMessageClass">
                                <md-input v-model="VerificationCode"  placeholder="输入验证码" v-on:input ="inputFunc(1)" @click="showTips(1)"></md-input>
                                <span class="md-error" v-if="showVCEmpty">验证码不能为空</span>
                                <span class="md-error" v-if="showVCError">验证码错误</span>
                            </md-field>
                            <md-button class="md-dense md-raised md-primary" style="display: inline-flex;margin: 18px 0 0 0;" @click="getVerificationCode(2)">{{verftext}}</md-button>
                        </div>
                        <div v-if="!showCount" style="padding: 0 6% 3% 6%">
                            <md-field style="width: 20%;display: inline-flex;" :class="VCMessageClass">
                                <md-input v-model="VerificationCode"  placeholder="输入验证码" v-on:input ="inputFunc(1)" @click="showTips(1)"></md-input>
                                <span class="md-error" v-if="showVCEmpty">验证码不能为空</span>
                                <span class="md-error" v-if="showVCError">验证码错误</span>
                            </md-field>
                            <md-button class="md-dense md-raised md-primary" style="display: inline-flex;margin: 18px 0 0 0;" @click="getVerificationCode(2)">{{verftext}}</md-button>
                            <span v-if="showEmailText" style="color:red">{{emailtime}}</span><span v-if="showEmailText">秒后重新获取</span>
                        </div>
                    </div>
                </div>
                <div v-if="currentStep2" class="cardstyle">
                    <div style="padding: 3% 6% 3% 6%;">重新设置账号{{useremail}} 密码</div>
                    <div style="padding: 0 6% 3% 6%">
                        <md-field style="width:40%" :class="passwordFMessageClass" >
                            <md-input v-model="passwordFirst" type="password" placeholder="6 - 16位密码，数字和字母组合，区分大小写" v-on:input ="inputFunc(2)" @click="showTips(2)"></md-input>
                            <span class="md-error" v-if="showPasswordfEmpty">密码不能为空</span>
                            <span class="md-error" v-if="showPasswordfError">密码格式不正确,密码最少需要6位/密码不能超过16位</span>
                        </md-field>
                        <md-field style="width:40%" :class="passwordSMessageClass">
                            <md-input v-model="passwordSecond" type="password" placeholder="确认密码" v-on:input ="inputFunc(3)" @click="showTips(3)"></md-input>
                            <span class="md-error" v-if="showPasswordsEmpty">密码不能为空</span>
                            <span class="md-error" v-if="showPasswordsError">两次输入密码不一致</span>
                        </md-field>
                    </div>
                </div>
                <div v-if="currentStep3" style="text-align: center;">
                    <i class="material-icons md-size-5x" style="color: limegreen">check_circle</i>
                    <div style="padding: 1% 6% 3% 6%;">修改成功</div>
                    <h2><span style="color:red">{{time}}</span>秒后跳转至登录页面</h2>
                    <span style="color: blue;cursor: pointer;text-decoration-line: underline;" @click="goLoginR()">立即跳转</span>
                </div>
            </div> 
            <div style="padding-top: 1%;" v-if="!currentStep3">
                <md-button class="md-dense md-raised md-primary" @click="cancel()">取消</md-button>
                <md-button class="md-dense md-raised md-primary" style="margin: 6px 4%;" @click="nextStep()">下一步</md-button>
            </div>
        </div>
    </div>
</template>

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
</style>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "modifyPassword",
  data: () => ({
    phonetime: 0,
    emailtime: 0,
    time: 0,
    counter: "",
    showAlert: false,
    AlertMessage: "",
    showCount: false,
    showEmailText: false,
    showPhoneText: false,
    verftext: "获取验证码"
  }),
  methods: {
    inputFunc(index) {
      switch (index) {
        case 1:
          debugger;
          this.VerificationCode == ""
            ? this.$store.commit("UserCenter/changePasswordshowVCEmpty", true)
            : this.$store.commit("UserCenter/changePasswordshowVCEmpty", false);
          this.$store.commit(
            "UserCenter/changePasswordVCHasMessages",
            this.showVCEmpty
          );
          //   this.showVCEmpty = this.VerificationCode == "" ? true : false;
          //   this.VCHasMessages = this.showVCEmpty;
          break;
        case 2:
          if (this.passwordFirst.length == 0) {
            this.showPasswordfEmpty = true;
            this.showPasswordsEmpty = false;
          } else {
            this.showPasswordfEmpty = false;
            this.showPasswordsEmpty = false;
            this.showPasswordfError = !this.isPassword(this.passwordFirst);
            this.passwordFHasMessages = !this.isPassword(this.passwordFirst);
          }
          break;
        case 3:
          if (this.passwordSecond.length == 0) {
            this.showPasswordfEmpty = false;
            this.showPasswordsEmpty = true;
          } else {
            this.showPasswordfEmpty = false;
            this.showPasswordsEmpty = false;
            this.showPasswordsError =
              this.passwordFirst == this.passwordSecond ? false : true;
            this.passwordSHasMessages =
              this.passwordFirst == this.passwordSecond ? false : true;
          }
          break;
        default:
          break;
      }
    },
    showTips(index) {
      this;
      switch (index) {
        case 1:
          //验证码为空就提示不能为空
          this.VerificationCode == ""
            ? this.$store.commit("UserCenter/changePasswordshowVCEmpty", true)
            : this.$store.commit("UserCenter/changePasswordshowVCEmpty", false);
          this.$store.commit(
            "UserCenter/changePasswordVCHasMessages",
            this.showVCEmpty
          );
          //   this.VCHasMessages = this.showVCEmpty;
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
          break;
        default:
          break;
      }
      this.verftext = "获取验证码";
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
              $this.showCount = true;
              $this.showPhoneText = true;
              $this.goLogin(60);
            } else {
              $this.showCount = true;
              $this.showEmailText = true;
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
      if ($this.currentStep1) {
        if ($this.changeCheckWay) {
          url = "/IBUS/DAIG_SYS/checkVerifyCodeByMobile ";
          request.mobile = $this.usermobile;
          request.verifyCode = $this.VerificationCode;
        } else {
          url = "/IBUS/DAIG_SYS/checkVerifyCodeByEmail ";
          request.verifyCode = $this.VerificationCode;
          request.email = $this.useremail;
        }
      } else if ($this.currentStep2) {
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
            if ($this.currentStep1) {
              $this.$store.commit(
                "UserCenter/changePasswordcurrentStep1",
                false
              );
              $this.$store.commit(
                "UserCenter/changePasswordcurrentStep2",
                true
              );
              $this.$store.commit(
                "UserCenter/changePasswordcurrentStep3",
                false
              );
            } else if ($this.currentStep2) {
              $this.$store.commit(
                "UserCenter/changePasswordcurrentStep1",
                false
              );
              $this.$store.commit(
                "UserCenter/changePasswordcurrentStep2",
                false
              );
              $this.$store.commit(
                "UserCenter/changePasswordcurrentStep3",
                true
              );
              $this.goLogin(5);
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
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
    countDown() {
      // let _this = this;
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
      //显示登录按钮
      this.$store.commit("home/showLogin", true);
      //显示用户中心
      this.$store.commit("home/showUserCenter", false);
      this.$router.push("/loginPage");
    },
    cancel() {
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
        if (this.currentStep3) {
          //隐藏导航菜单
          this.$store.commit("home/showTabsFun", false);
          //隐藏登录按钮
          this.$store.commit("home/showLogin", true);
          //显示用户中心
          this.$store.commit("home/showUserCenter", false);
          //显示登录界面
          this.$store.commit("loginPage/changeLoginShowState", true);
          this.$router.push("/loginPage");
        }
      }
    },
    phonetime: function(newVal, oldVal) {
      //   debugger;
      if (newVal == 0) {
        clearInterval(this.counter);
        if (this.showCount) {
          this.verftext = "重新获取验证码";
          if ($this.changeCheckWay) {
            $this.showCount = true;
            $this.showPhoneText = true;
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
          if (!$this.changeCheckWay) {
            $this.showCount = true;
            $this.showPhoneText = true;
          }
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
      //this.showCount = false;
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
    },
    VerificationCode: {
      get: function() {
        return this.$store.state.UserCenter.modifyPassword.VerificationCode;
      },
      set: function(newValue) {
        this.$store.state.UserCenter.modifyPassword.VerificationCode = newValue;
      }
    },
    showVCEmpty: {
      get: function() {
        return this.$store.state.UserCenter.modifyPassword.showVCEmpty;
      },
      set: function(newValue) {
        this.$store.state.UserCenter.modifyPassword.showVCEmpty = newValue;
      }
    },
    showVCError: {
      get: function() {
        return this.$store.state.UserCenter.modifyPassword.showVCError;
      },
      set: function(newValue) {
        this.$store.state.UserCenter.modifyPassword.showVCError = newValue;
      }
    },
    VCHasMessages: {
      get: function() {
        return this.$store.state.UserCenter.modifyPassword.VCHasMessages;
      },
      set: function(newValue) {
        this.$store.state.UserCenter.modifyPassword.VCHasMessages = newValue;
      }
    },
    passwordFHasMessages: {
      get: function() {
        return this.$store.state.UserCenter.modifyPassword.passwordFHasMessages;
      },
      set: function(newValue) {
        this.$store.state.UserCenter.modifyPassword.passwordFHasMessages = newValue;
      }
    },
    passwordSHasMessages: {
      get: function() {
        return this.$store.state.UserCenter.modifyPassword.passwordSHasMessages;
      },
      set: function(newValue) {
        this.$store.state.UserCenter.modifyPassword.passwordSHasMessages = newValue;
      }
    },
    currentStep1: {
      get: function() {
        return this.$store.state.UserCenter.modifyPassword.currentStep1;
      },
      set: function(newValue) {
        this.$store.state.UserCenter.modifyPassword.currentStep1 = newValue;
      }
    },
    currentStep2: {
      get: function() {
        return this.$store.state.UserCenter.modifyPassword.currentStep2;
      },
      set: function(newValue) {
        this.$store.state.UserCenter.modifyPassword.currentStep2 = newValue;
      }
    },
    currentStep3: {
      get: function() {
        return this.$store.state.UserCenter.modifyPassword.currentStep3;
      },
      set: function(newValue) {
        this.$store.state.UserCenter.modifyPassword.currentStep3 = newValue;
      }
    },
    passwordFirst: {
      get: function() {
        return this.$store.state.UserCenter.modifyPassword.passwordFirst;
      },
      set: function(newValue) {
        this.$store.state.UserCenter.modifyPassword.passwordFirst = newValue;
      }
    },
    passwordSecond: {
      get: function() {
        return this.$store.state.UserCenter.modifyPassword.passwordSecond;
      },
      set: function(newValue) {
        this.$store.state.UserCenter.modifyPassword.passwordSecond = newValue;
      }
    },
    showPasswordfEmpty: {
      get: function() {
        return this.$store.state.UserCenter.modifyPassword.showPasswordfEmpty;
      },
      set: function(newValue) {
        this.$store.state.UserCenter.modifyPassword.showPasswordfEmpty = newValue;
      }
    },
    showPasswordfError: {
      get: function() {
        return this.$store.state.UserCenter.modifyPassword.showPasswordfError;
      },
      set: function(newValue) {
        this.$store.state.UserCenter.modifyPassword.showPasswordfError = newValue;
      }
    },
    showPasswordsEmpty: {
      get: function() {
        return this.$store.state.UserCenter.modifyPassword.showPasswordsEmpty;
      },
      set: function(newValue) {
        this.$store.state.UserCenter.modifyPassword.showPasswordsEmpty = newValue;
      }
    },
    showPasswordsError: {
      get: function() {
        return this.$store.state.UserCenter.modifyPassword.showPasswordsError;
      },
      set: function(newValue) {
        this.$store.state.UserCenter.modifyPassword.showPasswordsError = newValue;
      }
    }
  }
};
</script>


