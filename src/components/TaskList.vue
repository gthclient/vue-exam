<template>
  <div>
    <h2>Task List</h2>
    <input
      type="text"
      v-model="searchTerm"
      placeholder="Search tasks..."
      class="task-search"
    />

    <div class="sort-container">
      <label for="sortOrder" class="sort-label">Sort by Due Date:</label>
      <select v-model="sortOrder" id="sortOrder" class="task-sort">
        <option value="asc">Earliest First</option>
        <option value="desc">Latest First</option>
      </select>
    </div>

    <router-link to="/tasks/new" class="create-task-link">+</router-link>

    <ul>
      <li v-for="task in tasks" :key="task.id">
        <div class="task-info">
          <div v-if="editingTaskId === task.id">
            <input
              type="text"
              v-model="editedTitle"
              @keyup.enter="saveTaskTitle(task)"
              @blur="saveTaskTitle(task)"
              @keydown.esc="cancelEdit"
              class="task-title-input"
            />
          </div>
          <div v-else @dblclick="editTitle(task)">
            <span class="task-title">{{ task.title }}</span>
          </div>

          <span class="task-due-date">Due: {{ task.dueDate }}</span>
          <span
            :class="['task-status', task.completed ? 'completed' : 'pending']"
          >
            Status: {{ task.completed ? "Completed" : "Pending" }}
          </span>
        </div>
        <div class="task-actions">
          <button class="edit" @click="editTask(task.id)">Edit</button>
          <button @click="deleteTask(task.id)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tasks: Array,
  },
  data() {
    return {
      searchTerm: "",
      editingTaskId: null,
      editedTitle: "",
    };
  },
  computed: {
    tasks() {
      return this.tasks;
    },
  },
  methods: {
    editTask(id) {
      this.$router.push(`/tasks/${id}/edit`);
    },
    deleteTask(id) {
      this.$emit("delete-task", id);
    },
    updateTaskStatus(task) {
      this.$store.commit("updateTask", task);
    },
    editTitle(task) {
      console.log("editTitle : implement this function");
      // implement this function
    },
    saveTaskTitle(task) {
      console.log("saveTaskTitle : implement this function");
      // implement this function
    },
    cancelEdit() {
      this.editingTaskId = null;
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  color: #2c3e50;
  font-size: 2rem;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  max-width: 800px;
}

li {
  background: #ffffff;
  margin: 15px 0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

li:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.task-search {
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  max-width: 400px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.task-info {
  display: flex;
  flex-direction: column;
}

.task-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #34495e;
  cursor: pointer;
}

.task-title-input {
  font-size: 1.2rem;
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.task-due-date {
  font-size: 0.9rem;
  color: #7f8c8d;
}

.task-actions {
  display: flex;
  align-items: center;
}

.task-status.completed {
  color: #27ae60;
}

.task-status.pending {
  color: #e74c3c;
}

button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2980b9;
}

button.edit {
  background-color: #f39c12;
  margin-right: 10px;
}

button.edit:hover {
  background-color: #e67e22;
}

.router-link {
  font-size: 1.1rem;
  color: #3498db;
  font-weight: bold;
}

.router-link:hover {
  color: #2980b9;
}

.create-task-link {
  position: fixed;
  top: 0;
  right: 0;
  max-width: 30px;
  margin: 20px 15px;
  padding: 5px 15px;
  background-color: #2ecc71;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.create-task-link:hover {
  background-color: #27ae60;
  transform: translateY(-3px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}

.create-task-link:active {
  background-color: #239b56;
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.sort-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.sort-label {
  margin-right: 10px;
  font-size: 1rem;
  color: #34495e;
  font-weight: bold;
}

.task-sort {
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #ffffff;
  color: #34495e;
  transition: border-color 0.3s ease;
}

.task-sort:focus {
  border-color: #3498db;
  outline: none;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
}
</style>
