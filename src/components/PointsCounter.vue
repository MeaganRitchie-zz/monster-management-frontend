<template>
  <div>
    <div class="incrementer">
      <p>{{ countString }}</p>
    </div>
    <button
      @click="increment"
      href="#"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      Great Job!
    </button>
    <button
      @click="decrement"
      href="#"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      Needs Work
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    countString() {
      return ` ${this.count}`;
    },
  },
  methods: {
    increment() {
      this.count = this.count + 1;
    },
    decrement() {
      this.count = this.count - 1;
    },
  },
};
</script>

<style>
button {
  margin: 10px;
}
</style>