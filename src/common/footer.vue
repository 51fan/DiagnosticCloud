<template>
    <footer class="mainfooter">
     <div class="footer-container">
       <div class="main-footer-section">
        <a>关于扁鹊云</a>
        <a>License</a>
       </div>
       <div style="float:right">
       <div class="main-footer-section">
        <a>华制智能</a>
       </div>
     </div>
     </div>
   </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.mainfooter {
  height: 96px;
  padding: 0 16px;
  position: absolute;
  z-index: 4;
  background-color: #eee;
  bottom: 0px;
  width: 100%;
}
.footer-container {
  max-width: 100%;
  height: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: max-width;
}
.main-footer-section {
  position: relative;
}
.main-footer-section a {
  margin-right: 40px;
}
</style>
