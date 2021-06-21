<template>
  <div class="hello">
    <h1>YOUR CLASSROOM</h1>

    <StudentList :students="students" />
  </div>
</template>

<script>
import StudentList from "@/components/StudentList";

export default {
  components: {
    StudentList,
  },
  mounted() {
    this.$store.dispatch("fetchStudents");
  },
  computed: {
    students() {
      return this.$store.state.students;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  flex-direction: column;
}
.hello h1 {
  text-shadow: 1px 2px #cae0e6;
  font-family: "pleasewritemeasongmedium";
  font-size: 40px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
