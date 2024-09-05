<template>
  <div>
    <h2>Task List</h2>
      <router-link to="/tasks/new" class="create-task-link">Create New Task</router-link>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <div class="task-info">
          <router-link :to="'/tasks/' + task.id" class="task-title">{{ task.title }}</router-link>
          <span class="task-due-date">Due: {{ task.dueDate }}</span>
          <span :class="['task-status', task.completed ? 'completed' : 'pending']">
            Status: {{ task.completed ? 'Completed' : 'Pending' }}
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
    tasks: Array
  },
  methods: {
    editTask(id) {
      this.$router.push(`/tasks/${id}/edit`);
    },
    deleteTask(id) {
      this.$emit('delete-task', id);
    }
  }
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

.task-info {
  display: flex;
  flex-direction: column;
}

.task-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #34495e;
  margin-bottom: 5px;
}

.task-due-date,
.task-status {
  font-size: 0.9rem;
  color: #7f8c8d;
}

.task-status.completed {
  color: #27ae60; /* Green for completed tasks */
}

.task-status.pending {
  color: #e74c3c; /* Red for pending tasks */
}

.task-actions {
  display: flex;
  align-items: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  margin: 30px 15px;
  padding: 15px 25px;
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


</style>
