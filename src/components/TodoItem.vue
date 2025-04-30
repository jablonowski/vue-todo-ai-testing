<template>
  <li class="todo-item">
    <span class="todo-text">{{ title }}</span>
    <span v-if="isImportant" class="important-mark">(!)</span>
    <button class="remove-btn" @click="$emit('remove')">Remove</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    title: {
      type: String,
      required: true
    },
    isImportant: {
      type: Boolean,
      default: false
    }
  },
  emits: ["remove"],
};
</script>

<style scoped>
.todo-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: #333;
}

.todo-item:last-child {
  border-bottom: none;
}

.todo-text {
  flex: 1;
  word-break: break-word; /* Prevent long words from overflowing */
}

.important-mark {
  color: #dc3545; /* Red color for important items */
  margin-left: 5px;
  font-weight: bold;
}

.remove-btn {
  background-color: #f44336; /* Red background */
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 14px;
}

.remove-btn:hover {
  background-color: #d32f2f; /* Darker red on hover */
}
</style>