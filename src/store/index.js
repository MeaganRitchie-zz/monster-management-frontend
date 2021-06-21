import { createStore } from 'vuex'

export default createStore({
  state: {
    students: [],
    user: {},
    clickedStudent: {}
  },
  mutations: {
    setStudents(state, students) {
      const sortedStudents = students.sort((studentA, studentB) => {
        return studentA.name.localeCompare(studentB.name)
      })
      state.students = sortedStudents
    },
    setUser(state, user) {
      state.user = user
    },
    setClickedStudent(state, clickedStudent) {
      state.clickedStudent = clickedStudent
    }
  },
  actions: {
    async fetchStudents({ commit }) {
      const response = await fetch('http://localhost:9000/students')
      const students = await response.json()
      commit("setStudents", students)
    },

    selectStudent({ commit }, clickedStudent) {
      commit("setClickedStudent", clickedStudent)
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
  modules: {
  }
})
