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
        <md-dialog-alert
                  class="md-primary md-raised"
                  :md-active.sync="showAlert"
                  :md-content="AlertMessage"
                  md-confirm-text="知道了" />
        <md-dialog-alert
                  class="md-primary md-raised"
                  :md-active.sync="showErrAlert"
                  :md-content="AlertMessage"
                  md-confirm-text="知道了" />
        
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
    name: String,
    showAlert: false,
    AlertMessage: "",
    showErrAlert:false
  }),
  methods: {
    beginEvaluation() {
      // this.$router.push({path:'/evaluatingPage', query: {id:this.id, name:this.name}});
      if (this.session_id) {
        this.getQuestionData();
      } else {
        this.showAlert = true;
        this.AlertMessage = "请登录后再开始评测";
      }
      //  this.getQuestionData();
    },
    getQuestionData() {
      let $this = this;
      let apikey = "",
        request = {
          id: this.evalution.id,
          session_id: this.session_id
        },
        // url = "/static/jsons/evaluation.json",
        // type = "GET",
        url = "/IBUS/DAIG_SYS/getQuestion",
        type = "POST",
        param = {
          apikey,
          request
        };
      $this
        .$http({
          method: type,
          url: url,
          data: param
        })
        .then(res => {
          //debugger;
          if (res.data.errorCode !== 0) {
            if (res.data.errorCode == "-8") {
              $this.$store.commit(
                "evlaluating/changeShowevaluatingPage",
                false
              );
              // $this.$store.commit("evlaluating/changeShowErrAlert", true);
              $this.showErrAlert = true;
              $this.AlertMessage = res.data.errorMsg;
            } else {
              $this.showAlert = true;
              $this.AlertMessage = res.data.errorMsg;
            }
          } else {
            $this.$store.commit("evlaluating/changeShowevaluatingPage", true);
            $this.$store.commit(
              "evlaluating/getCurrentEvaluationName",
              this.name
            );
            $this.$store.commit("evlaluating/getCurrentEvaluationId", this.id);
          }
          // console.log($this.questionsList);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    session_id() {
      return this.$store.state.loginPage.session_id;
    }
  }
};
</script>


