<template>
    <div class="mypanel">
        <div>
          <div style="background-color: white;padding: 5%;">
              <v-layout row wrap>
                <v-flex xl4 lg4   hidden-md-and-down style="border-right: 1px solid #efefef;">
                    <div style="margin-top: 30%;">
                        <div class="md-layout-item md-size-100" style="margin: 10px 0;">
                            <img class="logoImage" v-bind:src="imageSrc"/>
                        </div>
                        <div class="md-layout-item md-size-100" style="margin: 10px 0;">
                          <label id="realBtn" style="line-height: 1;">
                            <input type="file" id="fileInput1" name="file" class="mFileInput" style="left:-9999px;position:absolute;"  @change='updateLogo'>
                            <span class="uploadBtn">上传</span>
                          </label>
                          <div style="margin: 15px;">
                            <span>建议像素180*180, 支持jpg和png</span>
                          </div>
                        </div>
                    </div>
                </v-flex>
                <v-flex md12 sm12 xs12  hidden-lg-and-up>
                    <div>
                        <div class="md-layout-item md-size-100" style="margin: 10px 0;">
                            <img class="logoImage" v-bind:src="imageSrc"/>
                        </div>
                        <div class="md-layout-item md-size-100" style="margin: 10px 0;">
                          <label id="realBtn" style="line-height: 1;">
                            <input type="file" id="fileInput1" name="file" class="mFileInput" style="left:-9999px;position:absolute;"  @change='updateLogo'>
                            <span class="uploadBtn">上传</span>
                          </label>
                          <div style="margin: 15px;">
                            <span>建议像素180*180, 支持jpg和png</span>
                          </div>
                        </div>
                    </div>
                </v-flex>
                <v-flex v-if="disable" xl8 lg8 md12 sm12 xs12>
                    <div class="md-layout" style="background-color: white;padding: 5%;">
                        <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0;">
                            
                            <div class="md-layout-item md-size-30" style="margin: 10px 0;text-align: right;">
                                <span style="color:red">*</span>
                                <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">企业名称：</span>
                            </div>
                            <div class="md-layout-item md-size-60">
                                <el-input  v-model="NewenterpriseName" v-on:input ="inputFunc(1)" @click="showTips(1)" placeholder="请输入公司名称"></el-input>
                                <div class="inputError">
                                    <span v-if="showenterpriseNameErr">{{enterpriseNameErr}}</span>
                                </div>
                            </div>
                            
                        </div>
                        <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0;">
                            
                            <div class="md-layout-item md-size-30" style="margin: 10px 0;text-align: right;">
                                <span style="color:red">*</span>
                                <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">企业简称：</span>
                            </div>
                            <div class="md-layout-item md-size-60">
                                <el-input v-model="NewenterpriseSName" v-on:input ="inputFunc(2)" @click="showTips(2)" placeholder="请输入公司简称"></el-input>
                                <div class="inputError">
                                    <span  v-if="showenterpriseSNameErr">{{enterpriseSNameErr}}</span>
                                </div>
                            </div>
                            
                        </div>
                        <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0;">
                            
                            <div class="md-layout-item md-size-30" style="margin: 10px 0;text-align: right;">
                                <div>
                                  <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">统一社会信用代码/</span>
                                </div>
                                <div>
                                  <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">组织机构代码：</span>
                                </div>
                            </div>
                            <div class="md-layout-item md-size-60" style="margin-top: 2%;">
                                <el-input v-model="NewOrganizationCode"  placeholder="9位或18位数字或大写字母组成" v-on:input ="inputFunc(3)" @click="showTips(3)"></el-input>
                                <div class="inputError">
                                    <span  v-if="showOrganizationCodeErr">{{OrganizationCodeErr}}</span>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0;">
                            
                            <div class="md-layout-item md-size-30" style="margin: 10px 0;text-align: right;">
                                <span style="color:red">*</span>
                                <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">所在地区：</span>
                            </div>
                            <div class="md-layout-item md-size-60" style="text-align: left;">
                                <cityPicker style="width:100%;text-align: left;" ></cityPicker>
                            </div>
                            
                        </div>
                        <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0;">
                            
                            <div class="md-layout-item md-size-30" style="margin: 10px 0;text-align: right;">
                                <span style="color:red">*</span>
                                <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">所属行业：</span>
                            </div>
                            <div class="md-layout-item md-size-60" style="text-align: left;">
                              <div class="md-layout-item md-size-100" style="display: inline-flex;">
                                <div class="md-layout-item md-size-40 md-medium-size-35 md-small-size-80 md-xsmall-size-100">
                                  <el-select
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
                                </div>
                                <div class="md-layout-item md-size-40 md-medium-size-32 md-small-size-80 md-xsmall-size-100">
                                  <el-select
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
                              </div>
                            </div>
                            
                        </div>
                        <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0;">
                            
                            <div class="md-layout-item md-size-30" style="margin: 10px 0;text-align: right;">
                                <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">企业规模：</span>
                            </div>
                            <div class="md-layout-item md-size-60" style="text-align: left;">
                              <el-select v-model="NewcompanySize"  placeholder="请选择" style="width: 100%">
                                    <el-option value="100人以内"></el-option>
                                    <el-option value="500人以内"></el-option>
                                    <el-option value="1000人以内"></el-option>
                                    <el-option value="大于1000人"></el-option>
                                </el-select>
                            </div>
                            
                        </div>
                        <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0;">
                            
                            <div class="md-layout-item md-size-30" style="margin: 10px 0;text-align: right;">
                                <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">年销售收入：</span>
                            </div>
                            <div class="md-layout-item md-size-60" style="text-align: left;">
                              <el-select v-model="NewcompanyInput"  placeholder="请选择" style="width: 100%">
                                    <el-option value="1000万以内"></el-option>
                                    <el-option value="5000万以内"></el-option>
                                    <el-option value="1亿以内"></el-option>
                                    <el-option value="大于1亿"></el-option>
                                </el-select>
                            </div>
                            
                        </div>
                        
                        <div class="md-layout-item md-size-100" style="padding-top: 2%;display: inline-flex;">
                            <div class="md-layout-item md-size-30">
                            </div>
                            <div class="md-layout-item md-size-60" style="display: inline-flex;">
                                <div class="md-layout-item md-size-35" style="margin-right: 10px;">
                                    <el-button style="background-color: rgb(150, 150, 150);color: white;width: 100%;" @click="cancel()">取消</el-button>
                                </div>
                                <div class="md-layout-item md-size-63">
                                    <el-button  style="background-color: rgb(0, 145, 153);color: white;width: 100%;" @click="save()">保存</el-button>
                                </div>
                            </div>
                            
                        </div>   
                    </div>
                </v-flex>
                <v-flex v-if="!disable" xl8 lg8 md12 sm12 xs12>
                  <div class="md-layout" style="padding: 5%;">
                    <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0;">    
                        <div class="md-layout-item md-size-30" style="margin: 10px 0;text-align: right;">
                            <span style="color:red">*</span>
                            <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">企业名称：</span>
                        </div>
                        <div class="md-layout-item md-size-60">
                            <el-input v-model="OldenterpriseName" disabled placeholder="请输入公司名称"></el-input>
                        </div>    
                    </div>
                    <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0;">    
                        <div class="md-layout-item md-size-30" style="margin: 10px 0;text-align: right;">
                            <span style="color:red">*</span>
                            <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">企业简称：</span>
                        </div>
                        <div class="md-layout-item md-size-60">
                            <el-input v-model="OldenterpriseSName" disabled placeholder="请输入公司简称"></el-input>
                        </div>    
                    </div>
                    <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0;">    
                        <div class="md-layout-item md-size-30" style="margin: 10px 0;text-align: right;">
                            <div>
                              <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">统一社会信用代码/</span>
                            </div>
                            <div>
                              <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">组织机构代码：</span>
                            </div>
                        </div>
                        <div class="md-layout-item md-size-60" style="margin-top: 2%;">
                            <el-input v-model="OldOrganizationCode" disabled placeholder="9位或18位数字或大写字母组成"></el-input>
                        </div>    
                    </div>
                  
                    <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0;">    
                        <div class="md-layout-item md-size-30" style="margin: 10px 0;text-align: right;">
                            <span style="color:red">*</span>
                            <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">所在地区：</span>
                        </div>
                        <div class="md-layout-item md-size-60" style="text-align: left;">
                            <cityPicker style="width:100%;text-align: left;" ></cityPicker>
                        </div>    
                    </div>
                    <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0;">    
                        <div class="md-layout-item md-size-30" style="margin: 10px 0;text-align: right;">
                            <span style="color:red">*</span>
                            <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">所属行业：</span>
                        </div>
                        <div class="md-layout-item md-size-60" style="text-align: left;">
                          <div class="md-layout-item md-size-100" style="display: inline-flex;">
                            <div class="md-layout-item md-size-40 md-medium-size-35 md-small-size-80 md-xsmall-size-100">
                              <el-select v-model="vaule1" disabled placeholder="请选择">
                                  <el-option :value="selectIndustry1"></el-option>
                              </el-select>
                            </div>
                            <div class="md-layout-item md-size-40 md-medium-size-32 md-small-size-80 md-xsmall-size-100">
                              <el-select v-model="vaule2" disabled placeholder="请选择">
                                  <el-option :value="selectIndustry2"></el-option>
                              </el-select>
                            </div>
                          </div>    
                        </div>    
                    </div>
                    <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0;">    
                        <div class="md-layout-item md-size-30" style="margin: 10px 0;text-align: right;">
                            <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">企业规模：</span>
                        </div>
                        <div class="md-layout-item md-size-60" style="text-align: left;">
                          <el-select v-model="OldcompanySize" disabled placeholder="请选择" style="width: 100%">
                                <el-option>100人以内</el-option>
                                <el-option>500人以内</el-option>
                                <el-option>1000人以内</el-option>
                                <el-option>大于1000人</el-option>
                            </el-select>
                        </div>    
                    </div>
                    <div class="md-layout-item md-size-100" style="display: inline-flex;margin: 10px 0;">    
                        <div class="md-layout-item md-size-30" style="margin: 10px 0;text-align: right;">
                            <span class="spantitle" style="font-size: 16px;color: rgba(0,0,0,0.42);">年销售收入：</span>
                        </div>
                        <div class="md-layout-item md-size-60" style="text-align: left;">
                          <el-select v-model="OldcompanyInput" disabled placeholder="请选择" style="width: 100%">
                                <el-option>1000万以内</el-option>
                                <el-option>5000万以内</el-option>
                                <el-option>1亿以内</el-option>
                                <el-option>大于1亿</el-option>
                            </el-select>
                        </div>    
                    </div>
                    
                    <div class="md-layout-item md-size-100" style="padding-top: 2%;display: inline-flex;">
                        <div class="md-layout-item md-size-30">
                        </div>
                        <div class="md-layout-item md-size-60" style="display: inline-flex;">
                            <el-button  style="background-color: rgb(0, 145, 153);color: white;width: 100%;" @click="modify()">修改</el-button>
                        </div>
                        
                    </div>  
                  </div>
                </v-flex>
              </v-layout>
          </div>
            
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
  max-width: 180px;
  max-height: 180px;
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
.inputError {
  color: red;
  text-align: left;
}
.uploadBtn {
  padding: 5px 15px;
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
    vaule1: "",
    vaule2: "",
    Industry1: "",
    Industry2: "",
    selectIndustry1: "",
    selectIndustry2: "",
    OldcompanySize: "",
    OldOrganizationCode: "",
    OldcompanyInput: "",
    OldenterpriseName: "",
    OldenterpriseSName: "",
    NewenterpriseName: "",
    NewenterpriseSName: "",
    NewOrganizationCode: "",
    NewcompanySize: "",
    NewcompanyInput: "",
    imageSrc: "",
    // NewimageSrc: "",
    imageStaticSrc: "",
    upadteSrc: "",
    updateData: "",
    disable: false,
    showAlert: false,
    AlertMessage: "",
    showenterpriseNameErr: false,
    enterpriseNameErr: "",
    showenterpriseSNameErr: false,
    enterpriseSNameErr: "",
    enterpriseNameHasMessages: false,
    enterpriseSNameHasMessages: false,
    showOrganizationCodeErr: false,
    OrganizationCodeErr: ""
  }),
  mounted: function() {
    this.get_industry_type();
  },
  methods: {
    inputFunc(index) {
      switch (index) {
        case 1:
          this.showenterpriseNameErr = false;
          //   this.enterpriseNameHasMessages = false;
          //如果邮箱为空，提示不能为空
          if (this.NewenterpriseName.length == "") {
            this.showenterpriseNameErr = true;
            // this.enterpriseNameHasMessages = true;
            this.enterpriseNameErr = "企业名称不能为空";
          }
          if (this.NewenterpriseName.length > 32) {
            this.showenterpriseNameErr = true;
            // this.enterpriseNameHasMessages = true;
            this.enterpriseNameErr = "企业名称字符长度不能超过32位";
          }
          break;
        case 2:
          this.showenterpriseSNameErr = false;
          this.enterpriseSNameHasMessages = false;
          if (this.NewenterpriseSName.length == "") {
            this.showenterpriseSNameErr = true;
            // this.enterpriseSNameHasMessages = true;
            this.enterpriseSNameErr = "企业简称不能为空";
          }
          if (this.NewenterpriseSName.length > 8) {
            this.showenterpriseSNameErr = true;
            // this.enterpriseSNameHasMessages = true;
            this.enterpriseSNameErr = "企业简称字符长度不能超过8位";
          }
          break;
        case 3:
          this.showOrganizationCodeErr = !this.checkOrganizationCode(
            this.NewOrganizationCode
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
          if (this.NewenterpriseName.length == "") {
            this.showenterpriseNameErr = true;
            // this.enterpriseNameHasMessages = true;
            this.enterpriseNameErr = "企业名称不能为空";
          }
          if (this.NewenterpriseName.length > 32) {
            this.showenterpriseNameErr = true;
            // this.enterpriseNameHasMessages = true;
            this.enterpriseNameErr = "企业名称字符长度不能超过32位";
          }

          break;
        case 2:
          this.showenterpriseSNameErr = false;
          //   this.enterpriseSNameHasMessages = false;
          if (this.NewenterpriseSName.length == "") {
            this.showenterpriseSNameErr = true;
            // this.enterpriseSNameHasMessages = true;
            this.enterpriseSNameErr = "企业简称不能为空";
          }
          if (this.NewenterpriseSName.length > 8) {
            this.showenterpriseSNameErr = true;
            // this.enterpriseSNameHasMessages = true;
            this.enterpriseSNameErr = "企业简称字符长度不能超过8位";
          }
          break;
        case 3:
          this.showOrganizationCodeErr = !this.checkOrganizationCode(
            this.NewOrganizationCode
          );
          this.OrganizationCodeErr = "组织机构代码/企业统一社会信用代码不合法";
        default:
          break;
      }
    },
    checkOrganizationCode(e) {
      let reg1 = /^[0-9A-Z]{8}[0-9X]{1}$/;
      let reg2 = /^[159Y]{1}[1239]{1}[0-9]{6}[0-9A-Z]{10}$/;
      let text = e.toUpperCase();
      return reg1.test(text) || reg2.test(text);
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
    cancel() {
      this.disable = false;
      this.showenterpriseNameErr = false;
      this.NewenterpriseName = this.OldenterpriseName;
      this.NewenterpriseSName = this.OldenterpriseSName;
      this.NewOrganizationCode = this.OldOrganizationCode;
      this.NewcompanySize = this.OldcompanySize;
      this.NewcompanyInput = this.OldcompanyInput;
      // this.NewimageSrc = this.imageSrc;
      this.selectProvince = this.province;
      this.selectCity = this.city;
      this.selectCounty = this.area;
      this.selectIndustry1 = this.vaule1;
      this.selectIndustry2 = this.vaule2;
      this.$store.commit("UserCenter/changeShowCityPicker", false);
      //   this.imgUrl = this.imageStaticSrc;
      //   this.imageSrc =
      //     this.imageStaticSrc == ""
      //       ? "/static/imgs/noImage.png"
      //       : "/IMAGE/" + this.imageStaticSrc;
    },
    modify() {
      this.disable = true;
      this.province = this.selectProvince;
      this.city = this.selectCity;
      this.area = this.selectCounty;
      this.NewenterpriseName = this.OldenterpriseName;
      this.NewenterpriseSName = this.OldenterpriseSName;
      this.NewOrganizationCode = this.OldOrganizationCode;
      this.NewcompanySize = this.OldcompanySize;
      this.NewcompanyInput = this.OldcompanyInput;
      // this.NewimageSrc = this.imageSrc;
      this.selectIndustry1 = this.vaule1;
      this.selectIndustry2 = this.vaule2;
      this.$store.commit("UserCenter/changeShowCityPicker", true);
    },
    save() {
      let $this = this,
        apikey = "",
        type = "post",
        url = " /IBUS/DAIG_SYS/modifyEnterpriseInfo ",
        request = {
          email: this.useremail,
          enterpriseName: this.NewenterpriseName,
          shortName: this.NewenterpriseSName,
          // logo: this.imgUrl ? this.imgUrl : this.imageStaticSrc,
          enterpriseCode: this.NewOrganizationCode,
          province: this.selectProvince,
          city: this.selectCity,
          area: this.selectCounty,
          industryL1: this.selectIndustry1,
          industryL2: this.selectIndustry2 ? this.selectIndustry2 : "",
          industryL3: "",
          industryL4: "",
          industryL5: "",
          scale: this.NewcompanySize,
          income: this.NewcompanyInput,
          session_id: this.session_id
        },
        param = {
          apikey,
          request
        };
      this.vaule1 = this.selectIndustry1;
      this.vaule2 = this.selectIndustry2;

      if (this.NewenterpriseName.length == "") {
        this.showAlert = true;
        this.AlertMessage = "企业名称不能为空";
        return;
      }
      if (this.NewenterpriseSName == "") {
        this.showAlert = true;
        this.AlertMessage = "企业简称不能为空";
        return;
      }
      if (this.NewenterpriseName.length && this.NewenterpriseName.length > 32) {
        this.showAlert = true;
        this.AlertMessage = "企业名称字符长度不能超过32位";
        return;
      }
      if (
        this.NewenterpriseSName.length &&
        this.NewenterpriseSName.length > 8
      ) {
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
            $this.province = $this.selectProvince;
            $this.city = $this.selectCity;
            $this.area = $this.selectCounty;
            $this.OldenterpriseName = $this.NewenterpriseName;
            $this.OldenterpriseSName = $this.NewenterpriseSName;
            $this.OldOrganizationCode = $this.NewOrganizationCode;
            $this.OldcompanySize = $this.NewcompanySize;
            $this.OldcompanyInput = $this.NewcompanyInput;
            $this.vaule1 = $this.selectIndustry1;
            $this.vaule2 = $this.selectIndustry2;

            $this.disable = false;
            $this.$store.commit("UserCenter/changeShowCityPicker", false);
            // $this.imageSrc = $this.NewimageSrc;

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
      const isLt2M = file.size / 1024 / 1024 > 1;

      if (!isJPG) {
        this.$message.error("上传图片只能是 JPG、png、jpeg、gif、bmp 格式!");
      }
      if (isLt2M) {
        this.$message.error("上传图片大小不能超过 1MB!");
      }
      return isJPG && !isLt2M;
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
          //   console.log(res);
          $this.Industry1 = res.data.return;
          $this.selectIndustry1 = $this.Industry1[0].title;
          $this.vaule1 = this.selectIndustry1;
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
          $this.OldenterpriseName = res.data.return.enterpriseName;
          $this.OldenterpriseSName = res.data.return.shortName;
          $this.imageSrc =
            res.data.return.logo == ""
              ? "/static/imgs/ic_logo.png"
              : "/IMAGE/" + res.data.return.logo;
          // $this.imageStaticSrc = res.data.return.logo;
          // $this.province = res.data.return.province;
          // $this.city = res.data.return.city;
          $this.area = res.data.return.area;
          $this.OldcompanySize = res.data.return.scale;
          $this.OldcompanyInput = res.data.return.income;
          $this.OldOrganizationCode = res.data.return.enterpriseCode;
          $this.selectIndustry1 = res.data.return.industryL1;
          $this.selectIndustry2 = res.data.return.industryL2;
          $this.vaule1 =
            $this.selectIndustry1 == "" ? "" : $this.selectIndustry1;
          $this.vaule2 =
            $this.selectIndustry2 == "" ? "" : $this.selectIndustry2;
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
          //   console.log(res);
          $this.Industry2 = res.data.return;
          if ($this.Industry2 !== []) {
            $this.selectIndustry2 = $this.Industry2[0].title;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    choseIndusty2(e) {
      this.selectIndustry2 = e;
    }
  },
  computed: {
    useremail() {
      return this.$store.state.loginPage.useremail;
    },
    session_id() {
      return this.$store.state.loginPage.session_id;
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


