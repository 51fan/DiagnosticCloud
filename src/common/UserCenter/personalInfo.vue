<template>
    <div class="mypanel">
        <div style="margin-bottom: 10px;">
            <div class="md-layout">
                <div class="md-layout-item md-size-10"></div>
                <div class="md-layout-item md-size-80">
                    <md-card>
                        <md-card-content>
                            <div class="md-layout-item md-size-100" style="display: inline-flex;padding: 25px;">
                                <!-- <div class="md-layout-item md-size-10"></div> -->
                                <div class="md-layout-item md-size-40">
                                    <div class="md-layout-item md-size-100">
                                        <div class="md-layout-item md-size-100" style="text-align:center;">
                                            <img style="width:120px;height: 120px;border-radius: 50%;" class="logoImage" v-bind:src="imageSrc"/>
                                        </div>
                                        <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                            <div class="md-layout-item md-size-10"></div>
                                            <div class="md-layout-item md-size-80" style="text-align: center;margin: 5% 0 0 0;">
                                                <!-- <md-field>
                                                    <label>上传头像</label>
                                                    <md-file style="cursor: pointer;" v-model="upadteSrc" accept="image/*" @change="updateLogo"/>
                                                </md-field> -->
                                                <label id="realBtn" class="btn btn-info">
                                                    <input type="file" id="fileInput1" name="file" class="mFileInput" style="left:-9999px;position:absolute;"  @change='updateLogo'>
                                                    <span class="uploadBtn">更换头像</span>
                                                    <!-- <md-button class="md-dense md-raised md-primary" style="width:30%;background-color: rgb(150, 150, 150);">更换头像</md-button> -->
                                                </label>
                                                <div style="margin: 10px;">建议像素120*120, 支持jpg和png</div>
                                            </div>
                                            <div class="md-layout-item md-size-10"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="md-layout-item md-size-60">
                                    <div class="md-layout-item md-size-100" style="display: inline-flex;margin-top: 30px;">
                                        <div v-if="canEditName" class="md-layout-item md-size-35" style="text-align: right;padding: 2%;font-size: 16px;color: rgba(0, 0, 0, 0.42);">
                                            <span >姓名：</span>
                                        </div>
                                        <div v-if="!canEditName" class="md-layout-item md-size-35" style="text-align: right;font-size: 16px;color: rgba(0, 0, 0, 0.42);">
                                            <span >姓名：</span>
                                        </div>
                                        <div class="md-layout-item md-size-65">
                                            <span v-if="!canEditName">{{name}}</span>
                                            <span v-if="!canEditName" @click="editName()" style="cursor: pointer;color: rgb(0, 145, 153);margin: 0 10px;">修改</span>
                                            <el-input v-if="canEditName" v-model="name" placeholder="" v-on:blur="saveName()" id="eidtName"></el-input>
                                        </div>
                                    </div>
                                    <div class="md-layout-item md-size-100" style="display: inline-flex;margin-top: 30px;">
                                        <div  class="md-layout-item md-size-35" style="text-align: right;font-size: 16px;color: rgba(0, 0, 0, 0.42);">
                                            <span >邮箱：</span>
                                        </div>
                                        <div class="md-layout-item md-size-65">
                                            <span>{{useremail}}</span>
                                            <span  @click="editUseremail()" style="cursor: pointer;color: rgb(0, 145, 153);margin: 0 10px;">修改</span>
                                        </div>
                                    </div>
                                    <div class="md-layout-item md-size-100" style="display: inline-flex;margin-top: 30px;">
                                        <div  class="md-layout-item md-size-35" style="text-align: right;font-size: 16px;color: rgba(0, 0, 0, 0.42);">
                                            <span >手机：</span>
                                        </div>
                                        <div class="md-layout-item md-size-65">
                                            <span>{{usermobile}}</span>
                                            <span  @click="editUsermobilel()" style="cursor: pointer;color: rgb(0, 145, 153);margin: 0 10px;">修改</span>
                                        </div>
                                    </div>
                                    <div class="md-layout-item md-size-100" style="display: inline-flex;margin-top: 30px;">
                                        <div  class="md-layout-item md-size-35" style="text-align: right;font-size: 16px;color: rgba(0, 0, 0, 0.42);">
                                            <span >当前企业：</span>
                                        </div>
                                        <div class="md-layout-item md-size-65">
                                            <span>{{company}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </md-card-content>
                    </md-card>
                </div>
                <div class="md-layout-item md-size-10"></div>
            </div>
        </div>
        <div v-if="!disable">
            <div class="md-layout">
                <div class="md-layout-item md-size-10"></div>
                <div class="md-layout-item md-size-80">
                     <md-card style="padding: 30px 0px 50px;">
                         <md-card-content>
                            <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                <div class="md-layout-item md-size-20"></div>
                                <div class="md-layout-item md-size-60 md-medium-size-80 md-small-size-80 md-xsmall-size-100">
                                    <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                        <div  class="md-layout-item md-size-40" style="text-align: right;padding: 15px 0;font-size: 16px;color: rgba(0, 0, 0, 0.42);">
                                            <span>性别：</span>
                                        </div>
                                        <div class="md-layout-item md-size-60">
                                             <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                                <div class="md-layout-item md-size-5"></div>
                                                <div class="md-layout-item md-size-95">
                                                    <md-radio v-model="sex" value="male"  disabled>男</md-radio>
                                                    <md-radio v-model="sex" value="female"  disabled>女</md-radio> 
                                                </div>   
                                             </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="md-layout-item md-size-20"></div>
                            </div>
                            <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                <div class="md-layout-item md-size-20"></div>
                                <div class="md-layout-item md-size-60 md-medium-size-80 md-small-size-80 md-xsmall-size-100">
                                    <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                        <div  class="md-layout-item md-size-40" style="text-align: right;padding: 15px 0;font-size: 16px;color: rgba(0, 0, 0, 0.42);">
                                            <span>出生日期：</span>
                                        </div>
                                        <div class="md-layout-item md-size-60" >
                                            <el-date-picker
                                                style="width: 100%;"
                                                v-model="date"
                                                type="date"
                                                format="yyyy 年 MM 月 dd 日"
                                                value-format="yyyy-MM-dd"
                                                disabled
                                                placeholder="选择日期">
                                            </el-date-picker>
                                        </div>
                                    </div>
                                </div>
                                 <div class="md-layout-item md-size-20"></div>
                            </div>
                            <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                <div class="md-layout-item md-size-20"></div>
                                <div class="md-layout-item md-size-60 md-medium-size-80 md-small-size-80 md-xsmall-size-100">
                                    <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                        <div  class="md-layout-item md-size-40" style="text-align: right;padding: 15px 0;font-size: 16px;color: rgba(0, 0, 0, 0.42);">
                                            <span>部门：</span>
                                        </div>
                                        <div class="md-layout-item md-size-60">
                                            <el-input  v-model="department"  placeholder="" disabled></el-input>
                                        </div>
                                    </div>
                                </div>
                                 <div class="md-layout-item md-size-20"></div>
                            </div>
                            <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                <div class="md-layout-item md-size-20"></div>
                                <div class="md-layout-item md-size-60 md-medium-size-80 md-small-size-80 md-xsmall-size-100">
                                    <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                        <div  class="md-layout-item md-size-40" style="text-align: right;padding: 15px 0;font-size: 16px;color: rgba(0, 0, 0, 0.42);">
                                            <span>职位：</span>
                                        </div>
                                        <div class="md-layout-item md-size-60">
                                             <el-input  v-model="position"  placeholder="" disabled></el-input>
                                        </div>
                                    </div>
                                </div>
                                 <div class="md-layout-item md-size-20"></div>
                            </div>
                         </md-card-content>
                         <div class="md-layout-item md-size-100" style="display: inline-flex;">
                            <div class="md-layout-item md-size-20"></div>
                            <div class="md-layout-item md-size-60 md-medium-size-80 md-small-size-80 md-xsmall-size-100">
                                <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                    <div  class="md-layout-item md-size-40"></div>
                                    <div class="md-layout-item md-size-60">
                                        <div  class="md-layout-item md-size-60 md-medium-size-80 md-small-size-80 md-xsmall-size-100">
                                            <md-button class="md-dense md-raised md-primary" style="width:30%;background-color: rgb(0, 145, 153)" @click="modify()">修改</md-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="md-layout-item md-size-20"></div>
                        </div>
                     </md-card>
                </div>
                <div class="md-layout-item md-size-10"></div>
            </div>
        </div>
        <div v-if="disable">
             <div class="md-layout">
                <div class="md-layout-item md-size-10"></div>
                <div class="md-layout-item md-size-80">
                     <md-card style="padding: 30px 0px 50px;">
                         <md-card-content>
                            <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                <div class="md-layout-item md-size-20"></div>
                                <div class="md-layout-item md-size-60 md-medium-size-80 md-small-size-80 md-xsmall-size-100">
                                    <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                        <div  class="md-layout-item md-size-40" style="text-align: right;padding: 15px 0;font-size: 16px;color: rgba(0, 0, 0, 0.42);">
                                            <span>性别：</span>
                                        </div>
                                        <div class="md-layout-item md-size-60">
                                             <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                                <div class="md-layout-item md-size-5"></div>
                                                <div class="md-layout-item md-size-95">
                                                    <md-radio v-model="sex" value="male" >男</md-radio>
                                                    <md-radio v-model="sex" value="female" >女</md-radio> 
                                                </div>   
                                             </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="md-layout-item md-size-20"></div>
                            </div>
                            <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                <div class="md-layout-item md-size-20"></div>
                                <div class="md-layout-item md-size-60 md-medium-size-80 md-small-size-80 md-xsmall-size-100">
                                    <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                        <div  class="md-layout-item md-size-40" style="text-align: right;padding: 15px 0;font-size: 16px;color: rgba(0, 0, 0, 0.42);">
                                            <span>出生日期：</span>
                                        </div>
                                        <div class="md-layout-item md-size-60" >
                                            <el-date-picker
                                                style="width: 100%;"
                                                v-model="date"
                                                type="date"
                                                format="yyyy 年 MM 月 dd 日"
                                                value-format="yyyy-MM-dd"
                                                placeholder="选择日期">
                                            </el-date-picker>
                                        </div>
                                    </div>
                                </div>
                                <div class="md-layout-item md-size-20"></div>
                            </div>
                            <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                <div class="md-layout-item md-size-20"></div>
                                <div class="md-layout-item md-size-60 md-medium-size-80 md-small-size-80 md-xsmall-size-100">
                                    <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                        <div  class="md-layout-item md-size-40" style="text-align: right;padding: 15px 0;font-size: 16px;color: rgba(0, 0, 0, 0.42);">
                                            <span>部门：</span>
                                        </div>
                                        <div class="md-layout-item md-size-60">
                                            <el-input  v-model="department"  placeholder="" v-on:input ="inputFunc(1)" @click="showTips(1)"></el-input>
                                            <div class="inputError">
                                                <span  v-if="showDepartmentErr">{{departmentErr}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="md-layout-item md-size-20"></div>
                            </div>
                            <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                <div class="md-layout-item md-size-20"></div>
                                <div class="md-layout-item md-size-60 md-medium-size-80 md-small-size-80 md-xsmall-size-100">
                                    <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                        <div  class="md-layout-item md-size-40" style="text-align: right;padding: 15px 0;font-size: 16px;color: rgba(0, 0, 0, 0.42);">
                                            <span>职位：</span>
                                        </div>
                                        <div class="md-layout-item md-size-60">
                                            <el-input  v-model="position"  placeholder="" v-on:input ="inputFunc(2)" @click="showTips(2)"></el-input>
                                            <div class="inputError">
                                                <span  v-if="showPositionErr">{{positionErr}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="md-layout-item md-size-20"></div>
                            </div>
                         </md-card-content>
                         <div class="md-layout-item md-size-100" style="display: inline-flex;">
                            <div class="md-layout-item md-size-20"></div>
                            <div class="md-layout-item md-size-60 md-medium-size-80 md-small-size-80 md-xsmall-size-100">
                                <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                    <div  class="md-layout-item md-size-40"></div>
                                    <div class="md-layout-item md-size-60">
                                        <div  class="md-layout-item md-size-60 md-medium-size-80 md-small-size-80 md-xsmall-size-100" style="display: inline-flex;">
                                            <md-button class="md-dense md-raised md-primary" style="width:30%;background-color: rgb(150, 150, 150);" @click="cancel()">取消</md-button>
                                            <md-button class="md-dense md-raised md-primary" style="width:63%;background-color: rgb(0, 145, 153)" @click="save()">保存</md-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="md-layout-item md-size-20"></div>
                        </div>
                     </md-card>
                </div>
                <div class="md-layout-item md-size-10"></div>
            </div>
        </div>
        <md-dialog-alert 
                  class="md-primary md-raised"
                  :md-active.sync="showAlert"
                  :md-content="AlertMessage"
                  md-confirm-text="知道了" /> 
        <!-- <div v-if="disable">
            <div class="md-layout">
               <div class="md-layout-item md-size-10"></div>
                <div class="md-layout-item md-size-80">
                    <md-card>
                        <md-card-content>
                            <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                <div class="md-layout-item md-size-30" style="border-right: 1px solid rgba(211, 211, 211, 0.51);"></div>
                                <div class="md-layout-item md-size-5"></div>
                                <div class="md-layout-item md-size-65">
                                    <div style="display: inline-flex;margin-top: 1%;"> 
                                        <span style="width:55%;margin: 9% 5% 0 0;">性别：</span>
                                        <div>
                                            <md-radio v-model="sex" value="male" style="width:50%;" >男</md-radio>
                                            <md-radio v-model="sex" value="female" style="width:10%;" >女</md-radio>
                                        </div>
                                    </div>
                                    <div>
                                        <span  style="width:10%">出生日期：</span>
                                        <el-date-picker
                                            v-model="date"
                                            type="date"
                                            placeholder="选择日期">
                                        </el-date-picker>
                                    </div>
                                    <div>
                                        <span  style="width:10%">部门：</span>
                                        <md-field style="width: 70%;">
                                            <md-input v-model="department" ></md-input>
                                        </md-field>
                                    </div>
                                    <div>
                                        <span  style="width:10%">职位：</span>
                                        <md-field style="width: 70%">
                                            <md-input v-model="position" ></md-input>
                                        </md-field>
                                    </div>
                                </div>
                            </div>
                        </md-card-content>
                        <div style="text-align: -webkit-center;">
                            <md-button class="md-dense md-raised md-primary" style="width:10%" @click="cancel()">取消</md-button>
                            <md-button class="md-dense md-raised md-primary" style="width:10%" @click="save()">保存</md-button>
                        </div>
                    </md-card>
                </div>
                <div class="md-layout-item md-size-10"></div>
            </div>
            <md-dialog-alert 
                  class="md-primary md-raised"
                  :md-active.sync="showAlert"
                  :md-content="AlertMessage"
                  md-confirm-text="知道了" />       
        </div> -->
    </div>   
</template>
<style>
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
.uploadBtn {
  padding: 5px 12px;
  border: 1px solid #ccc;
  display: inline-block;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
    0 1px 1px rgba(0, 0, 0, 0.075);
  border: 1px solid transparent;
  border-color: #ccc;
  background-image: linear-gradient(to bottom, #fff 0, #e0e0e0 100%);
}
</style>
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
.cardStyle {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  position: relative;
  z-index: 1;
  border-radius: 2px;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: color, background-color;
  will-change: color, background-color;
  margin-right: 16px;
  margin-left: 16px;
  overflow: visible;
}

.inputError {
  color: red;
  text-align: left;
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
    imageSrc: "/static/imgs/ic_user.png",
    upadteSrc: "",
    imageUrl: "",
    canEditName: false,
    imageUrl: "",
    param: {
      apikey: "",
      request: {
        email: this.useremail,
        type: 0,
        path: this.updateData,
        session_id: this.session_id
      }
    },
    showDepartmentErr: false,
    departmentErr: "",
    showPositionErr: false,
    positionErr: ""
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
        $this.name = res.data.result.name ? res.data.result.name : "--";
        $this.imageSrc = res.data.result.image
          ? "/IMAGE/" + res.data.result.image
          : "/static/imgs/noImage.png";
        $this.email = res.data.result.email;
        $this.mobile = res.data.result.mobile;
        $this.department = res.data.result.department;
        $this.position = res.data.result.position;
        $this.date = res.data.result.birthday;
        $this.sex = res.data.result.gender == 0 ? "female" : "male";
        $this.company = res.data.result.shortName;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    cancel() {
      this.disable = false;
    },
    comeback() {
      this.$store.commit("home/getTabsactiveIndex", "1");
      this.$store.commit("ACTIVE", "1");
      this.$store.commit("home/showTabsFun", true);
      this.$store.commit("evlaluating/changeShowevaluatingPage", false);

      this.$router.push("/overview");
    },
    save() {
      let $this = this,
        apikey = "",
        type = "post",
        url = " /IBUS/DAIG_SYS/modifyUserInfo",
        request = {
          email: this.useremail,
          position: this.position ? this.position : "",
          department: this.department ? this.department : "",
          birthday: this.date ? this.date : "",
          gender: this.sex == "female" ? 0 : 1,
          session_id: this.session_id
        },
        param = {
          apikey,
          request
        };
      if (this.department.length > 10) {
        this.showAlert = true;
        this.AlertMessage = "部门名字长度不能超过10位";
        return;
      }
      if (this.position.length > 10) {
        this.showAlert = true;
        this.AlertMessage = "职位名字长度不能超过10位";
        return;
      }
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
            // //修改登录状态
            // $this.$store.commit("loginPage/changeLoginState", true);
            // //隐藏登录按钮
            // // $this.$store.commit("home/showLogin", false);
            // //显示导航菜单
            // $this.$store.commit("home/showTabsFun", true);
            // //显示用户中心
            // // $this.$store.commit("home/showUserCenter", true);

            // $this.$router.push("/overview");

            this.disable = false;
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
    updateLogo(e) {
      let $this = this;
      let files = e.target.files[0];
      if (files) {
        if (this.beforeAvatarUpload(files)) {
          let reader = new FileReader();
          reader.readAsDataURL(files);
          reader.onloadend = function() {
            $this.updateData = this.result;
            if (this.result) {
              $this.imageSrc = this.result;
              $this.uploadImageBase64();
            }
          };
          reader.onloadend();
        }
        //this.imageSrc =  $this.src;
      } else {
        $this.imageSrc = "";
      }
    },
    uploadImageBase64() {
      let $this = this,
        apikey = "",
        type = "post",
        url = " /IBUS/DAIG_SYS/uploadImageBase64 ",
        request = {
          email: this.useremail,
          type: 0,
          path: this.updateData,
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
            // $this.disable = false;
            // $this.$store.commit("UserCenter/changeShowCityPicker", false);
            // //显示导航菜单
            // $this.$store.commit("home/showTabsFun", true);

            // $this.$router.push("/overview");
            $this.imgUrl = res.data.image_url;
            $this.$store.commit("SET_UserImage", res.data.image_url);
            $this.$store.commit("loginPage/getUserImage", res.data.image_url);
            // $this.imageSrc = "/IMAGE/" + res.data.image_url;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    beforeAvatarUpload(file) {
      const isJPG =
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/jpeg" ||
        file.type === "image/gif" ||
        file.type === "image/bmp";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error(
          "上传头像图片只能是 JPG、png、jpeg、gif、bmp 格式!"
        );
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 1MB!");
      }
      return isJPG && isLt2M;
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    editUseremail() {
      this.$router.push("/modifyEmail");
    },
    editUsermobilel() {
      this.$router.push("/modifyPhoneNum");
    },
    inputFunc(index) {
      switch (index) {
        case 1:
          this.showDepartmentErr = false;
          if (this.department.length > 10) {
            this.showDepartmentErr = true;
            this.departmentErr = "部门名字长度不能超过10位";
          }
          break;
        case 2:
          this.showPositionErr = false;
          if (this.position.length > 10) {
            this.showPositionErr = true;
            this.positionErr = "职位名字长度不能超过10位";
          }
          break;
        default:
          break;
      }
    },
    showTips(index) {
      switch (index) {
        case 1:
          this.showDepartmentErr = false;
          if (this.department.length > 10) {
            this.showDepartmentErr = true;
            this.departmentErr = "部门名字长度不能超过10位";
          }
          break;
        case 2:
          this.showPositionErr = false;
          if (this.position.length > 10) {
            this.showPositionErr = true;
            this.positionErr = "职位名字长度不能超过10位";
          }
          break;
        default:
          break;
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

