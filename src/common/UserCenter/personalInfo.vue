<template>
    <div class="mypanel">
        <div v-if="!disable">
            <div class="personalinfoHead">
                <div style="width:30%;text-align: center;margin-top: 5%;">
                    <!-- <el-upload
                    class='ensure ensureButt'
                    :action="importFileUrl"
                    :data="upLoadData"
                    name="importfile"
                    :onError="uploadError"
                    :onSuccess="uploadSuccess"
                    :beforeUpload="beforeAvatarUpload"
                    >
                    <el-button size="small" type="primary">确定</el-button>
                    </el-upload> -->
                </div>
                <div style="border-right: 3px solid lightgray;"></div>
                <div class="personalinfoHeadright">
                    <div style="  width: 70%;display: inline-flex;">
                        <span style="width:10%">姓名：</span>
                        <md-field style="margin-top: -3%;" v-if="!canEditName">
                            <md-input v-model="name" disabled></md-input>
                            <i class="material-icons" @click="editName()" style="cursor: pointer;">edit</i>
                        </md-field>
                        <md-field style="margin-top: -3%;" v-if="canEditName">
                            <md-input v-model="name" v-on:blur="saveName()" id="eidtName"></md-input>
                        </md-field>
                    </div>
                    <div style="  width: 70%;display: inline-flex;margin: 1% 0;">
                        <span style="width:100%">邮箱：{{useremail}}</span>
                        <!-- <md-field style="margin-top: -3%;">
                            <md-input v-model="email" disabled></md-input>
                        </md-field> -->
                    </div>
                    <div style="  width: 70%;display: inline-flex;margin: 1% 0;">
                        <span style="width:100%">手机：{{usermobile}}</span>
                        <!-- <md-field style="margin-top: -3%;">
                            <md-input v-model="mobile" disabled></md-input>
                        </md-field> -->
                    </div>
                    <div style="  width: 70%;display: inline-flex;margin: 1% 0;">
                        <span style="width:100%">当前企业：{{company}}</span>
                        <!-- <md-field style="margin-top: -3%;">
                            <md-input v-model="company" disabled></md-input>
                        </md-field> -->
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
                    <el-date-picker
                        v-model="date"
                        type="date"
                        disabled
                        placeholder="选择日期">
                    </el-date-picker>
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
                    <!-- <img class="logoImage" v-bind:src="imageSrc">
                    <md-field style=" width:55%;margin-right: 5%;"  ref="file">
                        <label style="cursor: pointer;">上传logo</label>
                        <md-file style="cursor: pointer;" v-model="upadteSrc" accept="image/*" @change="changeImage"/>
                    </md-field> -->
                    <md-field style=" width:55%;"  ref="file">
                                <label style="cursor: pointer;">上传logo</label>
                                <md-file style="cursor: pointer;" v-model="upadteSrc" accept="image/*" @change="changeImage"/>
                            </md-field>
                            <!-- <input type="file" @change="updateLogo" ref="file" id="file"> -->
                            <img class="logoImage" v-bind:src="imageSrc"/>
                </div>
                <div style="border-right: 3px solid lightgray;"></div>
                <div class="personalinfoHeadright">
                    <div style="  width: 70%;display: inline-flex;">
                        <span style="width:10%">姓名：</span>
                        <md-field style="margin-top: -3%;" v-if="!canEditName">
                            <md-input v-model="name" disabled></md-input>
                            <i class="material-icons" @click="editName()" style="cursor: pointer;">edit</i>
                        </md-field>
                        <md-field style="margin-top: -3%;" v-if="canEditName">
                            <md-input v-model="name" @change="saveName" id="eidtName"></md-input>
                        </md-field>
                    </div>
                    <div style="  width: 70%;display: inline-flex;margin: 1% 0;">
                        <span style="width:100%">邮箱：{{useremail}}</span>
                        <!-- <md-field style="margin-top: -3%;">
                            <md-input v-model="email" disabled></md-input>
                        </md-field> -->
                    </div>
                    <div style="  width: 70%;display: inline-flex;margin: 1% 0;">
                        <span style="width:100%">手机：{{usermobile}}</span>
                        <!-- <md-field style="margin-top: -3%;">
                            <md-input v-model="mobile" disabled></md-input>
                        </md-field> -->
                    </div>
                    <div style="  width: 70%;display: inline-flex;margin: 1% 0;">
                        <span style="width:100%">当前企业：{{company}}</span>
                        <!-- <md-field style="margin-top: -3%;">
                            <md-input v-model="company" disabled></md-input>
                        </md-field> -->
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
                    <el-date-picker
                        v-model="date"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
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
    sex: "female",
    company: "",
    disable: false,
    showAlert: false,
    AlertMessage: "",
    imageSrc: "/static/imgs/noImage.png",
    upadteSrc: "",
    imageUrl: "",
    canEditName: false
  }),
  mounted: function() {
    let $this = this,
      apikey = "",
      request = {
        email: this.useremail,
        session_id: this.session_id
      };
    $this.$http
      .post("/IBUS/DAIG_SYS/getUserInformation", {
        apikey,
        request
      })
      .then(res => {
        let model = res.data.result;
        $this.name = res.data.result.name;
        $this.imageSrc = res.data.result.image
          ? res.data.result.image
          : "/static/imgs/noImage.png";
        $this.email = res.data.result.email;
        $this.mobile = res.data.result.mobile;
        $this.department = res.data.result.department;
        $this.position = res.data.result.position;
        $this.date = res.data.result.birthday;
        $this.gender = res.data.result.gender;
        $this.company = res.data.result.shortName;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    cancel() {},
    save() {
      let $this = this,
        apikey = "",
        type = "post",
        url = " /IBUS/DAIG_SYS/modifyUserInfo",
        request = {
          email: this.useremail,
          position: this.position,
          department: this.department,
          birthday: this.date,
          gender: this.sex == "female"?0:1,
          session_id: this.session_id
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
            //修改登录状态
            $this.$store.commit("loginPage/changeLoginState", true);
            //隐藏登录按钮
            // $this.$store.commit("home/showLogin", false);
            //显示导航菜单
            $this.$store.commit("home/showTabsFun", true);
            //显示用户中心
            // $this.$store.commit("home/showUserCenter", true);

            $this.$router.push("/overview");
          }
        })
        .catch(error => {
          console.log(error);
        });

      //   //显示导航菜单
      //   this.$store.commit("home/showTabsFun", true);

      //   this.$router.push("/overview");
    },
    modify() {
      this.disable = true;
    },
    editName() {
      this.canEditName = true;
      setTimeout(() => {
        let dom = document.getElementById("eidtName");
        dom.focus();
      });
    },
    saveName() {
      let $this = this,
        apikey = "",
        type = "post",
        url = "/IBUS/DAIG_SYS/modifyUserName ",
        request = {
          email: this.useremail,
          name: this.name,
          session_id: this.session_id
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
            this.canEditName = false;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    changeImage(e) {
      let files = e.target.files[0];

      if (files) {
        let reader = new FileReader();
        reader.readAsDataURL(files);
        reader.onloadend = function() {
          this.imageSrc = this.result;
          console.log(this.imageSrc);
          console.log(this.upadteSrc);
        };
        reader.onloadend();
        //this.imageSrc =  _this.src;
      } else {
        this.imageSrc = "";
      }

      let $this = this,
        apikey = "",
        type = "post",
        url = " /IBUS/DAIG_SYS/uploadImage",
        request = {
          email: this.useremail,
          type: 0,
          path: this.imageSrc,
          session_id: this.session_id
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
            $this.showAlert = true;
            $this.AlertMessage = res.data.errorMsg;
          } else {
            //显示导航菜单
          }
        })
        .catch(error => {
          console.log(error);
        });
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

