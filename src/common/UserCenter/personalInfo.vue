<template>
    <div class="mypanel">
        <div class="personalinfoHead">
            <div style="width:30%;text-align: center;margin-top: 5%;">
                <div><img src="/static/imgs/noImage.png"></div>
                <!-- <span style="cursor: pointer;">更换头像</span> -->
                <md-button class="md-dense md-raised md-primary" @click="changeImage()">更换头像</md-button>
            </div>
            <div style="border-right: 3px solid lightgray;"></div>
            <div class="personalinfoHeadright">
                <div style="  width: 70%;display: inline-block;">
                    <span style="width:10%">姓名：</span>
                    <md-field >
                        <md-input v-model="name"></md-input>
                    </md-field>
                </div>
                 <div style="  width: 70%;display: inline-block;">
                    <span style="width:10%">邮箱：</span>
                    <md-field >
                        <md-input v-model="email"></md-input>
                    </md-field>
                </div>
                 <div style="  width: 70%;display: inline-block;">
                    <span style="width:10%">手机：</span>
                    <md-field >
                        <md-input v-model="mobil"></md-input>
                    </md-field>
                </div>
                 <div style="  width: 70%;display: inline-block;">
                    <span style="width:10%">当前企业：</span>
                    <md-field >
                        <md-input v-model="company"></md-input>
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
            <md-button class="md-dense md-raised md-primary" style="width:10%" @click="modify()">修改</md-button>
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
}

.personalinfoHeadright {
  width: 70%;
  padding: 2% 0 0 5%;
}

.personalinfobody {
  margin-top: 3%;
  background-color: rgba(211, 211, 211, 0.28);
  padding-bottom: 1%;
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
    mobil: "",
    company: "",
    sex: "female"
  }),
  methods: {
    modify() {},
    changeImage(){}
  }
};
</script>

