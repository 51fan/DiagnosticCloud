<template>
    <div style="padding-top: 7%;">
         <i class="material-icons md-size-5x" style="color: limegreen">check_circle</i>
         <div style="padding: 20px;">你的帐户：{{useremail}} 注册成功</div>
         <div style="padding-bottom: 15px;">激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。</div>
          <md-button class="md-dense md-raised md-primary" style="margin-right: 2%;" >查看邮箱</md-button>
          <md-button class="md-dense  md-primary" style="background: lightgray;" @click="goHome()">返回首页</md-button>
    </div>
    
</template>

<script>
export default {
  name: "registerSuccess",
  methods: {
    goHome() {
      this.$store.commit("home/showTabsFun", true);
      this.$store.commit("home/showLogin" ,true);
      this.$router.push("/overview");
    }
  },
  computed:{
    useremail() {
       return this.$store.state.registerPage.useremail;
    },
  }
};
</script>

