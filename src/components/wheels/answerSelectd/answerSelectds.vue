<template>
    <div>
        <div class='progress_inner__step'>
            
        </div>
    </div>
</template>

<style scoped>

.progress_inner__step {
  width: 20%;
  font-size: 14px;
  padding: 0 10px;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  float: left;
  text-align: center;
  position: relative;
}
.progress_inner__step:before {
  width: 30px;
  height: 30px;
  color: #70afd0;
  background: white;
  line-height: 30px;
  border: 3px solid #a6cde2;
  font-size: 12px;
  top: 3px;
  border-radius: 100%;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  cursor: pointer;
  pointer-events: none;
}
.progress_inner__step label {
  padding-top: 50px;
  top: -20px;
  display: block;
  position: relative;
  cursor: pointer;
}
</style>

<script>
export default {};
</script>
