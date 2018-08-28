<template>
   <div>
        <div class="concent">
            <div class="title">{{reportParm.name}}</div>
            <span>评测日期：</span><span>{{date}}</span>
            <div style="padding: 20px 0;font-size: 1.5em;">
                <span>评价得分：</span><span style="color: red;font-weight: 600;">{{reportParm.datas.my_score}}分</span><span style="font-size: 0.8em;padding: 0 15px;color: darkgray;">总分{{reportParm.datas.total_score}}分</span>
            </div>
            <div>
                <span>您当前的级别：</span><span>起步级</span>
            </div>
            <div>
                <span>起步级：</span><span>在未来10-15年的时间里，最大程度地实现生产的自动化。物联网技术和大数据在工业4.0中承担核心技术支持，越来越多的机器人会代替人工，甚至是完全替代，实现“无人工厂”。</span>
            </div>
            <div style="padding: 20px 0;font-size: 1.5em;">
                <span>您的智能制造成熟度模型</span>
            </div>
            <div style="display: inline-flex;width: 100%;background-color: rgba(216, 209, 202, 0.13);">
                <div class="evaluationModel">
                    <div style="width: 100%;">
                        <el-tabs v-model="activeName" :stretch="true" @tab-click="switchTable">
                          <el-tab-pane label="一级指标" name="1">
                            <!-- <ve-radar :data="chartData1" width="100%" v-if="showRadar" ref="tab1radar1"></ve-radar> -->
                            <div  v-if="showRadar">
                              <div id="chartOption1" style="width:100%;height:400px"></div>
                            </div>
                            <ve-bar :data="chartDatabar" width="100%" v-if="showBar" ref="tab1bar1"></ve-bar>
                          </el-tab-pane>
                          <el-tab-pane label="二级指标" name="2">
                            <!-- <ve-radar :data="chartData2" width="100%" ref="tab2radar1"  :settings="chart2Settings"></ve-radar> -->
                            <div>
                              <div id="chartOption2" style="width:100%;height:400px"></div>
                            </div>
                          </el-tab-pane>
                          <el-tab-pane label="三级指标" name="3">
                            <!-- <ve-radar :data="chartData3" width="100%"  ref="tab3radar1"  :settings="chart3Settings"></ve-radar> -->
                            <div>
                              <div id="chartOption3" style="width:100%;height:400px"></div>
                            </div>
                          </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
                <div class="Modeltable">
                    <md-table md-card v-show="showLevel1Table">
                        <md-table-toolbar>
                            <h1 class="md-title">一级指标</h1>
                        </md-table-toolbar>
                        <md-table-row>
                            <md-table-head>指标名称</md-table-head>
                            <md-table-head>总分</md-table-head>
                            <md-table-head>得分</md-table-head>
                            <md-table-head>失分</md-table-head>
                            <md-table-head>得分比(%)</md-table-head>
                        </md-table-row>

                        <md-table-row v-for=" lev in reportParm.level1" :key="lev.lev">
                            <md-table-cell>{{lev.name}}</md-table-cell>
                            <md-table-cell>{{lev.total}}</md-table-cell>
                            <md-table-cell>{{lev.score}}</md-table-cell>
                            <md-table-cell>{{lev.lose}}</md-table-cell>
                            <md-table-cell>{{lev.scorePercent}}%</md-table-cell>
                        </md-table-row>
                    </md-table>
                    <md-table md-card v-show="showLevel2Table">
                        <md-table-toolbar>
                            <h1 class="md-title">二级指标</h1>
                        </md-table-toolbar>
                        <md-table-row>
                            <md-table-head>指标名称</md-table-head>
                            <md-table-head>总分</md-table-head>
                            <md-table-head>得分</md-table-head>
                            <md-table-head>失分</md-table-head>
                            <md-table-head>得分比</md-table-head>
                        </md-table-row>

                        <md-table-row v-for=" lev in reportParm.level2" :key="lev.lev">
                            <md-table-cell>{{lev.name}}</md-table-cell>
                            <md-table-cell>{{lev.total}}</md-table-cell>
                            <md-table-cell>{{lev.score}}</md-table-cell>
                            <md-table-cell>{{lev.lose}}</md-table-cell>
                            <md-table-cell>{{lev.scorePercent}}%</md-table-cell>
                        </md-table-row>
                    </md-table>
                    <md-table md-card v-show="showLevel3Table">
                        <md-table-toolbar>
                            <h1 class="md-title">三级指标</h1>
                        </md-table-toolbar>
                        <md-table-row>
                            <md-table-head>指标名称</md-table-head>
                            <md-table-head>总分</md-table-head>
                            <md-table-head>得分</md-table-head>
                            <md-table-head>失分</md-table-head>
                            <md-table-head>得分比</md-table-head>
                        </md-table-row>

                        <md-table-row v-for=" lev in reportParm.level3" :key="lev.lev">
                            <md-table-cell>{{lev.name}}</md-table-cell>
                            <md-table-cell>{{lev.total}}</md-table-cell>
                            <md-table-cell>{{lev.score}}</md-table-cell>
                            <md-table-cell>{{lev.lose}}</md-table-cell>
                            <md-table-cell>{{lev.scorePercent}}%</md-table-cell>
                        </md-table-row>
                    </md-table>
                </div>
            </div>
            <div style="padding: 20px 0;font-size: 1.5em;">
                <span>同行业分析</span>
            </div>
            <div>
                <div style="display: inline-flex;width:100%;background-color: rgba(216, 209, 202, 0.13);">
                    <div style="width: 50%;">
                        <ve-ring :data="chartData4" width="100%"></ve-ring>
                    </div>
                    <div style="margin-top: 10%;width: 50%;">
                        <span>您的企业与36%的同行业企业处于起步级，您在行业中击败了32%的企业</span>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div style="padding: 20px 0;font-size: 1.5em;">
                <span>同区域分析</span>
            </div>
            <div>
                <div style="display: inline-flex;width:100%;background-color: rgba(216, 209, 202, 0.13);">
                    <div style="width: 50%;">
                        <ve-ring :data="chartData5" width="100%"></ve-ring>
                    </div>
                    <div style="margin-top: 10%;width: 50%;">
                        您的企业与36%的同地区企业处于起步级，您在地区中击败了32%的企业
                    </div>
                </div>
            </div>
            
        </div>
        
        
   </div>
