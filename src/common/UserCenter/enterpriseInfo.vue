<template>
    <div class="mypanel">
        <div>
            <div class="infoItem">
                <span class="spantitle">企业名称：</span>
                <md-field>
                    <label></label>
                    <md-input v-model="enterpriseName" placeholder=""></md-input>
                </md-field>
            </div>
        </div>
        <div>
            <div class="infoItem">
                <span class="spantitle">企业简称：</span>
                <md-field>
                    <label></label>
                    <md-input v-model="enterpriseName" placeholder=""></md-input>
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
                    <md-input v-model="enterpriseName" placeholder=""></md-input>
                </md-field>
            </div>
        </div>
        <div>
            <div class="infoItem">
                <span class="spantitle" style="width:20%">所在地区：</span>
                    <div style="display: inline-flex;width: 80%;">
                        <div style="width:25%">
                            <md-field>
                                <label for="country">省</label>
                                <md-select v-model="country" name="country" id="country" md-dense>
                                    <md-option value="guangdong">广东</md-option>
                                    <md-option value="guangxi">广西</md-option>
                                    <md-option value="jiangsu">江苏</md-option>
                                    <md-option value="anhui">安徽</md-option>
                                </md-select>
                            </md-field>
                        </div>
                        <div style="width:30%">
                            <md-field>
                                <label for="country">市</label>
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
                                <label for="country">县/区</label>
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
        <md-button class="md-dense md-raised md-primary" style="width:10%" @click="modify()">修改</md-button>
    </div>
</template>

<style scoped>
.mypanel {
  text-align: center;
  text-align: -webkit-center;
  background-color: rgba(211, 211, 211, 0.28);
  padding: 3% 10% 5% 10%;
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
</style>


<script>
export default {
  name: "enterpriseInfo",
  data: () => ({
    country: "",
    city: "",
    area: "",
    Industry: "",
    companySize: "",
    companyInput: "",
    enterpriseName: "",
    imageSrc: "/static/imgs/noImage.png",
    upadteSrc: ""
  }),
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
    modify() {
      let self = this,
        apiKry = "",
        require = {
          country: self.country,
          city: self.city,
          area: self.area,
          Industry: self.Industry,
          companySize: self.companySize,
          companyInput: self.companyInput,
          enterpriseName: self.enterpriseName,
          upadteSrc: self.upadteSrc
        };

      // self.$http.post("",{apiKry, require}).then(res=>{});

      //显示导航菜单
      this.$store.commit("home/showTabsFun", true);

      this.$router.push("/overview");
    }
  }
  //   computed:{
  //       changeSrc:function () {

  //           return
  //       }
  //   }
};
</script>


