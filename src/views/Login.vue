<template>
  <div class="container">
    <h4>Login to manage your monsters!</h4>
    <div class="row">
      <div class="col-md-3">
        <img
          id="monster2"
          alt="purple monster"
          src="../assets/monster-two.png"
        />
      </div>
      <div class="col-md-6">
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
              aria-describedby="emailHelp"
              v-model="email"
            />
          </div>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            v-model="password"
          />

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: {
            username: this.email,
            password: this.password,
          },
        }),
      };
      fetch("http://localhost:9000/login", requestOptions)
        .then((response) => response.json())
        .then((response) => console.log("response", response));
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 100px;
}
.container img {
  height: 100px;
}
h4 {
  margin: 30px;
}
form {
  margin: 10px;
}
button {
  margin: 10px;
}
</style>