</template>

<script>
import Vue from "vue";
import VCharts from "v-charts";
import Echarts from "echarts";

Vue.use(Echarts);
Vue.use(VCharts);
export default {
  components: {
    VCharts
  },
  name: "evaluationsReport",
  // props: ["reportParm"],
  data: () => ({
    option2: Object,
    activeName: "1",
    date: String,
    showLevel1Table: true,
    showLevel2Table: false,
    showLevel3Table: false,
    showRadar: false,
    showBar: false,
    radarOption: [],
    mychart1: Object,
    mychart2: Object,
    mychart3: Object,
    chart2Settings: {
      // dimension: ["实际"],
      // metrics: [ "实际", "预期"],
      // dataType: {}
    },
    chart3Settings: {
      // dimension: ["实际"],
      // metrics: [ "实际", "预期"],
      // dataType: {}
    },
    chartDatabar: {
      columns: ["标题", , "实际", "预期"],
      rows: []
    },
    chartData1: {
      columns: ["标题", , "实际", "预期"],
      rows: []
    },
    chartData2: {
      columns: ["标题"],
      rows: []
    },
    chartData3: {
      columns: ["标题"],
      rows: []
    },
    chartData4: {
      columns: ["日期", "访问用户"],
      rows: [
        { 日期: "1/1", 访问用户: 1393 },
        { 日期: "1/2", 访问用户: 3530 },
        { 日期: "1/3", 访问用户: 2923 },
        { 日期: "1/4", 访问用户: 1723 },
        { 日期: "1/5", 访问用户: 3792 },
        { 日期: "1/6", 访问用户: 4593 }
      ]
    },
    chartData5: {
      columns: ["日期", "访问用户"],
      rows: [
        { 日期: "你的位置", 访问用户: 1393 },
        { 日期: "1/2", 访问用户: 3530 },
        { 日期: "1/3", 访问用户: 2923 },
        { 日期: "1/4", 访问用户: 1723 },
        { 日期: "1/5", 访问用户: 3792 },
        { 日期: "1/6", 访问用户: 4593 }
      ]
    }
  }),
  mounted: function() {
    // var time = this.reportParm.datas.testTime,
    //   time = time.slice(0, 10);
    // this.date = time;
    var request = {
      enterprise_id : this.reportParm.enterprise_id,
      idx: this.reportParm.idx,
      session_id: this.session_id
    };
    var apikey = "";
    var param = {
      apikey,
      request
    };
    //var type = "GET";
    //var url = "/static/jsons/tableDatasLevel1.json";
    var type = "post";
    var url = "/IBUS/DAIG_SYS/get_report_datas";
    this.getReport_datas(type, url, param);
  },
  methods: {
    getLevel1Datas: function(type, url, param) {
      var $this = this;
      $this
        .$http({
          method: type,
          url: url,
          data: param
        })
        .then(result => {
          $this.$store.commit("evlaluating/getReportParm", {
            key: "level1",
            value: result.data.level
          });
          // console.log(result.data.level);
          // console.log($this.reportParm.level1.length);
          if (!$this.reportParm.level1.length) return;
          //如果第一维度小于2个，就用条形图显示，大于2就用雷达图显示
          if (
            $this.reportParm.level1.length &&
            $this.reportParm.level1.length > 2
          ) {
            $this.showRadar = true;
            $this.showBar = false;
            $this.reportParm.level1.forEach(item => {
              $this.chartData1.columns.push(item.name);
            });
            var currentData = { 标题: "实际" },
              expertData = { 标题: "预期" };
            let indicatorArray = [];
            let Edata = [];
            let Cdata = [];
            $this.chartData1.columns.forEach(colum => {
              $this.reportParm.level1.forEach(lev => {
                if (lev.name == colum) {
                  currentData[colum] = lev.score;
                  expertData[colum] = lev.expectScore;
                  indicatorArray.push({ name: lev.name, max: 100 });
                  Edata.push(lev.scorePercent);
                  Cdata.push((lev.expectScore / lev.total).toFixed(2) * 100);
                }
              });
            });

            $this.chartData1.rows.push(expertData);
            $this.chartData1.rows.push(currentData);
            var lineStyle = {
              normal: {
                width: 1,
                opacity: 0.5
              }
            };
            $this.option1 = {
              backgroundColor: "#fff",
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
                      label: {
                        normal: {
                          show: true,
                          formatter: function(params) {
                            return params.value + "%";
                          }
                        }
                      },
                      itemStyle: {
                        normal: {
                          color: "#19d4ae"
                        }
                      }
                    },
                    {
                      value: Cdata,
                      name: "实际",
                      label: {
                        normal: {
                          show: true,
                          formatter: function(params) {
                            return params.value + "%";
                          }
                        }
                      },
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
            $this.mychart1 = $this.$echarts.init(
              document.getElementById("chartOption1")
            );
            $this.mychart1.setOption($this.option1, true);
            $this.getLevel2Datas();
          } else {
            $this.showRadar = false;
            $this.showBar = true;

            var showData = [];
            $this.reportParm.level1.forEach(lev => {
              var arry = {};
              $this.chartDatabar.columns.forEach(colum => {
                //debugger;

                if (colum == "标题") {
                  arry[colum] = lev.name;
                } else if (colum == "实际") {
                  arry[colum] = lev.score;
                } else if (colum == "预期") {
                  arry[colum] = lev.expectScore;
                }
              });
              showData.push(arry);
            });
            $this.chartDatabar.rows = showData;
            console.log($this.chartDatabar.rows);
            $this.getLevel2Datas();
          }
        });
    },
    getLevel2Datas: function() {
      var $this = this;
      var request = {
          evaluationId: $this.reportParm.evaluationId,
          idx: $this.reportParm.idx,
          level: 2,
          session_id: this.session_id
        },
        apikey = "",
        param = {
          apikey,
          request
        },
        // type = "GET",
        // url = "/static/jsons/tableDatasLevel2.json";
        type = "POST",
        url = "/IBUS/DAIG_SYS/getLevelInfo";

      $this
        .$http({
          method: type,
          url: url,
          data: param
        })
        .then(result => {
          $this.$store.commit("evlaluating/getReportParm", {
            key: "level2",
            value: result.data.level
          });

          $this.reportParm.level2.forEach(item => {
            $this.chartData2.columns.push(item.name);
          });
          var currentData = { 标题: "实际" },
            expertData = { 标题: "预期" };
          let indicatorArray = [];
          let Edata = [];
          let Cdata = [];
          $this.chartData2.columns.forEach(colum => {
            $this.reportParm.level2.forEach(lev => {
              if (lev.name == colum) {
                currentData[colum] = lev.score;
                expertData[colum] = lev.expectScore;
                indicatorArray.push({ name: lev.name, max: 100 });
                Edata.push(lev.scorePercent);
                Cdata.push((lev.expectScore / lev.total).toFixed(2) * 100);
              }
            });
          });

          $this.chartData2.rows.push(expertData);
          $this.chartData2.rows.push(currentData);
          // console.log($this.chartData2.rows);
          // console.log(indicatorArray);
          // console.log(Edata);
          // console.log(Cdata);
          $this.getLevel3Datas();

          var lineStyle = {
            normal: {
              width: 1,
              opacity: 0.5
            }
          };
          $this.option2 = {
            backgroundColor: "#fff",
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
                    label: {
                      normal: {
                        show: true,
                        formatter: function(params) {
                          return params.value + "%";
                        }
                      }
                    },
                    itemStyle: {
                      normal: {
                        color: "#19d4ae"
                      }
                    }
                  },
                  {
                    value: Cdata,
                    name: "实际",
                    label: {
                      normal: {
                        show: true,
                        formatter: function(params) {
                          return params.value + "%";
                        }
                      }
                    },
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
          $this.mychart2 = $this.$echarts.init(
            document.getElementById("chartOption2")
          );
          $this.mychart2.setOption($this.option2, true);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getLevel3Datas: function() {
      var $this = this;
      var request = {
          evaluationId: $this.reportParm.evaluationId,
          idx: $this.reportParm.idx,
          level: 3,
          session_id: this.session_id
        },
        apikey = "",
        param = {
          apikey,
          request
        },
        // type = "GET",
        // url = "/static/jsons/tableDatasLevel3.json";
        type = "POST",
        url = "/IBUS/DAIG_SYS/getLevelInfo";

      $this
        .$http({
          method: type,
          url: url,
          data: param
        })
        .then(result => {
          $this.$store.commit("evlaluating/getReportParm", {
            key: "level3",
            value: result.data.level
          });

          console.log($this.reportParm.level3);
          $this.reportParm.level3.forEach(item => {
            $this.chartData3.columns.push(item.name);
          });
          var currentData = { 标题: "实际" },
            expertData = { 标题: "预期" };
          let indicatorArray = [];
          let Edata = [];
          let Cdata = [];
          $this.chartData3.columns.forEach(colum => {
            $this.reportParm.level3.forEach(lev => {
              if (lev.name == colum) {
                currentData[colum] = lev.score;
                expertData[colum] = lev.expectScore;
                indicatorArray.push({ name: lev.name, max: 100 });
                Edata.push(lev.scorePercent);
                Cdata.push((lev.expectScore / lev.total).toFixed(2) * 100);
              }
            });
          });
          $this.chartData3.rows.push(expertData);
          $this.chartData3.rows.push(currentData);

          var lineStyle = {
            normal: {
              width: 1,
              opacity: 0.5
            }
          };
          $this.option3 = {
            backgroundColor: "#fff",
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
                    label: {
                      normal: {
                        show: true,
                        formatter: function(params) {
                          return params.value + "%";
                        }
                      }
                    },
                    itemStyle: {
                      normal: {
                        color: "#19d4ae"
                      }
                    }
                  },
                  {
                    value: Cdata,
                    name: "实际",
                    label: {
                      normal: {
                        show: true,
                        formatter: function(params) {
                          return params.value + "%";
                        }
                      }
                    },
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
          $this.mychart3 = $this.$echarts.init(
            document.getElementById("chartOption3")
          );
          $this.mychart3.setOption($this.option3, true);

          // setTimeout(() => {
          //   $this.switchTable({ index: "0" });
          // }, 1000);
        })
        .catch(error => {
          console.log(error);
        });
    },
    switchTable: function(index) {
      if (index.index == "0") {
        this.showLevel1Table = true;
        this.showLevel2Table = false;
        this.showLevel3Table = false;
        // if (this.showRadar) {
        //   this.$nextTick(() => {
        //     this.mychart1.resize();
        //   });
        // }
        // if (this.showBar) {
        //   this.$nextTick(() => {
        //     this.$refs.tab1bar1.echarts.resize();
        //   });
        // }
      } else if (index.index == "1") {
        this.showLevel1Table = false;
        this.showLevel2Table = true;
        this.showLevel3Table = false;
        // this.$nextTick(() => {
        //   this.mychart2.resize();
        // });
      } else if (index.index == "2") {
        this.showLevel1Table = false;
        this.showLevel2Table = false;
        this.showLevel3Table = true;
        // this.$nextTick(() => {
        //   this.$nextTick(() => {
        //     this.mychart3.resize();
        //   });
        // });
      }
    },
    handleClick() {}
  },
  computed: {
    reportParm() {
      return this.$store.state.evlaluating.evaluatingPage.reportParm;
    },
    session_id() {
      return this.$store.state.loginPage.session_id;
    }
  },
  updated: function() {
    if (this.showLevel1Table) {
      if (this.showRadar) {
        this.$nextTick(() => {
          this.mychart1.resize();
        });
      }
      if (this.showBar) {
        this.$nextTick(() => {
          this.$refs.tab1bar1.echarts.resize();
        });
      }
    }
    if (this.showLevel3Table) {
      this.$nextTick(() => {
        this.mychart3.resize();
      });
    }
    if (this.showLevel2Table) {
      this.$nextTick(() => {
        this.mychart2.resize();
      });
    }
  }
};
</script>


<style scoped>
.concent {
  width: 90%;
  /* margin: 0px 10%; */
  margin-left: 5%;
  padding: 2% 5%;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  position: relative;
  z-index: 1;
  border-radius: 6px;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: color, background-color;
  will-change: color, background-color;
  padding: 5%;
  border: 1px solid lightgray;
}
.title {
  display: inline-block;
  font-size: 1.5em;
  margin-right: 40px;
  font-weight: 600;
}
.evaluationModel {
  width: 50%;
  text-align: center; /*IE*/
  text-align: -moz-center; /*Firefox*/
  text-align: -webkit-center; /*Chrome*/
  background-color: #fff;
}
.Modeltable {
  width: 50%;
  /* margin-left: 50%; */
}
</style>

