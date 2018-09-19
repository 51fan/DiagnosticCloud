<template>
    <div class="mypanel" style="font-size: xx-large;">
        <div class="md-layout" style="flex-wrap: nowrap;background-color: white;">
            <div class="md-layout-item md-size-25" style="border-right: 1px solid lightgray;">
                <img style="padding: 25% 10% 10%;" :src="conmpanyLogo"/>
                <div style="font-size: medium;padding: 5%;">{{companyName}}</div>
                <div  style="color:rgb(47, 165, 172);font-size: small;cursor: pointer;padding: 5%;" @click="viewEnterpriseInfo()">查看企业信息</div>
            </div>
            <div class="md-layout-item md-size-75" style="text-align: left;padding-top: 2%;font-size: medium;">
                <div style="width: 90%;padding-bottom: 2%;margin: 0 5%;height:200px">
                    <div class="md-layout-item md-size-100" style="display: inline-flex;border-bottom: 1px solid lightgray;height: 100%;">
                        <div class="md-layout-item md-xlarge-size-15 md-large-size-18 md-medium-size-25 md-small-size-30 md-xsmall-size-40" style="text-align:left;margin-top: 3%;">
                          <img  style="width:120px;height: 120px;border-radius: 50%;" :src="PersonalimageSrc" />
                        </div>
                        <div class="md-layout-item md-large-size-60 md-medium-size-60 md-small-size-60 md-xsmall-size-60" style="margin: 6% 0px;">
                            <div style="margin: 0 4% 1%;font-size: 24px;">{{username}}，欢迎您</div>
                            <div style="margin: 3% 3%;">
                                <span style="margin: 1%;color: rgba(120, 120, 120, 1);">{{position}}</span>
                                <span style="border-right: 2px solid #a7acb7;"></span>
                                <span style="margin: 1%;color: rgba(120, 120, 120, 1);">{{department}}</span>
                                <span style="margin: 3%;color:rgb(47, 165, 172);cursor: pointer;font-size: small;" @click="viewPersonalInfo()">进入个人中心</span>
                            </div>
                        </div>
                        <div class="md-layout-item md-large-size-20 md-medium-hide"></div>
                    </div>
                </div>
                
                <div style="width: 90%;border-bottom: 1px solid lightgray;padding-bottom: 2%;margin: 0 5%;">
                    <div style="padding: 2%">您目前进行中的测评</div>
                    <div v-if="showdiscompletedNoMessage" style="padding: 2%">
                        <md-card>
                            <md-ripple>
                                <div class="md-layout" style="width:100%;cursor: pointer;" @click="goEvalution()">
                                    <div class="md-layout-item md-size-20" ></div>
                                    <div class="md-layout-item md-size-60" style="text-align: center;height: 200px;padding: 5%;">
                                        <div style="font-size: x-large;padding: 20px;">
                                            您当前无正在进行中的测评
                                        </div>
                                        <span style="color: #009199;text-decoration: underline;font-size: medium;">去测评</span>
                                    </div>
                                    <div class="md-layout-item md-size-20" ></div>
                                </div>
                            </md-ripple>
                        </md-card>
                    </div>
                    <div v-if="!showdiscompletedNoMessage">
                        <v-layout row wrap>
                          <v-flex xl12 lg12 md12 sm12 xs12>
                            <v-layout row wrap>
                              <v-flex xl4 lg6 md6 sm12 xs12 v-for="info in discompletedArray" :key="info.idx" :info="info"  @click="gohead(info,2)">
                                <div style="padding: 5px;">
                                  <md-card style="width:100%;margin:0;" md-with-hover>
                                    <md-card-header>
                                      <div style="font-weight: 600;color: #009199;white-space: nowrap;text-overflow: ellipsis;overflow:hidden;">{{info.name}}</div>
                                    </md-card-header>

                                     <md-card-content style="height: 60px;overflow: hidden;">
                                      <span :title="info.remark"> {{info.remark}}</span>
                                      </md-card-content>
                                      <md-card-content style="min-height: 60px;">
                                        测评时间：{{info.startTime.slice(0, 10)}}
                                      </md-card-content>
                                      <md-card-actions>
                                          <div class="md-layout-item md-size-100" style="display: inline-flex;text-align:center;">
                                              <div class="md-layout-item md-size-75">
                                                  <el-progress :percentage="info.complete_degree" ></el-progress>
                                              </div>
                                              <div class="md-layout-item md-size-25">
                                                  <span style="color:rgb(47, 165, 172);" >继续</span>
                                              </div>
                                          </div>
                                      </md-card-actions>
                                  </md-card>
                                </div>
                              </v-flex>
                            </v-layout>
                          </v-flex>
                        </v-layout>
                     </div>
                    <div v-if="showdiscompletedMore" style="padding: 2% 12%;text-align: right;" >
                      <span @click="more()" style="cursor: pointer;">查看更多</span>
                    </div>
                </div>
                <div style="width: 90%;padding-bottom: 2%;margin: 0 5%;">
                     <div style="padding: 2%">已完成测评</div>
                     <div v-if="showcompletedNoMessage" style="padding: 2%">
                         <md-card>
                            <md-ripple>
                                <div class="md-layout" style="width:100%;cursor: pointer;" @click="goEvalution()">
                                    <div class="md-layout-item md-size-20" ></div>
                                    <div class="md-layout-item md-size-60" style="text-align: center;height: 200px;padding: 5%;">
                                        <div style="font-size: x-large;padding: 20px;">
                                            <span>您当前无已完成的测评</span>
                                        </div>
                                        <span style="color: #009199;text-decoration: underline;font-size: medium;">去测评</span>
                                    </div>
                                    <div class="md-layout-item md-size-20" ></div>
                                </div>
                            </md-ripple>
                        </md-card>
                     </div>
                     <div v-if="!showcompletedNoMessage">
                        <v-layout row wrap>
                          <v-flex xl12 lg12 md12 sm12 xs12>
                            <v-layout row wrap>
                              <v-flex xl4 lg6 md6 sm12 xs12 v-for="info in completedArray" :key="info.idx" :info="info"  @click="gohead(info,1)">
                                <div style="padding:5px">
                                  <md-card style="width:100%;margin: 0;" md-with-hover>
                                    <md-card-header>
                                      <div style="font-weight: 600;color: #009199;white-space: nowrap;text-overflow: ellipsis;overflow:hidden;">{{info.name}}</div>
                                    </md-card-header>

                                    <md-card-content style="min-height: 60px;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;overflow: hidden;">
                                      {{info.remark}}
                                    </md-card-content>
                                    <md-card-actions>
                                        <div class="md-layout-item md-size-100" style="display: inline-flex;text-align:center;">
                                            <div class="md-layout-item md-size-65">
                                                <span>完成时间：{{info.endTime.slice(0, 10)}}</span>
                                            </div>
                                            <div class="md-layout-item md-size-35">
                                                <span style="color:rgb(47, 165, 172);">查看报告</span>
                                            </div>
                                        </div>
                                    </md-card-actions>
                                  </md-card>
                                </div>
                              </v-flex>
                            </v-layout>
                          </v-flex>
                        </v-layout>
                     </div>
                     <div v-if="showcompletedMore" style="padding: 2% 3%;text-align: right;" >
                       <span @click="more()" style="cursor: pointer;color:RGBA(0, 145, 153, 1);font-size: 18px;font-weight: 500;">查看更多</span>
                     </div>
                </div>
            </div>
        </div>
        <md-dialog :md-active.sync="firstLogin" style="width: 60%;overflow: overlay;">
          <md-dialog-title style="border-bottom: 1px solid lightgray;padding: 2% 5%;font-size: 20pt;">完善企业信息</md-dialog-title>
            <div  style="padding: 0 10%;">
             <div class="md-layout" style="background-color: white;padding: 1% 3% 5% 3%;">
                <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0;">
                    <div class="md-layout-item md-size-5"></div>
                    <div class="md-layout-item md-size-30" style="margin: 10px 0;text-align: right;">
                        <span style="color:red">*</span>
                        <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">企业名称：</span>
                    </div>
                    <div class="md-layout-item md-size-40">
                        <el-input  v-model="enterpriseName" v-on:input ="inputFunc(1)" @click="showTips(1)" placeholder="请输入公司名称"></el-input>
                        <div class="inputError">
                            <span v-if="showenterpriseNameErr">{{enterpriseNameErr}}</span>
                        </div>
                    </div>
                    <div class="md-layout-item md-size-25"></div>
                </div>
                <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0;">
                    <div class="md-layout-item md-size-5"></div>
                    <div class="md-layout-item md-size-30" style="margin: 10px 0;text-align: right;">
                        <span style="color:red">*</span>
                        <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">企业简称：</span>
                    </div>
                    <div class="md-layout-item md-size-40">
                        <el-input v-model="enterpriseSName" v-on:input ="inputFunc(2)" @click="showTips(2)" placeholder="请输入公司简称"></el-input>
                        <div class="inputError">
                            <span  v-if="showenterpriseSNameErr">{{enterpriseSNameErr}}</span>
                        </div>
                    </div>
                    <div class="md-layout-item md-size-25"></div>
                </div>
                <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0;">
                    <div class="md-layout-item md-size-5"></div>
                    <div class="md-layout-item md-size-30" style="margin: 10px 0;text-align: right;">
                        <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">统一社会信用代码/组织机构代码：</span>
                    </div>
                    <div class="md-layout-item md-size-40">
                        <el-input v-model="OrganizationCode"  placeholder="9位或18位数字或大写字母组成" v-on:input ="inputFunc(3)" @click="showTips(3)"></el-input>
                        <div class="inputError">
                            <span  v-if="showOrganizationCodeErr">{{OrganizationCodeErr}}</span>
                        </div>
                    </div>
                    <div class="md-layout-item md-size-25"></div>
                </div>
                <!-- <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0;">
                    <div class="md-layout-item md-size-5"></div>
                    <div class="md-layout-item md-size-30" style="margin: 10px 0;text-align: right;">
                        <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">企业图标：</span>
                    </div>
                    <div class="md-layout-item md-size-40" style="text-align: left;">
                        <img class="logoImage" v-bind:src="imageSrc"/>
                        <label id="realBtn" class="btn btn-info">
                            <input type="file" id="fileInput1" name="file" class="mFileInput" style="left:-9999px;position:absolute;"  @change='updateLogo'>
                            <span class="uploadBtn">上传</span>
                        </label>
                    </div>
                    <div class="md-layout-item md-size-25"></div>
                </div> -->
                <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0;">
                    <div class="md-layout-item md-size-5">
                    </div>
                    <div class="md-layout-item md-size-30" style="margin: 10px 0;text-align: right;">
                        <span style="color:red">*</span>
                        <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">所在地区：</span>
                    </div>
                    <div class="md-layout-item md-size-40" style="text-align: left;">
                        <cityPicker style="width:100%;text-align: left;" ></cityPicker>
                    </div>
                    <div class="md-layout-item md-size-25"></div>
                </div>
                <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0;">
                    <div class="md-layout-item md-size-5">
                    </div>
                    <div class="md-layout-item md-size-30" style="margin: 10px 0;text-align: right;">
                        <span style="color:red">*</span>
                        <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">所属行业：</span>
                    </div>
                    <div class="md-layout-item md-size-40" style="text-align: left;">
                       <el-select
                            style="width: 34%"
                            v-model="selectIndustry1"
                            @change="choseIndusty1"
                            filterable
                            placeholder="请选择">
                            <el-option
                                v-for="item in Industry1"
                                :key="item.id"
                                :label="item.lable"
                                :value="item.title">
                            </el-option>
                        </el-select>
                        <el-select
                            style="width: 32%"
                            v-model="selectIndustry2"
                            @change="choseIndusty2"
                            filterable
                            placeholder="请选择">
                            <el-option
                                v-for="item in Industry2"
                                :key="item.id"
                                :label="item.lable"
                                :value="item.title">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="md-layout-item md-size-25"></div>
                </div>
                <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0;">
                    <div class="md-layout-item md-size-5">
                    </div>
                    <div class="md-layout-item md-size-30" style="margin: 10px 0;text-align: right;">
                        <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">企业规模：</span>
                    </div>
                    <div class="md-layout-item md-size-40" style="text-align: left;">
                       <el-select v-model="companySize"  placeholder="请选择" style="width: 100%">
                            <el-option value="100人以内"></el-option>
                            <el-option value="500人以内"></el-option>
                            <el-option value="1000人以内"></el-option>
                            <el-option value="大于1000人"></el-option>
                        </el-select>
                    </div>
                    <div class="md-layout-item md-size-25"></div>
                </div>
                <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0;">
                    <div class="md-layout-item md-size-5">
                    </div>
                    <div class="md-layout-item md-size-30" style="margin: 10px 0;text-align: right;">
                        <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">年销售收入：</span>
                    </div>
                    <div class="md-layout-item md-size-40" style="text-align: left;">
                       <el-select v-model="companyInput"  placeholder="请选择" style="width: 100%">
                            <el-option value="1000万以内"></el-option>
                            <el-option value="5000万以内"></el-option>
                            <el-option value="1亿以内"></el-option>
                            <el-option value="大于1亿"></el-option>
                        </el-select>
                    </div>
                    <div class="md-layout-item md-size-25"></div>
                </div>
                
                <div class="md-layout-item md-size-100" style="padding-top: 2%;display: inline-flex;">
                    <div class="md-layout-item md-size-35">
                    </div>
                    <div class="md-layout-item md-size-40" style="display: inline-flex;">
                        <el-button  style="background-color: rgb(0, 145, 153);color: white;width: 100%;" @click="save()">完成</el-button>
                    </div>
                    <div class="md-layout-item md-size-25"></div>
                </div>   
            </div>
        </div>
        </md-dialog>
        <md-dialog-alert style="z-index: 111;margin-left: 25%;margin-top: 15%;background: lightgray;"
                  class="md-primary md-raised"
                  :md-active.sync="showAlert"
                  :md-content="AlertMessage"
                  md-confirm-text="知道了" />
    </div>
