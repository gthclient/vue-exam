<template>
  <div class="progress-bar">
    <div class="progress-bar-fill" :style="{ width: progress + '%' }">
      <span v-if="progress" class="progress-text">{{ progress }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.progress-bar {
  height: 25px;
  max-width: 500px;
  background-color: #e0e0e0;
  border-radius: 12.5px;
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  position: relative;
  margin: 0 auto;
  margin-bottom: 30px;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  border-radius: 12.5px;
  transition: width 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.progress-text {
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  position: absolute;
  white-space: nowrap;
}
</style>
