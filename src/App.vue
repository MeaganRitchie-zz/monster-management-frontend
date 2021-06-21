<template>
  <div class="app-flex">
    <NavBar />
    <router-view />
    <footer>
      <small>&copy; 2021 Monster Managment </small>
    </footer>
  </div>
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
<style scoped>
.app-flex {
  display: flex;
  flex-flow: column;
  align-items: space-between;
}

@font-face {
  font-family: "couturebold";
  src: url("./fonts/couture-bld-webfont.woff2") format("woff2"),
    url("./fonts/couture-bld-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "pleasewritemeasongmedium";
  src: url("./fonts/please_write_me_a_song-webfont.woff2") format("woff2"),
    url("./fonts/please_write_me_a_song-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "dk_lemon_yellow_sunregular";
  src: url("./fonts/dk_lemon_yellow_sun-webfont.woff2") format("woff2"),
    url("./fonts/dk_lemon_yellow_sun-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
</style>
