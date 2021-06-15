<template>
  <div class="container">
    <h4>Sign Up to start managing your monsters!</h4>
    <div class="row">
      <div class="col-md-3">
        <img id="monster" alt="pink monster" src="@/assets/monster-six.png" />
      </div>
      <div class="col-md-6">
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Full Name"
              v-model="fullname"
            />
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
              aria-describedby="emailHelp"
              v-model="email"
            />
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              v-model="password"
            />
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      fullname: "",
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
            fullname: this.fullname,
            username: this.email,
            password: this.password,
          },
        }),
      };
      fetch("http://localhost:9000/users", requestOptions)
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
  height: 150px;
}
h4 {
  margin: 30px;
}
input {
  margin: 10px;
}
button {
  margin: 10px;
}
</style>