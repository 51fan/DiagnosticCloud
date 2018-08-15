<template>
  <div class="mypanel">
    <div  style="padding: 7% 15% 15%;background-color: white;">
      <div v-if="!ischangeEmail">
        <md-icon class="md-size-5x" style="color: burlywood">info</md-icon>
        <div style="padding: 20px;font-size: xx-large;margin: 20px;">
          <div>{{useremail}},你的帐户尚未激活</div>
        </div>
        <div style="font-size: large;color: #8e8989;padding-bottom: 2%;">请登录您的邮箱根据邮件提示激活账户。</div>
        <div>
          <span>未收到邮件？</span>
          <span v-if="!showCount" style="color:#009199;cursor: pointer;padding-right: 10px;" @click="reSendActiveEmail()">重新发送</span>
          <span v-if="showCount"><span  style="color:red">{{time}}</span><span style="color:#009199;cursor: pointer;" @click="reSendActiveEmail()">秒后可重新获取</span></span>
          <span  style="color:#009199;cursor: pointer;" @click="changEmail()">换个邮箱试试</span>
        </div>
          
        
      </div>

      <div v-if="ischangeEmail">
        <div class="md-layout-item md-size-100">
          <div class="md-layout-item md-size-20"></div>
          <div class="md-layout-item md-size-60">
            <div class="md-layout-item md-size-20"></div>
            <div class="md-layout-item md-size-60">
              <el-input v-model="email" placeholder="您要跟换的新邮箱" style="padding: 12px;"></el-input>
              <el-input v-model="usermobile" placeholder="" disabled style="padding: 12px;"></el-input>
              <div class="md-layout-item md-size-100" style="display: inline-flex;padding: 12px;">
                  <div class="md-layout-item md-size-60">
                      <el-input  v-model="VerificationCode" placeholder="输入验证码" v-on:input ="inputFunc(2)" @click="showTips(2)"></el-input>
                      <div class="inputError">
                          <span v-if="showVCErr">{{vcErrText}}</span>
                      </div>
                  </div>
                  <div class="md-layout-item md-size-40">
                      <el-button v-if="!showCount" style="background-color: #F1F3F7;" @click="getVerificationCode(1)">{{verftext}}</el-button>
                      <el-button v-if="showCount" style="background-color: #F1F3F7;" disabled  @click="getVerificationCode(1)">{{time}}{{verftext}}</el-button>
                  </div>
              </div>
            </div>
            <div class="md-layout-item md-size-20"></div>
          </div>
          <div class="md-layout-item md-size-20"></div>
        </div>
      </div>

      <div>
        <div class="md-layout-item md-size-100">
          <div class="md-layout-item md-size-20"></div>
          <div class="md-layout-item md-size-60">
              <div class="md-layout-item md-size-20"></div>
              <div class="md-layout-item md-size-60">
                <div class="md-layout-item md-size-100" style="display: inline-flex;">
                  <div class="md-layout-item md-size-40">
                    <md-button v-if="!ischangeEmail" class="md-dense  md-primary" style="background: rgb(150, 150, 150);color: white;width: 80%;" @click="goHome()">去登录</md-button>
                    <md-button v-if="ischangeEmail" class="md-dense  md-primary" style="background: rgb(150, 150, 150);color: white;width: 80%;" @click="cancel()">取消</md-button>
                  </div>
                  <div class="md-layout-item md-size-60">
                    <md-button v-if="!ischangeEmail" class="md-dense md-raised md-primary" style="margin-right: 2%;background-color: #009199;width: 90%;" @click="goEmail()">查看邮箱</md-button>
                    <md-button v-if="ischangeEmail" class="md-dense md-raised md-primary" style="margin-right: 2%;background-color: #009199;width: 90%;" @click="sendRegLink()">更改邮箱并发送激活链接</md-button>
                  </div>
                </div>
              </div>
              <div class="md-layout-item md-size-20"></div>
          </div>
          <div class="md-layout-item md-size-20"></div>
        </div>
      </div>
    </div>
    <md-dialog-alert
                  class="md-primary md-raised"
                  :md-active.sync="showAlert"
                  :md-content="AlertMessage"
                  md-confirm-text="知道了" />
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
</style>

