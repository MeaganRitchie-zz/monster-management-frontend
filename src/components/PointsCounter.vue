<template>
  <div class="incrementer">
    <p>{{ clickedStudent.points }}</p>
  </div>
  <div class="points-container">
    <button @click="positivePoints = true">POSITIVE</button>
    <button @click="positivePoints = false">NEEDS WORK</button>
    <div v-if="positivePoints" class="positive-buttons">
      <button @click="increment" class="btn btn-primary increment-button">
        responsibility
      </button>
      <button @click="increment" class="btn btn-primary increment-button">
        on task
      </button>
      <button @click="increment" class="btn btn-primary increment-button">
        helping others
      </button>
    </div>
    <div v-if="!positivePoints" class="negative-buttons">
      <button @click="decrement" class="btn btn-primary decrement-button">
        disrespectful
      </button>
      <button @click="decrement" class="btn btn-primary decrement-button">
        off task
      </button>
      <button @click="decrement" class="btn btn-primary decrement-button">
        unprepared
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      positivePoints: false,
      negativePoints: false,
    };
  },
  computed: {
    clickedStudent() {
      return this.$store.state.clickedStudent;
    },
  },
  methods: {
    increment() {
      this.clickedStudent.points += 1;
      fetch(`http://localhost:9000/students/${this.clickedStudent.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          points: this.clickedStudent.points,
        }),
      });
    },
    decrement() {
      this.clickedStudent.points -= 1;
      fetch(`http://localhost:9000/students/${this.clickedStudent.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          points: this.clickedStudent.points,
        }),
      });
    },
  },
};
</script>

<style scoped>
.incrementer {
  font-size: 20px;
}
.points-container {
  display: flex;
}
button {
  margin: 10px;
  padding: 5px;
  margin-bottom: 0px;
  font-size: 12px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px grey;
}
.increment-button {
  background-color: #a4d077;
  border-color: #a3d077;
  box-shadow: 1px 1px 2px #93bb6a;
}
.increment-button:hover {
  background-color: #93bb6a;
  border-color: #93bb6a;
}
.decrement-button {
  background-color: #a67acf;
  border-color: #a67acf;
  box-shadow: 1px 1px 2px #9671b8;
}
.decrement-button:hover {
  background-color: #9671b8;
  border-color: #9671b8;
}
</style>