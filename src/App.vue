<template>
  <div id="app">
    <router-view :tasks="tasks" @delete-task="deleteTask"></router-view>
    <QuestionsModal :questions="questions" ref="questionsModalElement"></QuestionsModal>
    <button class="question-button" @click="openQuestionsModal">?</button>
  </div>
</template>

<script>
import QuestionsModal from './components/QuestionsModal.vue';

export default {
  components: {
    QuestionsModal
  },
  data() {
    return {
      questions: [
        {
          title: 'Add a Priority Field to Tasks',
          description: 'Add a priority field to each task (e.g., Low, Medium, High). Update the form to include a dropdown for selecting the priority and display the priority on the task list and task detail views.',
          steps: [
            'Update the TaskForm.vue to include a select dropdown for priority.',
            'Update the Vuex store to handle the priority field.',
            'Display the priority in TaskList.vue and TaskDetail.vue.'
          ]
        },
        {
          title: 'Task Search Functionality',
          description: 'Add a search bar at the top of the task list to filter tasks by title.',
          steps: [
            'Add an input field at the top of TaskList.vue for the search term.',
            'Create a computed property to filter tasks based on the search term.',
            'Update the task list to display only tasks that match the search term.'
          ]
        },
        // Add more tasks as needed...
      ]
    };
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  },
  methods: {
    openQuestionsModal() {
      this.$refs.questionsModalElement.openModal();
    },
    deleteTask(id) {
      this.$store.commit('deleteTask', id);
    }
  }
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  background-color: #f4f7f6;
  color: #333;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

h2 {
  color: #34495e;
}

a {
  color: #3498db;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #2980b9;
}

.question-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}

.question-button:hover {
  background-color: #2980b9;
}
</style>
