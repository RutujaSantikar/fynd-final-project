<template>
  <div>

    <AppMenu />
    
    <router-view></router-view>
  </div>
</template>

<script>
// import AppHome from './components/AppHome.vue'
import AppMenu from "./components/AppMenu.vue";

export default {
  name: "App",
 
  components: {
    // AppHome,
    AppMenu,
  },
};
</script>

<style></style>
