<template>
  <div class="card-container">
    <ul>
      <li v-for="student in students" :key="student.id">
        <div class="card" style="width: 15rem">
          <!-- <img
            v-bind:src="student.avatar"
            class="card-img-top"
            alt="student avatar"
          /> -->

          <h5 class="card-header">{{ student.name }}</h5>
          <div class="card-body">
            <!-- <p>
              {{ student.points }}
            </p> -->
            <PointsCounter />
            <FeedbackModal />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import FeedbackModal from "@/components/FeedbackModal";
import PointsCounter from "@/components/PointsCounter";

export default {
  props: {
    students: Array,
  },

  components: {
    FeedbackModal,
    PointsCounter,
  },
};
</script>

<style scoped>
.card-header {
  background-color: lightgrey;
}
.card {
  margin: 10px;
}
li {
  list-style: none;
}
button {
  margin: 10px;
}
</style>