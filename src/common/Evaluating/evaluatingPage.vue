<template>
    <div class="mypanel">
        <!--标题头部  -->
        <div  class="panelHeader">
            <div class="panelHeaderTitle">
                <h3>智能制造成熟度测评</h3>
            </div>
            <div class="progressBar">
                <label>当前进度：</label>
                    <md-progress-bar md-mode="determinate" :md-value="30" class="progressBarFill"></md-progress-bar>
                <label>3/10</label>
            </div>   
        </div>

        <!--答题区  -->
        <div class="panelContent">
            <!--试题标题  -->
            <div class="panelContentTitle">
                <label style="font-size: x-large">设计——产品设计</label>
                <div style="opacity: 0.5;font-size: medium;padding: 0 0 10px 0;">制造维度</div>
                <!-- 问题-->
                <label>测评项：</label><label>策划文档管理</label>
            </div>
            <div class="panelContentbody">
                <!--上一题  -->
                <div  class="panelContentbodyleft">
                    <md-icon class="md-size-5x">keyboard_arrow_left</md-icon>
                </div>
            
                <!--试题正文  -->
                <div class="panelContentbodyCenter">
                    <div>1. 无产品策划归档文档</div>
                    <div>2. 部分产品设计已形成策划方案并将文档归档</div>
                    <div>3. 大部分产品设计文档归档</div>
                    <div>4. 标准的产品设计已形成策划方案，并将文档归档</div>
                    <div>5. 产品设计文档实现信息化管理</div>
                    <div>6. 产品设计文档实现信息化管理，并在部门内进行共享</div>
                </div>
                <!--下一题  -->
                <div class="panelContentbodyRight">
                    <md-icon class="md-size-5x">keyboard_arrow_right</md-icon>
                </div> 
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.panelContent {
  background-color: rgba(255, 250, 240, 0.2);
  margin: 0 10%;
}

.panelHeader {
  text-align: center;
  padding: 10px 0px 0px;
  width: 80%;
  margin: 30px 10%;
  background-color: rgba(126, 207, 210, 0.7);
}
.md-progress-bar {
  margin: 24px;
}
.panelHeaderTitle {
  display: inline-flex;
}
.panelContentTitle{
    padding: 15px 40px;
}
.progressBar {
  display: inline;
  padding: 0 10%;
}
.progressBarFill {
  width: 600px;
  display: inline-flex;
  height: 12px;
  border-radius: 12px;
}

.panelContentbodyleft {
  opacity: 0.2;
  width: 20%;
  display: inline-block;
  vertical-align: middle;
  height: 280px;
}

.panelContentbodyCenter {
  width: 59%;
  text-align: left;
  display: inline-block;
}

.panelContentbodyCenter div {
  padding: 10px;
}
.panelContentbodyRight {
  opacity: 0.2;
  width: 20%;
  display: inline-block;
  text-align: right;
  vertical-align: middle;
  height: 280px;
}
</style>

<script>
export default {
  name: "evaluatingPage"
};
</script>


