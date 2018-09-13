<template>
   <div style="background-color: white;">
        <h2 style="text-align: center;padding: 90px 0px;font-size: 30px;font-size: 36px;font-weight: 300;background-color: #009199;color: white;">
            {{reportData.testName}}测评报告
        </h2>
        <v-layout row wrap>
            <v-flex lg1 md1 sm1 xs1></v-flex>
            <v-flex lg10 md10 sm10 xs10>
                <div>
                    <div style="color: #02929A;font-size: 22pt;margin: 30px 0px 40px 0;">企业基本信息</div>
                    <v-flex lg12 md12 sm12 xs12>
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex>
                    <div style="margin: 60px 0;">
                        <h3  style="text-align: left;margin: 36px 0;font-size: 30pt;font-weight: 600;letter-spacing: normal;">{{reportData.enterpriseName}}</h3>
                        <v-layout row wrap>
                            <v-flex lg6 md6 sm6 xs6 style="text-align:left;margin:10px 0;">
                                <span style="color: #929292;">收入规模：</span><span style="font-weight: 600;">{{reportData.income}}</span>
                            </v-flex>
                            <v-flex lg6 md6 sm6 xs6 style="text-align:left;margin:10px 0;">
                                <span style="color: #929292;">人员规模：</span><span style="font-weight: 600;">{{reportData.scale}}</span>
                            </v-flex>
                            <v-flex lg6 md6 sm6 xs6 style="text-align:left;margin:10px 0;">
                                <span style="color: #929292;">企业区域：</span><span style="font-weight: 600;">{{reportData.province}}</span><span>/</span><span>{{reportData.city}}</span><span>/</span><span>{{reportData.area}}</span>
                            </v-flex>
                            <v-flex lg6 md6 sm6 xs6 style="text-align:left;margin:10px 0;">
                                <span style="color: #929292;">行业类别：</span><span style="font-weight: 600;">{{reportData.industryL1}}</span>
                            </v-flex>
                        </v-layout>
                    </div>
                </div>
                <v-flex lg12 md12 sm12 xs12 style="margin:0 0 36px 0;">
                  <v-divider style="color: lightgrey;"></v-divider>
                </v-flex>
            </v-flex>
            <v-flex lg1 md1 sm1 xs1></v-flex>
            
        </v-layout>

        <v-layout row wrap>
            <v-flex lg1 md1 sm1 xs1></v-flex>
            <v-flex lg10 md10 sm10 xs10>
                <div>
                    <div style="color: #149AA1;font-size: 22pt;margin: 30px 0px 70px 0;">整体结果</div>
                    <div>
                        <h3  style="margin: 36px 0 72px 0;font-weight: 600;letter-spacing: normal;font-size: 24pt;">企业能力整体成熟度</h3>
                        <v-layout row wrap>
                            <v-flex lg12 md12 sm12 xs12>
                                <div id="chartOption1" style="width:100%;height:400px"></div>
                            </v-flex>
                            <v-flex lg12 md12 sm12 xs12 style="margin:10px 0;">
                                <div style="margin: 30px 0;">
                                    <div style="margin: 10px;">
                                        <span>贵公司的整体水平超过了</span>
                                        <span style="color:#02929A;font-size:14px;font-weight: 600;">{{beyondALLact}}%</span>
                                        <span>的企业，期望水平超过了</span>
                                        <span style="color:#FF963D;font-size:14px;font-weight: 600;">{{beyondALLexp}}%</span>
                                        <span>的企业；</span>
                                    </div>
                                    <div style="margin: 10px;">
                                        <span>在{{beyondL11.label}}上，企业超过了</span>
                                        <span style="color:#02929A;font-size:14px;font-weight: 600;">{{beyondL11.active}}%</span>
                                        <span>的企业，期望水平超过了</span>
                                        <span style="color:#FF963D;font-size:14px;font-weight: 600;">{{beyondL11.expect}}%</span>
                                        <span>的企业；</span>
                                    </div>
                                    <div style="margin: 10px;">
                                        <span>在{{beyondL12.label}}上，企业超过了</span>
                                        <span style="color:#02929A;font-size:14px;font-weight: 600;">{{beyondL12.active}}%</span>
                                        <span>的企业，期望水平超过了</span>
                                        <span style="color:#FF963D;font-size:14px;font-weight: 600;">{{beyondL12.expect}}%</span>
                                        <span>的企业；</span>
                                    </div>
                                </div>
                            </v-flex>
                        </v-layout>
                    </div>
                </div>
                <v-flex lg12 md12 sm12 xs12 style="margin:0 0 36px 0;">
                    <v-divider style="color: lightgrey;"></v-divider>
                </v-flex>
            </v-flex>
             <v-flex lg1 md1 sm1 xs1></v-flex>
        </v-layout>
        
        <v-layout row wrap>
            <v-flex lg1 md1 sm1 xs1></v-flex>
            <v-flex lg10 md10 sm10 xs10>
                <div>
                    <div style="color: #149AA1;font-size: 22pt;margin: 30px 0px 70px 0;">综合分析</div>
                    
                    <div>
                        <h3  style="margin: 36px 0 72px 0;font-weight: 600;letter-spacing: normal;font-size: 24pt;">{{repoertLevel2Data1.label}}模块分析</h3>
                        <v-layout row wrap>
                            <v-flex lg12 md12 sm12 xs12>
                              <div id="chartOption2" style="width:100%;height:400px"></div>  
                            </v-flex>
                            <!-- <v-flex lg3 md3 sm1 xs1></v-flex> -->
                            <v-flex lg12 md12 sm12 xs12 style="margin:10px 0;">
                                <div style="margin: 30px 0;">
                                    <v-layout row wrap>
                                        <!-- <v-flex v-for="item in repoertLevel2Data1.key" :key="item.label" lg1 hidden-lg-and-down></v-flex> -->
                                        <v-flex v-for="item in repoertLevel2Data1.key" :key="item.label" style="margin: 10px 0;" lg6 md6 sm12 xs12>
                                            <span style="font-size:16px;font-weight: 600;margin: 10px;">{{item.label}}</span>
                                            <span>该模块的能力成熟度为：</span>
                                            <span style="color:#02929A;font-size:14px;font-weight: 600;">{{item.active}}%</span>
                                            <span style="margin-left:20px;">期望：</span>
                                            <span style="color:#FF963D;font-size:14px;font-weight: 600;">{{item.expect}}%</span>
                                        </v-flex>
                                        <!-- <v-flex v-for="item in repoertLevel2Data1.key" :key="item.label" lg1 hidden-lg-and-down></v-flex> -->
                                    </v-layout>
                                </div>
                            </v-flex>
                            <!-- <v-flex lg4 md4 sm1 xs1></v-flex> -->
                        </v-layout>
                    </div>
                    <!-- <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex> -->
                    <div>
                        <h3 style="margin: 36px 0 72px 0;font-weight: 600;letter-spacing: normal;font-size: 24pt;">{{repoertLevel2Data1.label}}同行业分析</h3>
                        <div v-if="chart3OthersData.length!==0">
                          <v-layout row wrap>
                              <v-flex lg12 md12 sm12 xs12>
                                <div id="chartOption3" style="width:100%;height:400px"></div>
                              </v-flex> 
                          </v-layout>
                          
                          <div style="margin: 10px;font-size: 18px;">
                              <span>您的企业{{repoertLevel2Data1.label}}综合能力超过了</span>
                              <span style="color:#02929A;font-size:14px;font-weight: 600;">{{chart3IndComparePercentage1}}%</span>
                              <span>的企业</span>
                          </div>
                        </div>
                        <div v-if="chart3OthersData.length ==0">暂无数据</div>
                    </div>
                    <!-- <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex> -->
                    <div>
                        <h3 style="margin: 36px 0 72px 0;font-weight: 600;letter-spacing: normal;font-size: 24pt;">{{repoertLevel2Data1.label}}同地区分析({{reportData.province}})</h3>
                        <div v-if="chart4OthersData.length !==0">
                          <v-layout row wrap>
                            <v-flex lg12 md12 sm12 xs12>
                              <div id="chartOption4" style="width:100%;height:400px"></div>  
                            </v-flex> 
                          </v-layout>
                          <div style="margin: 10px;font-size: 16px;">
                              <span>您的企业{{repoertLevel2Data1.label}}综合能力超过了</span>
                              <span style="color:#02929A;font-size:14px;font-weight: 600;">{{chart3ProvinceComparePercentage1}}%</span>
                              <span>的企业</span>
                          </div>
                        </div>
                        <div v-if="chart4OthersData.length ==0">暂无数据</div>
                    </div>
                    <!-- <v-flex lg12 md12 sm12 xs12 style="margin:54px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex> -->
                    <div>
                        <h3 style="margin: 36px 0 72px 0;font-weight: 600;letter-spacing: normal;font-size: 24pt;">{{repoertLevel2Data1.label}}同地区分析({{reportData.city}})</h3>
                        <div v-if="chart5OthersData.length !==0">
                          <v-layout row wrap>
                            <v-flex lg12 md12 sm12 xs12>
                             <div id="chartOption5" style="width:100%;height:400px"></div> 
                            </v-flex> 
                          </v-layout>
                          <div style="margin: 10px;font-size: 16px;">
                              <span>您的企业{{repoertLevel2Data1.label}}综合能力超过了</span>
                              <span style="color:#02929A;font-size:14px;font-weight: 600;">{{chart3CityComparePercentage1}}%</span>
                              <span>的企业</span>
                          </div>
                        </div>
                        <div v-if="chart5OthersData.length ==0">暂无数据</div>
                    </div>
                    <!-- <v-flex lg12 md12 sm12 xs12 style="margin:54px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex> -->
                    <div>
                        <h3 style="margin: 36px 0 72px 0;font-weight: 600;letter-spacing: normal;font-size: 24pt;">{{repoertLevel2Data1.label}}同地区分析({{reportData.area}})</h3>
                        <div v-if="chart6OthersData.length !==0">
                          <v-layout row wrap>
                              <v-flex lg12 md12 sm12 xs12>
                                <div id="chartOption6" style="width:100%;height:400px"></div> 
                              </v-flex> 
                          </v-layout>
                          <div style="margin: 10px;font-size: 16px;">
                              <span>您的企业{{repoertLevel2Data1.label}}综合能力超过了</span>
                              <span style="color:#02929A;font-size:14px;font-weight: 600;">{{chart3CountyComparePercentage1}}%</span>
                              <span>的企业</span>
                          </div>
                        </div>
                        <div v-if="chart6OthersData.length ==0">暂无数据</div>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex>
                    <div>
                        <h3 style="margin: 36px 0 72px 0;font-weight: 600;letter-spacing: normal;font-size: 24pt;">{{repoertLevel2Data1.label}}指标解读及分析</h3>
                        <v-layout row wrap>
                            <v-flex lg12 md12 sm12 xs12>
                                <ve-bar :data="chartData7" :colors="barcolors" width="100%" height="800px" ref="bar7"></ve-bar>
                            </v-flex>
                        </v-layout>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex>
                    <div style="color: #149AA1;font-size: 22pt;margin: 30px 0px 70px 0;">综合分析</div>
                    <!-- <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex> -->
                    <div>
                        <h3 style="margin: 36px 0 72px 0;font-weight: 600;letter-spacing: normal;font-size: 24pt;">{{repoertLevel2Data2.label}}模块分析</h3>
                        <v-layout row wrap>
                            <v-flex lg12 md12 sm12 xs12>
                                <div id="chartOption13" style="width:100%;height:400px"></div>
                            </v-flex>
                            <!-- <v-flex lg3 md3 sm1 xs1></v-flex> -->
                            <v-flex lg12 md12 sm12 xs12 style="margin:10px 0;">
                                <div style="margin: 30px 0;">
                                  <v-layout row wrap>
                                      <v-flex v-for="item in repoertLevel2Data2.key" :key="item.label" lg1 hidden-lg-and-down></v-flex>
                                      <v-flex v-for="item in repoertLevel2Data2.key" :key="item.label" style="margin: 10px 0;" lg4 md6 sm12 xs12>
                                          <span style="font-size:16px;font-weight: 600;margin: 10px;">{{item.label}}</span>
                                          <span>该模块的能力成熟度为：</span>
                                          <span style="color:#02929A;font-size:14px;font-weight: 600;">{{item.active}}%</span>
                                          <span style="margin-left:20px;">期望：</span>
                                          <span style="color:#FF963C;font-size:14px;font-weight: 600;">{{item.expect}}%</span>
                                      </v-flex>
                                      <v-flex v-for="item in repoertLevel2Data2.key" :key="item.label" lg1 hidden-lg-and-down></v-flex>
                                  </v-layout>
                                </div>
                            </v-flex>
                            <!-- <v-flex lg4 md4 sm1 xs1></v-flex> -->
                        </v-layout>
                    </div>
                    <!-- <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex> -->
                    <div>
                        <h3 style="margin: 36px 0 72px 0;font-weight: 600;letter-spacing: normal;font-size: 24pt;">{{repoertLevel2Data2.label}}同行业分析</h3>
                        <div v-if="chart3OthersData.length !==0">
                          <v-layout row wrap>
                              <v-flex lg12 md12 sm12 xs12>
                                <div id="chartOption8" style="width:100%;height:400px"></div>
                              </v-flex> 
                          </v-layout>
                          
                          <div style="margin: 10px;">
                              <span>您的企业{{repoertLevel2Data2.label}}综合能力超过了</span>
                              <span style="color:#02929A;font-size:14px;font-weight: 600;">{{chart3IndComparePercentage2}}%</span>
                              <span>的企业</span>
                          </div>
                        </div>
                        <div v-if="chart3OthersData.length ==0">暂无数据</div>
                    </div>
                    <!-- <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex> -->
                    <div>
                        <h3 style="margin: 36px 0 72px 0;font-weight: 600;letter-spacing: normal;font-size: 24pt;">{{repoertLevel2Data2.label}}同地区分析({{reportData.province}})</h3>
                        <div v-if="chart4OthersData.length !==0">
                          <v-layout row wrap>
                              <v-flex lg12 md12 sm12 xs12>
                                <div id="chartOption9" style="width:100%;height:400px"></div>
                              </v-flex> 
                          </v-layout>
                          
                          <div style="margin: 10px;font-size: 16px;">
                              <span>您的企业{{repoertLevel2Data2.label}}综合能力超过了</span>
                              <span style="color:#02929A;font-size:14px;font-weight: 600;">{{chart3ProvinceComparePercentage2}}%</span>
                              <span>的企业</span>
                          </div>
                        </div>
                        <div v-if="chart4OthersData.length ==0">暂无数据</div>
                    </div>
                    <!-- <v-flex lg12 md12 sm12 xs12 style="margin:54px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex> -->
                    <div>
                        <h3 style="margin: 36px 0 72px 0;font-weight: 600;letter-spacing: normal;font-size: 24pt;">{{repoertLevel2Data2.label}}同地区分析({{reportData.city}})</h3>
                        <div v-if="chart5OthersData.length !==0">
                          <v-layout row wrap>
                              <v-flex lg12 md12 sm12 xs12>
                                <div id="chartOption10" style="width:100%;height:400px"></div> 
                              </v-flex> 
                          </v-layout>
                          
                          <div style="margin: 10px;font-size: 16px;">
                              <span>您的企业{{repoertLevel2Data2.label}}综合能力超过了</span>
                              <span style="color:#02929A;font-size:14px;font-weight: 600;">{{chart3CityComparePercentage2}}%</span>
                              <span>的企业</span>
                          </div>
                        </div>
                        <div v-if="chart5OthersData.length ==0">暂无数据</div>
                    </div>
                    <!-- <v-flex lg12 md12 sm12 xs12 style="margin:54px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex> -->
                    <div>
                        <h3 style="margin: 36px 0 72px 0;font-weight: 600;letter-spacing: normal;font-size: 24pt;">{{repoertLevel2Data2.label}}同地区分析({{reportData.area}})</h3>
                        <div v-if="chart6OthersData.length !==0">
                          <v-layout row wrap>
                              <v-flex lg12 md12 sm12 xs12>
                                <div id="chartOption11" style="width:100%;height:400px"></div>
                              </v-flex> 
                          </v-layout>
                          
                          <div style="margin: 10px;font-size: 16px;">
                              <span>您的企业{{repoertLevel2Data2.label}}综合能力超过了</span>
                              <span style="color:#02929A;font-size:14px;font-weight: 600;">{{chart3CountyComparePercentage2}}%</span>
                              <span>的企业</span>
                          </div>
                        </div>
                        <div v-if="chart6OthersData.length ==0">暂无数据</div>
                    </div>
                    <v-flex lg12 md12 sm12 xs12 style="margin:30px 0;">
                        <v-divider style="color: lightgrey;"></v-divider>
                    </v-flex>
                    <div>
                        <h3 style="margin: 36px 0 72px 0;font-weight: 600;letter-spacing: normal;font-size: 24pt;">{{repoertLevel2Data2.label}}指标解读及分析</h3>
                        <v-layout row wrap>
                            <v-flex lg12 md12 sm12 xs12>
                                <ve-bar :data="chartData12" :colors="barcolors" width="100%" height="800px" ref="bar12"></ve-bar>
                            </v-flex>
                        </v-layout>
                    </div>
                </div>
            </v-flex>
             <v-flex lg1 md1 sm1 xs1></v-flex>
        </v-layout>

        <md-dialog-alert
                  class="md-primary md-raised"
                  :md-active.sync="showErrAlert"
                  :md-content="alertMessage"
                  md-confirm-text="知道了" />
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
      testName: "",
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
      columns: ["标题", , "实际", "期望"],
      rows: []
    },
    chartData12: {
      columns: ["标题", , "实际", "期望"],
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
      columns: ["标题", , "实际", "期望"],
      rows: []
    },
    chartDatabar2: {
      columns: ["标题", , "实际", "期望"],
      rows: []
    },
    chartDatabar3: {
      columns: ["标题", , "实际", "期望"],
      rows: []
    },
    chartDatabar4: {
      columns: ["标题", , "实际", "期望"],
      rows: []
    },
    chartDatabar5: {
      columns: ["标题", , "实际", "期望"],
      rows: []
    },
    chartDatabar6: {
      columns: ["标题", , "实际", "期望"],
      rows: []
    },
    chartDatabar8: {
      columns: ["标题", , "实际", "期望"],
      rows: []
    },
    chartDatabar9: {
      columns: ["标题", , "实际", "期望"],
      rows: []
    },
    chartDatabar10: {
      columns: ["标题", , "实际", "期望"],
      rows: []
    },
    chartDatabar11: {
      columns: ["标题", , "实际", "期望"],
      rows: []
    },
    loading: Object,
    showErrAlert: false,
    alertMessage: "",
    barcolors: ["#02929A", "#FF963C"]
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
      let $this = this;
      this.mychart1 = this.$echarts.init(
        document.getElementById("chartOption1")
      );
      this.mychart1.setOption(
        this.createScatterOption(
          this.chart1X,
          this.chart1Y,
          this.chart1ExpValue,
          this.chart1ActValue,
          this.chart1Others
        ),
        true
      );
      window.addEventListener("resize", () => {
        $this.mychart1.resize();
      });
    },
    showChart2() {
      let $this = this;
      if (
        this.repoertLevel2Data1.key.length &&
        this.repoertLevel2Data1.key.length > 2
      ) {
        this.repoertLevel2Data1.key.forEach(item => {
          this.chartData2.columns.push(item.label);
        });
        var currentData = { 标题: "实际" },
          expertData = { 标题: "期望" };
        let legend = ["实际", "期望"];
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
        this.$nextTick(function() {
          this.mychart2 = $this.$echarts.init(
            document.getElementById("chartOption2")
          );
          this.mychart2.setOption(
            this.createRadar1Option(legend, indicatorArray, Edata, Cdata),
            true
          );
        });

        window.addEventListener("resize", () => {
          $this.mychart2.resize();
        });
      } else {
        let ExpValue = [];
        let ActValue = [];
        let xAxis = this.repoertLevel2Data1.key[0].label,
          yAxis = this.repoertLevel2Data1.key[1].label;
        this.repoertLevel2Data1.key.forEach(item => {
          ExpValue.push(item.expect);
          ActValue.push(item.active);
        });

        this.$nextTick(function() {
          this.mychart2 = this.$echarts.init(
            document.getElementById("chartOption2")
          );
          this.mychart2.setOption(
            this.createScatter2Option(
              xAxis,
              yAxis,
              ActValue,
              this.chart1Others
            ),
            true
          );
        });
        window.addEventListener("resize", () => {
          $this.mychart2.resize();
        });
      }
    },
    showChart3() {
      let $this = this;
      var legend = ["您的企业", "同行业其他企业"];
      if (
        this.repoertLevel2Data1.key.length &&
        this.repoertLevel2Data1.key.length > 2
      ) {
        var dataYours = [];
        var dataOthers = [];
        var indicator = [];
        if (this.chart3OthersData.length == 0) return;
        this.chart3OthersData.forEach(item => {
          var array = [];
          item.l11L2.key.forEach(element => {
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        this.repoertLevel2Data1.key.forEach(item => {
          indicator.push({ name: item.label, max: 100 });
          dataYours.push(item.active);
        });

        this.$nextTick(function() {
          this.mychart3 = this.$echarts.init(
            document.getElementById("chartOption3")
          );
          this.mychart3.setOption(
            this.createRadar2Option(legend, indicator, dataOthers, dataYours),
            true
          );
        });

        window.addEventListener("resize", () => {
          $this.mychart3.resize();
        });
      } else {
        let ExpValue = [];
        let ActValue = [];
        let dataOthers = [];
        let xAxis = this.repoertLevel2Data1.key[0].label,
          yAxis = this.repoertLevel2Data1.key[1].label;
        this.repoertLevel2Data1.key.forEach(item => {
          ExpValue.push(item.expect);
          ActValue.push(item.active);
        });
        if (this.chart3OthersData.length == 0) return;
        this.chart3OthersData.forEach(item => {
          var array = [];
          item.l11L2.key.forEach(element => {
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        this.$nextTick(function() {
          this.mychart3 = this.$echarts.init(
            document.getElementById("chartOption3")
          );
          this.mychart3.setOption(
            this.createScatter2Option(
              legend,
              xAxis,
              yAxis,
              ActValue,
              dataOthers
            ),
            true
          );
        });
        window.addEventListener("resize", () => {
          $this.mychart3.resize();
        });
      }
    },
    showChart4() {
      let $this = this;
      var legend = ["您的企业", this.reportData.province + "其他企业"];
      if (
        this.repoertLevel2Data1.key.length &&
        this.repoertLevel2Data1.key.length > 2
      ) {
        var dataYours = [];
        var dataOthers = [];
        var indicator = [];
        if (this.chart4OthersData.length == 0) return;
        this.chart4OthersData.forEach(item => {
          var array = [];
          item.l11L2.key.forEach(element => {
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        this.repoertLevel2Data1.key.forEach(item => {
          dataYours.push(item.active);
          indicator.push({ name: item.label, max: 100 });
        });
        this.$nextTick(function() {
          this.mychart4 = this.$echarts.init(
            document.getElementById("chartOption4")
          );
          this.mychart4.setOption(
            this.createRadar2Option(legend, indicator, dataOthers, dataYours),
            true
          );
        });
        window.addEventListener("resize", () => {
          $this.mychart4.resize();
        });
      } else {
        let ExpValue = [];
        let ActValue = [];
        let dataOthers = [];
        let xAxis = this.repoertLevel2Data1.key[0].label,
          yAxis = this.repoertLevel2Data1.key[1].label;
        this.repoertLevel2Data1.key.forEach(item => {
          ExpValue.push(item.expect);
          ActValue.push(item.active);
        });
        if (this.chart4OthersData.length == 0) return;
        this.chart4OthersData.forEach(item => {
          var array = [];
          item.l11L2.key.forEach(element => {
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        this.$nextTick(function() {
          this.mychart4 = this.$echarts.init(
            document.getElementById("chartOption4")
          );
          this.mychart4.setOption(
            this.createScatter2Option(
              legend,
              xAxis,
              yAxis,
              ActValue,
              dataOthers
            ),
            true
          );
        });
        window.addEventListener("resize", () => {
          $this.mychart4.resize();
        });
      }
    },
    showChart5() {
      let $this = this;
      var legend = ["您的企业", this.reportData.city + "其他企业"];
      if (
        this.repoertLevel2Data1.key.length &&
        this.repoertLevel2Data1.key.length > 2
      ) {
        var dataYours = [];
        var dataOthers = [];
        var indicator = [];
        if (this.chart5OthersData.length == 0) return;
        this.chart5OthersData.forEach(item => {
          var array = [];
          item.l11L2.key.forEach(element => {
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        this.repoertLevel2Data1.key.forEach(item => {
          dataYours.push(item.active);
          indicator.push({ name: item.label, max: 100 });
        });
        this.$nextTick(function() {
          this.mychart5 = this.$echarts.init(
            document.getElementById("chartOption5")
          );
          this.mychart5.setOption(
            this.createRadar2Option(legend, indicator, dataOthers, dataYours),
            true
          );
        });
        window.addEventListener("resize", () => {
          $this.mychart5.resize();
        });
      } else {
        var dataOthers = [];
        let ExpValue = [];
        let ActValue = [];
        let xAxis = this.repoertLevel2Data1.key[0].label,
          yAxis = this.repoertLevel2Data1.key[1].label;
        this.repoertLevel2Data1.key.forEach(item => {
          ExpValue.push(item.expect);
          ActValue.push(item.active);
        });
        if (this.chart5OthersData.length == 0) return;
        this.chart5OthersData.forEach(item => {
          var array = [];
          item.l11L2.key.forEach(element => {
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        this.$nextTick(function() {
          this.mychart5 = this.$echarts.init(
            document.getElementById("chartOption5")
          );
          this.mychart5.setOption(
            this.createScatter2Option(
              legend,
              xAxis,
              yAxis,
              ActValue,
              dataOthers
            ),
            true
          );
        });
        window.addEventListener("resize", () => {
          $this.mychart5.resize();
        });
      }
    },
    showChart6() {
      let $this = this;
      var legend = ["您的企业", this.reportData.area + "其他企业"];
      if (
        this.repoertLevel2Data1.key.length &&
        this.repoertLevel2Data1.key.length > 2
      ) {
        var dataYours = [];
        var dataOthers = [];
        var indicator = [];
        if (this.chart6OthersData.length == 0) return;
        this.chart6OthersData.forEach(item => {
          var array = [];
          item.l11L2.key.forEach(element => {
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        this.repoertLevel2Data1.key.forEach(item => {
          dataYours.push(item.active);
          indicator.push({ name: item.label, max: 100 });
        });

        this.$nextTick(function() {
          this.mychart6 = this.$echarts.init(
            document.getElementById("chartOption6")
          );
          this.mychart6.setOption(
            this.createRadar2Option(legend, indicator, dataOthers, dataYours),
            true
          );
        });
        window.addEventListener("resize", () => {
          $this.mychart6.resize();
        });
      } else {
        let ExpValue = [];
        let ActValue = [];
        let dataOthers = [];
        if (this.chart6OthersData.length == 0) return;
        this.chart6OthersData.forEach(item => {
          var array = [];
          item.l11L2.key.forEach(element => {
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        let xAxis = this.repoertLevel2Data1.key[0].label,
          yAxis = this.repoertLevel2Data1.key[1].label;
        this.repoertLevel2Data1.key.forEach(item => {
          ExpValue.push(item.expect);
          ActValue.push(item.active);
        });

        this.$nextTick(function() {
          this.mychart6 = this.$echarts.init(
            document.getElementById("chartOption6")
          );
          this.mychart6.setOption(
            this.createScatter2Option(
              legend,
              xAxis,
              yAxis,
              ActValue,
              dataOthers
            ),
            true
          );
        });
        window.addEventListener("resize", () => {
          $this.mychart6.resize();
        });
      }
    },
    showChart7() {
      let $this = this;
      var showData = [];
      this.chartDataArray7.key.forEach(lev => {
        var arry = {};
        this.chartData7.columns.forEach(colum => {
          if (colum == "标题") {
            arry[colum] = lev.label;
          } else if (colum == "实际") {
            arry[colum] = lev.active;
          } else if (colum == "期望") {
            arry[colum] = lev.expect;
          }
        });
        showData.push(arry);
      });
      this.$nextTick(function() {
        $this.chartData7.rows = showData;
        window.addEventListener("resize", () => {
          $this.$refs.bar7.echarts.resize();
        });
      });
    },
    showChart8() {
      let $this = this;
      var legend = ["您的企业", "同行业其他企业"];
      if (
        this.repoertLevel2Data2.key.length &&
        this.repoertLevel2Data2.key.length > 2
      ) {
        var dataYours = [];
        var dataOthers = [];
        var indicator = [];
        if (this.chart3OthersData.length == 0) return;
        this.chart3OthersData.forEach(item => {
          var array = [];
          item.l12L2.key.forEach(element => {
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        this.repoertLevel2Data2.key.forEach(item => {
          dataYours.push(item.active);
          indicator.push({ name: item.label, max: 100 });
        });

        this.$nextTick(function() {
          this.mychart8 = this.$echarts.init(
            document.getElementById("chartOption8")
          );
          this.mychart8.setOption(
            this.createRadar2Option(legend, indicator, dataOthers, dataYours),
            true
          );
        });

        window.addEventListener("resize", () => {
          $this.mychart8.resize();
        });
      } else {
        var dataOthers = [];
        let ExpValue = [];
        let ActValue = [];
        let xAxis = this.repoertLevel2Data2.key[0].label,
          yAxis = this.repoertLevel2Data2.key[1].label;
        this.repoertLevel2Data2.key.forEach(item => {
          ExpValue.push(item.expect);
          ActValue.push(item.active);
        });
        if (this.chart3OthersData.length == 0) return;
        this.chart3OthersData.forEach(item => {
          var array = [];
          item.l12L2.key.forEach(element => {
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        this.$nextTick(function() {
          this.mychart8 = this.$echarts.init(
            document.getElementById("chartOption8")
          );
          this.mychart8.setOption(
            this.createScatter2Option(
              legend,
              xAxis,
              yAxis,
              ActValue,
              dataOthers
            ),
            true
          );
        });
        window.addEventListener("resize", () => {
          $this.mychart8.resize();
        });
      }
    },
    showChart9() {
      let $this = this;
      var legend = ["您的企业", this.reportData.province + "其他企业"];
      if (
        this.repoertLevel2Data2.key.length &&
        this.repoertLevel2Data2.key.length > 2
      ) {
        var dataYours = [];
        var dataOthers = [];
        var indicator = [];
        if (this.chart4OthersData.length == 0) return;
        this.chart4OthersData.forEach(item => {
          var array = [];
          item.l12L2.key.forEach(element => {
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        this.repoertLevel2Data2.key.forEach(item => {
          dataYours.push(item.active);
          indicator.push({ name: item.label, max: 100 });
        });

        this.$nextTick(function() {
          this.mychart9 = this.$echarts.init(
            document.getElementById("chartOption9")
          );
          this.mychart9.setOption(
            this.createRadar2Option(legend, indicator, dataOthers, dataYours),
            true
          );
        });
        window.addEventListener("resize", () => {
          $this.mychart9.resize();
        });
      } else {
        var dataOthers = [];
        let ExpValue = [];
        let ActValue = [];
        let xAxis = this.repoertLevel2Data2.key[0].label,
          yAxis = this.repoertLevel2Data2.key[1].label;
        this.repoertLevel2Data2.key.forEach(item => {
          ExpValue.push(item.expect);
          ActValue.push(item.active);
        });
        if (this.chart4OthersData.length == 0) return;
        this.chart4OthersData.forEach(item => {
          var array = [];
          item.l12L2.key.forEach(element => {
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        this.$nextTick(function() {
          this.mychart9 = this.$echarts.init(
            document.getElementById("chartOption9")
          );
          this.mychart9.setOption(
            this.createScatter2Option(
              legend,
              xAxis,
              yAxis,
              ActValue,
              dataOthers
            ),
            true
          );
        });
        window.addEventListener("resize", () => {
          $this.mychart9.resize();
        });
      }
    },
    showChart10() {
      let $this = this;
      var legend = ["您的企业", this.reportData.city + "其他企业"];
      if (
        this.repoertLevel2Data2.key.length &&
        this.repoertLevel2Data2.key.length > 2
      ) {
        var dataYours = [];
        var dataOthers = [];
        var indicator = [];
        if (this.chart5OthersData.length == 0) return;
        this.chart5OthersData.forEach(item => {
          var array = [];
          item.l12L2.key.forEach(element => {
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        this.repoertLevel2Data2.key.forEach(item => {
          dataYours.push(item.active);
          indicator.push({ name: item.label, max: 100 });
        });

        this.$nextTick(function() {
          this.mychart10 = this.$echarts.init(
            document.getElementById("chartOption10")
          );
          this.mychart10.setOption(
            this.createRadar2Option(legend, indicator, dataOthers, dataYours),
            true
          );
        });
        window.addEventListener("resize", () => {
          $this.mychart10.resize();
        });
      } else {
        var dataOthers = [];
        let ExpValue = [];
        let ActValue = [];
        let xAxis = this.repoertLevel2Data2.key[0].label,
          yAxis = this.repoertLevel2Data2.key[1].label;
        this.repoertLevel2Data2.key.forEach(item => {
          ExpValue.push(item.expect);
          ActValue.push(item.active);
        });
        if (this.chart5OthersData.length == 0) return;
        this.chart5OthersData.forEach(item => {
          var array = [];
          item.l12L2.key.forEach(element => {
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        this.$nextTick(function() {
          this.mychart10 = this.$echarts.init(
            document.getElementById("chartOption10")
          );
          this.mychart10.setOption(
            this.createScatter2Option(
              legend,
              xAxis,
              yAxis,
              ActValue,
              dataOthers
            ),
            true
          );
        });
        window.addEventListener("resize", () => {
          $this.mychart10.resize();
        });
      }
    },
    showChart11() {
      let $this = this;
      var legend = ["您的企业", this.reportData.area + "其他企业"];
      if (
        this.repoertLevel2Data2.key.length &&
        this.repoertLevel2Data2.key.length > 2
      ) {
        var dataYours = [];
        var dataOthers = [];
        var indicator = [];
        if (this.chart6OthersData.length == 0) return;
        this.chart6OthersData.forEach(item => {
          var array = [];
          item.l12L2.key.forEach(element => {
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        this.repoertLevel2Data2.key.forEach(item => {
          dataYours.push(item.active);
          indicator.push({ name: item.label, max: 100 });
        });

        this.$nextTick(function() {
          this.mychart11 = this.$echarts.init(
            document.getElementById("chartOption11")
          );
          this.mychart11.setOption(
            this.createRadar2Option(legend, indicator, dataOthers, dataYours),
            true
          );
        });
        window.addEventListener("resize", () => {
          $this.mychart11.resize();
        });
      } else {
        let ExpValue = [];
        let ActValue = [];
        let dataOthers = [];
        if (this.chart6OthersData.length == 0) return;
        this.chart6OthersData.forEach(item => {
          var array = [];
          item.l12L2.key.forEach(element => {
            array.push(element.active);
          });
          dataOthers.push(array);
        });
        let xAxis = this.repoertLevel2Data2.key[0].label,
          yAxis = this.repoertLevel2Data2.key[1].label;
        this.repoertLevel2Data2.key.forEach(item => {
          ExpValue.push(item.expect);
          ActValue.push(item.active);
        });

        this.$nextTick(function() {
          this.mychart11 = this.$echarts.init(
            document.getElementById("chartOption11")
          );
          this.mychart11.setOption(
            this.createScatter2Option(
              legend,
              xAxis,
              yAxis,
              ActValue,
              dataOthers
            ),
            true
          );
        });
        window.addEventListener("resize", () => {
          $this.mychart11.resize();
        });
      }
    },
    showChart12() {
      let $this = this;
      var showData = [];
      this.chartDataArray12.key.forEach(lev => {
        var arry = {};
        this.chartData12.columns.forEach(colum => {
          if (colum == "标题") {
            arry[colum] = lev.label;
          } else if (colum == "实际") {
            arry[colum] = lev.active;
          } else if (colum == "期望") {
            arry[colum] = lev.expect;
          }
        });
        showData.push(arry);
      });
      this.$nextTick(function() {
        $this.chartData12.rows = showData;
        window.addEventListener("resize", () => {
          $this.$refs.bar12.echarts.resize();
        });
      });
    },
    showChart13() {
      let $this = this;
      if (
        this.repoertLevel2Data2.key.length &&
        this.repoertLevel2Data2.key.length > 2
      ) {
        this.repoertLevel2Data2.key.forEach(item => {
          this.chartData13.columns.push(item.label);
        });
        var currentData = { 标题: "实际" },
          expertData = { 标题: "期望" };
        let legend = ["实际", "期望"];
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
        this.$nextTick(function() {
          this.mychart13 = $this.$echarts.init(
            document.getElementById("chartOption13")
          );
          this.mychart13.setOption(
            this.createRadar1Option(legend, indicatorArray, Edata, Cdata),
            true
          );
        });

        window.addEventListener("resize", () => {
          $this.mychart13.resize();
        });
      } else {
        let ExpValue = [];
        let ActValue = [];
        let xAxis = this.repoertLevel2Data2.key[0].label,
          yAxis = this.repoertLevel2Data2.key[1].label;
        this.repoertLevel2Data2.key.forEach(item => {
          ExpValue.push(item.expect);
          ActValue.push(item.active);
        });

        this.$nextTick(function() {
          this.mychart13 = this.$echarts.init(
            document.getElementById("chartOption13")
          );
          this.mychart13.setOption(
            this.createScatterOption(xAxis, yAxis, ExpValue, ActValue),
            true
          );
        });
        window.addEventListener("resize", () => {
          $this.mychart13.resize();
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
          if (res.data.errorCode !== 0) {
            $this.showErrAlert = true;
            $this.alertMessage = res.data.errorMsg;
            $this.loading.close();
          } else {
            $this.reportData.scale = res.data.return.report_info.scale;
            $this.reportData.income = res.data.return.report_info.income;
            $this.reportData.industryL1 = res.data.return.report_info.industry;
            $this.reportData.enterpriseName = res.data.return.report_info.name;
            $this.reportData.testName = res.data.return.report_info.testName;
            $this.reportData.province = res.data.return.report_info.province;
            $this.reportData.city = res.data.return.report_info.city;
            $this.reportData.area = res.data.return.report_info.area;

            $this.chart1X = res.data.return.table_data[0][0] + "%";
            $this.chart1Y = res.data.return.table_data[0][1] + "%";
            $this.chart1Others = res.data.return.table_data.slice(1);
            for (let index in res.data.return.report_info.expL1) {
              $this.chart1ExpValue.push(
                res.data.return.report_info.expL1[index]
              );
            }
            for (let index in res.data.return.report_info.actL1) {
              $this.chart1ActValue.push(
                res.data.return.report_info.actL1[index]
              );
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
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    createScatterOption(xAxis, yAxis, expValue, actValue, othersValue) {
      let option = {
        backgroundColor: "white",
        legend: {
          data: ["实际", "期望", "其他企业"],
          left: "center"
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
            name: xAxis,
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
            name: yAxis,
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
            name: "实际",
            type: "effectScatter",
            symbolSize: 20,
            itemStyle: {
              normal: {
                color: "#02929A"
              }
            },
            data: [
              {
                name: "实际",
                value: actValue
              }
            ]
          },
          {
            name: "期望",
            type: "effectScatter",
            symbolSize: 20,
            itemStyle: {
              normal: {
                color: "#FF963D"
              }
            },
            data: [
              {
                name: "期望",
                value: expValue
              }
            ]
          },
          {
            name: "其他企业",
            type: "scatter",
            data: othersValue,
            itemStyle: {
              normal: {
                color: "#0094FF"
              }
            }
          }
        ]
      };
      return option;
    },
    createScatter2Option(legend, xAxis, yAxis, actValue, othersValue) {
      let option = {
        backgroundColor: "white",
        legend: {
          data: legend,
          left: "center"
        },
        tooltip: {
          trigger: "item",
          showDelay: 0,
          formatter: function(params) {
            if (params.name == "您的企业") {
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
            name: xAxis,
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
            name: yAxis,
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
            name: legend[0],
            type: "effectScatter",
            symbolSize: 20,
            itemStyle: {
              normal: {
                color: "#02929A"
              }
            },
            data: [
              {
                name: legend[0],
                value: actValue
              }
            ]
          },
          {
            name: legend[1],
            type: "scatter",
            data: othersValue,
            itemStyle: {
              normal: {
                color: "#F9713C"
              }
            }
          }
        ]
      };
      return option;
    },
    createRadar1Option(legend, indicatorArray, Edata, Cdata) {
      let option = {
        backgroundColor: "white",
        legend: {
          top: 20,
          left: 20,
          data: legend,
          itemGap: 20,
          selectedMode: "multiple"
        },
        radar: {
          indicator: indicatorArray,
          shape: "circle",
          name: {
            textStyle: {
              color: "#333"
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
            show: true,
            areaStyle: {
              color: [
                "rgba(2, 146, 154, 0.1)",
                "rgba(2, 146, 154, 0.1)",
                "rgba(2, 146, 154, 0.1)",
                "rgba(2, 146, 154, 0.1)",
                "rgba(2, 146, 154, 0.1)"
              ]
            }
          }
        },
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
                    color: "#02929A"
                  }
                }
              },
              {
                value: Edata,
                name: "期望",
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
                    color: "#FF963D"
                  }
                }
              }
            ]
          }
        ]
      };
      return option;
    },
    createRadar2Option(legend, indicator, dataOthers, dataYours) {
      let option = {
        backgroundColor: "white",
        legend: {
          top: 20,
          left: 20,
          data: legend,
          itemGap: 20,
          selectedMode: "multiple"
        },
        radar: {
          indicator: indicator,
          shape: "circle",
          name: {
            textStyle: {
              color: "#333"
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
            show: true,
            areaStyle: {
              color: [
                "rgba(2, 146, 154, 0.1)",
                "rgba(2, 146, 154, 0.1)",
                "rgba(2, 146, 154, 0.1)",
                "rgba(2, 146, 154, 0.1)",
                "rgba(2, 146, 154, 0.1)"
              ]
            }
          }
        },
        series: [
          {
            name: legend[0],
            type: "radar",
            lineStyle: {
              normal: {
                width: 2,
                opacity: 0.5
              }
            },
            data: [dataYours],
            symbol: "none",
            itemStyle: {
              normal: {
                color: "#02929A"
              },
              emphasis: {
                lineStyle: {
                  width: 4
                }
              }
            }
          },
          {
            name: legend[1],
            type: "radar",
            lineStyle: {
              normal: {
                width: 2,
                opacity: 0.5
              }
            },
            data: dataOthers,
            symbol: "none",
            itemStyle: {
              normal: {
                color: "#FF963C"
              },
              emphasis: {
                lineStyle: {
                  width: 4
                }
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.05
              }
            }
          }
        ]
      };
      return option;
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