<script>
export default {
  name: "registerActive",
  data: () => ({
    time: 0,
    counter: "",
    email: "",
    showCount: false,
    showAlert: false,
    AlertMessage: "",
    activescuuess: false,
    ischangeEmail: false,
    // phonetime: 0,
    verftext: "获取验证码",
    vcErrText: "",
    showVCErr: false
  }),
  mounted: function() {
    this.$store.commit("home/changeShowHomeBgImge", false);
    this.$store.commit("home/showTabsFun", false);
    this.$store.commit("home/showLogin", false);
  },
  methods: {
    goHome() {
      this.$store.commit("home/changeShowHomeBgImge", true);
      this.$store.commit("home/showTabsFun", false);
      this.$store.commit("home/showLogin", false);
      this.$router.push("/loginPage");
    },
    goEmail() {
      var hash = {
        "qq.com": "http://mail.qq.com",
        "gmail.com": "http://mail.google.com",
        "sina.com": "http://mail.sina.com.cn",
        "163.com": "http://mail.163.com",
        "126.com": "http://mail.126.com",
        "yeah.net": "http://www.yeah.net/",
        "sohu.com": "http://mail.sohu.com/",
        "tom.com": "http://mail.tom.com/",
        "sogou.com": "http://mail.sogou.com/",
        "139.com": "http://mail.10086.cn/",
        "hotmail.com": "http://www.hotmail.com",
        "live.com": "http://login.live.com/",
        "live.cn": "http://login.live.cn/",
        "live.com.cn": "http://login.live.com.cn",
        "189.com": "http://webmail16.189.cn/webmail/",
        "yahoo.com.cn": "http://mail.cn.yahoo.com/",
        "yahoo.cn": "http://mail.cn.yahoo.com/",
        "eyou.com": "http://www.eyou.com/",
        "21cn.com": "http://mail.21cn.com/",
        "188.com": "http://www.188.com/",
        "foxmail.com": "http://www.foxmail.com",
        "ehz.cn": "http://mail.ehz.cn"
      };
      // $(function() {
      //   $(".mail").each(function() {
      //     var url = $(this)
      //       .text()
      //       .split("@")[1];
      //     for (var j in hash) {
      //       $(this).attr("href", hash[url]);
      //     }
      //   });
      // });
      var url = this.useremail.split("@")[1];
      if (hash[url]) {
        // window.location.href = hash[url];
        window.open(hash[url]);
      }
    },
    reSendActiveEmail() {
      if (this.time !== 0) return;
      let $this = this,
        apikey = "",
        type = "post",
        url = "/IBUS/DAIG_SYS/retry_send_active_link",
        request = {
          email: this.useremail
        },
        param = {
          apikey,
          request
        };

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
            $this.beginCount();
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    changEmail() {
      this.ischangeEmail = true;
      this.VerificationCode = "";
      this.email = "";
    },
    cancel() {
      this.ischangeEmail = false;
      this.time = 0;
      this.showCount = false;
      this.verftext = "获取验证码";
    },
    countDown() {
      let _this = this;
      _this.time--;
    },
    beginCount() {
      let _this = this;
      _this.time = 60;
      _this.counter = setInterval(_this.countDown, 1000);
    },
    getVerificationCode(index) {
      if (this.time !== 0) return;
      let $this = this,
        apikey = "",
        type = "post",
        url = "",
        request = {},
        param = {
          apikey,
          request
        };
      //获取验证码
      url = "/IBUS/DAIG_SYS/sendSms";
      request.mobile = this.usermobile;
      request.type = 1;
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
            $this.verftext = "秒后重新获取验证码";
            $this.beginCount(60);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
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
    sendRegLink() {
      let $this = this,
        apikey = "",
        type = "post",
        url = "/IBUS/DAIG_SYS/change_email_send_link",
        request = {
          email: this.email,
          mobile: this.usermobile,
          verifyCode: this.VerificationCode
        },
        param = {
          apikey,
          request
        };

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
            $this.ischangeEmail = false;
            $this.time = 0;
            $this.showCount = false;
            $this.verftext = "获取验证码";
            $this.$store.commit("loginPage/getUseremail", $this.email);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  watch: {
    time: function(newVal, oldVal) {
      //   debugger;
      if (newVal == 0) {
        clearInterval(this.counter);
        //隐藏导航菜单
        this.showCount = false;
        this.verftext = "重新获取验证码";
      }
    }
  },
  computed: {
    useremail() {
      return this.$store.state.loginPage.useremail;
    },
    usermobile() {
      return this.$store.state.loginPage.usermobile;
    },
    session_id() {
      return this.$store.state.loginPage.session_id;
    }
  }
};
</script>

