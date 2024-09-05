<template>
  <div v-if="task">
    <h2>{{ task.title }}</h2>
    <p>Description: {{ task.description }}</p>
    <p>Due Date: {{ task.dueDate }}</p>
    <p>Status: {{ task.completed ? 'Completed' : 'Pending' }}</p>
    <router-link :to="'/tasks/' + task.id + '/edit'">Edit Task</router-link>
  </div>
  <div v-else>
    <p>Task not found.</p>
  </div>
</template>

<script>
export default {
  computed: {
    task() {
      return this.$store.state.tasks.find(t => t.id === parseInt(this.$route.params.id));
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
  display: block;
  margin: 20px 0;
  text-align: center;
  color: #2ecc71;
  font-size: 1.2rem;
  font-weight: bold;
}

.create-task-link:hover {
  color: #27ae60;
}

</style>
