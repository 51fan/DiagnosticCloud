<template>
    <div class="panelContentbodyCenter">
        <div class="panelContentTitle">
            <label style="font-size: x-large">{{question.level2}}——{{question.level3}}</label>
            <div style="opacity: 0.5;font-size: medium;padding: 10px 0 30px 0;">{{question.level1}}</div>
                <!-- 问题-->
            <label>测评项：</label><label style="font-size: x-large;padding: 10px;">{{question.question}}</label>
        </div>
        <div class="panelContentAnswer">
            <!-- <div class="answerItem" :class="{selectAnswer:index==currentChooseObj}" v-for="(item, index) in  question.answerLists" :key="item" @click="selectAnswer(index)"> -->
            <span class="expertText">预期</span><span class="currentText">实际</span>
            <div class="answerItem" v-for="(item, index) in  question.answerLists" :key="item" style="width100%">
                 <md-radio  v-model="expertObj" :value="index" style="width:5%"></md-radio>
                 <md-radio class="md-primary" v-model="chooseObj" :value="index" style="width:5%"></md-radio>
                 <span>{{index+1}}、{{item}}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.panelContentbodyCenter {
  font-size: 1em;
}
.panelContentTitle {
  border: 1px solid burlywood;
  padding: 15px;
  margin-bottom: 20px;
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
}
.answerItem {
  padding: 5px 10px;
  cursor: pointer;
  font-size: smaller;
}
.panelContentAnswer {
  padding: 15px;
  border: 1px solid burlywood;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  position: relative;
  z-index: 1;
  border-radius: 6px;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: color, background-color;
  will-change: color, background-color;
  width: 100%;
  padding: 5% 5% 2%;
  border: 1px solid lightgray;
}
.selectAnswer {
  background-color: rgba(10, 185, 222, 0.32);
}
.expertText {
  margin-left: 1%;
  padding-right: 4%;
  font-size: larger;
}
.currentText {
  font-size: larger;
}
</style>

<script>
export default {
  props: ["question"],
  data: () => ({
    chooseObj: "",
    expertObj: "",
    isSelected: false,
    currentChooseObj: 9,
    currentexpertObj: 9,
    answer: {
      questionId: "",
      expected: "",
      answer: "",
      evaluationId: "",
      idx: ""
    }
  }),
  mounted: function() {
    if (this.question.answered) {
      this.currentChooseObj = this.question.answered - 1;
    }
    if (this.question.answered) {
      this.currentexpertObj = this.question.expected - 1;
    }
    //if()
    this.chooseObj = this.currentChooseObj;
    this.expertObj = this.currentexpertObj;
  },
  methods: {
    // selectAnswer: function(index) {
    //   // debugger;
    //   this.currentChooseObj = index;
    //   this.answer.push({
    //     questionId: this.question.id,
    //     expected: this.expertObj,
    //     //answer: this.currentChooseObj + 1,
    //     answer: this.chooseObj,
    //     evaluationId: "",
    //     idx: this.question.idx
    //   });
    //   this.chooseObj = index;
    //   //给父组件传值
    //   this.$emit("selectedAnswer", this.answer);
    // }
  },
  watch: {
    chooseObj: function(newvalue, oldvalue) {
      debugger;
      //当前实际选中的选项
      this.currentChooseObj = newvalue + 1;
      this.answer.questionId = this.question.id;
      this.answer.expected = this.expertObj + 1;
      this.answer.answer = this.chooseObj + 1;
      this.answer.idx = this.question.idx;

      //给父组件传值
      this.$emit("selectedAnswer", this.answer);
    },
    expertObj: function(newvalue, oldvalue) {
      debugger;
      //当前期望选中的选项
      this.currentexpertObj = newvalue + 1;
      this.answer.questionId = this.question.id;
      this.answer.expected = this.expertObj + 1;
      this.answer.answer = this.chooseObj + 1;
      this.answer.idx = this.question.idx;

      //给父组件传值
      this.$emit("selectedAnswer", this.answer);
    }
  }
};
</script>


