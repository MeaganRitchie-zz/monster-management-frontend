<template>
  <div class="card-container">
    <ul class="student-container">
      <li v-for="student in students" :key="student.id">
        <div class="card" style="width: 15rem">
          <!-- <img
            v-bind:src="student.avatar"
            class="card-img-top"
            alt="student avatar"
          /> -->

          <h5 class="card-header">{{ student.name }}</h5>
          <div class="card-body">
            <p>
              {{ student.points }}
            </p>
            <button
              @click="showModal(student)"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Give Feedback
            </button>
          </div>
        </div>
      </li>
      <li>
        <div></div>
      </li>
    </ul>
  </div>

  <transition name="modal">
    <div v-if="isModal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <h3>i'm the modal</h3>
            </div>
            <div class="modal-body">
              <PointsCounter />
              <button
                class="close-modal-button"
                @click="isModal = false"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// import FeedbackModal from "@/components/FeedbackModal";
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
  components: {
    // FeedbackModal,
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

.card-header {
  background-color: lightgrey;
}

.student-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  margin: 10px;
}

li {
  list-style: none;
}

.close-modal-button {
  position: absolute;
  right: 0px;
  background-color: #ff6b9fe3;
  border-color: #ff6b9fe3;
  border-radius: 15px;
  padding: 3px;
  height: 20px;
  width: 20px;
}
.close-modal-button:hover {
  background-color: #f7528c;
  border-color: #f7528c;
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
  width: 300px;
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
  color: #2eb7d9;
}

.modal-body {
  margin: 20px 0;
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