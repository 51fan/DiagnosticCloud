<template>
    <div class="mypanel">
        <div v-if="!disable">
            <div class="personalinfoHead">
                <div style="width:30%;text-align: center;margin-top: 5%;">
                    <div><img src="/static/imgs/noImage.png"></div>
                    <!-- <span style="cursor: pointer;">更换头像</span> -->
                    <md-button class="md-dense md-raised md-primary" @click="changeImage()" disabled>更换头像</md-button>
                </div>
                <div style="border-right: 3px solid lightgray;"></div>
                <div class="personalinfoHeadright">
                    <div style="  width: 70%;display: inline-flex;">
                        <span style="width:10%">姓名：</span>
                        <md-field style="margin-top: -3%;">
                            <md-input v-model="name" disabled></md-input>
                        </md-field>
                    </div>
                    <div style="  width: 70%;display: inline-flex;">
                        <span style="width:10%">邮箱：</span>
                        <md-field style="margin-top: -3%;">
                            <md-input v-model="email" disabled></md-input>
                        </md-field>
                    </div>
                    <div style="  width: 70%;display: inline-flex;">
                        <span style="width:10%">手机：</span>
                        <md-field style="margin-top: -3%;">
                            <md-input v-model="mobile" disabled></md-input>
                        </md-field>
                    </div>
                    <div style="  width: 70%;display: inline-flex;">
                        <span style="width:18%">当前企业：</span>
                        <md-field style="margin-top: -3%;">
                            <md-input v-model="company" disabled></md-input>
                        </md-field>
                    </div>
                </div>
            </div>

            <div class="personalinfobody">
                
                <div style="margin-left: 36%;display: inline-flex;margin-top: 1%;"> 
                    <span style="width:55%;margin: 9% 5% 0 0;">性别：</span>
                    <div>
                        <md-radio v-model="sex" value="male" style="width:50%;" disabled>男</md-radio>
                        <md-radio v-model="sex" value="female" style="width:10%;" disabled>女</md-radio>
                    </div>
                </div>
                <div style="margin-left: 36%;">
                    <span  style="width:10%">出生日期：</span>
                    <md-field style="width: 70%">
                        <md-input v-model="date" disabled></md-input>
                    </md-field>
                </div>
                <div style="margin-left: 36%;">
                    <span  style="width:10%">部门：</span>
                    <md-field style="width: 70%;">
                        <md-input v-model="department" disabled></md-input>
                    </md-field>
                </div>
                <div style="margin-left: 36%;">
                    <span  style="width:10%">职位：</span>
                    <md-field style="width: 70%">
                        <md-input v-model="position" disabled></md-input>
                    </md-field>
                </div>
                <div style="border-right: 3px solid lightgray;padding-right: 30px"></div>
            </div>
            <div style="text-align: -webkit-center;">
                <md-button class="md-dense md-raised md-primary" style="width:10%" @click="modify()">修改</md-button>
            </div>
        </div>
        <div v-if="disable">
            <div class="personalinfoHead">
                <div style="width:30%;text-align: center;margin-top: 5%;">
                    <div><img src="/static/imgs/noImage.png"></div>
                    <!-- <span style="cursor: pointer;">更换头像</span> -->
                    <md-button class="md-dense md-raised md-primary" @click="changeImage()">更换头像</md-button>
                </div>
                <div style="border-right: 3px solid lightgray;"></div>
                <div class="personalinfoHeadright">
                    <div style="  width: 70%;display: inline-flex;">
                        <span style="width:10%">姓名：</span>
                        <md-field style="margin-top: -3%;">
                            <md-input v-model="name" disabled></md-input>
                        </md-field>
                    </div>
                    <div style="  width: 70%;display: inline-flex;">
                        <span style="width:10%">邮箱：</span>
                        <md-field style="margin-top: -3%;">
                            <md-input v-model="email" disabled></md-input>
                        </md-field>
                    </div>
                    <div style="  width: 70%;display: inline-flex;">
                        <span style="width:10%">手机：</span>
                        <md-field style="margin-top: -3%;">
                            <md-input v-model="mobile" disabled></md-input>
                        </md-field>
                    </div>
                    <div style="  width: 70%;display: inline-flex;">
                        <span style="width:18%">当前企业：</span>
                        <md-field style="margin-top: -3%;">
                            <md-input v-model="company" disabled></md-input>
                        </md-field>
                    </div>
                </div>
            </div>

            <div class="personalinfobody">
                
                <div style="margin-left: 36%;display: inline-flex;margin-top: 1%;"> 
                    <span style="width:55%;margin: 9% 5% 0 0;">性别：</span>
                    <div>
                        <md-radio v-model="sex" value="male" style="width:50%;">男</md-radio>
                        <md-radio v-model="sex" value="female" style="width:10%;">女</md-radio>
                    </div>
                </div>
                <div style="margin-left: 36%;">
                    <span  style="width:10%">出生日期：</span>
                    <md-field style="width: 70%">
                        <md-input v-model="date"></md-input>
                    </md-field>
                </div>
                <div style="margin-left: 36%;">
                    <span  style="width:10%">部门：</span>
                    <md-field style="width: 70%">
                        <md-input v-model="department"></md-input>
                    </md-field>
                </div>
                <div style="margin-left: 36%;">
                    <span  style="width:10%">职位：</span>
                    <md-field style="width: 70%">
                        <md-input v-model="position"></md-input>
                    </md-field>
                </div>
                <div style="border-right: 3px solid lightgray;padding-right: 30px"></div>
            </div>
            <div style="text-align: -webkit-center;">
                <md-button class="md-dense md-raised md-primary" style="width:10%" @click="cancel()">取消</md-button>
                <md-button class="md-dense md-raised md-primary" style="width:10%" @click="save()">保存</md-button>
            </div>
        </div>       
    </div>
    
</template>

<style scoped>
.mypanel {
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 1%;
  /* text-align: center;
  text-align: -webkit-center; */
  text-align: left;
}

.personalinfoHead {
  display: inline-flex;
  background-color: rgba(211, 211, 211, 0.28);
  width: 100%;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  position: relative;
  z-index: 1;
  border-radius: 6px;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: color, background-color;
  will-change: color, background-color;
  padding: 5%;
  border: 1px solid lightgray;
}

.personalinfoHeadright {
  width: 70%;
  padding: 2% 0 0 5%;
}

.personalinfobody {
  margin-top: 3%;
  background-color: rgba(211, 211, 211, 0.28);
  padding-bottom: 1%;
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
}
/* .personalinfobody div {
  width: 70%;
  display: inline-block;
}
.personalinfobody span {
  width: 30%;
} */
</style>


<script>
export default {
  name: "personalInfo",
  data: () => ({
    date: "",
    department: "",
    position: "",
    name: "",
    email: "",
    mobile: "",
    company: "",
    sex: "female",
    disable: false
  }),
  methods: {
    cancel() {},
    save() {
      let self = this,
        apikey = "",
        request = {};

      // self.$http.post("",{apikey, request}).then(res=>{});

      //显示导航菜单
      this.$store.commit("home/showTabsFun", true);

      this.$router.push("/overview");
    },
    modify() {
      this.disable = true;
    },
    changeImage() {}
  }
};
</script>

