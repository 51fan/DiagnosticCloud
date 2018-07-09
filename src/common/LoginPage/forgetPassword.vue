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
                <span style="margin: 0.7% 0 0 1%;font-weight: 600;font-size: medium;">重设密码</span>
                <div style="width:30%;border-bottom: 2px solid lightgrey;margin: 1.5%;"></div>
                 <md-avatar style="border: 1px solid lightblue;margin:0;" :class="step3Color">
                        <span>3</span>
                    </md-avatar>
                <span style="margin: 0.7% 0 0 1%;font-weight: 600;font-size: medium;">完成</span>
            </div>

            <div class="modifyBody">
                <div v-if="currentStep1" class="cardstyle">
                    <div style="padding: 3% 6% 3% 6%;">找回密码前我们需要验证您的身份</div>
                    <div>
                        <div style="padding: 0 6% 3% 6%;display: inline-block;">验证方式：</div>
                        <md-radio v-model="checkWay" value="mobile" >通过手机找回密码</md-radio>
                        <md-radio v-model="checkWay" value="email" >通过邮箱找回密码</md-radio>
                    </div>
                    <div v-if="changeCheckWay">
                        <div style="padding: 0 6% 3% 6%;display: inline-flex;width: 100%;">
                            <div style="width: 50%;margin-right: 2%;">
                                <md-button class="md-dense md-raised md-primary" disabled style="display: inline-flex;margin: 18px 0 0 0;">+86</md-button>
                                <md-field style="width: 308px;display: inline-flex;" :class="phoneNumMessageClass">
                                    <md-input v-model="phoneNum"  placeholder="输入注册使用的手机号码" v-on:input ="inputFunc(4)" @click="showTips(4)"></md-input>
                                    <span class="md-error" v-if="showPhoneNumEmpty">手机号码不能为空</span>
                                    <span class="md-error" v-if="showPhoneNumError">手机号填写不正确</span>
                                </md-field>
                            </div>
                            <div>
                                <md-field style="width: 308px;display: inline-flex;" :class="VCMessageClass">
                                    <md-input v-model="VerificationCode"  placeholder="输入验证码" v-on:input ="inputFunc()" @click="showTips()"></md-input>
                                    <span class="md-error" v-if="showVCEmpty">短信验证码不能为空</span>
                                    <span class="md-error" v-if="showVCError">短信验证码错误</span>
                                </md-field>
                                <md-button class="md-dense md-raised md-primary" style="display: inline-flex;margin: 18px 0 0 0;" @click="getVerificationCode()">获取验证码</md-button>
                            </div>
                        </div>
                    </div>
                    <div v-if="!changeCheckWay">
                        <div style="padding: 0 6% 3% 6%;display: inline-flex;width: 100%;">
                            <div style="width: 50%;margin-right: 2%;">
                                <md-field md-clearable style="width:400px" :class="emailMessageClass" >
                                    <md-input v-model="email" placeholder="输入注册使用的邮箱" v-on:input ="inputFunc(1)" @click="showTips(1)" required></md-input>
                                    <span class="md-error" v-if="showEmailEmpty">邮箱不能为空</span>
                                    <span class="md-error" v-if="showEmailError">邮箱格式不正确</span>
                                </md-field>
                            </div>
                            <div>
                                <md-field style="width: 308px;display: inline-flex;" :class="VCMessageClass">
                                    <md-input v-model="VerificationCode"  placeholder="输入验证码" v-on:input ="inputFunc()" @click="showTips()"></md-input>
                                    <span class="md-error" v-if="showVCEmpty">短信验证码不能为空</span>
                                    <span class="md-error" v-if="showVCError">短信验证码错误</span>
                                </md-field>
                                <md-button class="md-dense md-raised md-primary" style="display: inline-flex;margin: 18px 0 0 0;" @click="getVerificationCode()">获取验证码</md-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="currentStep2" class="cardstyle">
                    <div style="padding: 3% 6% 3% 6%;">重新设置账号ji***@ehz.cnde 密码</div>
                    <div style="padding: 0 6% 3% 6%">
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
                <md-button class="md-dense md-raised md-primary" >取消</md-button>
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
  /* background-color: rgba(211, 211, 211, 0.28); */
}
</style>

<script>
export default {
  name: "modifyPassword",
  data: () => ({
    time: 0,
    mobile: "",
    email: "",
    checkWay: "email",
    VerificationCode: "",
    showVCEmpty: false,
    showVCError: false,
    VCHasMessages: false,
    passwordFHasMessages: false,
    passwordSHasMessages: false,
    emailHasMessages: false,
    currentStep1: true,
    currentStep2: false,
    currentStep3: false,
    passwordFirst: "",
    passwordSecond: "",
    showPasswordfEmpty: false,
    showPasswordfError: false,
    showPasswordsEmpty: false,
    showPasswordsError: false,
    showEmailEmpty: false,
    showEmailError: false
  }),
  methods: {
    inputFunc(index) {
      switch (index) {
        case 1:
          this.showVCEmpty = this.VerificationCode == "" ? true : false;
          this.VCHasMessages = this.showVCEmpty;
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
      switch (index) {
        case 1:
          //验证码为空就提示不能为空
          this.showVCEmpty = this.VerificationCode == "" ? true : false;
          this.VCHasMessages = this.showVCEmpty;
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
    getVerificationCode() {
      //获取验证码
      let self = this,
        apikey = "",
        request = {
          mobile: this.mobile
        };
      //请求接口
      //   self.$http
      //     .post("", { apikey, request })
      //     .then(res => {})
      //     .catch(err => {});
    },
    nextStep() {
      let self = this,
        apikey = "",
        request = {};
      //请求接口
      //   self.$http
      //     .post("", { apikey, request })
      //     .then(res => {})
      //     .catch(err => {});
      if (this.currentStep1) {
        this.currentStep1 = false;
        this.currentStep2 = true;
        this.currentStep3 = false;
      } else if (this.currentStep2) {
        this.currentStep1 = false;
        this.currentStep2 = false;
        this.currentStep3 = true;
        self.goLogin();
      }
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
      let _this = this;
      _this.time--;
    },
    goLogin() {
      let _this = this;
      _this.time = 5;
      setInterval(_this.countDown, 1000);
    },
    goLoginR() {
      //隐藏导航菜单
      this.$store.commit("home/showTabsFun", false);
      //隐藏登录按钮
      this.$store.commit("home/showLogin", true);
      //显示用户中心
      this.$store.commit("home/showUserCenter", false);
      //显示登录界面
      this.$store.commit("loginPage/changeLoginShowState", true);
    }
  },
  watch: {
    time: function(newVal, oldVal) {
      if (newVal == 0) {
        //隐藏导航菜单
        this.$store.commit("home/showTabsFun", false);
        //隐藏登录按钮
        this.$store.commit("home/showLogin", true);
        //显示用户中心
        this.$store.commit("home/showUserCenter", false);
        //显示登录界面
        this.$store.commit("loginPage/changeLoginShowState", true);
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
    }
  }
};
</script>


