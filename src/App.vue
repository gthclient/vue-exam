<template>
  <div id="app">
    <router-view></router-view>
    <QuestionsModal :questions="questions" ref="_questionsModal"></QuestionsModal>
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
          title: 'Fixing / Complete Code 1',
          description: 'Investigate and resolve the issue that prevents the task list from being displayed. Ensure that tasks are visible on the task list page.',
        },
        {
          title: 'Fixing / Complete Code 2',
          description: 'Identify and fix the issue preventing the deletion of tasks. Ensure that tasks can be successfully removed from the task list.',
        },
        {
          title: 'Fixing / Complete Code 3',
          description: 'The form currently allows submission with an empty Title, Description, or Due Date. Implement validation to ensure these fields are mandatory before the task can be saved.',
        },
        {
          title: 'Fixing / Complete Code 4',
          description: 'The current updateTask method in the Vuex store is trying to handle asynchronous operations inside a mutation, what is the problem?',
        },
        {
          title: 'Fixing / Complete Code 5',
          description: 'The task form allows multiple submissions if the submit button is clicked repeatedly. This can result in duplicate tasks being created. The goal is to prevent multiple submissions by ensuring that the form can only be submitted once until the current submission is processed.'
        },
        {
          title: 'Implement a ComboBox to Manage Task Completion Status in Task List',
          description: 'Add a ComboBox next to each task in the task list that allows users to change the task status directly from the list.',
          steps: [
            'Add a combobox (dropdown) in Task List page for each task.',
            'Bind the selected option to change the task data.'
          ]
        },
        {
          title: 'Show a Loader or Progress Bar Based on Task Completion',
          description: 'Add a progress bar at the top of the task list that shows the percentage of tasks completed. The progress bar should reflect the percentage of tasks that are marked as completed, where 100% indicates all tasks are complete, 50% indicates half of the tasks are complete, and so on.',
          steps: [
            'Create a Progress Bar Component',
            'Calculate Progress in TaskList.vue based on task statuses'
          ]
        },
        {
          title: 'Task Search Functionality',
          description: 'Add a search bar at the top of the task list to filter tasks by title.',
          steps: [
            'Add an input field at the top of TaskList.vue for the search term.',
            'Update the task list to display only tasks that match the search term.'
          ]
        },
        {
          title: 'Implement Sorting by Due Date',
          description: 'Add sorting control and implement sorting by due date',
          steps: [
            'Add Sorting Control ComboBox with 2 parameters: Earliest First | Latest First',
            'Creating the sorting logic and sort the task by this logic.'
          ]
        },
        {
          title: 'Enable Double-Click to Edit Task Title',
          description: 'Allow users to double-click a task title in the task list to quickly edit it without navigating to the task detail page.',
          steps: [
            'Modify TaskList.vue to enable editing when the user double-clicks a task title.',
            'Replace the task title text with an input field when in edit mode.',
            'Save the changes on Enter key press or when the input field loses focus.'
          ]
        },
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
      this.$refs._questionsModal.openModal();
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
  padding: 15px 30px;
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
