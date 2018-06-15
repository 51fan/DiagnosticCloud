<template>
      <div>
        <Content></Content>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from "./footer.vue";
import Header from "./header.vue";
import Content from "./content.vue";

export default {
  name: "layouts",
  components: {
    Footer,
    Header,
    Content
  }
};
</script>

<style scoped>

</style>
