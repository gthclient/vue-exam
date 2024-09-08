<template>
  <div>
    <h2>{{ isEditing ? 'Edit Task' : 'New Task' }}</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="title">Title:</label>
        <input type="text" v-model="task.title" required />
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea v-model="task.description" required></textarea>
      </div>
      <div>
        <label for="dueDate">Due Date:</label>
        <input type="date" v-model="task.dueDate" required />
      </div>
      <div>
        <label for="completed">Completed:</label>
        <input type="checkbox" v-model="task.completed" />
      </div>
      <!-- <button type="submit">Save</button> -->
      <button type="submit" :disabled="loading">
        {{ loading ? 'Saving...' : 'Save' }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: {
        title: '',
        description: '',
        dueDate: '',
        completed: false,
      },
      isEditing: false,
      loading: false
    };
  },
  created() {
    if (this.$route.params.id) {
      this.isEditing = true;
      const task = this.$store.state.tasks.find(t => t.id === parseInt(this.$route.params.id));
      if (task) {
        this.task = { ...task };
      }
    }
  },
  methods: {
    async submitForm() {
      if (this.isEditing) {
         await this.$store.commit('updateTask', this.task);
      } else {
        this.task.id = Date.now();
        await this.$store.commit('addTask', this.task);
      }
      this.$router.push('/tasks');

    },
  }
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  color: #999;
  border: 1px solid #999;
}

h2 {
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: #2c3e50;
  text-align: center;
}

form div {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
  color: #34495e;
}

input[type="text"],
input[type="date"],
textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input[type="text"]:focus,
input[type="date"]:focus,
textarea:focus {
  border-color: #3498db;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

input[type="checkbox"] {
  margin-right: 10px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #2c3e50;
}

button {
  width: 100%;
  padding: 15px;
  background-color: #2ecc71;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  background-color: #27ae60;
  transform: translateY(-2px);
}

button:active {
  background-color: #239b56;
  transform: translateY(0);
}

@media (max-width: 600px) {
  form {
    padding: 20px;
  }

  button {
    padding: 12px;
  }
}

</style>
