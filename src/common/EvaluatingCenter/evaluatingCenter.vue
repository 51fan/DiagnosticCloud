<template>
    <div class="mypanel">
        <div class="centerHeader">
            <div class="md-layout">
                <div class="md-layout-item md-size-50" ></div>
                <div class="md-layout-item md-size-50" >
                    <div style="display: inline-flex;">
                        <md-tabs style="">
                            <md-tab id="tab-all" md-label="全部"></md-tab>
                            <md-tab id="tab-testing" md-label="测评中"></md-tab>
                            <md-tab id="tab-testEnd" md-label="已完成"></md-tab>
                        </md-tabs>
                        <md-field style="margin:0;background:white">
                            <md-input v-model="searchKey" placeholder="" style="width:100%"></md-input>
                            <i class="material-icons">search</i>
                        </md-field>
                    </div>
                </div>
            </div>
        </div>
        <div class="centerBody">
            <md-card md-with-hover>
                <md-ripple>
                    <div class="md-layout" style="width:100%">
                        <div class="md-layout-item md-size-40" >
                            <md-card-content>
                                <div class="md-layout">
                                    <div class="md-layout-item md-size-15" >
                                        <img :src="imgSrc" >
                                    </div>
                                    <div class="md-layout-item md-size-85" >
                                        <div style="padding: 10px 5px;">{{evaluationName}}</div>
                                        <div style="padding: 0 5px;">{{evaluationDesc}}</div>
                                    </div>
                                </div>
                            </md-card-content>
                        </div>
                        <div class="md-layout-item md-size-15" >
                            <md-card-content style="margin: 24px 0;">
                                <span>测评时间：{{evaluationTime}}</span> 
                            </md-card-content>
                        </div>
                        <div class="md-layout-item md-size-30" >
                            <md-card-content style="margin: 28px 0;">
                                <el-progress :percentage="70"></el-progress>
                            </md-card-content>
                        </div>
                        <div class="md-layout-item md-size-15" style="text-align: center;" >
                            <md-card-content style="margin: 24px 0;">
                                <span style="cursor: pointer;color:rgba(16, 129, 165, 0.9);" @click="gohead()">继续</span>
                            </md-card-content>
                        </div>
                    </div>  
                </md-ripple>
            </md-card>
            <md-card md-with-hover>
                <md-ripple>
                    <div class="md-layout" style="width:100%">
                        <div class="md-layout-item md-size-40" >
                            <md-card-content>
                                <div class="md-layout">
                                    <div class="md-layout-item md-size-15" >
                                        <img :src="imgSrc" >
                                    </div>
                                    <div class="md-layout-item md-size-85" >
                                        <div style="padding: 10px 5px;">{{evaluationName}}</div>
                                        <div style="padding: 0 5px;">{{evaluationDesc}}</div>
                                    </div>
                                </div>
                            </md-card-content>
                        </div>
                        <div class="md-layout-item md-size-15" >
                            <md-card-content style="margin: 24px 0;">
                                <span>测评时间：{{evaluationTime}}</span> 
                            </md-card-content>
                        </div>
                        <div class="md-layout-item md-size-30" >
                            <md-card-content style="margin: 28px 0;">
                                <el-progress :percentage="100" status="success"></el-progress>
                            </md-card-content>
                        </div>
                        <div class="md-layout-item md-size-15" style="text-align: center;" >
                            <md-card-content style="margin: 24px 0;">
                                <span style="cursor: pointer;color:rgba(16, 129, 165, 0.9);" @click="gohead()">查看报告</span>
                            </md-card-content>
                        </div>
                    </div>  
                </md-ripple>
            </md-card>
        </div>
    </div>
</template>

<style scoped>
.mypanel {
  padding-left: 10%;
  padding-right: 10%;
}

.centerHeader {
  width: 100%;
  text-align: right;
  padding-bottom: 1%;
}
.headerItem {
  width: 5%;
  margin: 15px 0 0 0;
  text-align: center;
  line-height: 48px;
}
.centerBody {
}
.md-ripple {
  display: inline-flex;
}
.md-card {
  width: 100%;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>

<script>
export default {
  name: "evalustionCenter",
  data: () => ({
    searchKey: "",
    evaluationTime: "2018-5-30",
    imgSrc: "/static/imgs/ico.png",
    evaluationName: "智能制造成熟度测评 V3.0",
    evaluationDesc: "针对智能制造标准的十个维度，全方位对企业现状进行评测"
  }),
  methods:{
      gohead(){
          console.log("答题")
      }
  }
};
</script>

