<template>
  <div>
    <layouts></layouts>
  </div>
</template>

<script>
import layouts from "./common/layouts.vue";
export default {
  components: {
    layouts
  },
  name: "App"
};
</script>

<style>

@media screen and(min-width:1100px) {
  .infoItem {
    width: 90%;
  }
}
@media screen and (max-device-width: 1200px) {
  .infoItem {
    width: 45%;
  }
}
</style>
