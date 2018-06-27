<template>
   <div>
        <div class="concent">
            <div class="title">{{evaluationName}}</div>
            <span>评测日期：</span><span>{{year}}年{{month}}月{{day}}日</span>
            <div style="padding: 20px 0;font-size: 1.5em;">
                <span>评价得分：</span><span style="color: red;font-weight: 600;">93分</span><span style="    font-size: 0.8em;padding: 0 15px;color: darkgray;">总分300分</span>
            </div>
            <div>
                <span>您当前的级别：</span><span>起步级</span>
            </div>
            <div>
                <span>起步级：</span><span>组件拖出来特别多一个一个删麻烦，这个问题，首先将组件拖入画布中，然后按住“shift”键，用鼠标点击要使用的组件，使该组件取消选择。再点击“delete”键 ，即可删除剩余不需要使用的组件。</span>
            </div>
            <div style="padding: 20px 0;font-size: 1.5em;">
                <span>您的智能制造成熟度模型</span>
            </div>
            <div style="display: inline-flex;">
                <div class="evaluationModel">
                    <md-tabs md-sync-route md-alignment="fixed">
                        <md-tab id="tab-home" md-label="一级指标" to="">
                            Home Tab
                        </md-tab>

                        <md-tab id="tab-pages" md-label="二级指标" to="">
                            Pages tab
                            <p>Unde provident nemo reiciendis officia, possimus repellendus. Facere dignissimos dicta quis rem. Aliquam aspernatur dolor atque nisi id deserunt laudantium quam repellat.</p>
                        </md-tab>

                        <md-tab id="tab-posts" md-label="三级指标" to="">
                            Posts tab
                            <p>Qui, voluptas repellat impedit ducimus earum at ad architecto consectetur perferendis aspernatur iste amet ex tempora animi, illum tenetur quae assumenda iusto.</p>
                        </md-tab>

                    </md-tabs>
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
                            <md-table-cell>40a</md-table-cell>
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

            </div>
            <div style="padding: 20px 0;font-size: 1.5em;">
                <span>同区域分析</span>
            </div>
            <div>
                
            </div>
        </div>
        
        
   </div>
</template>

<script>
export default {
  name: "evaluationsReport",
  props: ["evaluationName"],
  data: () => ({
    day: "",
    month: "",
    year: ""
  }),
  mounted: function() {
    //debugger
    let time = new Date();
    this.year = time.getFullYear();
    this.month = time.getMonth();
    this.day = time.getDate();
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
}
.Modeltable {
  width: 50%;
  /* margin-left: 50%; */
}
</style>

