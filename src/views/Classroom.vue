<template>
  <div class="home">
    <p><a href="/">LOGOUT</a></p>
    <img alt="monster logo" src="../assets/monster-three.png" />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Classroom",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
p {
  display: flex;
  justify-content: flex-end;
  margin-right: 60px;
}

a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: underline;
  cursor: pointer;
}
a:active {
  color: #2eb7d9;
}
a:hover {
  color: #2eb7d9;
}

img {
  margin-top: 5px;
  width: 75px;
}
</style>
