<template>
    <div class="mypanel">
      <div style="padding-top: 6%;padding-left: 10%;padding-right: 10%;">
        <v-stepper v-model="currentStep" style="background-color: white;">
          <v-layout row>
              <v-stepper-step :complete="currentStep> 1" style="padding: 24px 8px 24px 24px;" step="1">验证身份</v-stepper-step>
              <v-divider style="margin-top: 36px;"></v-divider>
              <v-stepper-step :complete="currentStep> 2"  style="padding: 24px 10px 24px 10px;" step="2">修改手机</v-stepper-step>
              <v-divider style="margin-top: 36px;"></v-divider>
              <v-stepper-step step="3" style="padding: 24px 24px 24px 10px;">完成</v-stepper-step>
            </v-layout>

            <v-stepper-items>
               <v-stepper-content step="1">
                 <div class="md-layout-item md-size-100" style="text-align:center;margin: 20px;">
                  <span style="font-size: x-large;">修改手机前我们需要验证您的身份</span>
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
                                    <el-button v-if="showPhoneCount" disabled style="margin-left: -16%;">{{phonetime}}{{PhoneCounttext}}</el-button>
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
                                  <el-button v-if="showEmialCount" disabled style="margin-left: -16%;">{{emailtime}}{{EmialCounttext}}</el-button>
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
                            <v-btn style="width:100%;color: white;background-color: rgb(0, 145, 153);" @click="nextStep()">下一步</v-btn>
                          </v-flex>
                        </v-layout>
                        <v-flex xl2 lg2 md2 hidden-sm-and-down></v-flex>
                      </v-flex>
                      <v-flex xl3 lg2 md1 sm1 xs12></v-flex>
                </v-layout> 
               </v-stepper-content>

               <v-stepper-content step="2">
                  <div class="md-layout-item md-size-100" style="text-align:center;margin: 20px;">
                    <span style="font-size: x-large;">设置新的手机号码</span>
                  </div>
                  <v-layout row wrap style="margin: 0 0 30px 0;">
                    <v-flex xl3 lg3 md1 hidden-sm-and-down></v-flex>
                    <v-flex xl6 lg6 md10 sm12 xs12 style="padding: 0 6% 0 6%;">
                      <div>
                        <div class="md-layout-item md-size-100" style="margin: 5% 0;">
                            <el-input  v-model="NewPhone" placeholder="输入新的手机号码" v-on:input ="inputFunc(2)" @click="showTips(2)"></el-input>
                            <div class="inputError">
                                <span v-if="showNewPhoneErr">{{NewPhoneErrText}}</span>
                            </div>
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
                                <el-button v-if="showCount" disabled style="background-color: #F1F3F7;">{{time}}{{verftext}}</el-button>
                            </div>
                        </div>
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
                    <img src="/static/imgs/ic_hint_finish.png">
                      <div style="padding: 1% 6% 3% 6%;">手机修改成功</div>
                      <h2>您的账号关联的手机已经修改为<span style="color:green;margin-bottom:30px;">{{NewPhone}}</span></h2>
                      <!-- <span style="color: blue;cursor: pointer;text-decoration-line: underline;" @click="goLoginR()">立即跳转</span> -->
                      <el-button  style="background-color: rgb(0, 145, 153);color: white;margin-top: 36px;" @click="goPersonalCenter()">返回个人中心</el-button>
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
/* .el-input__inner {
  background-color: #f3f6f9 !important;
} */
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
    currentStep: 0,
    activeStep: 0,
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
    showCount: false,
    VerificationCode: "",
    verftext: "获取验证码",
    PhoneCounttext: "获取验证码",
    EmialCounttext: "获取验证码",
    vcErrText: "",
    showVCErr: false,
    acconut: "",
    VCHasMessages: false,
    NewPhone: "",
    showNewPhoneErr: false,
    NewPhoneErrText: ""
  }),
  methods: {
    inputFunc(index) {
      switch (index) {
        case 1:
          this.showVCErr = false;
          this.VCHasMessages = false;
          if (this.VerificationCode == "") {
            this.showVCErr = true;
            this.VCHasMessages = true;
            this.vcErrText = "验证码不能为空";
          }
          break;
        case 2:
          this.showNewPhoneErr = false;
          if (this.NewPhone == "") {
            this.showNewPhoneErr = true;
            this.NewPhoneErrText = "电话号码不能为空";
          }
          if (!this.isTelCode(this.NewPhone)) {
            this.showNewPhoneErr = true;
            this.NewPhoneErrText = "电话号码格式不对";
          }
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
            this.VCHasMessages = true;
            this.vcErrText = "验证码不能为空";
          }
          break;
        case 2:
          this.showEmailErr = false;
          if (this.NewPhone == "") {
            this.showNewPhoneErr = true;
            this.NewPhoneErrText = "电话号码不能为空";
          }
          if (!this.isTelCode(this.NewPhone)) {
            this.showNewPhoneErr = true;
            this.NewPhoneErrText = "电话号码格式不对";
          }
          break;
        case 3:
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
        case 3:
          url = "/IBUS/DAIG_SYS/sendSms";
          request.mobile = this.NewPhone;
          request.type = 0;
          this.verftext = "获取验证码";
          break;
        default:
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
            switch (index) {
              case 1:
                $this.showPhoneCount = true;
                $this.PhoneCounttext = "秒后重新获取验证码";
                $this.goLogin(60);
                break;
              case 2:
                $this.showEmialCount = true;
                $this.EmialCounttext = "秒后重新获取验证码";
                $this.goLogin(60);
                break;
              case 3:
                $this.showCount = true;
                $this.verftext = "秒后重新获取验证码";
                $this.goLogin(60);
                break;
              default:
                break;
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
        if (this.NewPhone == "") {
          this.showAlert = true;
          this.AlertMessage = "新手机不能为空";
          return;
        }
        url = "/IBUS/DAIG_SYS/modifyUserMobile";
        request.session_id = this.session_id;
        request.new_mobile = this.NewPhone;
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
            if ($this.currentStep == 1) {
              $this.currentStep = 2;

              $this.showCount = false;
              $this.verftext = "获取验证码";
              $this.phonetime = 0;
              $this.emailtime = 0;
              $this.time = 0;
              $this.VerificationCode = "";
            } else if ($this.currentStep == 2) {
              $this.currentStep = 3;
              //   $this.goLogin(5);
              $this.$store.commit("SET_UsereMobile", $this.NewPhone);
              $this.$store.commit("loginPage/getUsermobile", $this.NewPhone);
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    countDown() {
      // let _this = this;
      if (this.currentStep == 1) {
        this.phonetime--;
        this.emailtime--;
      }
      if (this.currentStep == 2) {
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
      if (this.currentStep == 2) {
        this.time = num;
        this.counter = setInterval(_this.countDown, 1000);
      }
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
      this.$store.commit("home/getTabsactiveIndex", "1");
      this.$store.commit("ACTIVE", "1");
      this.$store.commit("home/showTabsFun", true);
      this.$router.push("/personalInfo");
    },
    isTelCode(str) {
      var reg = /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/;
      return reg.test(str);
    }
  },
  watch: {
    time: function(newVal, oldVal) {
      if (newVal == 0) {
        clearInterval(this.counter);
        if (this.showCount) {
          this.verftext = "重新获取验证码";
          this.showCount = false;
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
    },
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


