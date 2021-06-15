<template>
  <div class="home-page">
    <h4>
      MONSTER <br />
      MANAGEMENT
    </h4>
    <MonstersHomePage />
    <div>
      <router-link to="/login" type="button" class="btn btn-outline-primary"
        >LOGIN</router-link
      >
      <p>or</p>
      <router-link to="/signup" type="button" class="btn btn-outline-primary"
        >SIGN UP</router-link
      >
    </div>
  </div>
</template>

<script>
import MonstersHomePage from "@/components/MonstersHomePage.vue";

export default {
  name: "Home",
  components: {
    MonstersHomePage,
  },
};
</script>

<style scoped>
.home-page {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      to bottom,
      rgba(235, 162, 150, 0.8),
      rgba(228, 191, 135, 0.8)
    ),
    url("https://images.unsplash.com/photo-1588072432836-e10032774350?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80");
  background-size: cover;
  border: solid 2px white;
}

.home-page h4 {
  color: white;
  font-size: 70px;
  font-family: "couturebold";
}
</style>