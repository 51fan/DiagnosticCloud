<template>
    <div class="mypanel">
        <div v-if="!disable">
            <div>
                    <div>
                        <div class="infoItem">
                                <span class="spantitle">企业名称：</span>
                                <md-field style="width: 80%;">
                                    <label></label>
                                    <md-input v-model="enterpriseName" placeholder="" disabled></md-input>
                                </md-field>
                            </div>
                        </div>
                    <div>
                        <div class="infoItem">
                            <span class="spantitle">企业简称：</span>
                            <md-field style="width: 80%;">
                                <label></label>
                                <md-input v-model="enterpriseSName" placeholder="" disabled></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div>
                        <div class="infoItem">
                            <span class="spantitle" style="width:20%;margin: 6% 0 0 0;">所在地区：</span>
                            <cityPicker style="width:74%;margin: 4% 0 0 0;text-align: left;" ></cityPicker>
                        </div>
                    </div>
                    <div>
                        <div class="infoItem">
                            <span class="spantitle" style="width:20%">所属行业：</span>
                            <div class="md-layout-item" style="text-align: start;padding: 2% 0;">
                                <el-select v-model="value3" disabled placeholder="请选择" style="width: 30%">
                                    <el-option>{{selectIndustry1}}
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="infoItem">
                            <span class="spantitle" style="width:20%">企业规模：</span>
                            <div class="md-layout-item" style="width:80%;">
                                <md-field>
                                    <md-select v-model="companySize" name="companySize" id="companySize" md-dense disabled>
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
                            <span class="spantitle" style="width:23%">年销售收入：</span>
                            <div class="md-layout-item" style="width:75%;">
                                <md-field>
                                    <md-select v-model="companyInput" name="companyInput" id="companyInput" md-dense disabled>
                                        <md-option value="australia">1000万以内</md-option>
                                        <md-option value="brazil">5000万以内</md-option>
                                        <md-option value="japan">1亿以内</md-option>
                                        <md-option value="united-states">大于1亿</md-option>
                                    </md-select>
                                </md-field>
                            </div>
                        </div>
                    </div>
                   <div>
                        <div class="infoItem">
                            <span class="spantitle" style="width: 25%;">组织机构代码：</span>
                            <div class="md-layout-item" style="width:65%;margin: -1% 0;">
                                <md-field>
                                    <md-input v-model="OrganizationCode" placeholder="" disabled></md-input>
                                </md-field>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="infoItem">
                            <span style="    margin: 3% 2%;width: 20%;">企业图标：</span>
                            <!-- <md-field style=" width:55%;"  ref="file">
                                <label style="cursor: pointer;">上传logo</label>
                                <md-file style="cursor: pointer;"  accept="image/*" @change="updateLogo" disabled/>
                            </md-field> -->
                            <md-button class="md-raised" disabled>上传图片</md-button>
                            <img class="logoImage" v-bind:src="imageSrc"/>
                        </div>
                    </div>
            </div>
            <md-button class="md-dense md-raised md-primary" style="width:10%;margin-top: 1%;" @click="modify()">修改</md-button>
        </div>
        <div v-if="disable">
             <div>
                    <div>
                        <div class="infoItem">
                                <span class="spantitle">企业名称：</span>
                                <md-field :class="enterpriseNameMessageClass" style="width: 80%;">
                                    <label></label>
                                    <!-- <md-input v-model="enterpriseName" placeholder=""></md-input> -->
                                    <md-input v-model="enterpriseName" v-on:input ="inputFunc(1)" @click="showTips(1)" placeholder="给目标起个名字吧"  ></md-input>
                                    <span class="md-error" v-if="showenterpriseNameEmpty">{{enterpriseNameErr}}</span>
                                </md-field>
                            </div>
                        </div>
                    <div>
                        <div class="infoItem">
                            <span class="spantitle">企业简称：</span>
                            <md-field :class="enterpriseSNameMessageClass" style="width: 80%;">
                                <label></label>
                                <!-- <md-input v-model="enterpriseSName" placeholder=""></md-input> -->
                                <md-input v-model="enterpriseSName" v-on:input ="inputFunc(2)" @click="showTips(2)" placeholder="给目标起个名字吧"  ></md-input>
                                <span class="md-error" v-if="showenterpriseSNameEmpty">{{enterpriseSNameErr}}</span>
                            </md-field>
                        </div>
                    </div>
                    <div>
                        <div class="infoItem">
                        <!-- <div class="infoItem">
                            <span class="spantitle" style="width:20%">所在地区：</span>
                                <div style="display: inline-flex;width: 80%;">
                                    <div style="width:25%">
                                        <md-field>
                                            <label for="province">省</label>
                                            <md-select v-model="province" name="province" id="province" md-dense>
                                                <md-option value="guangdong">广东</md-option>
                                                <md-option value="guangxi">广西</md-option>
                                                <md-option value="jiangsu">江苏</md-option>
                                                <md-option value="anhui">安徽</md-option>
                                            </md-select>
                                        </md-field>
                                    </div>
                                    <div style="width:30%">
                                        <md-field>
                                            <label for="city">市</label>
                                            <md-select v-model="city" name="city" id="city" md-dense>
                                                <md-option value="guangzhou">广州</md-option>
                                                <md-option value="shenzhen">深圳</md-option>
                                                <md-option value="dongguan">东莞</md-option>
                                                <md-option value="foshan">佛山</md-option>
                                            </md-select>
                                        </md-field>
                                    </div>
                                    <div style="width:45%">
                                        <md-field>
                                            <label for="area">县/区</label>
                                            <md-select v-model="area" name="area" id="area" md-dense>
                                                <md-option value="futian">福田</md-option>
                                                <md-option value="nanshan">南山</md-option>
                                                <md-option value="longgang">龙岗</md-option>
                                                <md-option value="luohu">罗湖</md-option>
                                            </md-select>
                                        </md-field>
                                    </div>
                            </div>
                        </div> -->
                        <span class="spantitle" style="width:20%;margin: 6% 0 0 0;">所在地区：</span>
                        <cityPicker  style="width:74%;margin: 4% 0 0 0;text-align: left;"></cityPicker>
                    </div>
                    </div>
                    <div>
                        <div class="infoItem">
                            <span class="spantitle" style="width:20%">所属行业：</span>
                            <div class="md-layout-item" style="text-align: start;padding: 2% 0;">
                                <div style="width: 30%">
                                    <el-select
                                    v-model="selectIndustry1"
                                    @change="choseIndusty"
                                    filterable
                                    placeholder="请选择">
                                    <el-option
                                        v-for="item in Industry1"
                                        :key="item.id"
                                        :label="item.lable"
                                        :value="item.title">
                                    </el-option>
                                    </el-select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="infoItem">
                            <span class="spantitle" style="width:20%">企业规模：</span>
                            <div class="md-layout-item" style="width:80%;">
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
                            <span class="spantitle" style="width:23%">年销售收入：</span>
                            <div class="md-layout-item" style="width:75%;">
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
                    <div>
                        <div class="infoItem">
                            <span class="spantitle" style="width: 25%;">组织机构代码：</span>
                            <div class="md-layout-item" style="width:65%;margin: -1% 0;">
                                <md-field>
                                    <md-input v-model="OrganizationCode" placeholder=""></md-input>
                                </md-field>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="infoItem">
                            <span style="margin: 3% 2%;width: 20%;">企业图标：</span>
                            <md-field style=" width:55%;"  ref="file">
                                <label style="cursor: pointer;">上传logo</label>
                                <md-file style="cursor: pointer;" v-model="upadteSrc" accept="image/*" @change="updateLogo"/>
                            </md-field>
                            <!-- <input type="file" @change="updateLogo" ref="file" id="file"> -->
                            <img class="logoImage" v-bind:src="imageSrc"/>
                        </div>
                    </div>
                    
            </div>
            <md-button class="md-dense md-raised md-primary" style="width:10%;margin-top: 1%;" @click="cancel()">取消</md-button>
            <md-button class="md-dense md-raised md-primary" style="width:10%;margin-top: 1%;" @click="save()">保存</md-button>
        </div>
        <md-dialog-alert style="z-index: 111"
                  class="md-primary md-raised"
                  :md-active.sync="showAlert"
                  :md-content="AlertMessage"
                  md-confirm-text="知道了" />
    </div>
