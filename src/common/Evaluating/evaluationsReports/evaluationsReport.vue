<template>
   <div style="background-color: white;">
        <h2 style="text-align: center;padding: 90px 0px;font-size: 30px;font-size: 36px;font-weight: 300;">
            {{reportData.enterpriseName}}测评报告
        </h2>
        <v-layout row wrap>
            <v-flex lg1 md1 sm1 xs1></v-flex>
            <v-flex lg10 md10 sm10 xs10>
                <div>
                    <div style="color: black;font-size: 18px;margin: 10px 0;">企业基本信息</div>
                    <v-flex lg12 md12 sm12 xs12>
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex>
                    <div style="margin: 60px 0;">
                        <h3  style="text-align: center;margin: 36px 0;font-size: 24px;font-weight: 300;letter-spacing: normal;">{{reportData.enterpriseName}}</h3>
                        <v-layout row wrap>
                            <v-flex lg6 md6 sm6 xs6 style="text-align:center;margin:10px 0;">
                                <span>收入规模：</span><span>{{reportData.scale}}</span>
                            </v-flex>
                            <v-flex lg6 md6 sm6 xs6 style="text-align:center;margin:10px 0;">
                                <span>人员规模:</span><span>{{reportData.income}}</span>
                            </v-flex>
                            <v-flex lg6 md6 sm6 xs6 style="text-align:center;margin:10px 0;">
                                <span>企业区域：</span><span>{{reportData.province}}</span><span>/</span><span>{{reportData.city}}</span><span>/</span><span>{{reportData.area}}</span>
                            </v-flex>
                            <v-flex lg6 md6 sm6 xs6 style="text-align:center;margin:10px 0;">
                                <span>行业类别：</span><span>{{reportData.industryL1}}</span>
                            </v-flex>
                        </v-layout>
                    </div>
                </div>
            </v-flex>
             <v-flex lg1 md1 sm1 xs1></v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex lg1 md1 sm1 xs1></v-flex>
            <v-flex lg10 md10 sm10 xs10>
                <div>
                    <div style="color: black;font-size: 18px;margin: 10px 0;">整体结果</div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:0 0 30px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex>
                    <div>
                        <h3  style="margin: 36px 0;font-weight: 300;letter-spacing: normal;font-size: 24px;">企业能力整体成熟度</h3>
                        <v-layout row wrap>
                            <v-flex lg12 md12 sm12 xs12>
                                <div id="chartOption1" style="width:100%;height:400px"></div>
                            </v-flex>
                            <v-flex lg12 md12 sm12 xs12 style="margin:10px 0;">
                                <div style="margin: 30px 0;">
                                    <div style="margin: 10px;">
                                        <span>贵公司的整体水平超过了</span>
                                        <span style="color:red;font-size:14px;font-weight: 600;">{{beyondALLact}}%</span>
                                        <span>的企业，期望水平超过了</span>
                                        <span style="color:green;font-size:14px;font-weight: 600;">{{beyondALLexp}}%</span>
                                        <span>的企业；</span>
                                    </div>
                                    <div style="margin: 10px;">
                                        <span>在{{beyondL11.label}}上，企业超过了</span>
                                        <span style="color:red;font-size:14px;font-weight: 600;">{{beyondL11.active}}%</span>
                                        <span>的企业，期望水平超过了</span>
                                        <span style="color:green;font-size:14px;font-weight: 600;">{{beyondL11.expect}}%</span>
                                        <span>的企业；</span>
                                    </div>
                                    <div style="margin: 10px;">
                                        <span>在{{beyondL12.label}}上，企业超过了</span>
                                        <span style="color:red;font-size:14px;font-weight: 600;">{{beyondL12.active}}%</span>
                                        <span>的企业，期望水平超过了</span>
                                        <span style="color:green;font-size:14px;font-weight: 600;">{{beyondL12.expect}}%</span>
                                        <span>的企业；</span>
                                    </div>
                                </div>
                            </v-flex>
                        </v-layout>
                    </div>
                </div>
            </v-flex>
             <v-flex lg1 md1 sm1 xs1></v-flex>
        </v-layout>
        
        <v-layout row wrap>
            <v-flex lg1 md1 sm1 xs1></v-flex>
            <v-flex lg10 md10 sm10 xs10>
                <div>
                    <div style="color: black;font-size: 18px;margin: 10px 0;">综合分析</div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:0 0 30px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex>
                    <div>
                        <h3  style="margin: 10px 0;font-weight: 300;letter-spacing: normal;font-size: 24px;">{{repoertLevel2Data1.label}}模块分析</h3>
                        <v-layout row wrap>
                            <v-flex lg12 md12 sm12 xs12>
                              <div  v-if="show2Radar">
                                <div id="chartOption2" style="width:100%;height:400px"></div>
                              </div>
                              <ve-bar :data="chartDatabar2" width="100%" v-if="show2Bar" ref="bar2"></ve-bar>   
                            </v-flex>
                            <!-- <v-flex lg3 md3 sm1 xs1></v-flex> -->
                            <v-flex lg12 md12 sm12 xs12 style="margin:10px 0;">
                                <div style="margin: 30px 0;">
                                    <v-layout row wrap>
                                        <!-- <v-flex v-for="item in repoertLevel2Data1.key" :key="item.label" lg1 hidden-lg-and-down></v-flex> -->
                                        <v-flex v-for="item in repoertLevel2Data1.key" :key="item.label" style="margin: 10px 0;" lg6 md6 sm12 xs12>
                                            <span style="font-size:16px;font-weight: 600;margin: 10px;">{{item.label}}</span>
                                            <span>该模块的能力成熟度为：</span><span style="color:red;font-size:14px;font-weight: 600;">{{item.active}}%</span>
                                            <span style="margin-left:20px;">目标：</span><span style="color:green;font-size:14px;font-weight: 600;">{{item.expect}}%</span>
                                        </v-flex>
                                        <!-- <v-flex v-for="item in repoertLevel2Data1.key" :key="item.label" lg1 hidden-lg-and-down></v-flex> -->
                                    </v-layout>
                                </div>
                            </v-flex>
                            <!-- <v-flex lg4 md4 sm1 xs1></v-flex> -->
                        </v-layout>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex>
                    <div>
                        <h5 style="font-size: 16px;font-weight: 400;letter-spacing: normal;">{{repoertLevel2Data1.label}}同行业分析</h5>
                        <div v-if="chart3OthersData.length!==0">
                          <v-layout row wrap>
                              <v-flex lg12 md12 sm12 xs12>
                                <div  v-if="show3Radar">
                                  <div id="chartOption3" style="width:100%;height:400px"></div>
                                </div>
                                <ve-bar :data="chartDatabar3" width="100%" v-if="show3Bar" ref="bar3"></ve-bar> 
                              </v-flex> 
                          </v-layout>
                          
                          <div style="margin: 10px;">
                              <span>您的企业{{repoertLevel2Data1.label}}综合能力超过了</span>
                              <span style="color:red;font-size:14px;font-weight: 600;">{{chart3IndComparePercentage1}}%</span>
                              <span>的企业</span>
                          </div>
                        </div>
                        <div v-if="chart3OthersData.length ==0">暂无数据</div>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex>
                    <div>
                        <h5 style="font-size: 16px;font-weight: 400;letter-spacing: normal;">{{repoertLevel2Data1.label}}同地区分析</h5>
                        <div v-if="chart4OthersData.length !==0">
                          <v-layout row wrap>
                            <v-flex lg12 md12 sm12 xs12>
                              <div  v-if="show4Radar">
                                <div id="chartOption4" style="width:100%;height:400px"></div>
                              </div>
                              <ve-bar :data="chartDatabar4" width="100%" v-if="show4Bar" ref="bar4"></ve-bar>    
                            </v-flex> 
                          </v-layout>
                          <div style="margin: 10px;">
                              <span>您的企业{{repoertLevel2Data1.label}}综合能力超过了</span>
                              <span style="color:red;font-size:14px;font-weight: 600;">{{chart3ProvinceComparePercentage1}}%</span>
                              <span>的企业</span>
                          </div>
                        </div>
                        <div v-if="chart4OthersData.length ==0">暂无数据</div>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex>
                    <div>
                        <h5 style="font-size: 16px;font-weight: 400;letter-spacing: normal;">{{repoertLevel2Data1.label}}同地区分析</h5>
                        <div v-if="chart5OthersData.length !==0">
                          <v-layout row wrap>
                            <v-flex lg12 md12 sm12 xs12>
                              <div  v-if="show5Radar">
                                <div id="chartOption5" style="width:100%;height:400px"></div>
                              </div>
                              <ve-bar :data="chartDatabar5" width="100%" v-if="show5Bar" ref="bar5"></ve-bar>  
                            </v-flex> 
                          </v-layout>
                          <div style="margin: 10px;">
                              <span>您的企业{{repoertLevel2Data1.label}}综合能力超过了</span>
                              <span style="color:red;font-size:14px;font-weight: 600;">{{chart3CityComparePercentage1}}%</span>
                              <span>的企业</span>
                          </div>
                        </div>
                        <div v-if="chart5OthersData.length ==0">暂无数据</div>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex>
                    <div>
                        <h5 style="font-size: 16px;font-weight: 400;letter-spacing: normal;">{{repoertLevel2Data1.label}}同地区分析</h5>
                        <div v-if="chart6OthersData.length !==0">
                          <v-layout row wrap>
                              <v-flex lg12 md12 sm12 xs12>
                                <div  v-if="show6Radar">
                                  <div id="chartOption6" style="width:100%;height:400px"></div>
                                </div>
                                <ve-bar :data="chartDatabar6" width="100%" v-if="show6Bar" ref="bar6"></ve-bar>   
                              </v-flex> 
                          </v-layout>
                          <div style="margin: 10px;">
                              <span>您的企业{{repoertLevel2Data1.label}}综合能力超过了</span>
                              <span style="color:red;font-size:14px;font-weight: 600;">{{chart3CountyComparePercentage1}}%</span>
                              <span>的企业</span>
                          </div>
                        </div>
                        <div v-if="chart6OthersData.length ==0">暂无数据</div>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex>
                    <div>
                        <h5 style="font-size: 16px;font-weight: 400;letter-spacing: normal;">{{repoertLevel2Data1.label}}指标解读及分析</h5>
                        <v-layout row wrap>
                            <v-flex lg12 md12 sm12 xs12>
                                <ve-bar :data="chartData7" width="100%" height="800px" ref="bar7"></ve-bar>
                            </v-flex>
                        </v-layout>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex>
                    <div style="color: black;font-size: 18px;margin: 10px 0;">综合分析</div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex>
                    <div>
                        <h3  style="margin: 10px 0;font-weight: 300;letter-spacing: normal;font-size: 24px;">{{repoertLevel2Data2.label}}模块分析</h3>
                        <v-layout row wrap>
                            <v-flex lg12 md12 sm12 xs12>
                                <div  v-if="show13Radar">
                                   <div id="chartOption13" style="width:100%;height:400px"></div>
                                </div>
                                <ve-bar :data="chartDatabar13" width="100%" v-if="show13Bar" ref="bar13"></ve-bar>
                            </v-flex>
                            <!-- <v-flex lg3 md3 sm1 xs1></v-flex> -->
                            <v-flex lg12 md12 sm12 xs12 style="margin:10px 0;">
                                <div style="margin: 30px 0;">
                                  <v-layout row wrap>
                                      <v-flex v-for="item in repoertLevel2Data2.key" :key="item.label" lg1 hidden-lg-and-down></v-flex>
                                      <v-flex v-for="item in repoertLevel2Data2.key" :key="item.label" style="margin: 10px 0;" lg4 md6 sm12 xs12>
                                          <span style="font-size:16px;font-weight: 600;margin: 10px;">{{item.label}}</span>
                                          <span>该模块的能力成熟度为：</span><span style="color:red;font-size:14px;font-weight: 600;">{{item.active}}%</span>
                                          <span style="margin-left:20px;">目标：</span><span style="color:green;font-size:14px;font-weight: 600;">{{item.expect}}%</span>
                                      </v-flex>
                                      <v-flex v-for="item in repoertLevel2Data2.key" :key="item.label" lg1 hidden-lg-and-down></v-flex>
                                  </v-layout>
                                </div>
                            </v-flex>
                            <!-- <v-flex lg4 md4 sm1 xs1></v-flex> -->
                        </v-layout>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex>
                    <div>
                        <h5 style="font-size: 16px;font-weight: 400;letter-spacing: normal;">{{repoertLevel2Data2.label}}同行业分析</h5>
                        <div v-if="chart3OthersData.length !==0">
                          <v-layout row wrap>
                              <v-flex lg12 md12 sm12 xs12>
                                <div  v-if="show8Radar">
                                  <div id="chartOption8" style="width:100%;height:400px"></div>
                                </div>
                                <ve-bar :data="chartDatabar8" width="100%" v-if="show8Bar" ref="bar8"></ve-bar>     
                              </v-flex> 
                          </v-layout>
                          
                          <div style="margin: 10px;">
                              <span>您的企业{{repoertLevel2Data2.label}}综合能力超过了</span>
                              <span style="color:red;font-size:14px;font-weight: 600;">{{chart3IndComparePercentage2}}%</span>
                              <span>的企业</span>
                          </div>
                        </div>
                        <div v-if="chart3OthersData.length ==0">暂无数据</div>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex>
                    <div>
                        <h5 style="font-size: 16px;font-weight: 400;letter-spacing: normal;">{{repoertLevel2Data2.label}}同地区分析</h5>
                        <div v-if="chart4OthersData.length !==0">
                          <v-layout row wrap>
                              <v-flex lg12 md12 sm12 xs12>
                                <div  v-if="show9Radar">
                                  <div id="chartOption9" style="width:100%;height:400px"></div>
                                </div>
                                <ve-bar :data="chartDatabar9" width="100%" v-if="show9Bar" ref="bar9"></ve-bar>
                                  
                              </v-flex> 
                          </v-layout>
                          
                          <div style="margin: 10px;">
                              <span>您的企业{{repoertLevel2Data2.label}}综合能力超过了</span>
                              <span style="color:red;font-size:14px;font-weight: 600;">{{chart3ProvinceComparePercentage2}}%</span>
                              <span>的企业</span>
                          </div>
                        </div>
                        <div v-if="chart4OthersData.length ==0">暂无数据</div>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex>
                    <div>
                        <h5 style="font-size: 16px;font-weight: 400;letter-spacing: normal;">{{repoertLevel2Data2.label}}同地区分析</h5>
                        <div v-if="chart5OthersData.length !==0">
                          <v-layout row wrap>
                              <v-flex lg12 md12 sm12 xs12>
                                <div  v-if="show10Radar">
                                  <div id="chartOption10" style="width:100%;height:400px"></div>
                                </div>
                                <ve-bar :data="chartDatabar10" width="100%" v-if="show10Bar" ref="bar10"></ve-bar>
                                  
                              </v-flex> 
                          </v-layout>
                          
                          <div style="margin: 10px;">
                              <span>您的企业{{repoertLevel2Data2.label}}综合能力超过了</span>
                              <span style="color:red;font-size:14px;font-weight: 600;">{{chart3CityComparePercentage2}}%</span>
                              <span>的企业</span>
                          </div>
                        </div>
                        <div v-if="chart5OthersData.length ==0">暂无数据</div>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex>
                    <div>
                        <h5 style="font-size: 16px;font-weight: 400;letter-spacing: normal;">{{repoertLevel2Data2.label}}同地区分析</h5>
                        <div v-if="chart6OthersData.length !==0">
                          <v-layout row wrap>
                              <v-flex lg12 md12 sm12 xs12>
                                <div  v-if="show11Radar">
                                  <div id="chartOption11" style="width:100%;height:400px"></div>
                                </div>
                                <ve-bar :data="chartDatabar11" width="100%" v-if="show11Bar" ref="bar11"></ve-bar>
                                  
                              </v-flex> 
                          </v-layout>
                          
                          <div style="margin: 10px;">
                              <span>您的企业{{repoertLevel2Data2.label}}综合能力超过了</span>
                              <span style="color:red;font-size:14px;font-weight: 600;">{{chart3CountyComparePercentage2}}%</span>
                              <span>的企业</span>
                          </div>
                        </div>
                        <div v-if="chart6OthersData.length ==0">暂无数据</div>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex>
                    <div>
                        <h5 style="font-size: 16px;font-weight: 400;letter-spacing: normal;">{{repoertLevel2Data2.label}}指标解读及分析</h5>
                        <v-layout row wrap>
                            <v-flex lg12 md12 sm12 xs12>
                                <ve-bar :data="chartData12" width="100%" height="800px" ref="bar12"></ve-bar>
                            </v-flex>
                        </v-layout>
                    </div>
                </div>
            </v-flex>
             <v-flex lg1 md1 sm1 xs1></v-flex>
        </v-layout>

   </div>
