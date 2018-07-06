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
                        <md-tabs md-sync-route md-alignment="fixed" >
                        <md-tab id="tab-home" md-label="一级指标" to="" @click="switchTable(1)">
                           <ve-radar :data="chartData1" width="100%" v-if="showRadar" ref="tab1radar1"></ve-radar>
                           <ve-bar :data="chartDatabar" width="100%" v-if="showBar" ref="tab1bar1"></ve-bar>
                        </md-tab>

                        <md-tab id="tab-pages" md-label="二级指标" to="" @click="switchTable(2)">
                            <ve-radar :data="chartData2" width="100%" ref="tab2radar1" ></ve-radar>
                        </md-tab>

                        <md-tab id="tab-posts" md-label="三级指标" to="" @click="switchTable(3)">
                            <ve-radar :data="chartData3" width="100%"  ref="tab3radar1"></ve-radar>
                        </md-tab>

                    </md-tabs>
                    </div>
                </div>
                <div class="Modeltable">
                    <md-table md-card v-if="showLevel1Table">
                        <md-table-toolbar>
                            <h1 class="md-title">一级指标</h1>
                        </md-table-toolbar>
                        <md-table-row>
                            <md-table-head>指标名称</md-table-head>
                            <md-table-head>总分</md-table-head>
                            <md-table-head>得分</md-table-head>
                            <md-table-head>失分</md-table-head>
                            <md-table-head>得分比</md-table-head>
                        </md-table-row>

                        <md-table-row v-for=" lev in reportParm.level1" :key="lev.lev">
                            <md-table-cell>{{lev.name}}</md-table-cell>
                            <md-table-cell>{{lev.total}}</md-table-cell>
                            <md-table-cell>{{lev.score}}</md-table-cell>
                            <md-table-cell>{{lev.lose}}</md-table-cell>
                            <md-table-cell>{{lev.scorePercent*100}}</md-table-cell>
                        </md-table-row>
                    </md-table>
                    <md-table md-card v-if="showLevel2Table">
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
                            <md-table-cell>{{lev.scorePercent*100}}</md-table-cell>
                        </md-table-row>
                    </md-table>
                    <md-table md-card v-if="showLevel3Table">
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
                            <md-table-cell>{{lev.scorePercent*100}}</md-table-cell>
                        </md-table-row>
                    </md-table>
                    <!-- <md-table md-card>
                        <md-table-row>
                            <md-table-cell>产品设计</md-table-cell>
                            <md-table-cell>100</md-table-cell>
                            <md-table-cell>40</md-table-cell>
                            <md-table-cell>60</md-table-cell>
                            <md-table-cell>60%</md-table-cell>
                        </md-table-row>

                        <md-table-row>
                            <md-table-cell>工艺设计</md-table-cell>
                            <md-table-cell>100</md-table-cell>
                            <md-table-cell>40</md-table-cell>
                            <md-table-cell>60</md-table-cell>
                            <md-table-cell>60%</md-table-cell>
                        </md-table-row>

                        <md-table-row>
                            <md-table-cell>采购</md-table-cell>
                            <md-table-cell>100</md-table-cell>
                            <md-table-cell>40</md-table-cell>
                            <md-table-cell>60</md-table-cell>
                            <md-table-cell>60%</md-table-cell>
                        </md-table-row>

                        <md-table-row>
                            <md-table-cell>计划与调度</md-table-cell>
                            <md-table-cell>100</md-table-cell>
                            <md-table-cell>40</md-table-cell>
                            <md-table-cell>60</md-table-cell>
                            <md-table-cell>60%</md-table-cell>
                        </md-table-row>
                        <md-table-row>
                            <md-table-cell>生产作业</md-table-cell>
                            <md-table-cell>100</md-table-cell>
                            <md-table-cell>40</md-table-cell>
                            <md-table-cell>60</md-table-cell>
                            <md-table-cell>60%</md-table-cell>
                        </md-table-row>
                    </md-table> -->
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