</template>

<style scoped>
.mypanel {
  text-align: center;
  text-align: -webkit-center;
  padding: 1% 10% 5% 10%;
}
.spantitle {
  width: 20%;
  margin: 3% 0;
}
.infoItem {
  width: 45%;
  display: inline-flex;
}

.logoImage {
  margin: 0 1%;
  width: 45%;
  max-width: 80px;
  max-height: 60px;
}
.cardstyle {
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
  background-color: rgba(211, 211, 211, 0.28);
  padding-bottom: 2%;
}
</style>


<script>
import cityPicker from "../../components/wheels/cityPicker/cityPicker.vue";
export default {
  name: "enterpriseInfo",
  components: {
    cityPicker
  },
  data: () => ({
    province: "",
    city: "",
    area: "",
    Industry1: "",
    selectIndustry1: "",
    companySize: "",
    OrganizationCode: "",
    companyInput: "",
    enterpriseName: "",
    enterpriseSName: "",
    imageSrc: "/static/imgs/noImage.png",
    imageStaticSrc: "",
    upadteSrc: "",
    updateData: "",
    disable: false,
    showAlert: false,
    AlertMessage: "",
    showenterpriseNameEmpty: false,
    enterpriseNameErr: "",
    showenterpriseSNameEmpty: false,
    enterpriseSNameErr: "",
    enterpriseNameHasMessages: false,
    enterpriseSNameHasMessages: false
  }),
  mounted: function() {
    this.get_industry_type();
  },
  methods: {
    inputFunc(index) {
      switch (index) {
        case 1:
          this.showenterpriseNameEmpty = false;
          this.enterpriseNameHasMessages = false;
          //如果邮箱为空，提示不能为空
          if (this.enterpriseName.length == "") {
            this.showenterpriseNameEmpty = true;
            this.enterpriseNameHasMessages = true;
            this.enterpriseNameErr = "企业名称不能为空";
          }
          if (this.enterpriseName.length > 32) {
            this.showenterpriseNameEmpty = true;
            this.enterpriseNameHasMessages = true;
            this.enterpriseNameErr = "企业名称字符长度不能超过32位";
          }
          break;
        case 2:
          this.showenterpriseSNameEmpty = false;
          this.enterpriseSNameHasMessages = false;
          if (this.enterpriseSName.length == "") {
            this.showenterpriseSNameEmpty = true;
            this.enterpriseSNameHasMessages = true;
            this.enterpriseSNameErr = "企业简称不能为空";
          }
          if (this.enterpriseSName.length > 8) {
            this.showenterpriseSNameEmpty = true;
            this.enterpriseSNameHasMessages = true;
            this.enterpriseSNameErr = "企业简称字符长度不能超过8位";
          }
          break;
        default:
          break;
      }
    },
    showTips(index) {
      switch (index) {
        case 1:
          this.showenterpriseNameEmpty = false;
          this.enterpriseNameHasMessages = false;
          //如果邮箱为空，提示不能为空
          if (this.enterpriseName.length == "") {
            this.showenterpriseNameEmpty = true;
            this.enterpriseNameHasMessages = true;
            this.enterpriseNameErr = "企业名称不能为空";
          }
          if (this.enterpriseName.length > 32) {
            this.showenterpriseNameEmpty = true;
            this.enterpriseNameHasMessages = true;
            this.enterpriseNameErr = "企业名称字符长度不能超过32位";
          }

          break;
        case 2:
          this.showenterpriseSNameEmpty = false;
          this.enterpriseSNameHasMessages = false;
          if (this.enterpriseSName.length == "") {
            this.showenterpriseSNameEmpty = true;
            this.enterpriseSNameHasMessages = true;
            this.enterpriseSNameErr = "企业简称不能为空";
          }
          if (this.enterpriseSName.length > 8) {
            this.showenterpriseSNameEmpty = true;
            this.enterpriseSNameHasMessages = true;
            this.enterpriseSNameErr = "企业简称字符长度不能超过8位";
          }
          break;
        default:
          break;
      }
    },
    updateLogo(e) {
      let _this = this;
      let files = e.target.files[0];
      if (files) {
        if (this.beforeAvatarUpload(files)) {
          let reader = new FileReader();
          reader.readAsDataURL(files);
          reader.onloadend = function() {
            _this.updateData = this.result;
            if (this.result) {
              _this.imageSrc = this.result;
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
    cancel() {
      this.disable = false;
      this.$store.commit("UserCenter/changeShowCityPicker", false);
    },
    save() {
      let $this = this,
        apikey = "",
        type = "post",
        url = " /IBUS/DAIG_SYS/modifyEnterpriseInfo ",
        request = {
          email: this.useremail,
          enterpriseName: this.enterpriseName,
          shortName: this.enterpriseSName,
          logo: this.imgUrl ? this.imgUrl : this.imageStaticSrc,
          enterpriseCode: this.OrganizationCode,
          province: this.selectProvince,
          city: this.selectCity,
          area: this.selectCounty,
          industryL1: this.selectIndustry1,
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
      this.value3 = this.selectIndustry1;

      if (this.enterpriseName.length == "") {
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
    //   if (this.enterpriseNameHasMessages || this.enterpriseSNameHasMessages)
    //     return;
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
            $this.disable = false;
            $this.$store.commit("UserCenter/changeShowCityPicker", false);
            this.disable = false;
            //显示导航菜单
            // $this.$store.commit("home/showTabsFun", true);
            // $this.$store.commit("home/getTabsactiveIndex", "1");
            // $this.$router.push("/overview");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    modify() {
      this.disable = true;
      this.$store.commit("UserCenter/changeShowCityPicker", true);
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
            // $this.imageSrc =
            //   "/IMAGE/" + res.data.image_url;
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
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
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
          console.log(res);
          $this.Industry1 = res.data.return;
          $this.getEnterpriseInfo();
        })
        .catch(err => {
          console.log(err);
        });
    },
    getEnterpriseInfo() {
      let $this = this,
        apikey = "",
        request = {
          email: this.useremail,
          session_id: this.session_id
        };
      $this.$http
        .post("/IBUS/DAIG_SYS/getEnterpriseInfo", {
          apikey,
          request
        })
        .then(res => {
          $this.enterpriseName = res.data.return.enterpriseName;
          $this.enterpriseSName = res.data.return.shortName;
          $this.imageSrc =
            res.data.return.logo == ""
              ? "/static/imgs/noImage.png"
              : "/IMAGE/" + res.data.return.logo;
          $this.imageStaticSrc = res.data.return.logo;
          $this.province = res.data.return.province;
          $this.city = res.data.return.city;
          $this.area = res.data.return.area;
          $this.selectIndustry1 = res.data.return.industryL1;
          $this.value3 =
            $this.selectIndustry1 == "" ? "" : $this.selectIndustry1;
          $this.companySize = res.data.return.scale;
          $this.companyInput = res.data.return.income;
          $this.OrganizationCode = res.data.return.enterpriseCode;
        })
        .catch(err => {
          console.log(err);
        });
    },
    choseIndusty() {
      debugger;
    }
  },
  computed: {
    useremail() {
      return this.$store.state.loginPage.useremail;
    },
    session_id() {
      return this.$store.state.loginPage.session_id;
    },
    selectProvince() {
      return this.$store.state.UserCenter.enterpriseInfo.selectProvince;
    },
    selectCity() {
      return this.$store.state.UserCenter.enterpriseInfo.selectCity;
    },
    selectCounty() {
      return this.$store.state.UserCenter.enterpriseInfo.selectCounty;
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
    }
  },
  created: () => {}
};
</script>


