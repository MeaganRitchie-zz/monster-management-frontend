<template>
  <NavBar />
  <router-view />
  <footer>
    <small>&copy; 2021 Monster Managment </small>
  </footer>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
<style lang="scss">
@font-face {
  font-family: "couturebold";
  src: url("./fonts/couture-bld-webfont.woff2") format("woff2"),
    url("./fonts/couture-bld-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
</style>