</template>

<style lang="scss" scoped>
.mypanel {
  text-align: center;
  text-align: -webkit-center;
  padding: 1% 10% 5% 10%;
}

.infobody {
  text-align: -webkit-center;
}
.spantitle {
  width: 35%;
  margin: 6% 0;
}
.infoItem {
  width: 45%;
  display: inline-flex;
}
.logoImage {
  margin: 14px 0;
  width: 45%;
  max-width: 80px;
  max-height: 60px;
}
.md-dialog {
  top: 10%;
  left: 20%;
  transform: translate(0, 0);
}
.md-layout-item {
  //   height: 40px;

  &:nth-child(1) {
    // border-right: 1px solid lightgray;
  }

  &:nth-child(2) {
    // background: rgb(236, 29, 29);
  }
}
.inputError {
  color: red;
  text-align: left;
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

<script>
import cityPicker from "../../components/wheels/cityPicker/cityPicker2.vue";
import axios from "axios";
import { mapGetters, mapState } from "vuex";

export default {
  name: "overView",
  components: {
    cityPicker
  },
  data: () => ({
    username: "",
    position: "职位",
    department: "部门",
    showAlert: false,
    province: "",
    city: "",
    area: "",
    Industry1: "",
    Industry2: "",
    companySize: "",
    companyInput: "",
    enterpriseName: "",
    enterpriseSName: "",
    OrganizationCode: "",
    conmpanyLogo: "/static/imgs/ic_logo.png",
    PersonalimageSrc: "/static/imgs/ic_user.png",
    imageSrc: "/static/imgs/ic_logo.png",
    upadteSrc: "",
    updateData: "",
    imgUrl: "",
    enterpriseNameHasMessages: false,
    showenterpriseNameErr: false,
    enterpriseSNameHasMessages: false,
    showenterpriseSNameErr: false,
    AlertMessage: "",
    companyName: "公司名称",
    InfoArray: [],
    completedArray: [],
    discompletedArray: [],
    showdiscompletedNoMessage: true,
    showcompletedNoMessage: true,
    showdiscompletedMore: false,
    showcompletedMore: false,
    enterpriseNameErr: "",
    enterpriseSNameErr: "",
    selectIndustry1: "",
    selectIndustry2: "",
    showOrganizationCodeErr: false,
    OrganizationCodeErr: ""
  }),
  mounted: function() {
    if (!this.firstLogin) {
      this.getUserTestAllInfo();
    }
    if (this.firstLogin) {
      this.get_industry_type();
    }
  },
  computed: {
    firstLogin() {
      return this.$store.state.loginPage.firstLogin;
    },
    enterpriseNameMessageClass() {
      return {
        "md-invalid": this.enterpriseNameHasMessages
      };
    },
    enterpriseSNameMessageClass() {
      return {
        "md-invalid": this.enterpriseSNameHasMessages
      };
    },
    session_id: {
      get: function() {
        return this.$store.state.loginPage.session_id;
      },
      set: function(newValue) {
        this.$store.state.loginPage.session_id = newValue;
      }
    },
    useremail() {
      return this.$store.state.loginPage.useremail;
    },
    selectProvince: {
      get: function() {
        return this.$store.state.UserCenter.enterpriseInfo.selectProvince;
      },
      set: function(newValue) {
        this.$store.state.UserCenter.enterpriseInfo.selectProvince = newValue;
      }
    },
    selectCity: {
      get: function() {
        return this.$store.state.UserCenter.enterpriseInfo.selectCity;
      },
      set: function(newValue) {
        this.$store.state.UserCenter.enterpriseInfo.selectCity = newValue;
      }
    },
    selectCounty: {
      get: function() {
        return this.$store.state.UserCenter.enterpriseInfo.selectCounty;
      },
      set: function(newValue) {
        this.$store.state.UserCenter.enterpriseInfo.selectCounty = newValue;
      }
    },
    autoLogin30days() {
      return this.$store.state.autoLogin30days;
    }
  },
  methods: {
    save() {
      let $this = this,
        apikey = "",
        type = "post",
        url = "/IBUS/DAIG_SYS/registerEnterpriseInfo",
        request = {
          email: this.useremail,
          enterpriseName: this.enterpriseName,
          shortName: this.enterpriseSName,
          // logo: this.imgUrl,
          enterpriseCode: this.OrganizationCode,
          province: this.selectProvince,
          city: this.selectCity,
          area: this.selectCounty,
          industryL1: this.selectIndustry1,
          industryL2: this.selectIndustry2,
          industryL3: "",
          industryL4: "",
          industryL5: "",
          scale: this.companySize,
          income: this.companyInput,
          session_id: this.session_id
        },
        param = {
          apikey,
          request
        };

      if (this.enterpriseName == "") {
        this.showAlert = true;
        this.AlertMessage = "企业名称不能为空";
        return;
      }
      if (this.enterpriseSName == "") {
        this.showAlert = true;
        this.AlertMessage = "企业简称不能为空";
        return;
      }
      if (this.enterpriseName.length > 32) {
        this.showAlert = true;
        this.AlertMessage = "企业名称字符长度不能超过32位";
        return;
      }
      if (this.enterpriseSName.length > 8) {
        this.showAlert = true;
        this.AlertMessage = "企业简称字符长度不能超过8位";
        return;
      }

      if (this.selectCounty == "") {
        this.showAlert = true;
        this.AlertMessage = "所在地区需填写完整";
        return;
      }

      if (this.selectIndustry1 == "") {
        this.showAlert = true;
        this.AlertMessage = "所属行业不能为空";
        return;
      }
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
            $this.$store.commit("loginPage/changefirstLogin", false);
            $this.$store.commit("SET_FirstLogin", false);
            $this.getUserTestAllInfo();
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    inputFunc(index) {
      switch (index) {
        case 1:
          this.showenterpriseNameErr = false;
          //   this.enterpriseNameHasMessages = false;
          //如果邮箱为空，提示不能为空
          if (this.enterpriseName.length == "") {
            this.showenterpriseNameErr = true;
            // this.enterpriseNameHasMessages = true;
            this.enterpriseNameErr = "企业名称不能为空";
          }
          if (this.enterpriseName.length > 32) {
            this.showenterpriseNameErr = true;
            // this.enterpriseNameHasMessages = true;
            this.enterpriseNameErr = "企业名称字符长度不能超过32位";
          }
          break;
        case 2:
          this.showenterpriseSNameErr = false;
          //   this.enterpriseSNameHasMessages = false;
          if (this.enterpriseSName.length == "") {
            this.showenterpriseSNameErr = true;
            // this.enterpriseSNameHasMessages = true;
            this.enterpriseSNameErr = "企业简称不能为空";
          }
          if (this.enterpriseSName.length > 8) {
            this.showenterpriseSNameErr = true;
            // this.enterpriseSNameHasMessages = true;
            this.enterpriseSNameErr = "企业简称字符长度不能超过8位";
          }
          break;
        case 3:
          this.showOrganizationCodeErr = !this.checkOrganizationCode(
            this.OrganizationCode
          );
          this.OrganizationCodeErr = "组织机构代码/企业统一社会信用代码不合法";
        default:
          break;
      }
    },
    showTips(index) {
      switch (index) {
        case 1:
          this.showenterpriseNameErr = false;
          //   this.enterpriseNameHasMessages = false;
          //如果邮箱为空，提示不能为空
          if (this.enterpriseName.length == "") {
            this.showenterpriseNameErr = true;
            // this.enterpriseNameHasMessages = true;
            this.enterpriseNameErr = "企业名称不能为空";
          }
          if (this.enterpriseName.length > 32) {
            this.showenterpriseNameErr = true;
            // this.enterpriseNameHasMessages = true;
            this.enterpriseNameErr = "企业名称字符长度不能超过32位";
          }
          break;
        case 2:
          this.showenterpriseSNameErr = false;
          //   this.enterpriseSNameHasMessages = false;
          if (this.enterpriseSName.length == "") {
            this.showenterpriseSNameErr = true;
            // this.enterpriseSNameHasMessages = true;
            this.enterpriseSNameErr = "企业简称不能为空";
          }
          if (this.enterpriseSName.length > 8) {
            this.showenterpriseSNameErr = true;
            // this.enterpriseSNameHasMessages = true;
            this.enterpriseSNameErr = "企业简称字符长度不能超过8位";
          }
          break;
        case 3:
          this.showOrganizationCodeErr = !this.checkOrganizationCode(
            this.OrganizationCode
          );
          this.OrganizationCodeErr = "组织机构代码/企业统一社会信用代码不合法";
        default:
          break;
      }
    },
    checkOrganizationCode(e) {
      var reg1 = /^[0-9A-Z]{8}[0-9X]{1}$/;
      var reg2 = /^[159Y]{1}[1239]{1}[0-9]{6}[0-9A-Z]{10}$/;

      let text = e.toUpperCase();
      return reg1.test(text) || reg2.test(text);
    },
    viewEnterpriseInfo() {
      this.$store.commit("home/getTabsactiveIndex", "4");
      this.$store.commit("ACTIVE", "4");
      this.$router.push("/enterpriseInfo");
    },
    viewPersonalInfo() {
      this.$store.commit("home/getTabsactiveIndex", "1");
      this.$store.commit("ACTIVE", "1");
      this.$store.commit("home/showTabsFun", true);
      this.$router.push("/personalInfo");
    },
    updateLogo(e) {
      let _this = this;
      let files = e.target.files[0];
      if (files) {
        _this.upadteSrc = files.name;
        if (this.beforeAvatarUpload(files)) {
          let reader = new FileReader();
          reader.readAsDataURL(files);
          reader.onloadend = function() {
            _this.updateData = this.result;
            if (this.result) {
              _this.imageSrc = _this.updateData;
              _this.uploadImageBase64();
            }
          };
          reader.onloadend();
        }
        //this.imageSrc =  _this.src;
      } else {
        _this.imageSrc = "";
      }
    },
    uploadImageBase64() {
      let $this = this,
        apikey = "",
        type = "post",
        url = " /IBUS/DAIG_SYS/uploadImageBase64 ",
        request = {
          email: this.useremail,
          type: 1,
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
            //$this.imageSrc = "/IMAGE/" + res.data.image_url;
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
      const isLt2M = file.size / 1024 / 1024 >1;

      if (!isJPG) {
        this.$message.error("上传图片只能是 JPG、png、jpeg、gif、bmp 格式!");
      }
      if (isLt2M) {
        this.$message.error("上传图片大小不能超过 1MB!");
      }
      return isJPG && !isLt2M;
    },
    getUserTestAllInfo() {
      let $this = this,
        apikey = "",
        type = "post",
        url = "/IBUS/DAIG_SYS/getUserTestAllInfo",
        request = {
          status: "",
          key: "",
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
            $this.InfoArray = res.data.return;
            $this.$store.commit("home/getTabsactiveIndex", "1");
            $this.$store.commit("ACTIVE", "1");

            if (
              $this.InfoArray.doing.length &&
              $this.InfoArray.doing.length > 0
            ) {
              $this.showdiscompletedNoMessage = false;
              $this.discompletedArray = $this.InfoArray.doing;
              if ($this.discompletedArray.length > 3) {
                $this.discompletedArray = $this.discompletedArray.slice(0, 3);
                $this.showdiscompletedMore = true;
              }
            }

            if (
              $this.InfoArray.done.length &&
              $this.InfoArray.done.length > 0
            ) {
              $this.completedArray = $this.InfoArray.done;
              $this.showcompletedNoMessage = false;
              if ($this.completedArray.length > 3) {
                $this.completedArray = $this.completedArray.slice(0, 3);
                $this.showcompletedMore = true;
              }
            }
            $this.position = $this.InfoArray.user_enter.position;
            $this.username =
              $this.InfoArray.user_enter.name !== null
                ? $this.InfoArray.user_enter.name == ""
                  ? $this.useremail
                  : $this.InfoArray.user_enter.name
                : $this.useremail;
            $this.department =
              $this.InfoArray.user_enter.department !== null
                ? $this.InfoArray.user_enter.department == ""
                  ? "部门"
                  : $this.InfoArray.user_enter.department
                : "部门";
            $this.position =
              $this.InfoArray.user_enter.position !== null
                ? $this.InfoArray.user_enter.position == ""
                  ? "职位"
                  : $this.InfoArray.user_enter.position
                : "职位";
            $this.companyName =
              $this.InfoArray.user_enter.enterpriseName !== null
                ? $this.InfoArray.user_enter.enterpriseName == ""
                  ? "公司名称"
                  : $this.InfoArray.user_enter.enterpriseName
                : "公司名称";
            $this.PersonalimageSrc =
              $this.InfoArray.user_enter.image !== null
                ? $this.InfoArray.user_enter.image == ""
                  ? "/static/imgs/ic_user.png"
                  : "/IMAGE/" + $this.InfoArray.user_enter.image
                : "/static/imgs/ic_user.png";
            $this.conmpanyLogo =
              $this.InfoArray.user_enter.logo !== null
                ? $this.InfoArray.user_enter.logo == ""
                  ? "/static/imgs/ic_logo.png"
                  : "/IMAGE/" + $this.InfoArray.user_enter.logo
                : "/static/imgs/ic_logo.png";
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    more() {
      this.$store.commit("home/getTabsactiveIndex", "3");
      this.$store.commit("ACTIVE", "3");
      this.$store.commit("evaluatingCenter/getActiveName", "third");
      this.$store.commit("evaluatingCenter/changeShowCompletedReport", true);
      this.$router.push("/evaluatingCenter");
    },
    gohead(e, index) {
      let $this = this;
      var data = e;
      this.$store.commit("home/getTabsactiveIndex", "2");
      this.$store.commit("ACTIVE", "2");
      switch (index) {
        case 1:
          $this.$store.commit("evlaluating/changeShowevaluatingPage", true);
          $this.$store.commit("evlaluating/changeEvaluationfinished", false);
          //隐藏试卷
          $this.$store.commit("evlaluating/changeEvaluationStart", false);
          //显示报告
          $this.$store.commit("evlaluating/changeIsShowReport", true);
          $this.$store.commit("evlaluating/getReportParm", {
            key: "idx",
            value: data.idx
          });
          $this.$store.commit("evlaluating/getReportParm", {
            key: "name",
            value: data.name
          });
          $this.$store.commit("evlaluating/getReportParm", {
            key: "evaluationId",
            value: data.id
          });
          $this.$store.commit("evlaluating/getReportParm", {
            key: "enterpriseId",
            value: data.enterpriseId
          });
          $this.$store.commit("evlaluating/getCurrentEvaluationId", data.id);
          $this.$store.commit("evlaluating/getCurrentEvaluationIdx", data.idx);

          $this.$store.commit(
            "evlaluating/getCurrentEvaluationName",
            data.name
          );
          $this.$store.commit("evlaluating/changeSeeReport", true);
          // let apikey = "";
          // let request = {
          //     evaluationId: e.id,
          //     idx: e.idx,
          //     session_id: $this.session_id
          //   },
          //   param = {
          //     apikey,
          //     request
          //   },
          //   // type = "GET",
          //   // url = "/static/jsons/sorce.json";
          //   type = "POST",
          //   url = "/IBUS/DAIG_SYS/report_datas_statistic";
            
            $this.$router.push("/evaluating");
          // $this.getReport_datas_statistic(type, url, param);

          //   setTimeout(function() {
          //     $this.$root.eventBus.$emit("viewReport", true);
          //   });
          //   $this.$root.eventBus.$emit("viewReport", true);
          break;
        case 2:
          $this.$store.commit("evlaluating/changeShowevaluatingPage", true);
          $this.$store.commit("evlaluating/getCurrentEvaluationId", data.id);
          $this.$store.commit("evlaluating/getCurrentEvaluationIdx", data.idx);
          $this.$store.commit("evlaluating/changeSeeReport", false);
          $this.$store.commit(
            "evlaluating/getCurrentEvaluationName",
            data.name
          );
          $this.$store.commit(
            "evlaluating/getCurrentIndex",
            data.answered_count + 1
          );
          $this.$store.commit(
            "evlaluating/getQuestionIndex",
            data.answered_count + 1
          );
          $this.$store.commit("evlaluating/changeIsShowReport", false);
          $this.getQuestionData(data.id);
          break;
        default:
          break;
      }
    },
    get_industry_type() {
      let $this = this,
        apikey = "",
        request = {
          value: ""
        };
      $this.$http
        .post("/IBUS/DAIG_SYS/get_industry_type", {
          apikey,
          request
        })
        .then(res => {
          // console.log(res);
          $this.Industry1 = res.data.return;
          console.log($this.Industry1);
          // $this.selectIndustry1 = $this.industryL1[0].title;
          //   $this.getEnterpriseInfo();
        })
        .catch(err => {
          console.log(err);
        });
    },
    choseIndusty1(e) {
      let $this = this,
        apikey = "",
        request = {
          value: e
        };
      $this.$http
        .post("/IBUS/DAIG_SYS/get_industry_type", {
          apikey,
          request
        })
        .then(res => {
          $this.Industry2 = res.data.return;
          if ($this.Industry2 !== []) {
            $this.selectIndustry2 = $this.Industry2[0].title;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    choseIndusty2(e){
      this.selectIndustry2 = e;
    },
    goEvalution() {
      this.$store.commit("home/getTabsactiveIndex", "2");
      this.$store.commit("ACTIVE", "2");
      //隐藏首页背景图
      this.$store.commit("home/changeShowHomeBgImge", false);
      //显示导航菜单
      this.$store.commit("home/showTabsFun", true);
      //显示选择评测产品
      this.$store.commit("evlaluating/changeShowevaluatingPage", false);
      //显示答题区
      this.$store.commit("evlaluating/changeEvaluationStart", true);
      //隐藏答题完成界面
      this.$store.commit("evlaluating/changeEvaluationfinished", false);
      //隐藏报告
      this.$store.commit("evlaluating/changeIsShowReport", false);
      //重置查看报告状态
      this.$store.commit("evlaluating/changeSeeReport", false);
      //路由跳转
      this.$router.push("/evaluating");
    },
    getReport_datas_statistic(type, url, param) {
      let $this = this;
      const loading = this.$loading({
        lock: true,
        text: "加载中",
        spinner: "el-icon-loading",
        background: "rgba(61, 61, 61, 0.4)"
      });
      this.$http({
        method: type,
        url: url,
        data: param
      }).then(res => {
        if (res.data.errorCode !== 0) {
          console.log(res.data.errorMsg);
          return;
        }
        $this.$store.commit("evlaluating/getReportParm", {
          key: "datas",
          value: res.data.return
        });
        loading.close();
        $this.$router.push("/evaluating");
      });
    },
    getQuestionData(id) {
      let $this = this;
      let apikey = "",
        request = {
          id: id,
          session_id: this.session_id
        },
        // url = "/static/jsons/evaluation.json",
        // type = "GET",
        url = "/IBUS/DAIG_SYS/getQuestion",
        type = "POST",
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
          //debugger;
          if (res.data.errorCode !== 0) {
            if (res.data.errorCode == "-8") {
              $this.$store.commit(
                "evlaluating/changeShowevaluatingPage",
                false
              );
              // $this.$store.commit("evlaluating/changeShowErrAlert", true);
              $this.showErrAlert = true;
              $this.AlertMessage = res.data.errorMsg;
            } else {
              $this.showAlert = true;
              $this.AlertMessage = res.data.errorMsg;
            }
          } else {
            console.log("card");

            $this.$store.commit("evlaluating/changeShowevaluatingPage", true);
            $this.$store.commit(
              "evlaluating/getCurrentEvaluationName",
              this.name
            );
            $this.$store.commit("evlaluating/getCurrentEvaluationId", id);
            $this.$store.commit("evlaluating/changeQuestions", res.data);
            $this.$store.commit("evlaluating/changeEvaluationStart", true);

            $this.$router.push("/evaluating");
          }
          // console.log($this.questionsList);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created: () => {}
};
</script>


