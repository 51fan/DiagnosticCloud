<template>
    <div>
        <md-card>
        <md-card-header>
            <md-card-media md-medium style="margin-left: 0px!important;">
            <img src="../../../assets/images/ico.png">
            </md-card-media>

            <md-card-header-text style="padding: 10px 10px 0 10px;">
            <div class="md-title">{{evalution.name}}</div>
            <div class="md-subhead">{{evalution.description}}</div>
            </md-card-header-text>

        </md-card-header>
        <scoreStar :score="evalution.heat"></scoreStar>
        <md-card-actions style="justify-content:center!important;background-color: #eee">
            <md-button to="./evaluatingPage">立即测评</md-button>
        </md-card-actions>
        </md-card>
    </div>
</template>

<style scoped>
.md-card {
  /* min-width: 300px;
  max-width: 300px; */
  
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

.md-card-header {
  padding: 8px 8px 0 8px;
}
.md-card-actions {
  padding: 0;
}
</style>

<script>
import scoreStar from "../../../components/wheels/scoreStar.vue";
export default {
  name: "EvaluationCard",
  components: {
    scoreStar
  },
  props: {
    evalution: Object
  },
  mounted: function() {
      console.log(this.evalution)
  },
  data:() => ({
    score:Object
  })
};
</script>


