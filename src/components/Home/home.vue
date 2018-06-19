<template>
<div class="page-container">
    <md-app md-waterfall md-mode="fixed-last" >
      <md-app-toolbar class="md-large md-dense md-transparent" style="background-color: #eee;">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
              <md-icon>menu</md-icon>
            </md-button>

            <span class="md-title">扁鹊云</span>
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>account_circle</md-icon>
            </md-button>
          </div>
        </div>

        <div class="md-toolbar-row">
          <md-tabs class="md-transparent" md-alignment="fixed" md-sync-route>
            <md-tab id="tab-home" md-label="主页" to="/Overview"></md-tab>
            <md-tab id="tab-posts" md-label="测评体验" to="/evaluating"></md-tab>
            <md-tab id="tab-favorites" md-label="案例" to="/example"></md-tab>
            <md-tab id="tab-pages" md-label="专家团队" to="/expertTeam"></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content style="background-color: rgba(216, 209, 202, 0.13);">
       <router-view></router-view>
      </md-app-content>
    </md-app>
</div>
</template>

<style lang="scss" scoped>
.md-app {
  //max-height: 800px;
  height: 1000px;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>

<script>
import evaluating from "./evaluating.vue";

export default {
  name: "LastRowFixed",
  components:{
    evaluating
  },
  data: () => ({
    menuVisible: false
  }),
  methods:{
    toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
  }
};
</script>