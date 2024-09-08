import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTask(state, updatedTask) {
      const index = state.tasks.findIndex(t => t.id === updatedTask.id);
      if (index !== -1) {
        state.tasks[index] = updatedTask;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter(t => t.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    // addTask(state, task) {
    //   return new Promise((resolve) => {
    //   setTimeout(() => {
    //     state.tasks.push(task);
    //     localStorage.setItem('tasks', JSON.stringify(state.tasks));
    //     resolve(); // Resolve the promise after 2 seconds
    //   }, 8000); // Simulate a 8-second delay
    // });
    // },
    // updateTask(state, updatedTask) {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       const index = state.tasks.findIndex(t => t.id === updatedTask.id);
    //       if (index !== -1) {
    //         state.tasks[index] = updatedTask;
    //         localStorage.setItem('tasks', JSON.stringify(state.tasks));
    //       }
    //       resolve(); // Resolve the promise after 2 seconds
    //     }, 8000); // Simulate a 8-second delay
    //   });
    // },
  },
  actions: {
    async updateTask({ commit }, updatedTask) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('updateTask', updatedTask); // Commit the mutation after a delay
          resolve(); // Resolve the promise after 10 seconds
        }, 8000); // Simulate a 8-second delay
      });
    },
    async addTask({ commit }, updatedTask) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('addTask', updatedTask); // Commit the mutation after a delay
          resolve(); // Resolve the promise after 10 seconds
        }, 8000); // Simulate a 8-second delay
      });
    }
  }
});