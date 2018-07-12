<template>
    <div style="text-align: center;padding: 10px;">
        <div style="text-align: center;display: inline-flex">
            <span style="padding: 0 15px">热度:</span>
            <div id="starBg" class="star_bg">                    	
                <a  class="star star_1" :style="starWidth"></a>
               
                <a  class="star star_2" :style="starWidth"></a>
               
                <a  class="star star_3" :style="starWidth"></a>
               
                <a  class="star star_4" :style="starWidth"></a>
               
                <a  class="star star_5" :style="starWidth"></a>
            </div>
            <!-- <span style="padding: 0 10px">{{score}}星</span> -->
        </div>
    </div>
</template>

<style scoped>
.star_bg {
  width: 120px;
  height: 20px;
  background: url(../../assets/images/star.png) repeat-x;
  position: relative;
  overflow: hidden;
}
.star {
  height: 100%;
  line-height: 6em;
  position: absolute;
  z-index: 3;
}
/*星星的长度*/

.star_1 {
  left: 0;
  background: url(../../assets/images/star.png) repeat-x 0 -20px !important;
}
.star_2 {
  left: 24px;
}
.star_3 {
  left: 48px;
}
.star_4 {
  left: 72px;
}
.star_5 {
  left: 96px;
}
</style>

<script>
export default {
  name: "scoreStar",
  props: ["score"],
  mounted: function() {},
  data: () => ({
    star: this.score,
  }),
  computed: {
    starWidth: function() {
      let starwidth = this.score*24 + "px";
      return {
        width: starwidth
      };
    }
  }
};
</script>

