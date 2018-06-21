<template>
    <div class="panelContentbodyCenter">
        <div class="panelContentTitle">
            <label style="font-size: x-large">{{question.level2}}——{{question.level3}}</label>
            <div style="opacity: 0.5;font-size: medium;padding: 10px 0 30px 0;">{{question.level1}}</div>
                <!-- 问题-->
            <label>测评项：</label><label style="font-size: x-large;padding: 10px;">{{question.question}}</label>
        </div>
        <div class="panelContentAnswer">
            <div class="answerItem" :class="{selectAnswer:index==currentIndex}" v-for="(item, index) in  question.answerLists" :key="item" @click="selectAnswer(index)">{{index+1}}:{{item}}</div>
        </div>
    </div>
</template>

<style scoped>
.panelContentbodyCenter {
  font-size: larger;
}
.panelContentTitle {
  border: 1px solid burlywood;
  padding: 15px;
  margin-bottom: 20px;
}
.answerItem {
  padding: 20px 10px;
  cursor: pointer;
}
.panelContentAnswer {
  padding: 15px;
  border: 1px solid burlywood;
}
.selectAnswer{
    background-color: rgba(10, 185, 222, 0.32)
}
</style>

<script>
export default {
  props: ["question"],
  data: () => ({
      isSelected:false,
      currentIndex:9,
      answer:[],
  }),
  mounted: function() {},
  methods: {
    selectAnswer: function(index) {
        // debugger
        this.currentIndex = index;
        this.answer.push({
            answer:this.currentIndex
        })
    }
  }
};
</script>


