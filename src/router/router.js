import { createRouter, createWebHistory } from 'vue-router';
import TaskManager from '../components/TaskManager.vue';
import TaskForm from '../components/TaskForm.vue';

const routes = [
  { path: '/tasks', component: TaskManager },
  { path: '/tasks/new', component: TaskForm },
  { path: '/tasks/:id/edit', component: TaskForm },
  { path: '/', redirect: '/tasks' } // Redirect to /tasks by default
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;