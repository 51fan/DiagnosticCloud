<template>
    <div style="background-color: white;padding: 7% 15% 15%;">
         <!-- <i class="material-icons md-size-5x" style="color: limegreen">check_circle</i> -->
         <img src="/static/imgs/ic_hint_finish.png">
         <div style="padding: 20px;"><span>你的帐户： </span><span style="color:#009199">{{useremail}}</span><span>注册成功</span></div>
         <div style="padding-bottom: 15px;">激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。</div>
          <md-button class="md-dense  md-primary" style="background: rgb(150, 150, 150);color: white;" @click="goHome()">关闭</md-button>
          <md-button class="md-dense md-raised md-primary" style="margin-right: 2%;background-color: #009199;" @click="goEmail()">查看邮箱</md-button>
    </div>
    
</template>

<script>
export default {
  name: "registerSuccess",
  methods: {
    goHome() {
      this.$store.commit("home/changeShowHomeBgImge", true);
      this.$store.commit("home/showTabsFun", true);
      this.$store.commit("home/showLogin", true);
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
        window.open( hash[url])
      }
    }
  },
  computed: {
    useremail() {
      return this.$store.state.registerPage.useremail;
    }
  }
};
</script>

