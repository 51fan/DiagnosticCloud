<template>
    <div class="mypanel">
        <div v-if="!disable">
            <div class="cardstyle">
                    <div>
                        <div class="infoItem">
                                <span class="spantitle">企业名称：</span>
                                <md-field style="width: 80%;margin: -1% 0;">
                                    <label></label>
                                    <md-input v-model="enterpriseName" placeholder="" disabled></md-input>
                                </md-field>
                            </div>
                        </div>
                    <div>
                        <div class="infoItem">
                            <span class="spantitle">企业简称：</span>
                            <md-field style="width: 80%;margin: -1% 0;">
                                <label></label>
                                <md-input v-model="enterpriseSName" placeholder="" disabled></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div>
                        <!-- <div class="infoItem">
                            <span class="spantitle" style="width:20%">所在地区：</span>
                                <div style="display: inline-flex;width: 80%;">
                                    <div style="width:25%">
                                        <md-field>
                                            <label for="province">省</label>
                                            <md-select v-model="province" name="province" id="province" md-dense disabled>
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
                                            <md-select v-model="city" name="city" id="city" md-dense disabled>
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
                                            <md-select v-model="area" name="area" id="area" md-dense disabled>
                                                <md-option value="futian">福田</md-option>
                                                <md-option value="nanshan">南山</md-option>
                                                <md-option value="longgang">龙岗</md-option>
                                                <md-option value="luohu">罗湖</md-option>
                                            </md-select>
                                        </md-field>
                                    </div>
                            </div>
                        </div> -->
                        <div class="infoItem">
                            <span class="spantitle" style="width:20%;margin: 6% 0 0 0;">所在地区：</span>
                            <cityPicker style="width:74%;margin: 6% 0 0 0;" ></cityPicker>
                        </div>
                    </div>
                    <div>
                        <div class="infoItem">
                            <span class="spantitle" style="width:20%">所属行业：</span>
                            <div class="md-layout-item" style="width:80%;margin: -3% 0;">
                                <md-field>
                                    <md-select v-model="Industry1" name="Industry1" id="Industry1" md-dense disabled>
                                        <md-option value="australia1">化学制品</md-option>
                                        <md-option value="brazil1">容器与包装</md-option>
                                        <md-option value="japan1">金属与采矿</md-option>
                                        <md-option value="united-states1">纸品与林业产品</md-option>
                                        <md-option value="australia2">电器设备</md-option>
                                        <md-option value="brazil">机械制造</md-option>
                                        <md-option value="japan">汽车零配件</md-option>
                                        <md-option value="united-states6">汽车</md-option>
                                        <md-option value="australia3">家庭耐用消费品</md-option>
                                        <md-option value="brazil3">休闲设备与日用品</md-option>
                                        <md-option value="japan2">纺织品、服装与奢侈品</md-option>
                                        <md-option value="united-states5">饮料</md-option>
                                        <md-option value="australia4">食品</md-option>
                                        <md-option value="brazil2">烟草</md-option>
                                        <md-option value="japan7">居家用品</md-option>
                                        <md-option value="united-states7">制药</md-option>
                                        <md-option value="united-states8">通讯设备、电子设备、仪器和元器件</md-option>
                                        <md-option value="united-states9">半导体产品和设备</md-option>
                                    </md-select>
                                </md-field>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="infoItem">
                            <span class="spantitle" style="width:20%">企业规模：</span>
                            <div class="md-layout-item" style="width:80%;margin: -3% 0;">
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
                            <span class="spantitle" style="width:24%">年销售收入：</span>
                            <div class="md-layout-item" style="width:75%;margin: -3% 0;">
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
                            <span class="spantitle" style="width: 35%;">组织机构代码：</span>
                            <md-field style="margin: -1% 0;">
                                <label></label>
                                <md-input v-model="OrganizationCode" placeholder="" disabled></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div>
                        <div class="infoItem">
                            <span style="    margin: 3% 2%;width: 20%;">企业图标：</span>
                            <md-field style=" width:55%;"  ref="file">
                                <label style="cursor: pointer;">上传logo</label>
                                <md-file style="cursor: pointer;" v-model="upadteSrc" accept="image/*" @change="updateLogo"/>
                            </md-field>
                            <!-- <input type="file" @change="updateLogo" ref="file" id="file"> -->
                            <img class="logoImage" v-bind:src="imageSrc"/>
                        </div>
                    </div>
            </div>
            <md-button class="md-dense md-raised md-primary" style="width:10%;margin-top: 1%;" @click="modify()">修改</md-button>
        </div>
        <div v-if="disable">
             <div class="cardstyle">
                    <div>
                        <div class="infoItem">
                                <span class="spantitle">企业名称：</span>
                                <md-field style="width: 80%;margin: -1% 0;">
                                    <label></label>
                                    <md-input v-model="enterpriseName" placeholder=""></md-input>
                                </md-field>
                            </div>
                        </div>
                    <div>
                        <div class="infoItem">
                            <span class="spantitle">企业简称：</span>
                            <md-field style="width: 80%;margin: -1% 0;">
                                <label></label>
                                <md-input v-model="enterpriseSName" placeholder=""></md-input>
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
                        <cityPicker  style="width:74%;margin: 5% 0 0 0;" :selectIndy="selectData"></cityPicker>
                    </div>
                    </div>
                    <div>
                        <div class="infoItem">
                            <span class="spantitle" style="width:20%">所属行业：</span>
                            <div class="md-layout-item" style="width:80%;margin: -3% 0;">
                                <md-field>
                                    <md-select v-model="Industry1" name="Industry1" id="Industry1" md-dense>
                                        <md-option value="australia1">化学制品</md-option>
                                        <md-option value="brazil1">容器与包装</md-option>
                                        <md-option value="japan1">金属与采矿</md-option>
                                        <md-option value="united-states1">纸品与林业产品</md-option>
                                        <md-option value="australia2">电器设备</md-option>
                                        <md-option value="brazil">机械制造</md-option>
                                        <md-option value="japan">汽车零配件</md-option>
                                        <md-option value="united-states6">汽车</md-option>
                                        <md-option value="australia3">家庭耐用消费品</md-option>
                                        <md-option value="brazil3">休闲设备与日用品</md-option>
                                        <md-option value="japan2">纺织品、服装与奢侈品</md-option>
                                        <md-option value="united-states5">饮料</md-option>
                                        <md-option value="australia4">食品</md-option>
                                        <md-option value="brazil2">烟草</md-option>
                                        <md-option value="japan7">居家用品</md-option>
                                        <md-option value="united-states7">制药</md-option>
                                        <md-option value="united-states8">通讯设备、电子设备、仪器和元器件</md-option>
                                        <md-option value="united-states9">半导体产品和设备</md-option>
                                    </md-select>
                                </md-field>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="infoItem">
                            <span class="spantitle" style="width:20%">企业规模：</span>
                            <div class="md-layout-item" style="width:80%;margin: -3% 0;">
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
                            <div class="md-layout-item" style="width:75%;margin: -3% 0;">
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
                            <span class="spantitle" style="width: 35%;">组织机构代码：</span>
                            <md-field style="margin: -1% 0;">
                                <label></label>
                                <md-input v-model="OrganizationCode" placeholder=""></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div>
                        <div class="infoItem">
                            <span style="    margin: 3% 2%;width: 20%;">企业图标：</span>
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
  margin: 14px 0;
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
    companySize: "",
    OrganizationCode: "",
    companyInput: "",
    enterpriseName: "",
    enterpriseSName: "",
    imageSrc: "/static/imgs/noImage.png",
    upadteSrc: "",
    disable: false,
    showAlert: false,
    AlertMessage: "",
    selectData: ""
  }),
  mounted: function() {
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
        //console.log(res.data.return);
        let model = res.data.return;
        $this.enterpriseName = res.data.return.enterpriseName;
        $this.enterpriseSName = res.data.return.shortName;
        $this.imageSrc = res.data.return.logo;
        $this.province = res.data.return.province;
        $this.city = res.data.return.city;
        $this.area = res.data.return.area;
        $this.Industry1 = res.data.return.industryL1;
        $this.companySize = res.data.return.scale;
        $this.companyInput = res.data.return.income;
        $this.OrganizationCode = res.data.return.enterpriseCode;
        $this.$store.commit(
          "UserCenter/changeSelectProvince",
          res.data.return.province
        );
        $this.$store.commit(
          "UserCenter/changeSelectCity",
          res.data.return.city
        );
        $this.$store.commit(
          "UserCenter/changeSelectCounty",
          res.data.return.area
        );
        $this.selectData = {
          province: res.data.return.province,
          city: res.data.return.city,
          county: res.data.return.area
        };
        eventBus.$emit("eventBusName", $this.selectData);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    updateLogo(e) {
      let _this = this;
      let files = e.target.files[0];
      if (files) {
        let reader = new FileReader();
        reader.readAsDataURL(files);
        reader.onloadend = function() {
          _this.imageSrc = this.result;
        };
        reader.onloadend();
        //this.imageSrc =  _this.src;
      } else {
        _this.imageSrc = "";
      }
    },
    cancel() {},
    save() {
      let $this = this,
        apikey = "",
        type = "post",
        url = " /IBUS/DAIG_SYS/modifyEnterpriseInfo ",
        request = {
          email: this.useremail,
          enterpriseName: this.enterpriseName,
          shortName: this.enterpriseSName,
          logo: this.imageSrc,
          enterpriseCode: this.OrganizationCode,
          province: this.selectProvince,
          city: this.selectCity,
          area: this.selectCounty,
          industryL1: this.Industry1,
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
            $this.disable = false;
            $this.$store.commit("UserCenter/changeShowCityPicker", false);
            //显示导航菜单
            $this.$store.commit("home/showTabsFun", true);

            $this.$router.push("/overview");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    modify() {
      this.disable = true;
      this.$store.commit("UserCenter/changeShowCityPicker", true);
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
    }
  }
};
</script>


