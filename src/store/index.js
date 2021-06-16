import { createStore } from 'vuex'

export default createStore({
  state: {
    students: [],
    user: {}
  },
  mutations: {
    setStudents(state, students) {
      state.students = students
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    async fetchStudents({ commit }) {
      const response = await fetch('http://localhost:9000/students')
      const students = await response.json()
      commit("setStudents", students)
    }
  },
  async createStudent({ commit }) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(
      // user: {
      // fullname:
      //   email:
      // password:
      // })
    }
    const response = await fetch('http://localhost:9000/user', requestOptions)
    const user = await response.json()
    commit("setUser", user)
  },
  async updatePoints({ commit }) {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        student
      }),
    }
    const response = await fetch("http://localhost:9000/student/:id", requestOptions)
    const student = await response.json()
    commit("setStudents, student")
  },

  modules: {
  }
})
