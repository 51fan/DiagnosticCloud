<template>
    <div class="panelContentbodyCenter">
      <div class="panelContentTitle">
        <div style="padding: 0 0 4% 8%;">
            <label style="font-size: x-large">{{question.level1}}/{{question.level2}}/{{question.level3}}/{{question.level4}}</label>
            <!-- <div style="opacity: 0.5;font-size: medium;padding: 10px 0 30px 0;">{{question.level1}}</div> -->
                <!-- 问题-->
            <label>测评项：</label><label style="font-size: x-large;padding: 10px;">{{question.question}}</label>
        </div>
        <div style="border-top: 1px solid lightgray;padding: 5% 0 0 10%;">
            <!-- <div class="answerItem" :class="{selectAnswer:index==currentChooseObj}" v-for="(item, index) in  question.answerLists" :key="item" @click="selectAnswer(index)"> -->
            <div class="md-layout">
              <div class="md-layout-item md-size-100" style="display: inline-flex;">
                <!-- <div class="md-layout-item md-size-10"></div> -->
                <!-- <div class="md-layout-item md-size-15">
                  <answerSelectd :selectLength="questionLength"></answerSelectd>
                </div> -->
                <div class="md-layout-item md-size-100">
                  <div style="margin: 27px 0;">
                    <span class="expertText" style="margin: 8px;">预期</span><span class="currentText" style="margin: 28px;">实际</span>
                    <div class="answerItem" v-for="(item, index) in  question.answerLists" :key="item" style="width:100%">
                        <md-radio  v-model="expertObj" :value="index" style="width:5%"></md-radio>
                        <md-radio class="md-primary" v-model="chooseObj" :value="index" style="width:5%"></md-radio>
                        <div style="display: inline-flex;width: 80%;">{{index+1}}、{{item}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- <answerSelectds></answerSelectds> -->
            
        </div>
      </div>
    </div>
</template>

<style scoped>
.panelContentbodyCenter {
  font-size: 1em;
  width: 100%;
}
.panelContentTitle {
  border: 1px solid burlywood;
  padding: 15px;
  /* margin-bottom: 20px; */
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  position: relative;
  z-index: 1;
  border-radius: 6px;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: color, background-color;
  will-change: color, background-color;
  width: 100%;
  padding: 3% 5% 1% 5%;
  border: 1px solid lightgray;
}
.answerItem {
  padding: 10px 10px;
  /* cursor: pointer; */
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
  /* padding: 5% 5% 2%; */
  border: 1px solid lightgray;
}
.selectAnswer {
  background-color: rgba(10, 185, 222, 0.32);
}
</style>

<script>
import answerSelectd from "../../components/wheels/answerSelectd/answerSelectd.vue";
import answerSelectds from "../../components/wheels/answerSelectd/answerSelectds.vue";

export default {
  props: ["question"],
  components: {
    answerSelectd,
    answerSelectds
  },
  data: () => ({
    chooseObj: "",
    expertObj: "",
    isSelected: false,
    active: 1,
    // currentChooseObj: "",
    // currentexpertObj: "",
    questionLength: this.question,
    selectLength: "",
    answer: {
      questionId: "",
      expected: "",
      answer: "",
      evaluationId: "",
      idx: ""
    },
    tips: ["完成当前题目后才能进入下一题！"]
  }),
  mounted: function() {
    // console.log(this.question);
    this.chooseObj = "";
    this.expertObj = "";
    if (this.question.answered !== "") {
      this.chooseObj = this.question.answered - 1;
    }
    if (this.question.expected !== "") {
      this.expertObj = this.question.expected - 1;
    }
  },
  methods: {
    next(index) {
      this.active = index;
      // this.active++
      // if (this.active > 2) {
      //   this.active = 0
      // };
    }
  },
  watch: {
    chooseObj: function(newvalue, oldvalue) {
      // debugger;
      //当前实际选中的选项
      if (newvalue == NaN) return;
      //this.currentChooseObj = newvalue + 1;
      this.answer.questionId = this.question.id;
      //this.answer.expected = this.expertObj + 1;
      this.answer.answer = this.chooseObj + 1;
      this.answer.idx = this.question.idx;

      //给父组件传值
      this.$emit("selectedAnswer", this.answer);
    },
    expertObj: function(newvalue, oldvalue) {
      // debugger;
      //当前期望选中的选项
      if (newvalue == NaN) return;
      //this.currentexpertObj = newvalue + 1;
      this.answer.questionId = this.question.id;
      this.answer.expected = this.expertObj + 1;
      //this.answer.answer = this.chooseObj + 1;
      this.answer.idx = this.question.idx;

      //给父组件传值
      this.$emit("selectedAnswer", this.answer);
    }
  }
};
</script>


