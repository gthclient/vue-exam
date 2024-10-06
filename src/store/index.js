import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
  },
  getters:{

  },
  mutations: {
    addTask(state, task) {
      return new Promise((resolve) => {
      setTimeout(() => {
        state.tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
        resolve(); 
      }, 4000); // Simulate a 4-second delay
    });
    },
    updateTask(state, updatedTask) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const index = state.tasks.findIndex(t => t.id === updatedTask.id);
          if (index !== -1) {
            state.tasks[index] = updatedTask;
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
          }
          resolve(); 
        }, 4000); // Simulate a 4-second delay
      });
    },
  },
  actions: {
    deleteTask({state}, id) {
      // implement here fixing / complete code 2
    }
  }
});