Vue.use(VCharts);
export default {
  components: {
    VCharts
  },
  name: "evaluationsReport",
  props: ["reportParm"],
  data: () => ({
    date: String,
    showLevel1Table: true,
    showLevel2Table: false,
    showLevel3Table: false,
    showRadar: false,
    showBar: false,
    chartDatabar: {
      columns: ["标题", "当前", "期望"],
      rows: []
    },
    chartData1: {
      columns: ["标题", "当前", "期望"],
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
    let self = this;
    setTimeout(function() {
      let time = self.reportParm.datas.testTime,
        apikey = "",
        request = {
          evaluationId: self.reportParm.evaluationId,
          idx: self.reportParm.idx,
          level: 1
        };
      time = time.slice(0, 10);
      self.date = time;
      self.getLevel1Datas();
      self.getLevel2Datas();
      self.getLevel3Datas();
      //console.log(self.reportParm);
    });
  },
  methods: {
    getLevel1Datas: function() {
      let self = this,
        apikey = "",
        request = {
          evaluationId: self.reportParm.evaluationId,
          idx: self.reportParm.idx,
          level: 1
        };

      self.$http
        .get("/static/jsons/tableDatasLevel1.json", { apikey, request })
        .then(res => {
          //debugger;
          self.reportParm.level1 = res.data.return;
          //console.log(self.reportParm);
          console.log(self.reportParm.level1);
          //如果第一维度小于2个，就用条形图显示，大于2就用雷达图显示
          if (self.reportParm.level1.length > 2) {
            self.showRadar = true;
            self.showBar = false;
            self.reportParm.level1.forEach(item => {
              self.chartData1.columns.push(item.name);
            });
            let currentData = { 标题: "当前" },
              expertData = { 标题: "期望" };
            self.chartData1.columns.forEach(colum => {
              self.reportParm.level1.forEach(lev => {
                if (lev.name == colum) {
                  currentData[colum] = lev.scorePercent * 100;
                  expertData[colum] = 100;
                }
              });
            });

            self.chartData1.rows.push(currentData);
            self.chartData1.rows.push(expertData);
          } else {
            self.showRadar = false;
            self.showBar = true;

            // let chartData= {
            //     columns: ['标题', '当前', '期望'],
            //     rows: [
            //         { '标题': '智能维度', '当前': 1393, '期望': 1093,  },
            //         { '标题': '制造维度', '当前': 3530, '期望': 3230,  },
            //     ]
            // }

            let showData = [];
            self.reportParm.level1.forEach(lev => {
              let arry = {};
              self.chartDatabar.columns.forEach(colum => {
                //debugger;

                if (colum == "标题") {
                  arry[colum] = lev.name;
                } else if (colum == "当前") {
                  arry[colum] = lev.scorePercent * 100;
                } else if (colum == "期望") {
                  arry[colum] = 100;
                }
              });
              showData.push(arry);
            });

            self.chartDatabar.rows = showData;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getLevel2Datas: function() {
      let self = this,
        apikey = "",
        request = {
          evaluationId: self.reportParm.evaluationId,
          idx: self.reportParm.idx,
          level: 2
        };

      self.$http
        .get("/static/jsons/tableDatasLevel2.json", { apikey, request })
        .then(res => {
          self.reportParm.level2 = res.data.return;
          //console.log(self.reportParm);
          self.reportParm.level2.forEach(item => {
            self.chartData2.columns.push(item.name);
          });
          let currentData = { 标题: "当前" },
            expertData = { 标题: "期望" };
          self.chartData2.columns.forEach(colum => {
            self.reportParm.level2.forEach(lev => {
              if (lev.name == colum) {
                currentData[colum] = lev.scorePercent * 100;
                expertData[colum] = 100;
              }
            });
          });

          self.chartData2.rows.push(currentData);
          self.chartData2.rows.push(expertData);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getLevel3Datas: function() {
      let self = this,
        apikey = "",
        request = {
          evaluationId: self.reportParm.evaluationId,
          idx: self.reportParm.idx,
          level: 3
        };

      self.$http
        .get("/static/jsons/tableDatasLevel3.json", { apikey, request })
        .then(res => {
          self.reportParm.level3 = res.data.return;
          //console.log(self.reportParm);
          self.reportParm.level3.forEach(item => {
            self.chartData3.columns.push(item.name);
          });
          let currentData = { 标题: "当前" },
            expertData = { 标题: "期望" };
          self.chartData3.columns.forEach(colum => {
            self.reportParm.level3.forEach(lev => {
              if (lev.name == colum) {
                currentData[colum] = lev.scorePercent * 100;
                expertData[colum] = 100;
              }
            });
          });

          self.chartData3.rows.push(currentData);
          self.chartData3.rows.push(expertData);
        })
        .catch(error => {
          console.log(error);
        });
    },
    switchTable: function(index) {
      if (index == 1) {
        this.showLevel1Table = true;
        this.showLevel2Table = false;
        this.showLevel3Table = false;
        this.$refs.tab1radar1.echarts.resize();
        this.$refs.tab1bar1.echarts.resize();
      } else if (index == 2) {
        this.showLevel1Table = false;
        this.showLevel2Table = true;
        this.showLevel3Table = false;
        this.$refs.tab2radar1.echarts.resize();
      } else if (index == 3) {
        this.showLevel1Table = false;
        this.showLevel2Table = false;
        this.showLevel3Table = true;
        this.$refs.tab3radar1.echarts.resize();
      }
    }
  }
};
</script>


<style scoped>
.concent {
  width: 80%;
  margin: 0px 10%;
  padding: 2% 5%;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  position: relative;
  z-index: 1;
  border-radius: 6px;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: color, background-color;
  will-change: color, background-color;
  width: 80%;
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
}
.Modeltable {
  width: 50%;
  /* margin-left: 50%; */
}
</style>

