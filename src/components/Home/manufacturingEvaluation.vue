<template>
    <div>
        <md-card>
        <md-card-header>
            <md-card-media md-medium style="margin-left: 0px!important;">
            <img src="../../assets/images/ico.png">
            </md-card-media>

            <md-card-header-text style="padding: 10px 10px 0 10px;">
            <div class="md-title">智能制造成熟度测评</div>
            <div class="md-subhead">针对智能制造标准的十个维度，全方位对企业现状进行评测</div>
            </md-card-header-text>

        </md-card-header>
        <scoreStar></scoreStar>
        <md-card-actions style="justify-content:center!important;background-color: #eee">
            <md-button>立即测评</md-button>
        </md-card-actions>
        </md-card>
    </div>
</template>

<style scoped>
.md-card {
  min-width: 200px;
  max-width: 480px;
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
import scoreStar from "./scoreStar.vue";
export default {
  name: "manufacturingEvaluation",
  components:{
      scoreStar
  }
};
</script>


