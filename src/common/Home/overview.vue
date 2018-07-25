<template>
    <div class="mypanel" style="font-size: xx-large;">
        <div class="md-layout" style="flex-wrap: nowrap;background-color: white;">
            <div class="md-layout-item md-size-20" style="border-right: 1px solid lightgray;">
                <img style="padding: 25% 10% 10%;" :src="conmpanyLogo"/>
                <div style="font-size: medium;padding: 5%;">{{companyName}}</div>
                <div  style="color:rgb(47, 165, 172);font-size: small;cursor: pointer;padding: 5%;" @click="viewEnterpriseInfo()">查看企业信息</div>
            </div>
            <div class="md-layout-item md-size-80" style="text-align: left;padding-top: 2%;font-size: medium;">
                <div class="md-layout-item md-size-100" style="display: inline-flex;border-bottom: 1px solid lightgray;padding-bottom: 2%;">
                    <div class="md-layout-item md-size-20" style="text-align:center;">
                        <md-avatar><img :src="PersonalimageSrc" /></md-avatar>
                    </div>
                    <div class="md-layout-item md-size-40">
                        <div style="margin: 1%;">{{username}}，欢迎您</div>
                        <div>
                            <span style="margin: 1%;">{{position}}</span>
                            <span style="border-right: 2px solid #a7acb7;"></span>
                            <span style="margin: 1%;">{{department}}</span>
                            <span style="margin: 3%;color:rgb(47, 165, 172);cursor: pointer;font-size: small;" @click="viewPersonalInfo()">进入个人中心</span>
                        </div>
                    </div>
                    <div class="md-layout-item md-size-40"></div>
                </div>
                <div style="width: 90%;border-bottom: 1px solid lightgray;padding-bottom: 2%;margin: 0 5%;">
                    <div style="padding: 2%">您目前进行中的测评</div>
                    <div v-if="showdiscompletedNoMessage" style="padding: 2%">您当前无进行中的测评</div>
                    <div v-if="!showdiscompletedNoMessage" class="md-layout-item md-size-30 md-medium-size-33 md-small-size-50 md-xsmall-size-100"  v-for="info in discompletedArray" :key="info.idx" :info="info" style="display: inline-flex;min-height: 200px;" @click="gohead(info,2)">
                      <md-card style="width: 100%;margin-bottom: 16px;" md-with-hover>
                        <md-card-header>
                          <div class="md-title">{{info.name}}</div>
                        </md-card-header>

                        <md-card-content style="min-height: 60px;">
                          {{info.remark}}
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
                    <div v-if="showdiscompletedMore" style="padding: 2% 12%;text-align: right;" >
                      <span @click="more()" style="cursor: pointer;">查看更多</span>
                    </div>
                </div>
                <div style="width: 90%;padding-bottom: 2%;margin: 0 5%;">
                     <div style="padding: 2%">已完成测评</div>
                     <div v-if="showcompletedNoMessage" style="padding: 2%">您当前无已完成的测评</div>
                     <div v-if="!showcompletedNoMessage" class="md-layout-item md-size-30 md-medium-size-33 md-small-size-50 md-xsmall-size-100" v-for="info in completedArray" :key="info.idx" :info="info" style="display: inline-flex;min-height: 200px;" @click="gohead(info,1)">
                      <md-card style="width: 100%;margin-bottom: 16px;" md-with-hover>
                        <md-card-header>
                          <div class="md-title">{{info.name}}</div>
                        </md-card-header>

                        <md-card-content style="min-height: 60px;">
                          {{info.remark}}
                        </md-card-content>
                        <md-card-actions>
                            <div class="md-layout-item md-size-100" style="display: inline-flex;text-align:center;">
                                <div class="md-layout-item md-size-65">
                                    <span>测评时间：{{info.endTime.slice(0, 10)}}</span>
                                </div>
                                <div class="md-layout-item md-size-35">
                                    <span style="color:rgb(47, 165, 172);">查看报告</span>
                                </div>
                            </div>
                        </md-card-actions>
                      </md-card>
                    </div>
                    <div v-if="showcompletedMore" style="padding: 2% 12%;text-align: right;" >
                      <span @click="more()" style="cursor: pointer;">查看更多</span>
                    </div>
                </div>
            </div>
        </div>
        <md-dialog :md-active.sync="firstLogin" style="width: 60%;overflow: overlay;">
          <md-dialog-title style="margin-left: 27%;">完善企业信息</md-dialog-title>

            <div class="infobody">
                <div>
                        <div>
                            <div class="infoItem">
                                    <span style="color:red;margin: 6% 0;">*</span>
                                    <span class="spantitle">企业名称：</span>
                                    <md-field :class="enterpriseNameMessageClass">
                                        <md-input v-model="enterpriseName" v-on:input ="inputFunc(1)" @click="showTips(1)" placeholder="给目标起个名字吧"  required></md-input>
                                        <span class="md-error" v-if="showenterpriseNameEmpty">企业名称不能为空</span>
                                    </md-field>
                                </div>
                            </div>
                        <div>
                            <div class="infoItem">
                                <span style="color:red;margin: 6% 0;">*</span>
                                <span class="spantitle">企业简称：</span>
                                <md-field :class="enterpriseSNameMessageClass">
                                    <md-input v-model="enterpriseSName" v-on:input ="inputFunc(2)" @click="showTips(2)" placeholder="给目标起个名字吧"  required></md-input>
                                    <span class="md-error" v-if="showenterpriseSNameEmpty">企业简称不能为空</span>
                                </md-field>
                            </div>
                        </div>
                        <div>
                            <div class="infoItem">
                                <span style="margin: 6% 0;width:26%">企业图标：</span>
                                <md-field style=" width:48%;margin-right: 5%;"  ref="file">
                                    <label style="cursor: pointer;">上传logo</label>
                                    <md-file style="cursor: pointer;" v-model="upadteSrc" accept="image/*" @change="updateLogo"/>
                                </md-field>
                                <!-- <input type="file" @change="updateLogo" ref="file" id="file"> -->
                                <md-avatar><img :src="imageSrc"/></md-avatar>
                            </div>
                        </div>
                        <div>
                            <div class="infoItem">
                                <span class="spantitle">组织机构代码：</span>
                                <md-field>
                                    <label></label>
                                    <md-input v-model="OrganizationCode"></md-input>
                                </md-field>
                            </div>
                        </div>
                        <div>
                            <div class="infoItem">
                                <span style="color:red;margin: 6% 0;">*</span>
                                <span class="spantitle" style="width:24%">所在地区：</span>
                                    <cityPicker style="width:74%;margin:4% 0 0 0"></cityPicker>
                            </div>
                        </div>
                        <div>
                            <div class="infoItem">
                                <span style="color:red;margin: 6% 0;">*</span>
                                <span class="spantitle" style="width:24%">所属行业：</span>
                                <div class="md-layout-item" style="width:75%">
                                    <md-field>
                                        <md-select v-model="Industry" name="Industry" id="Industry" md-dense>
                                            <md-option value="australia1">化学制品</md-option>
                                            <md-option value="brazil1">容器与包装</md-option>
                                            <md-option value="japan1">金属与采矿</md-option>
                                            <md-option value="united-states6">纸品与林业产品</md-option>
                                            <md-option value="australia2">电器设备</md-option>
                                            <md-option value="brazil">机械制造</md-option>
                                            <md-option value="japan5">汽车零配件</md-option>
                                            <md-option value="united-states4">汽车</md-option>
                                            <md-option value="australia3">家庭耐用消费品</md-option>
                                            <md-option value="brazil2">休闲设备与日用品</md-option>
                                            <md-option value="japan">纺织品、服装与奢侈品</md-option>
                                            <md-option value="united-states3">饮料</md-option>
                                            <md-option value="australia6">食品</md-option>
                                            <md-option value="brazil3">烟草</md-option>
                                            <md-option value="japan">居家用品</md-option>
                                            <md-option value="united-states">制药</md-option>
                                            <md-option value="united-states1">通讯设备、电子设备、仪器和元器件</md-option>
                                            <md-option value="united-states2">半导体产品和设备</md-option>
                                        </md-select>
                                    </md-field>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="infoItem">
                                <span class="spantitle" style="width:24%">企业规模：</span>
                                <div class="md-layout-item" style="width:75%">
                                    <md-field>
                                        <md-select v-model="companySize" name="companySize" id="companySize" md-dense>
                                            <md-option value="australia">100人以内</md-option>
                                            <md-option value="brazil">500人以内</md-option>
                                            <md-option value="japan">1000人以内</md-option>
                                            <md-option value="united-states">大于1000人</md-option>
                                        </md-select>
                                    </md-field>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="infoItem">
                                <span class="spantitle" style="width:24%">年销售收入：</span>
                                <div class="md-layout-item" style="width:75%">
                                    <md-field>
                                        <md-select v-model="companyInput" name="companyInput" id="companyInput" md-dense>
                                            <md-option value="australia">1000万以内</md-option>
                                            <md-option value="brazil">5000万以内</md-option>
                                            <md-option value="japan">1亿以内</md-option>
                                            <md-option value="united-states">大于1亿</md-option>
                                        </md-select>
                                    </md-field>
                                </div>
                            </div>
                        </div>
                </div>
               
                <md-button class="md-dense md-raised md-primary" style="width:10%;" @click="save()">完成</md-button>
            </div>
            <md-dialog-alert style="z-index: 111"
                  class="md-primary md-raised"
                  :md-active.sync="showAlert"
                  :md-content="AlertMessage"
                  md-confirm-text="知道了" />
        </md-dialog>
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
    username: "季先生",
    position:"生产工程师",
    department:"生产部门",
    showAlert: false,
    province: "",
    city: "",
    area: "",
    Industry: "",
    companySize: "",
    companyInput: "",
    enterpriseName: "",
    enterpriseSName: "",
    OrganizationCode: "",
    conmpanyLogo: "/static/imgs/company.png",
    PersonalimageSrc: "/static/imgs/avatar.png",
    imageSrc: "/static/imgs/avatar.png",
    upadteSrc: "",
    updateData: "",
    imgUrl: "",
    enterpriseNameHasMessages: false,
    showenterpriseNameEmpty: false,
    enterpriseSNameHasMessages: false,
    showenterpriseSNameEmpty: false,
    AlertMessage: "",
    companyName: "华制智能制造技术有限公司",
    InfoArray: [],
    completedArray: [],
    discompletedArray: [],
    showdiscompletedNoMessage: true,
    showcompletedNoMessage: true,
    showdiscompletedMore: false,
    showcompletedMore: false
  }),
  mounted: function() {
    let $this = this;
    this.getUserTestAllInfo();
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
        this.$store.state.$store.state.loginPage.session_id = newValue;
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
          logo: this.imgUrl,
          enterpriseCode: this.OrganizationCode,
          province: this.selectProvince,
          city: this.selectCity,
          area: this.selectCounty,
          industryL1: this.Industry,
          industryL2: "",
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
            this.$store.commit("loginPage/changefirstLogin", false);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    inputFunc(index) {
      switch (index) {
        case 1:
          //如果邮箱为空，提示不能为空
          this.showenterpriseNameEmpty =
            this.enterpriseName == "" ? true : false;
          this.enterpriseNameHasMessages = this.showenterpriseNameEmpty;
          break;
        case 2:
          this.showenterpriseSNameEmpty =
            this.enterpriseSName == "" ? true : false;
          this.enterpriseSNameHasMessages = this.showenterpriseSNameEmpty;
          break;
        default:
          break;
      }
    },
    showTips(index) {
      switch (index) {
        case 1:
          //如果邮箱为空，提示不能为空
          this.showenterpriseNameEmpty =
            this.enterpriseName == "" ? true : false;
          this.enterpriseNameHasMessages = this.showenterpriseNameEmpty;
          break;
        case 2:
          this.showenterpriseSNameEmpty =
            this.enterpriseSName == "" ? true : false;
          this.enterpriseSNameHasMessages = this.showenterpriseSNameEmpty;
          break;
        default:
          break;
      }
    },
    viewEnterpriseInfo() {
      this.$store.commit("home/getTabsactiveIndex", "4");
      this.$store.commit("ACTIVE", "4");
      this.$router.push("/enterpriseInfo");
    },
    viewPersonalInfo() {
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
      const isJPG = file.type === "image/jpeg"||file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
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
            $this.position =  $this.InfoArray.user_enter.position;
            $this.username =  $this.InfoArray.user_enter.name;
            $this.department =  $this.InfoArray.user_enter.department;
            $this.companyName = $this.InfoArray.user_enter.enterpriseName;
            $this.PersonalimageSrc = "/IMAGE/" + $this.InfoArray.user_enter.image;
            $this.conmpanyLogo = "/IMAGE/" + $this.InfoArray.user_enter.logo;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    more() {
      this.$store.commit("home/getTabsactiveIndex", "3");
      this.$store.commit("ACTIVE", "3");
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
            key: "name",
            value: data.name
          });
          $this.$store.commit("evlaluating/getCurrentEvaluationId", data.id);
          $this.$store.commit("evlaluating/getCurrentEvaluationIdx", data.idx);

          $this.$store.commit(
            "evlaluating/getCurrentEvaluationName",
            data.name
          );
          $this.$store.commit("evlaluating/changeSeeReport", true);
          $this.$router.push("/evaluating");
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
          $this.$store.commit("evlaluating/changeSeeReport", false);
          $this.$store.commit("evlaluating/changeEvaluationStart", true);
          $this.$router.push("/evaluating");
          break;
        default:
          break;
      }
    }
  },
  created: () => {}
};
</script>


