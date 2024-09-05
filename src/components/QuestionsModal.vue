<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <h2>Questions</h2>
      <div class="modal-body">
        <ul>
          <li v-for="(task, index) in questions" :key="index">
            <div class="task-header" @click="toggleTask(index)">
              <strong>{{ task.title }}</strong>
              <span v-if="isTaskOpen(index)">&#x25BC;</span>
              <span v-else>&#x25B6;</span>
            </div>
            <div v-if="isTaskOpen(index)" class="task-body">
              <p><em>Description:</em> {{ task.description }}</p>
              <p><em>Steps:</em></p>
              <ol>
                <li v-for="(step, stepIndex) in task.steps" :key="stepIndex">{{ step }}</li>
              </ol>
            </div>
          </li>
        </ul>
      </div>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questions: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      isVisible: false,
      openTasks: []
    };
  },
  methods: {
    openModal() {
      this.isVisible = true;
    },
    closeModal() {
      this.isVisible = false;
    },
    toggleTask(index) {
      if (this.openTasks.includes(index)) {
        this.openTasks = this.openTasks.filter(i => i !== index);
      } else {
        this.openTasks.push(index);
      }
    },
    isTaskOpen(index) {
      return this.openTasks.includes(index);
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  max-height: 80%;
  display: flex;
  flex-direction: column;
}

.modal-body {
  overflow-y: auto;
  margin-bottom: 20px;
  flex-grow: 1;
}

h2 {
  margin-bottom: 15px;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

.task-header {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
}

.task-body {
  margin-left: 20px;
  padding: 10px;
  background-color: #fafafa;
  border-left: 2px solid #3498db;
  border-radius: 5px;
}

strong {
  font-size: 1.1rem;
}

em {
  font-weight: bold;
}

ol {
  padding-left: 20px;
}

button {
  align-self: center;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
</style>
