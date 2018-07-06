<template>
    <div class="mypanel">
        <div style="text-align: center;text-align: -webkit-center;">
            <div class="pogressHead">
                <md-avatar style="background-color: cornflowerblue;border: 1px solid lightblue;margin:0;margin-left: 5%;">
                        <span>1</span>
                    </md-avatar>
                <span style="margin: 0.7% 0 0 1%;font-weight: 600;font-size: medium;">验证身份</span>
                <div style="width:30%;border-bottom: 2px solid lightgrey;margin: 1.5%;"></div>
                <md-avatar style="border: 1px solid lightblue;margin:0;">
                        <span>2</span>
                    </md-avatar>
                <span style="margin: 0.7% 0 0 1%;font-weight: 600;font-size: medium;">修改密码</span>
                <div style="width:30%;border-bottom: 2px solid lightgrey;margin: 1.5%;"></div>
                 <md-avatar style="border: 1px solid lightblue;margin:0;">
                        <span>3</span>
                    </md-avatar>
                <span style="margin: 0.7% 0 0 1%;font-weight: 600;font-size: medium;">完成</span>
            </div>

            <div class="modifyBody">
                <div style="padding: 3% 6% 3% 6%;">修改密码需要验证您的身份</div>
                <div>
                    <div style="padding: 0 6% 3% 6%;display: inline-block;">验证方式：</div>
                    <md-radio v-model="checkWay" value="mobile" >通过手机验证</md-radio>
                    <md-radio v-model="checkWay" value="email" >通过邮箱验证</md-radio>
                </div>
                <div style="padding: 0 6% 3% 6%">
                    我们将会向您的手机 +86 186*****678 发送验证短信，请将收到的验证码填入下方完成验证
                </div>
                <div style="padding: 0 6% 3% 6%">
                    <md-field style="width: 308px;display: inline-flex;" :class="VCMessageClass">
                        <md-input v-model="VerificationCode"  placeholder="输入验证码" v-on:input ="inputFunc()" @click="showTips()"></md-input>
                        <span class="md-error" v-if="showVCEmpty">短信验证码不能为空</span>
                        <span class="md-error" v-if="showVCError">短信验证码错误</span>
                    </md-field>
                    <md-button class="md-dense md-raised md-primary" style="display: inline-flex;margin: 18px 0 0 0;" @click="getVerificationCode()">获取验证码</md-button>
                </div>
            </div>
            <div style="padding-top: 1%;">
                <md-button class="md-dense md-raised md-primary" >取消</md-button>
                <md-button class="md-dense md-raised md-primary" style="margin: 6px 4%;">下一步</md-button>
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
  background-color: rgba(211, 211, 211, 0.28);
  padding-top: 2%;
  margin-top: 2%;
  text-align: left;
}
</style>

<script>
export default {
  name: "modifyPassword",
  data: () => ({
    mobile: true,
    email: false,
    checkWay: "mobile",
    VerificationCode: "",
    showVCEmpty: false,
    showVCError: false
  }),
  methods: {
    inputFunc() {},
    showTips() {},
    getVerificationCode(){},
  },
  computed: {
    VCMessageClass() {
      return {
        "md-invalid": this.VCHasMessages
      };
    }
  }
};
</script>


