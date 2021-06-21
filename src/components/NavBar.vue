<template>
  <header id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/classroom">Classroom</router-link> |
    <router-link to="/resources">Resources</router-link>
    <router-link v-if="isLoggedIn">Logout</router-link>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2eb7d9;
}

#nav {
  padding: 10px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #2eb7d9;
    }
  }
}
</style>