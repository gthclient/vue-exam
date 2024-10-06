<template>
  <div>
    <TaskList />
  </div>
</template>

<script>
import TaskList from "./TaskList.vue";

export default {
  name: "TaskManager",
  components: {
    TaskList,
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  methods: {
    deleteTask(id) {
      this.$store.dispatch("deleteTask", id);
    },
  },
};
</script>