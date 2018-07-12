<template>
    <div @click="beginEvaluation()">
        <md-card md-with-hover>
          <md-ripple>
          <md-card-header>
                            <md-avatar>
              <img src="../../../assets/images/ico.png">
              </md-avatar>

              <!-- <md-card-header-text style="padding: 10px 10px 0 10px;"> -->
              <div class="md-title" style="font-size: 18px; padding-top: 8px;">{{evalution.name}}</div>
              <!-- <div class="md-subhead"></div> -->
              <!-- </md-card-header-text> -->

          </md-card-header>
          <md-card-area >
            <md-card-content style="height: 120px; overflow: hidden; float: left; margin-bottom: 8px;">
              {{evalution.description}}
            </md-card-content>
          </md-card-area>
          <div style="clear:both">
            <scoreStar :score="evalution.heat"></scoreStar>
          </div>

          <!-- <md-card-actions style="justify-content:center!important;background-color: #eee">
              <md-button :to="{path:'/evaluatingPage', query: {id:evalution.id, name:evalution.name}}">立即测评</md-button>
          </md-card-actions> -->
          </md-ripple>
        </md-card>
    </div>
</template>

<style scoped>
.md-card {
  /* min-width: 300px;
  max-width: 300px; */
  height: 230px;
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
    //console.log(this.evalution);
    this.id = this.evalution.id;
    this.name = this.evalution.name;
  },
  data: () => ({
    score: Object,
    id: String,
    name: String
  }),
  methods: {
    beginEvaluation: function() {
      // this.$router.push({path:'/evaluatingPage', query: {id:this.id, name:this.name}});
      if (this.session_id) {
        this.$store.commit("evlaluating/changeShowevaluatingPage", true);
        this.$store.commit("evlaluating/getCurrentEvaluationName", this.name);
        this.$store.commit("evlaluating/getCurrentEvaluationId", this.id);
      }
    }
  },
  computed: {
    session_id() {
      return this.$store.state.loginPage.session_id;
    }
  }
};
</script>


