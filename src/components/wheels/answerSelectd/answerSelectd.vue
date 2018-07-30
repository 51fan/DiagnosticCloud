<template>
    <div style="display: inline-flex;">
        <div class="answerSlects answerSlect__vertical" style="margin: 0 5%;">
            <div>
                <div>
                    <span class="expertText">预期</span>
                </div>

                <div>
                    <div class="noanswerSlect__line">
                        <i class="answerSlect__line_inner" style="transition-delay: 0ms; border-width: 0px; height: 0%;"></i>
                    </div>
                </div>
                <div>
                    <div class="answerSlect__line">
                        <i class="answerSlect__line_inner" style="transition-delay: 0ms; border-width: 0px; height: 0%;"></i>
                    </div>
                </div>
                
                <div class="answerSlect__icontext">
                    <div class="answerSlect__icon_inner">
                        <div class="innerpoint waited"></div>
                    </div>
                </div>
                <div class="answerSlect__icontext finished">
                    <div class="answerSlect__icon_inner">
                        <div class="innerpoint finished"></div>
                    </div>
                </div>
                <div class="answerSlect__icontext finished">
                    <div class="answerSlect__icon_inner">
                        <div class="innerpoint finished"></div>
                    </div>
                </div>
                <div class="answerSlect__icontext finished">
                    <div class="answerSlect__icon_inner">
                        <div class="innerpoint finished"></div>
                    </div>
                </div>
                <div class="answerSlect__icontext finished">
                    <div class="answerSlect__icon_inner">
                        <div class="innerpoint finished"></div>
                    </div>
                </div>
                <div class="answerSlect__icontext finished">
                    <div class="answerSlect__icon_inner">
                        <div class="innerpoint finished"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="answerSlects answerSlect__vertical" style="margin: 0 5%;">
             <div>
                <span class="currentText">实际</span>
            </div>

            <div>
                <div class="noanswerSlect__line">
                    <i class="answerSlect__line_inner" style="transition-delay: 0ms; border-width: 0px; height: 0%;"></i>
                </div>
            </div>
            <div>
                <div class="actualAnswerSlect__line">
                    <i class="answerSlect__line_inner" style="transition-delay: 0ms; border-width: 0px; height: 0%;"></i>
                </div>
            </div>
            
            <div class="answerSlect__icontext">
                <div class="answerSlect__icon_inner">
                    <div class="innerpoint waited"></div>
                </div>
            </div>
            <div class="answerSlect__icontext actualfinished">
                <div class="answerSlect__icon_inner">
                    <div class="innerpoint actualfinished"></div>
                </div>
            </div>
            <div class="answerSlect__icontext actualfinished">
                <div class="answerSlect__icon_inner">
                    <div class="innerpoint actualfinished"></div>
                </div>
            </div>
            <div class="answerSlect__icontext actualfinished">
                <div class="answerSlect__icon_inner">
                    <div class="innerpoint actualfinished"></div>
                </div>
            </div>
            <div class="answerSlect__icontext actualfinished">
                <div class="answerSlect__icon_inner">
                    <div class="innerpoint actualfinished"></div>
                </div>
            </div>
            <div class="answerSlect__icontext actualfinished">
                <div class="answerSlect__icon_inner">
                    <div class="innerpoint actualfinished"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.answerSlects {
  display: flex;
}
.answerSlect__vertical {
  height: 270px;
  width: 50px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-flow: column;
  flex-flow: column;
  position: relative;
}
.answerSlect__head {
  position: relative;
  width: 100%;
}
.answerSlect__vertical .answerSlect__head {
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  width: 24px;
}
.answerSlect__vertical .noanswerSlect__line {
  width: 3px;
  left: 10px;
  bottom: 0;
  height: 232px;
}
.answerSlect__vertical .answerSlect__line {
  width: 6px;
  bottom: 0;
  left: 9px;
  height: 192px;
}
.answerSlect__vertical .actualAnswerSlect__line {
  width: 6px;
  bottom: 0;
  left: 9px;
  height: 192px;
}
.noanswerSlect__line {
  position: absolute;
  border-color: inherit;
  background-color: #c0c4cc;
}
.actualAnswerSlect__line {
  position: absolute;
  border-color: inherit;
  background-color: #045375;
}
.answerSlect__line {
  position: absolute;
  border-color: inherit;
  background-color: #009199;
}
.answerSlect__line_inner {
  display: block;
  border-width: 1px;
  border-style: solid;
  border-color: inherit;
  -webkit-transition: 0.15s ease-out;
  transition: 0.15s ease-out;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 0;
  height: 0;
}
.answerSlect__icontext {
  border-radius: 50%;
  position: relative;
  z-index: 1;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 24px;
  height: 24px;
  font-size: 14px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #fff;
  -webkit-transition: 0.15s ease-out;
  transition: 0.15s ease-out;
  margin: 8px 0;
}
.answerSlect__icontext.finished {
  border: 3px solid rgba(0, 145, 153, 0.4);
}
.answerSlect__icontext.actualfinished {
  border: 3px solid rgba(4, 83, 117, 0.4);
}
.answerSlect__icon_inner {
  display: inline-block;
  -ms-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  text-align: center;
  font-weight: 700;
  line-height: 1;
  color: inherit;
}
.innerpoint {
  border-radius: 50%;
}
.innerpoint.waited {
  width: 8px;
  height: 8px;
  background-color: #c9c9c9;
}
.innerpoint.finished {
  width: 12px;
  height: 12px;
  background-color: #009199;
}
.innerpoint.actualfinished {
  width: 12px;
  height: 12px;
  background-color: #045375;
}
.expertText {
  /* margin-left: 1%; */
  padding-right: 4%;
  color: #009199;
  font-size: 10pt;
}
.currentText {
  color: #009199;
  font-size: 10pt;
}
</style>

<script>
export default {
  name: "answerSelected",
  props: ["question"],
  mounted: function() {
    console.log(this.question);
  }
};
</script>

