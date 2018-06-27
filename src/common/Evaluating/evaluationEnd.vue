<template>
    <div class="concent">
        <i class="material-icons md-size-5x" style="color: limegreen">check_circle</i>
       <div style="padding: 10px;font-size: x-large;">
            评测完成
       </div>
       <div style="padding: 20px 0 35px 0;">您已经完成该项目的测评，请点击下方查看报告查看测评结果。</div>
       <md-button class="md-primary md-raised">查看测评报告</md-button>
    </div>
</template>

<style scoped>
.concent {
  width: 80%;
  margin: 30px 10%;
  text-align: center;
  padding: 5%;
}
</style>

<script>
export default {
  name: "evaluationEnd"
};
</script>