</template>

<script>
export default {
  components: {},
  name: "reportPage",
  // props: ["reportParm"],
  data: () => ({
    reportData: {
      reportName: "",
      enterpriseName: "",
      scale: "",
      income: "",
      province: "",
      city: "",
      area: "",
      industryL1: "",
      industryL2: "",
      industryL3: "",
      industryL4: "",
      industryL5: ""
    },
    mychart1: Object,
    mychart2: Object,
    mychart3: Object,
    mychart4: Object,
    mychart5: Object,
    mychart6: Object,
    mychart7: Object,
    mychart8: Object,
    mychart9: Object,
    mychart10: Object,
    mychart11: Object,
    mychart12: Object,
    mychart13: Object,
    chartData2: {
      columns: ["标题"],
      rows: []
    },
    chartOption3: {
      columns: ["标题"],
      rows: []
    },
    chartData7: {
      columns: ["标题", , "实际", "预期"],
      rows: []
    },
    chartData12: {
      columns: ["标题", , "实际", "预期"],
      rows: []
    },
    chartData13: {
      columns: ["标题"],
      rows: []
    },
    chart1ActValue: [],
    chart1ExpValue: [],
    chart1Others: [],
    chart1X: "",
    chart1Y: "",
    beyondALLexp: "",
    beyondALLact: "",
    beyondL11: Object,
    beyondL12: Object,
    repoertLevel2Data1: Object,
    chart3OthersData: Object,
    chart4OthersData: Object,
    chart5OthersData: Object,
    chart6OthersData: Object,
    // chart8OthersData: Object,
    // chart9OthersData: Object,
    // chart10OthersData:Object,
    // chart11OthersData:Object,
    repoertLevel2Data2: Object,
    chart3IndComparePercentage1: "",
    chart3ProvinceComparePercentage1: "",
    chart3CityComparePercentage1: "",
    chart3CountyComparePercentage1: "",
    chart3IndComparePercentage2: "",
    chart3ProvinceComparePercentage2: "",
    chart3CityComparePercentage2: "",
    chart3CountyComparePercentage2: "",
    chartDatabar13: {
      columns: ["标题", , "实际", "预期"],
      rows: []
    },
    chartDatabar2: {
      columns: ["标题", , "实际", "预期"],
      rows: []
    },
    chartDatabar3: {
      columns: ["标题", , "实际", "预期"],
      rows: []
    },
    chartDatabar4: {
      columns: ["标题", , "实际", "预期"],
      rows: []
    },
    chartDatabar5: {
      columns: ["标题", , "实际", "预期"],
      rows: []
    },
    chartDatabar6: {
      columns: ["标题", , "实际", "预期"],
      rows: []
    },
    chartDatabar8: {
      columns: ["标题", , "实际", "预期"],
      rows: []
    },
    chartDatabar9: {
      columns: ["标题", , "实际", "预期"],
      rows: []
    },
    chartDatabar10: {
      columns: ["标题", , "实际", "预期"],
      rows: []
    },
    chartDatabar11: {
      columns: ["标题", , "实际", "预期"],
      rows: []
    },
    show13Radar: false,
    show13Bar: false,
    show2Radar: false,
    show2Bar: false,
    show3Radar: false,
    show3Bar: false,
    show4Radar: false,
    show4Bar: false,
    show5Radar: false,
    show5Bar: false,
    show6Radar: false,
    show6Bar: false,
    show8Radar: false,
    show8Bar: false,
    show9Radar: false,
    show9Bar: false,
    show10Radar: false,
    show10Bar: false,
    show11Radar: false,
    show11Bar: false,
    loading: Object
  }),
  mounted: function() {
    this.loading = this.$loading({
      lock: true,
      text: "加载中",
      spinner: "el-icon-loading",
      background: "rgba(61, 61, 61, 0.4)"
    });
    var request = {
      enterprise_id:
        this.reportParm.enterpriseId !== ""
          ? this.reportParm.enterpriseId
          : this.reportParm.datas.enterprise_id,
      id: this.reportParm.idx,
      evaluationId: this.reportParm.evaluationId,
      session_id: this.session_id
    };
    var apikey = "";
    var param = {
      apikey,
      request
    };
    var type = "post";
    var url = "/IBUS/DAIG_SYS/get_report_datas";
    this.getReport_datas(type, url, param);
  },
  methods: {
    showChart1() {
      this.option1 = {
        backgroundColor: "white",
        legend: {
          data: ["期望", "实际", "其他企业"],
          left: "center"
          // right: '0',
          // top: '0%',
        },
        tooltip: {
          trigger: "item",
          showDelay: 0,
          formatter: function(params) {
            if (params.name == "期望" || params.name == "实际") {
              return (
                params.name +
                " <br/>" +
                "制造水平" +
                params.value[0] +
                "%" +
                " <br/>" +
                "智能水平" +
                params.value[1] +
                "%"
              );
            }
          }
        },
        xAxis: [
          {
            name: this.chart1X,
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value}"
            },
            splitLine: {
              show: false
            },
            max: 100,
            min: 0,
            nameLocation: "end",
            nameTextStyle: {
              padding: [0, 0, -60, -60]
            }
          }
        ],
        yAxis: [
          {
            name: this.chart1Y,
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value}"
            },
            splitLine: {
              show: false
            },
            max: 100,
            min: 0
          }
        ],
        series: [
          {
            name: "期望",
            type: "effectScatter",
            symbolSize: 20,
            data: [
              {
                name: "期望",
                value: this.chart1ExpValue
                // itemStyle: {
                //   color: "green"
                // }
              }
            ]
            // markPoint: {
            //   label: {
            //     normal: {
            //       position: "inside",
            //       distance: "0",
            //       show: false,
            //       formatter: [
            //         "{a|期望}",
            //         "智能水平{@1}%",
            //         "制造水平{@1}%"
            //       ].join("\n"),
            //       backgroundColor: "#000000",
            //       borderColor: "#555",
            //       borderWidth: 2,
            //       borderRadius: 5,
            //       padding: 10,
            //       color: "white",
            //       offset: [0, -13],
            //       rich: {
            //         a: {
            //           align: "left",
            //           color: "white"
            //         }
            //       }
            //     }
            //   },
            //   data: [
            //     {
            //       type: "max",
            //       symbol: "pin",
            //       symbolOffset: [0, 0]
            //     }
            //   ],
            //   itemStyle: {
            //     color: "#000000",
            //     opacity: "1"
            //   }
            // }
          },
          {
            name: "实际",
            type: "effectScatter",
            symbolSize: 20,
            data: [
              {
                name: "实际",
                value: this.chart1ActValue
                // itemStyle: {
                //   color: "red"
                // }
              }
            ]
            // markPoint: {
            //   label: {
            //     normal: {
            //       position: "inside",
            //       distance: "0",
            //       show: false,
            //       formatter: [
            // "{a|实际}",
            // "智能水平{@1}%",
            // "制造水平{@1}%"
            //       ].join("\n"),
            //       backgroundColor: "#000000",
            //       borderColor: "#555",
            //       borderWidth: 2,
            //       borderRadius: 5,
            //       padding: 10,
            //       color: "white",
            //       offset: [0, -13],
            //       rich: {
            //         a: {
            //           align: "left",
            //           color: "white"
            //         }
            //       }
            //     }
            //   },
            //   data: [
            //     {
            //       type: "max",
            //       symbol: "pin",
            //       symbolOffset: [0, 0]
            //     }
            //   ],
            //   itemStyle: {
            //     color: "#000000",
            //     opacity: "1"
            //   }
            // }
          },

          {
            name: "其他企业",
            type: "scatter",
            data: this.chart1Others
          }
        ]
      };
      this.mychart1 = this.$echarts.init(
        document.getElementById("chartOption1")
      );
      this.mychart1.setOption(this.option1, true);
      window.addEventListener("resize", () => {
        this.mychart1.resize();
      });
    },
    showChart2() {
      let $this = this;
      if (
        this.repoertLevel2Data1.key.length &&
        this.repoertLevel2Data1.key.length > 2
      ) {
        this.show2Radar = true;
        this.show2Bar = false;

        this.repoertLevel2Data1.key.forEach(item => {
          this.chartData2.columns.push(item.label);
        });
        var currentData = { 标题: "实际" },
          expertData = { 标题: "预期" };
        let indicatorArray = [];
        let Edata = [];
        let Cdata = [];
        this.chartData2.columns.forEach(colum => {
          this.repoertLevel2Data1.key.forEach(lev => {
            if (lev.label == colum) {
              currentData[colum] = lev.active;
              expertData[colum] = lev.expect;
              indicatorArray.push({ name: lev.label, max: 100 });
              Edata.push(lev.expect);
              Cdata.push(lev.active);
            }
          });
        });

        this.chartData2.rows.push(expertData);
        this.chartData2.rows.push(currentData);
        this.option2 = {
          backgroundColor: "white",
          legend: {
            top: 20,
            left: 20,
            data: ["预期", "实际"]
          },
          radar: [
            {
              indicator: indicatorArray,

              shape: "circle",
              splitNumber: Edata.length,

              name: {
                textStyle: {
                  color: "#333"
                }
              },
              splitArea: {
                areaStyle: {
                  color: [
                    "rgba(114, 172, 209, 0.2)",
                    "rgba(114, 172, 209, 0.4)"
                  ]
                }
              }
            }
          ],
          series: [
            {
              name: "雷达图",
              type: "radar",
              itemStyle: {
                emphasis: {
                  // color: 各异,
                  lineStyle: {
                    width: 4
                  }
                }
              },
              data: [
                {
                  value: Edata,
                  name: "预期",
                  // label: {
                  //   normal: {
                  //     show: true,
                  //     formatter: function(params) {
                  //       return params.value + "%";
                  //     }
                  //   }
                  // },
                  itemStyle: {
                    normal: {
                      color: "#19d4ae"
                    }
                  }
                },
                {
                  value: Cdata,
                  name: "实际",
                  // label: {
                  //   normal: {
                  //     show: true,
                  //     formatter: function(params) {
                  //       return params.value + "%";
                  //     }
                  //   }
                  // },
                  itemStyle: {
                    normal: {
                      color: "#5ab1ef"
                    }
                  }
                }
              ]
            }
          ]
        };
        this.$nextTick(function() {
          $this.mychart2 = $this.$echarts.init(
            document.getElementById("chartOption2")
          );
          $this.mychart2.setOption($this.option2, true);
        });

        window.addEventListener("resize", () => {
          this.mychart2.resize();
        });
      } else {
        this.show2Radar = false;
        this.show2Bar = true;

        var showData = [];
        this.repoertLevel2Data1.key.forEach(lev => {
          var arry = {};
          this.chartDatabar2.columns.forEach(colum => {
            //debugger;

            if (colum == "标题") {
              arry[colum] = lev.label;
            } else if (colum == "实际") {
              arry[colum] = lev.active;
            } else if (colum == "预期") {
              arry[colum] = lev.expect;
            }
          });
          showData.push(arry);
        });
        this.chartDatabar2.rows = showData;
        window.addEventListener("resize", () => {
          this.$refs.bar2.echarts.resize();
        });
      }
    },
    showChart3() {
      if (
        this.repoertLevel2Data1.key.length &&
        this.repoertLevel2Data1.key.length > 2
      ) {
        this.show3Radar = true;
        this.show3Bar = false;
        var lineStyle = {
          normal: {
            width: 1,
            opacity: 0.5
          }
        };
        // var dataOthers = [
        //   [55, 9, 56, 0.46, 18, 6, 1],
        //   [25, 11, 21, 0.65, 34, 9, 2],
        //   [56, 7, 63, 0.3, 14, 5, 3],
        //   [33, 7, 29, 0.33, 16, 6, 4],
        //   [42, 24, 44, 0.76, 40, 16, 5],
        //   [82, 58, 90, 1.77, 68, 33, 6],
        //   [74, 49, 77, 1.46, 48, 27, 7],
        //   [78, 55, 80, 1.29, 59, 29, 8],
        //   [267, 216, 280, 4.8, 108, 64, 9],
        //   [185, 127, 216, 2.52, 61, 27, 10],
        //   [39, 19, 38, 0.57, 31, 15, 11],
        //   [41, 11, 40, 0.43, 21, 7, 12],
        //   [64, 38, 74, 1.04, 46, 22, 13],
        //   [108, 79, 120, 1.7, 75, 41, 14],
        //   [108, 63, 116, 1.48, 44, 26, 15],
        //   [33, 6, 29, 0.34, 13, 5, 16],
        //   [94, 66, 110, 1.54, 62, 31, 17],
        //   [186, 142, 192, 3.88, 93, 79, 18],
        //   [57, 31, 54, 0.96, 32, 14, 19],
        //   [22, 8, 17, 0.48, 23, 10, 20],
        //   [39, 15, 36, 0.61, 29, 13, 21],
        //   [94, 69, 114, 2.08, 73, 39, 22],
        //   [99, 73, 110, 2.43, 76, 48, 23],
        //   [31, 12, 30, 0.5, 32, 16, 24],
        //   [42, 27, 43, 1, 53, 22, 25],
        //   [154, 117, 157, 3.05, 92, 58, 26],
        //   [234, 185, 230, 4.09, 123, 69, 27],
        //   [160, 120, 186, 2.77, 91, 50, 28],
        //   [134, 96, 165, 2.76, 83, 41, 29],
        //   [52, 24, 60, 1.03, 50, 21, 30],
        //   [46, 5, 49, 0.28, 10, 6, 31]
        // ];
        // var dataYours = [[187, 143, 201, 1.39, 89, 53, 31]];
        var dataYours = [];
        var dataOthers = [];
        var indicator = [];
        if (this.chart3OthersData.length == 0) return;
        this.chart3OthersData.forEach(item => {
          var array = [];
          item.l11L2.key.forEach(element => {
            indicator.push({ name: element.label, max: 100 });
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        this.repoertLevel2Data1.key.forEach(item => {
          dataYours.push(item.active);
        });
        this.option3 = {
          backgroundColor: "white",
          legend: {
            top: 20,
            left: 20,
            data: ["同行业其他企业", "您的企业"],
            itemGap: 20,
            //   textStyle: {
            //     color: "#fff",
            //     fontSize: 14
            //   },
            selectedMode: "multiple"
          },
          radar: {
            indicator: indicator,
            shape: "circle",

            name: {
              textStyle: {
                color: "rgb(238, 197, 102)"
              }
            },
            splitLine: {
              lineStyle: {
                color: [
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)"
                ].reverse()
              }
            },
            splitArea: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "rgba(238, 197, 102, 0.5)"
              }
            }
          },
          series: [
            {
              name: "同行业其他企业",
              type: "radar",
              lineStyle: lineStyle,
              data: dataOthers,
              symbol: "none",
              itemStyle: {
                normal: {
                  color: "#F9713C"
                }
              },
              areaStyle: {
                normal: {
                  opacity: 0.05
                }
              }
            },
            {
              name: "您的企业",
              type: "radar",
              lineStyle: lineStyle,
              data: [dataYours],
              symbol: "none",
              itemStyle: {
                normal: {
                  color: "blue"
                }
              }
              // areaStyle: {
              //   normal: {
              //     opacity: 0.1
              //   }
              // }
            }
          ]
        };
        this.$nextTick(function() {
          this.mychart3 = this.$echarts.init(
            document.getElementById("chartOption3")
          );
          this.mychart3.setOption(this.option3, true);
        });

        window.addEventListener("resize", () => {
          this.mychart3.resize();
        });
      } else {
        this.show3Radar = false;
        this.show3Bar = true;
        var showData = [];
        this.repoertLevel2Data1.key.forEach(lev => {
          var arry = {};
          this.chartDatabar3.columns.forEach(colum => {
            //debugger;

            if (colum == "标题") {
              arry[colum] = lev.label;
            } else if (colum == "实际") {
              arry[colum] = lev.active;
            } else if (colum == "预期") {
              arry[colum] = lev.expect;
            }
          });
          showData.push(arry);
        });
        this.chartDatabar3.rows = showData;
        window.addEventListener("resize", () => {
          this.$refs.bar3.echarts.resize();
        });
      }
    },
    showChart4() {
      if (
        this.repoertLevel2Data1.key.length &&
        this.repoertLevel2Data1.key.length > 2
      ) {
        this.show4Radar = true;
        this.show4Bar = false;
        var lineStyle = {
          normal: {
            width: 1,
            opacity: 0.5
          }
        };
        var dataYours = [];
        var dataOthers = [];
        var indicator = [];
        if (this.chart4OthersData.length == 0) return;
        this.chart4OthersData.forEach(item => {
          var array = [];
          item.l11L2.key.forEach(element => {
            indicator.push({ name: element.label, max: 100 });
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        this.repoertLevel2Data1.key.forEach(item => {
          dataYours.push(item.active);
        });
        this.option4 = {
          backgroundColor: "white",
          legend: {
            top: 20,
            left: 20,
            data: ["广东省其他企业", "您的企业"],
            itemGap: 20,
            //   textStyle: {
            //     color: "#fff",
            //     fontSize: 14
            //   },
            selectedMode: "multiple"
          },
          radar: {
            indicator: indicator,
            shape: "circle",

            name: {
              textStyle: {
                color: "rgb(238, 197, 102)"
              }
            },
            splitLine: {
              lineStyle: {
                color: [
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)"
                ].reverse()
              }
            },
            splitArea: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "rgba(238, 197, 102, 0.5)"
              }
            }
          },
          series: [
            {
              name: "广东省其他企业",
              type: "radar",
              lineStyle: lineStyle,
              data: dataOthers,
              symbol: "none",
              itemStyle: {
                normal: {
                  color: "#F9713C"
                }
              },
              areaStyle: {
                normal: {
                  opacity: 0.05
                }
              }
            },
            {
              name: "您的企业",
              type: "radar",
              lineStyle: lineStyle,
              data: [dataYours],
              symbol: "none",
              itemStyle: {
                normal: {
                  color: "blue"
                }
              }
              // areaStyle: {
              //   normal: {
              //     opacity: 0.1
              //   }
              // }
            }
          ]
        };
        this.$nextTick(function() {
          this.mychart4 = this.$echarts.init(
            document.getElementById("chartOption4")
          );
          this.mychart4.setOption(this.option4, true);
        });
        window.addEventListener("resize", () => {
          this.mychart4.resize();
        });
      } else {
        this.show4Radar = false;
        this.show4Bar = true;
        this.show3Radar = false;
        this.show3Bar = true;
        var showData = [];
        this.repoertLevel2Data1.key.forEach(lev => {
          var arry = {};
          this.chartDatabar4.columns.forEach(colum => {
            //debugger;

            if (colum == "标题") {
              arry[colum] = lev.label;
            } else if (colum == "实际") {
              arry[colum] = lev.active;
            } else if (colum == "预期") {
              arry[colum] = lev.expect;
            }
          });
          showData.push(arry);
        });
        this.chartDatabar4.rows = showData;
        window.addEventListener("resize", () => {
          this.$refs.bar4.echarts.resize();
        });
      }
    },
    showChart5() {
      if (
        this.repoertLevel2Data1.key.length &&
        this.repoertLevel2Data1.key.length > 2
      ) {
        this.show5Radar = true;
        this.show5Bar = false;
        var lineStyle = {
          normal: {
            width: 1,
            opacity: 0.5
          }
        };

        var dataYours = [];
        var dataOthers = [];
        var indicator = [];
        if (this.chart5OthersData.length == 0) return;
        this.chart5OthersData.forEach(item => {
          var array = [];
          item.l11L2.key.forEach(element => {
            indicator.push({ name: element.label, max: 100 });
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        this.repoertLevel2Data1.key.forEach(item => {
          dataYours.push(item.active);
        });
        this.option5 = {
          backgroundColor: "white",
          legend: {
            top: 20,
            left: 20,
            data: ["深圳市其他企业", "您的企业"],
            itemGap: 20,
            //   textStyle: {
            //     color: "#fff",
            //     fontSize: 14
            //   },
            selectedMode: "multiple"
          },
          radar: {
            indicator: indicator,
            shape: "circle",

            name: {
              textStyle: {
                color: "rgb(238, 197, 102)"
              }
            },
            splitLine: {
              lineStyle: {
                color: [
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)"
                ].reverse()
              }
            },
            splitArea: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "rgba(238, 197, 102, 0.5)"
              }
            }
          },
          series: [
            {
              name: "深圳市其他企业",
              type: "radar",
              lineStyle: lineStyle,
              data: dataOthers,
              symbol: "none",
              itemStyle: {
                normal: {
                  color: "#F9713C"
                }
              },
              areaStyle: {
                normal: {
                  opacity: 0.05
                }
              }
            },
            {
              name: "您的企业",
              type: "radar",
              lineStyle: lineStyle,
              data: [dataYours],
              symbol: "none",
              itemStyle: {
                normal: {
                  color: "blue"
                }
              }
              // areaStyle: {
              //   normal: {
              //     opacity: 0.1
              //   }
              // }
            }
          ]
        };
        this.$nextTick(function() {
          this.mychart5 = this.$echarts.init(
            document.getElementById("chartOption5")
          );
          this.mychart5.setOption(this.option5, true);
        });
        window.addEventListener("resize", () => {
          this.mychart5.resize();
        });
      } else {
        this.show5Radar = false;
        this.show5Bar = true;

        var showData = [];
        this.repoertLevel2Data1.key.forEach(lev => {
          var arry = {};
          this.chartDatabar5.columns.forEach(colum => {
            //debugger;

            if (colum == "标题") {
              arry[colum] = lev.label;
            } else if (colum == "实际") {
              arry[colum] = lev.active;
            } else if (colum == "预期") {
              arry[colum] = lev.expect;
            }
          });
          showData.push(arry);
        });
        this.chartDatabar5.rows = showData;
        window.addEventListener("resize", () => {
          this.$refs.bar5.echarts.resize();
        });
      }
    },
    showChart6() {
      if (
        this.repoertLevel2Data1.key.length &&
        this.repoertLevel2Data1.key.length > 2
      ) {
        this.show6Radar = true;
        this.show6Bar = false;
        var lineStyle = {
          normal: {
            width: 1,
            opacity: 0.5
          }
        };

        var dataYours = [];
        var dataOthers = [];
        var indicator = [];
        if (this.chart6OthersData.length == 0) return;
        this.chart6OthersData.forEach(item => {
          var array = [];
          item.l11L2.key.forEach(element => {
            indicator.push({ name: element.label, max: 100 });
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        this.repoertLevel2Data1.key.forEach(item => {
          dataYours.push(item.active);
        });

        this.option6 = {
          backgroundColor: "white",
          legend: {
            top: 20,
            left: 20,
            data: ["南山区其他企业", "您的企业"],
            itemGap: 20,
            //   textStyle: {
            //     color: "#fff",
            //     fontSize: 14
            //   },
            selectedMode: "multiple"
          },
          radar: {
            indicator: indicator,
            shape: "circle",

            name: {
              textStyle: {
                color: "rgb(238, 197, 102)"
              }
            },
            splitLine: {
              lineStyle: {
                color: [
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)"
                ].reverse()
              }
            },
            splitArea: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "rgba(238, 197, 102, 0.5)"
              }
            }
          },
          series: [
            {
              name: "南山区其他企业",
              type: "radar",
              lineStyle: lineStyle,
              data: dataOthers,
              symbol: "none",
              itemStyle: {
                normal: {
                  color: "#F9713C"
                }
              },
              areaStyle: {
                normal: {
                  opacity: 0.05
                }
              }
            },
            {
              name: "您的企业",
              type: "radar",
              lineStyle: lineStyle,
              data: [dataYours],
              symbol: "none",
              itemStyle: {
                normal: {
                  color: "blue"
                }
              }
              // areaStyle: {
              //   normal: {
              //     opacity: 0.1
              //   }
              // }
            }
          ]
        };
        this.$nextTick(function() {
          this.mychart6 = this.$echarts.init(
            document.getElementById("chartOption6")
          );
          this.mychart6.setOption(this.option6, true);
        });
        window.addEventListener("resize", () => {
          this.mychart6.resize();
        });
      } else {
        this.show6Radar = false;
        this.show6Bar = true;

        var showData = [];
        this.repoertLevel2Data1.key.forEach(lev => {
          var arry = {};
          this.chartDatabar6.columns.forEach(colum => {
            //debugger;

            if (colum == "标题") {
              arry[colum] = lev.label;
            } else if (colum == "实际") {
              arry[colum] = lev.active;
            } else if (colum == "预期") {
              arry[colum] = lev.expect;
            }
          });
          showData.push(arry);
        });
        this.chartDatabar6.rows = showData;
        window.addEventListener("resize", () => {
          this.$refs.bar6.echarts.resize();
        });
      }
    },
    showChart7() {
      var showData = [];
      this.chartDataArray7.key.forEach(lev => {
        var arry = {};
        this.chartData7.columns.forEach(colum => {
          if (colum == "标题") {
            arry[colum] = lev.label;
          } else if (colum == "实际") {
            arry[colum] = lev.active;
          } else if (colum == "预期") {
            arry[colum] = lev.expect;
          }
        });
        showData.push(arry);
      });
      this.chartData7.rows = showData;
      window.addEventListener("resize", () => {
        this.$refs.bar7.echarts.resize();
      });
    },
    showChart8() {
      if (
        this.repoertLevel2Data2.key.length &&
        this.repoertLevel2Data2.key.length > 2
      ) {
        this.show8Radar = true;
        this.show8Bar = false;
        var lineStyle = {
          normal: {
            width: 1,
            opacity: 0.5
          }
        };
        var dataYours = [];
        var dataOthers = [];
        var indicator = [];
        if (this.chart3OthersData.length == 0) return;
        this.chart3OthersData.forEach(item => {
          var array = [];
          item.l12L2.key.forEach(element => {
            indicator.push({ name: element.label, max: 100 });
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        this.repoertLevel2Data1.key.forEach(item => {
          dataYours.push(item.active);
        });

        this.option8 = {
          backgroundColor: "white",
          legend: {
            top: 20,
            left: 20,
            data: ["同行业其他企业", "您的企业"],
            itemGap: 20,
            //   textStyle: {
            //     color: "#fff",
            //     fontSize: 14
            //   },
            selectedMode: "multiple"
          },
          radar: {
            indicator: indicator,
            shape: "circle",

            name: {
              textStyle: {
                color: "rgb(238, 197, 102)"
              }
            },
            splitLine: {
              lineStyle: {
                color: [
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)"
                ].reverse()
              }
            },
            splitArea: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "rgba(238, 197, 102, 0.5)"
              }
            }
          },
          series: [
            {
              name: "同行业其他企业",
              type: "radar",
              lineStyle: lineStyle,
              data: dataOthers,
              symbol: "none",
              itemStyle: {
                normal: {
                  color: "#F9713C"
                }
              },
              areaStyle: {
                normal: {
                  opacity: 0.05
                }
              }
            },
            {
              name: "您的企业",
              type: "radar",
              lineStyle: lineStyle,
              data: [dataYours],
              symbol: "none",
              itemStyle: {
                normal: {
                  color: "blue"
                }
              }
              // areaStyle: {
              //   normal: {
              //     opacity: 0.1
              //   }
              // }
            }
          ]
        };
        this.$nextTick(function() {
          this.mychart8 = this.$echarts.init(
            document.getElementById("chartOption8")
          );
          this.mychart8.setOption(this.option8, true);
        });

        window.addEventListener("resize", () => {
          this.mychart8.resize();
        });
      } else {
        this.show8Radar = false;
        this.show8Bar = true;
        var showData = [];
        this.repoertLevel2Data2.key.forEach(lev => {
          var arry = {};
          this.chartDatabar8.columns.forEach(colum => {
            //debugger;

            if (colum == "标题") {
              arry[colum] = lev.label;
            } else if (colum == "实际") {
              arry[colum] = lev.active;
            } else if (colum == "预期") {
              arry[colum] = lev.expect;
            }
          });
          showData.push(arry);
        });
        this.chartDatabar8.rows = showData;
        window.addEventListener("resize", () => {
          this.$refs.bar8.echarts.resize();
        });
      }
    },
    showChart9() {
      if (
        this.repoertLevel2Data2.key.length &&
        this.repoertLevel2Data2.key.length > 2
      ) {
        this.show9Radar = true;
        this.show9Bar = false;
        var lineStyle = {
          normal: {
            width: 1,
            opacity: 0.5
          }
        };
        var dataYours = [];
        var dataOthers = [];
        var indicator = [];
        if (this.chart4OthersData.length == 0) return;
        this.chart4OthersData.forEach(item => {
          var array = [];
          item.l12L2.key.forEach(element => {
            indicator.push({ name: element.label, max: 100 });
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        this.repoertLevel2Data1.key.forEach(item => {
          dataYours.push(item.active);
        });

        this.option9 = {
          backgroundColor: "white",
          legend: {
            top: 20,
            left: 20,
            data: ["广东省其他企业", "您的企业"],
            itemGap: 20,
            //   textStyle: {
            //     color: "#fff",
            //     fontSize: 14
            //   },
            selectedMode: "multiple"
          },
          radar: {
            indicator: indicator,
            shape: "circle",

            name: {
              textStyle: {
                color: "rgb(238, 197, 102)"
              }
            },
            splitLine: {
              lineStyle: {
                color: [
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)"
                ].reverse()
              }
            },
            splitArea: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "rgba(238, 197, 102, 0.5)"
              }
            }
          },
          series: [
            {
              name: "广东省其他企业",
              type: "radar",
              lineStyle: lineStyle,
              data: dataOthers,
              symbol: "none",
              itemStyle: {
                normal: {
                  color: "#F9713C"
                }
              },
              areaStyle: {
                normal: {
                  opacity: 0.05
                }
              }
            },
            {
              name: "您的企业",
              type: "radar",
              lineStyle: lineStyle,
              data: [dataYours],
              symbol: "none",
              itemStyle: {
                normal: {
                  color: "blue"
                }
              }
              // areaStyle: {
              //   normal: {
              //     opacity: 0.1
              //   }
              // }
            }
          ]
        };
        this.$nextTick(function() {
          this.mychart9 = this.$echarts.init(
            document.getElementById("chartOption9")
          );
          this.mychart9.setOption(this.option9, true);
        });
        window.addEventListener("resize", () => {
          this.mychart9.resize();
        });
      } else {
        this.show9Radar = false;
        this.show9Bar = true;
        var showData = [];
        this.repoertLevel2Data2.key.forEach(lev => {
          var arry = {};
          this.chartDatabar9.columns.forEach(colum => {
            //debugger;

            if (colum == "标题") {
              arry[colum] = lev.label;
            } else if (colum == "实际") {
              arry[colum] = lev.active;
            } else if (colum == "预期") {
              arry[colum] = lev.expect;
            }
          });
          showData.push(arry);
        });
        this.chartDatabar9.rows = showData;
        window.addEventListener("resize", () => {
          this.$refs.bar9.echarts.resize();
        });
      }
    },
    showChart10() {
      if (
        this.repoertLevel2Data2.key.length &&
        this.repoertLevel2Data2.key.length > 2
      ) {
        this.show10Radar = true;
        this.show10Bar = false;
        var lineStyle = {
          normal: {
            width: 1,
            opacity: 0.5
          }
        };

        var dataYours = [];
        var dataOthers = [];
        var indicator = [];
        if (this.chart5OthersData.length == 0) return;
        this.chart5OthersData.forEach(item => {
          var array = [];
          item.l12L2.key.forEach(element => {
            indicator.push({ name: element.label, max: 100 });
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        this.repoertLevel2Data1.key.forEach(item => {
          dataYours.push(item.active);
        });

        this.option10 = {
          backgroundColor: "white",
          legend: {
            top: 20,
            left: 20,
            data: ["深圳市其他企业", "您的企业"],
            itemGap: 20,
            //   textStyle: {
            //     color: "#fff",
            //     fontSize: 14
            //   },
            selectedMode: "multiple"
          },
          radar: {
            indicator: indicator,
            shape: "circle",

            name: {
              textStyle: {
                color: "rgb(238, 197, 102)"
              }
            },
            splitLine: {
              lineStyle: {
                color: [
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)"
                ].reverse()
              }
            },
            splitArea: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "rgba(238, 197, 102, 0.5)"
              }
            }
          },
          series: [
            {
              name: "深圳市其他企业",
              type: "radar",
              lineStyle: lineStyle,
              data: dataOthers,
              symbol: "none",
              itemStyle: {
                normal: {
                  color: "#F9713C"
                }
              },
              areaStyle: {
                normal: {
                  opacity: 0.05
                }
              }
            },
            {
              name: "您的企业",
              type: "radar",
              lineStyle: lineStyle,
              data: [dataYours],
              symbol: "none",
              itemStyle: {
                normal: {
                  color: "blue"
                }
              }
              // areaStyle: {
              //   normal: {
              //     opacity: 0.1
              //   }
              // }
            }
          ]
        };
        this.$nextTick(function() {
          this.mychart10 = this.$echarts.init(
            document.getElementById("chartOption10")
          );
          this.mychart10.setOption(this.option10, true);
        });
        window.addEventListener("resize", () => {
          this.mychart10.resize();
        });
      } else {
        this.show10Radar = false;
        this.show10Bar = true;
        var showData = [];
        this.repoertLevel2Data2.key.forEach(lev => {
          var arry = {};
          this.chartDatabar10.columns.forEach(colum => {
            //debugger;

            if (colum == "标题") {
              arry[colum] = lev.label;
            } else if (colum == "实际") {
              arry[colum] = lev.active;
            } else if (colum == "预期") {
              arry[colum] = lev.expect;
            }
          });
          showData.push(arry);
        });
        this.chartDatabar10.rows = showData;
        window.addEventListener("resize", () => {
          this.$refs.bar10.echarts.resize();
        });
      }
    },
    showChart11() {
      if (
        this.repoertLevel2Data2.key.length &&
        this.repoertLevel2Data2.key.length > 2
      ) {
        this.show11Radar = true;
        this.show11Bar = false;
        var lineStyle = {
          normal: {
            width: 1,
            opacity: 0.5
          }
        };

        var dataYours = [];
        var dataOthers = [];
        var indicator = [];
        if (this.chart6OthersData.length == 0) return;
        this.chart6OthersData.forEach(item => {
          var array = [];
          item.l12L2.key.forEach(element => {
            indicator.push({ name: element.label, max: 100 });
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        this.repoertLevel2Data1.key.forEach(item => {
          dataYours.push(item.active);
        });

        this.option11 = {
          backgroundColor: "white",
          legend: {
            top: 20,
            left: 20,
            data: ["南山区其他企业", "您的企业"],
            itemGap: 20,
            //   textStyle: {
            //     color: "#fff",
            //     fontSize: 14
            //   },
            selectedMode: "multiple"
          },
          radar: {
            indicator: indicator,
            shape: "circle",

            name: {
              textStyle: {
                color: "rgb(238, 197, 102)"
              }
            },
            splitLine: {
              lineStyle: {
                color: [
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)",
                  "rgba(0, 134,128, 0.1)"
                ].reverse()
              }
            },
            splitArea: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "rgba(238, 197, 102, 0.5)"
              }
            }
          },
          series: [
            {
              name: "南山区其他企业",
              type: "radar",
              lineStyle: lineStyle,
              data: dataOthers,
              symbol: "none",
              itemStyle: {
                normal: {
                  color: "#F9713C"
                }
              },
              areaStyle: {
                normal: {
                  opacity: 0.05
                }
              }
            },
            {
              name: "您的企业",
              type: "radar",
              lineStyle: lineStyle,
              data: [dataYours],
              symbol: "none",
              itemStyle: {
                normal: {
                  color: "blue"
                }
              }
              // areaStyle: {
              //   normal: {
              //     opacity: 0.1
              //   }
              // }
            }
          ]
        };
        this.$nextTick(function() {
          this.mychart11 = this.$echarts.init(
            document.getElementById("chartOption11")
          );
          this.mychart11.setOption(this.option11, true);
        });
        window.addEventListener("resize", () => {
          this.mychart11.resize();
        });
      } else {
        this.show11Radar = false;
        this.show11Bar = true;
        var showData = [];
        this.repoertLevel2Data2.key.forEach(lev => {
          var arry = {};
          this.chartDatabar11.columns.forEach(colum => {
            //debugger;

            if (colum == "标题") {
              arry[colum] = lev.label;
            } else if (colum == "实际") {
              arry[colum] = lev.active;
            } else if (colum == "预期") {
              arry[colum] = lev.expect;
            }
          });
          showData.push(arry);
        });
        this.chartDatabar11.rows = showData;
        window.addEventListener("resize", () => {
          this.$refs.bar11.echarts.resize();
        });
      }
    },
    showChart12() {
      var showData = [];
      this.chartDataArray12.key.forEach(lev => {
        var arry = {};
        this.chartData12.columns.forEach(colum => {
          if (colum == "标题") {
            arry[colum] = lev.label;
          } else if (colum == "实际") {
            arry[colum] = lev.active;
          } else if (colum == "预期") {
            arry[colum] = lev.expect;
          }
        });
        showData.push(arry);
      });
      this.chartData12.rows = showData;
      window.addEventListener("resize", () => {
        this.$refs.bar12.echarts.resize();
      });
    },
    showChart13() {
      if (
        this.repoertLevel2Data2.key.length &&
        this.repoertLevel2Data2.key.length > 2
      ) {
        this.show13Radar = true;
        this.show13Bar = false;

        this.repoertLevel2Data2.key.forEach(item => {
          this.chartData13.columns.push(item.label);
        });
        var currentData = { 标题: "实际" },
          expertData = { 标题: "预期" };
        let indicatorArray = [];
        let Edata = [];
        let Cdata = [];
        this.chartData13.columns.forEach(colum => {
          this.repoertLevel2Data2.key.forEach(lev => {
            if (lev.label == colum) {
              currentData[colum] = lev.active;
              expertData[colum] = lev.expect;
              indicatorArray.push({ name: lev.label, max: 100 });
              Edata.push(lev.expect);
              Cdata.push(lev.active);
            }
          });
        });

        this.chartData13.rows.push(expertData);
        this.chartData13.rows.push(currentData);
        this.option13 = {
          backgroundColor: "white",
          legend: {
            top: 20,
            left: 20,
            data: ["预期", "实际"]
          },
          radar: [
            {
              indicator: indicatorArray,

              shape: "circle",
              splitNumber: Edata.length,

              name: {
                textStyle: {
                  color: "#333"
                }
              },
              splitArea: {
                areaStyle: {
                  color: [
                    "rgba(114, 172, 209, 0.2)",
                    "rgba(114, 172, 209, 0.4)"
                  ]
                }
              }
            }
          ],
          series: [
            {
              name: "雷达图",
              type: "radar",
              itemStyle: {
                emphasis: {
                  lineStyle: {
                    width: 4
                  }
                }
              },
              data: [
                {
                  value: Edata,
                  name: "预期",
                  itemStyle: {
                    normal: {
                      color: "#19d4ae"
                    }
                  }
                },
                {
                  value: Cdata,
                  name: "实际",
                  itemStyle: {
                    normal: {
                      color: "#5ab1ef"
                    }
                  }
                }
              ]
            }
          ]
        };
        this.mychart13 = this.$echarts.init(
          document.getElementById("chartOption13")
        );
        this.mychart13.setOption(this.option13, true);
        window.addEventListener("resize", () => {
          this.mychart13.resize();
        });
      } else {
        this.show13Radar = false;
        this.show13Bar = true;

        var showData = [];
        this.repoertLevel2Data2.key.forEach(lev => {
          var arry = {};
          this.chartDatabar13.columns.forEach(colum => {
            //debugger;

            if (colum == "标题") {
              arry[colum] = lev.label;
            } else if (colum == "实际") {
              arry[colum] = lev.active;
            } else if (colum == "预期") {
              arry[colum] = lev.expect;
            }
          });
          showData.push(arry);
        });
        this.chartDatabar13.rows = showData;
        window.addEventListener("resize", () => {
          this.$refs.bar13.echarts.resize();
        });
      }
    },
    getReport_datas(type, url, param) {
      let $this = this;
      $this
        .$http({
          method: type,
          url: url,
          data: param
        })
        .then(res => {
          console.log(res);
          $this.reportData.scale = res.data.return.report_info.scale;
          $this.reportData.income = res.data.return.report_info.income;
          $this.reportData.industryL1 = res.data.return.report_info.industry;
          $this.reportData.enterpriseName = res.data.return.report_info.name;
          $this.reportData.province = res.data.return.report_info.province;
          $this.reportData.city = res.data.return.report_info.city;
          $this.reportData.area = res.data.return.report_info.area;

          $this.chart1X = res.data.return.table_data[0][0] + "%";
          $this.chart1Y = res.data.return.table_data[0][1] + "%";
          $this.chart1Others = res.data.return.table_data.slice(1);
          for (let index in res.data.return.report_info.expL1) {
            $this.chart1ExpValue.push(res.data.return.report_info.expL1[index]);
          }
          for (let index in res.data.return.report_info.actL1) {
            $this.chart1ActValue.push(res.data.return.report_info.actL1[index]);
          }

          $this.beyondALLexp = res.data.return.report_info.allLv.expect;
          $this.beyondALLact = res.data.return.report_info.allLv.active;
          $this.beyondL11 = res.data.return.report_info.l11;
          $this.beyondL12 = res.data.return.report_info.l12;

          $this.repoertLevel2Data1 = res.data.return.report_info.l11L2;
          $this.repoertLevel2Data2 = res.data.return.report_info.l12L2;

          $this.chart3OthersData = res.data.return.industry.industry;
          $this.chart4OthersData = res.data.return.province.province;
          $this.chart5OthersData = res.data.return.city.city;
          $this.chart6OthersData = res.data.return.area.area;
          $this.chartDataArray7 = res.data.return.report_info.l11L3;
          $this.chartDataArray12 = res.data.return.report_info.l12L3;
          $this.chart3IndComparePercentage1 =
            res.data.return.report_info.l11IndPec;
          $this.chart3ProvinceComparePercentage1 =
            res.data.return.report_info.l11ProvincePec;
          $this.chart3CityComparePercentage1 =
            res.data.return.report_info.l11CityPec;
          $this.chart3CountyComparePercentage1 =
            res.data.return.report_info.l11AreaPec;
          $this.chart3IndComparePercentage2 =
            res.data.return.report_info.l12IndPec;
          $this.chart3ProvinceComparePercentage2 =
            res.data.return.report_info.l12ProvincePec;
          $this.chart3CityComparePercentage2 =
            res.data.return.report_info.l12CityPec;
          $this.chart3CountyComparePercentage2 =
            res.data.return.report_info.l12AreaPec;
          // $this.chart1ActValue =  res.data.return.report_info.actL1;
          // $this.chart1ExpValue =  res.data.return.report_info.expL1;
          $this.showChart1();
          $this.showChart2();
          $this.showChart3();
          $this.showChart4();
          $this.showChart5();
          $this.showChart6();
          $this.showChart7();
          $this.showChart8();
          $this.showChart9();
          $this.showChart10();
          $this.showChart11();
          $this.showChart12();
          $this.showChart13();
          $this.loading.close();
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    reportParm() {
      return this.$store.state.evlaluating.evaluatingPage.reportParm;
    },
    session_id() {
      return this.$store.state.loginPage.session_id;
    }
  },
  updated: function() {}
};
</script>


<style scoped>
</style>

