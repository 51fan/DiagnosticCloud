<template>
    <div class="mypanel" style="font-size: xx-large;">
        <h6>欢迎光临</h6>
        <div style="text-align: center;">
            <img src="../../assets/images/industry.jpg" alt="">
        </div>
        <md-dialog :md-active.sync="firstLogin" style="width: 60%;">
          <md-dialog-title style="margin-left: 27%;">完善企业信息</md-dialog-title>

            <div class="infobody">
                <div>
                        <div>
                            <div class="infoItem">
                                    <span style="color:red;margin: 28px 0;">*</span>
                                    <span class="spantitle">企业名称：</span>
                                    <md-field :class="enterpriseNameMessageClass">
                                        <md-input v-model="enterpriseName" v-on:input ="inputFunc(1)" @click="showTips(1)" placeholder="给目标起个名字吧"  required></md-input>
                                        <span class="md-error" v-if="showenterpriseNameEmpty">企业名称不能为空</span>
                                    </md-field>
                                </div>
                            </div>
                        <div>
                            <div class="infoItem">
                                <span style="color:red;margin: 28px 0;">*</span>
                                <span class="spantitle">企业简称：</span>
                                <md-field :class="enterpriseSNameMessageClass">
                                    <md-input v-model="enterpriseSName" v-on:input ="inputFunc(2)" @click="showTips(2)" placeholder="给目标起个名字吧"  required></md-input>
                                    <span class="md-error" v-if="showenterpriseSNameEmpty">企业简称不能为空</span>
                                </md-field>
                            </div>
                        </div>
                        <div>
                            <div class="infoItem">
                                <span style="margin: 28px 20px;width:15%">企业图标：</span>
                                <md-field style=" width:55%;margin-right: 5%;"  ref="file">
                                    <label style="cursor: pointer;">上传logo</label>
                                    <md-file style="cursor: pointer;" v-model="upadteSrc" accept="image/*" @change="updateLogo"/>
                                </md-field>
                                <!-- <input type="file" @change="updateLogo" ref="file" id="file"> -->
                                <img class="logoImage" v-bind:src="imageSrc"/>
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
                                <span style="color:red;margin: 28px 0;">*</span>
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
                            </div>
                        </div>
                        <div>
                            <div class="infoItem">
                                <span style="color:red;margin: 28px 0;">*</span>
                                <span class="spantitle" style="width:20%">所属行业：</span>
                                <div class="md-layout-item" style="width:80%">
                                    <md-field>
                                        <md-select v-model="Industry" name="Industry" id="Industry" md-dense>
                                            <md-option value="australia">化学制品</md-option>
                                            <md-option value="brazil">容器与包装</md-option>
                                            <md-option value="japan">金属与采矿</md-option>
                                            <md-option value="united-states">纸品与林业产品</md-option>
                                            <md-option value="australia">电器设备</md-option>
                                            <md-option value="brazil">机械制造</md-option>
                                            <md-option value="japan">汽车零配件</md-option>
                                            <md-option value="united-states">汽车</md-option>
                                            <md-option value="australia">家庭耐用消费品</md-option>
                                            <md-option value="brazil">休闲设备与日用品</md-option>
                                            <md-option value="japan">纺织品、服装与奢侈品</md-option>
                                            <md-option value="united-states">饮料</md-option>
                                            <md-option value="australia">食品</md-option>
                                            <md-option value="brazil">烟草</md-option>
                                            <md-option value="japan">居家用品</md-option>
                                            <md-option value="united-states">制药</md-option>
                                            <md-option value="united-states">通讯设备、电子设备、仪器和元器件</md-option>
                                            <md-option value="united-states">半导体产品和设备</md-option>
                                        </md-select>
                                    </md-field>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="infoItem">
                                <span class="spantitle" style="width:20%">企业规模：</span>
                                <div class="md-layout-item" style="width:80%">
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
                                <span class="spantitle" style="width:20%">年销售收入：</span>
                                <div class="md-layout-item" style="width:80%">
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
               
                <md-button class="md-dense md-raised md-primary" style="width:10%;margin-top: 1%;" @click="save()">完成</md-button>
            </div>
            <md-dialog-alert style="z-index: 111"
                  class="md-primary md-raised"
                  :md-active.sync="showAlert"
                  :md-content="AlertMessage"
                  md-confirm-text="知道了" />
          <!-- <md-dialog-actions>
            <md-button class="md-primary" @click="save()">完成</md-button>
          </md-dialog-actions> -->
        </md-dialog>
    </div>
</template>

<style scoped>
.mypanel {
  text-align: center;
  text-align: -webkit-center;
  padding: 1% 10% 5% 10%;
}

.infobody {
  text-align: -webkit-center;
}
.spantitle {
  width: 160px;
  margin: 28px 0;
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
export default {
  name: "overView",
  components: {},
  data: () => ({
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
    imageSrc: "/static/imgs/noImage.png",
    upadteSrc: "",
    enterpriseNameHasMessages: false,
    showenterpriseNameEmpty: false,
    enterpriseSNameHasMessages: false,
    showenterpriseSNameEmpty: false
  }),
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
    }
  },
  methods: {
    save() {
      let $this = this,
        apikey = "",
        type = "post",
        url = "/IBUS/DAIG_SYS/registerEnterpriseInfo",
        request = {
          email: this.email,
          enterpriseName: this.enterpriseName,
          shortName: this.enterpriseSName,
          logo: this.imageSrc,
          enterpriseCode: this.OrganizationCode,
          province: this.province,
          city: this.city,
          area: this.area,
          industryL1: this.Industry,
          industryL2: "",
          industryL3: "",
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
    }
  }
};
</script>


