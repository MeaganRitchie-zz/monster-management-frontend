<template>
  <div class="incrementer">
    <p>{{ clickedStudent.points }}</p>
  </div>
  <div class="points-container">
    <div class="category-toggles">
      <button @click="positivePoints = true">Positive</button>
      <button @click="positivePoints = false">Needs Work</button>
    </div>
    <div v-if="positivePoints" class="positive-buttons">
      <button @click="increment" class="btn btn-primary increment-button">
        <img src="@/assets/monster-five.png" /> on task
      </button>
      <button @click="increment" class="btn btn-primary increment-button">
        <img src="@/assets/monster-five.png" /> helping others
      </button>
      <button @click="increment" class="btn btn-primary increment-button">
        <img src="@/assets/monster-five.png" /> responsibility
      </button>
      <button @click="increment" class="btn btn-primary increment-button">
        <img src="@/assets/monster-five.png" /> team work
      </button>
    </div>
    <div v-if="!positivePoints" class="negative-buttons">
      <button @click="decrement" class="btn btn-primary decrement-button">
        <img src="@/assets/monster-two.png" /> disrespectful
      </button>
      <button @click="decrement" class="btn btn-primary decrement-button">
        <img src="@/assets/monster-two.png" /> off task
      </button>
      <button @click="decrement" class="btn btn-primary decrement-button">
        <img src="@/assets/monster-two.png" /> unprepared
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      positivePoints: true,
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
  line-height: 30px;
  font-size: 40px;
  color: black;
  font-family: "pleasewritemeasongmedium";
}
.points-container {
  display: flex;
  flex-direction: column;
}
.category-toggles {
  display: flex;
  flex-flow: space-between;
  justify-content: center;
}
.category-toggles button {
  background-image: linear-gradient(to bottom right, #ffbc57, #ffd257);
  border: solid 1px #ffae57;
  border-radius: 5px;
  margin-bottom: 30px;
  width: 150px;
  height: 50px;
  color: black;
  font-size: 25px;
  font-family: "dk_lemon_yellow_sunregular";
  font-weight: 100;
}
.category-toggles button:hover {
  transform: translateY(-2px);
  font-size: 28px;
}
button {
  margin: 10px;
  padding: 5px;
  margin-bottom: 0px;
  font-size: 15px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px grey;
}
.increment-button {
  background-color: #a4d077;
  border-color: #a3d077;
  box-shadow: 1px 1px 2px #93bb6a;
  font-size: 17px;
}
.increment-button img {
  height: 30px;
}
.increment-button:hover {
  background-color: #93bb6a;
  border-color: #93bb6a;
}
.decrement-button {
  background-color: #a67acf;
  border-color: #a67acf;
  box-shadow: 1px 1px 2px #9671b8;
  font-size: 17px;
}
.decrement-button img {
  height: 28px;
}

.decrement-button:hover {
  background-color: #9671b8;
  border-color: #9671b8;
}
</style>