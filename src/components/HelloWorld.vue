<template>
  <div class="hello">
    <h1>YOUR CLASSROOM</h1>
    <b-container class="bv-example-row">
      <StudentList :students="students" />
    </b-container>
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
.hello h1 {
  text-shadow: 1px 2px #d2d2d2;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
