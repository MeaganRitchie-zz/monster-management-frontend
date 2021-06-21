<template>
  <div class="card-container">
    <ul class="student-container">
      <li v-for="student in students" :key="student.id">
        <div class="card" style="width: 9rem">
          <h5 class="card-header">{{ student.name }}</h5>
          <div class="card-body">
            <p>
              {{ student.points }}
            </p>
            <button
              @click="showModal(student)"
              class="btn btn open"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Give Feedback
            </button>
          </div>
        </div>
      </li>
      <li class="plus">
        <p>+</p>
      </li>
    </ul>
  </div>

  <transition name="modal">
    <div v-if="isModal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <h3>Give feedback to {{ clickedStudent.name }}!</h3>
              <button class="close-modal-button" @click="isModal = false">
                x
              </button>
            </div>
            <div class="modal-body">
              <PointsCounter />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import PointsCounter from "@/components/PointsCounter";

export default {
  props: {
    students: Array,
  },
  data() {
    return {
      isModal: false,
    };
  },
  methods: {
    showModal(clickedStudent) {
      this.isModal = true;
      this.$store.dispatch("selectStudent", clickedStudent);
    },
  },
  computed: {
    clickedStudent() {
      return this.$store.state.clickedStudent;
    },
  },
  components: {
    PointsCounter,
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: row;
  width: 100vw;
}
.card {
  margin: 10px;
  box-shadow: 0.3px 0.3px 1px rgb(62, 62, 62);
}
.card-header {
  background-color: rgb(222, 222, 222);
  font-family: "dk_lemon_yellow_sunregular";
  font-size: 35px;
  padding: 2px;
  color: black;
}
.card-body p {
  font-family: "dk_lemon_yellow_sunregular";
  font-size: 30px;
}
.open {
  background-color: #a3d077;
  padding: 2px;
  color: white;
  font-size: 15px;
}
.open:hover {
  background-color: #96c06c;
  padding: 2px;
  color: white;
  font-size: 15px;
  transform: translateY(1px);
}

.student-container {
  display: flex;
  flex-wrap: wrap;
}

li {
  list-style: none;
}

.plus {
  font-size: 70px;
  text-shadow: 1px 2px #cae0e6;
  width: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.plus:hover {
  text-shadow: 3px 3px #cae0e6;
  cursor: pointer;
}

.close-modal-button {
  background-color: lightgrey;
  border: none;
  border-radius: 55px;
  font-family: "dk_lemon_yellow_sunregular";
  padding-left: 8px;
  padding-right: 8px;
  box-shadow: 0px 1px 0px grey;
}
.close-modal-button:hover {
  box-shadow: 0 0.1em 0.5em rgba(0, 0, 0, 0.4), 0 0.1em 0.2em rgba(0, 0, 0, 0.4),
    0 -0.1em 0.07em rgba(0, 0, 0, 0.3) inset,
    0 0.1em 0.07em rgba(255, 255, 255, 0.2) inset;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  height: 450px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  font-size: 45px;
  font-family: "dk_lemon_yellow_sunregular";
  color: black;
}

.modal-body {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>