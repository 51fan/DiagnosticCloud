<template>
    <div class="panelContentbodyCenter">
        <div class="panelContentTitle">
            <label style="font-size: x-large">{{question.level2}}——{{question.level3}}</label>
            <div style="opacity: 0.5;font-size: medium;padding: 10px 0 30px 0;">{{question.level1}}</div>
                <!-- 问题-->
            <label>测评项：</label><label style="font-size: x-large;padding: 10px;">{{question.question}}</label>
        </div>
        <div class="panelContentAnswer">
            <div class="answerItem" :class="{selectAnswer:index==currentItem}" v-for="(item, index) in  question.answerLists" :key="item" @click="selectAnswer(index)">
                 <md-checkbox class="md-primary" v-model="obj" :value="index"></md-checkbox>{{index+1}}、{{item}}
            </div>
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
  props: ["question","selectedItem"],
  data: () => ({
      obj:"",
      isSelected:false,
      currentItem:9,
      answer:[],
  }),
  mounted: function() {
      if(this.question.answered){
          this.currentItem = this.question.answered-1;
      }
      //if()
      this.obj =  this.currentItem;
  },
  methods: {
    selectAnswer: function(index) {
        //debugger
        this.currentItem = index;
        this.answer.push({
            questionId:this.question.id,
            answer:this.currentItem+1,
            evaluationId:"",
            idx:this.question.idx
        })
        this.obj = index;
        //给父组件传值
        this.$emit('selectedAnswer', this.answer);
    }
  }
};
</script>


