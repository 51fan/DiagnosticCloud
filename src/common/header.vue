<template>
    <div>
        <md-app-toolbar class="md-large md-dense md-primary">
            <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
                <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
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
            <md-tabs class="md-primary" md-alignment="fixed">
                <md-tab id="tab-home" md-label="首页" to="/home"></md-tab>
                <md-tab id="tab-pages" md-label="全部"></md-tab>
                <md-tab id="tab-posts" md-label="测评体验" to="/evaluating"></md-tab>
                <md-tab id="tab-favorites" md-label="案例"></md-tab>
            </md-tabs>
            </div>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible">
            <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

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
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>

