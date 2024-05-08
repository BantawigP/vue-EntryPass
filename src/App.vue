<script setup>

</script>


<template>
  <div>
  <!--<Menubar :model="items" />-->
  <router-view></router-view>
</div>

</template>

<style scoped>
.frame{
  width: 100%;
  height: 100vh;
  padding: 1% 0 0;
  position:relative;
  background-image: url('/src/assets/bg.png');
  background-size:cover;
  background-repeat: no-repeat;
}
</style>