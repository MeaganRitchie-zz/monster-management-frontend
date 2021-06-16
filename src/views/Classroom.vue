<template>
  <div class="home">
    <img alt="monster logo" src="../assets/monster-three.png" />
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Classroom",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
img {
  width: 100px;
}
</style>
