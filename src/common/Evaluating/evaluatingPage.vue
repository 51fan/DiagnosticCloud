<template>
    <div class="mypanel">
        <!--标题头部  -->
        <div  class="panelHeader">
            <div class="panelHeaderTitle">
                <h3>{{name}}</h3>
            </div>
            <div class="progressBar">
                <label>当前进度：</label>
                    <md-progress-bar md-mode="determinate" :md-value="fillValue" class="progressBarFill"></md-progress-bar>
                <label>{{questionIndex}}/{{questionCounts}}</label>
            </div>   
        </div>

        <!--答题区  -->
        <div class="panelContent">
            <!--试题标题  -->
            
            <div class="panelContentbody">
                <!--上一题  -->
                <div  class="panelContentbodyleft" @click="preItem()">
                    <md-icon class="md-size-5x"  >keyboard_arrow_left</md-icon>
                </div>
            
                <!--试题正文  -->
                <answerPage v-for="question in questionsList" :key="question.id" :question="question"></answerPage>
                <!--下一题  -->
                <div class="panelContentbodyRight" @click="nextItem()">
                    <md-icon class="md-size-5x"  >keyboard_arrow_right</md-icon>
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
.panelContentTitle {
  padding: 15px 40px;
  margin-left: -32%;
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
  vertical-align: text-bottom;
  height: 280px;
  cursor: pointer;
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
  vertical-align: text-bottom;
  height: 280px;
  cursor: pointer;
}
</style>

<script>
import answerPage from "./answerPage.vue";

export default {
  name: "evaluatingPage",
  components: {
    answerPage
  },
  data: () => ({
    id: "",
    name: "",
    questionCounts: "",
    questionIndex: 1,
    currentIndex: 1,
    fillValue: 10,
    questionsAllList: [],
    questionsList: [],
    question: Object
  }),
  created: function() {},
  mounted: function() {
    let apiKry = "",
      self = this,
      require = {};

    self.id = this.$route.query.id;
    self.name = this.$route.query.name;
    require.id = self.id;
    self.$http
      .get("/static/jsons/evaluation.json", {
        apiKry,
        require
      })
      .then(res => {
        //console.log(res.data.return)
        //debugger;
        self.questionsAllList = res.data.return;
        self.questionCounts = res.data.count;
        self.questionsList.push(self.questionsAllList[self.questionIndex - 1]);
        console.log(self.questionsList);
      });
  },
  methods: {
    preItem: function() {
      if (this.currentIndex == 1) return;
      this.questionIndex--;
      this.currentIndex--;

      //更新进度条
      this.fillValue = this.currentIndex / this.questionCounts * 100;
      console.log(this.fillValue);

      this.questionsList = [];
      this.questionsList.push(this.questionsAllList[this.questionIndex - 1]);
    },
    nextItem: function() {
      if (this.currentIndex == this.questionCounts) return;
      this.questionIndex++;
      this.currentIndex++;
      
      //更新进度条
      this.fillValue = this.currentIndex / this.questionCounts * 100;
      console.log(this.fillValue);

      this.questionsList = [];
      this.questionsList.push(this.questionsAllList[this.questionIndex - 1]);
    }
  }
};
</script>


