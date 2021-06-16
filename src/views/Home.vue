<template>
  <div class="home-page">
    <h4>
      MONSTER <br />
      MANAGEMENT
    </h4>
    <span>
      <router-link to="/login" type="button" class="btn btn-outline"
        >LOGIN</router-link
      >

      <router-link to="/signup" type="button" class="btn btn-outline"
        >SIGN UP</router-link
      >
    </span>
    <MonstersHomePage />
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
      rgba(250, 136, 176, 0.7),
      rgba(254, 219, 122, 0.7)
    ),
    url("https://images.unsplash.com/photo-1588072432836-e10032774350?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80");
  background-size: cover;
  padding-top: 60px;
}
.btn {
  color: #2eb7d9;
  background-color: #ffffffe7;
  border-color: #2eb7d9;
  font-weight: bold;
  letter-spacing: 0.05em;
  margin: 30px;
  box-shadow: 1px 1px 4px #1a6679;
  width: 150px;
}
.btn:hover,
.btn:active,
.btn:focus,
.btn.active {
  background: #2eb7d9;
  color: #ffffff;
  border-color: #2eb7d9;
}

.home-page h4 {
  color: white;
  font-size: 70px;
  font-family: "couturebold";
  text-shadow: 2px 2px 3px #803650;
  margin-bottom: 30px;
}
</style>