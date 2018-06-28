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
                        <md-tab id="tab-home" md-label="一级指标" to="">
                           <ve-radar :data="chartData1" width="600px" :legend-visible="false" ></ve-radar>
                        </md-tab>

                        <md-tab id="tab-pages" md-label="二级指标" to="">
                            <ve-radar :data="chartData2" width="600px"  :settings="chartSettings2" :legend-visible="false" ></ve-radar>
                        </md-tab>

                        <md-tab id="tab-posts" md-label="三级指标" to="">
                            <ve-radar :data="chartData3" width="600px" :settings="chartSettings3" :legend-visible="false"></ve-radar>
                        </md-tab>

                    </md-tabs>
                    </div>
                </div>
                <div class="Modeltable">
                    <md-table md-card>
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

Vue.use(VCharts);
export default {
  components: {
    VCharts
  },
  name: "evaluationsReport",
  props: ["reportParm"],
  data: () => ({
    date: String,
    chartData1: {
      columns: [
        "日期",
        "产品设计",
        "计划与调度",
        "生产作业",
        "工艺设计",
        "采购"
      ],
      rows: [
        {
          日期: "1/1",
          产品设计: 1393,
          计划与调度: 1093,
          工艺设计: 0.32,
          生产作业: 1,
          采购: 1
        },
        {
          日期: "1/2",
          产品设计: 3530,
          计划与调度: 3230,
          工艺设计: 0.26,
          生产作业: 2,
          采购: 2
        },
        {
          日期: "1/3",
          产品设计: 2923,
          计划与调度: 2623,
          工艺设计: 0.76,
          生产作业: 3,
          采购: 3
        },
        {
          日期: "1/4",
          产品设计: 1723,
          计划与调度: 1423,
          工艺设计: 0.49,
          生产作业: 4,
          采购: 4
        },
        {
          日期: "1/5",
          产品设计: 3792,
          计划与调度: 3492,
          工艺设计: 0.323,
          生产作业: 5,
          采购: 5
        },
        {
          日期: "1/6",
          产品设计: 4593,
          计划与调度: 4293,
          工艺设计: 0.78,
          生产作业: 6,
          采购: 6
        }
      ]
    },
    chartSettings2: {
      dimension: ["日期"],
      metrics: ["产品设计", "计划与调度", "工艺设计"],
      dataType: { 工艺设计: "percent" }
    },
    chartData2: {
      columns: ["日期", "产品设计", "计划与调度", "工艺设计"],
      rows: [
        { 日期: "1/1", 产品设计: 1393, 计划与调度: 1093, 工艺设计: 0.32 },
        { 日期: "1/2", 产品设计: 3530, 计划与调度: 3230, 工艺设计: 0.26 },
        { 日期: "1/3", 产品设计: 2923, 计划与调度: 2623, 工艺设计: 0.76 },
        { 日期: "1/4", 产品设计: 1723, 计划与调度: 1423, 工艺设计: 0.49 },
        { 日期: "1/5", 产品设计: 3792, 计划与调度: 3492, 工艺设计: 0.323 },
        { 日期: "1/6", 产品设计: 4593, 计划与调度: 4293, 工艺设计: 0.78 }
      ]
    },
    chartSettings3: {
      labelMap: {
        日期: "date",
        产品设计: "PV",
        计划与调度: "Order",
        工艺设计: "orderRate"
      }
    },
    chartData3: {
      columns: ["日期", "产品设计", "计划与调度", "工艺设计"],
      rows: [
        { 日期: "1/1", 产品设计: 1393, 计划与调度: 1093, 工艺设计: 0.32 },
        { 日期: "1/2", 产品设计: 3530, 计划与调度: 3230, 工艺设计: 0.26 },
        { 日期: "1/3", 产品设计: 2923, 计划与调度: 2623, 工艺设计: 0.76 },
        { 日期: "1/4", 产品设计: 1723, 计划与调度: 1423, 工艺设计: 0.49 },
        { 日期: "1/5", 产品设计: 3792, 计划与调度: 3492, 工艺设计: 0.323 },
        { 日期: "1/6", 产品设计: 4593, 计划与调度: 4293, 工艺设计: 0.78 }
      ]
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
    let self = this,
      apiKry = "",
      require = {
        evaluationId: this.evaluationId,
        idx: this.idx,
        level: 1
      };
    // setTimeout(function() {});

    self.$http
      .get("/static/jsons/tableDatasLevel1.json", { apiKry, require })
      .then(res => {
        console.log(res);
        debugger;
        let time = self.reportParm.datas.testTime;
        time = time.slice(0, 10);
        self.date = time;
        //self.reportParm.datas = res.data.return;
      });
  },
  methods: {}
};
</script>


<style scoped>
.concent {
  width: 80%;
  margin: 0px 10%;
  padding: 2% 5%;
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

