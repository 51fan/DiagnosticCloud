<template>
    <div style="overflow: hidden;">
        <div>
            <h3>请选择你要测评的产品</h3>
        </div>
       <!-- 搜索栏 -->
       <input value="请输入"></input><span>搜索</span>
        <div class="md-layout md-gutter  mypanle"  >
            <ManufacturingEvaluation class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"></ManufacturingEvaluation>
            <ManufacturingEvaluation class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"></ManufacturingEvaluation>
            <ManufacturingEvaluation class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"></ManufacturingEvaluation>
            <ManufacturingEvaluation class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"></ManufacturingEvaluation>
        </div>
    </div>
</template>

<script>
import ManufacturingEvaluation from "./manufacturingEvaluation.vue";
export default {
  components: {
    ManufacturingEvaluation
  }
};
</script>

<style lang="scss" scoped>

.mypanle{
    padding-left: 10%;
    padding-right: 10%;
}

</style>



