<template>
  <li class="todo-item">
    {{ title }}
    <span v-if="isImportant">(!)</span>
    <button class="remove-btn" @click="$emit('remove')">X</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["title", "isImportant"],
  emits: ["remove"],
};
</script>

<style scoped>
.todo-item {
  margin: 0 0 0 11px;
  font-size: 16px;
  font-weight: 400;
  color: #212529;
  background-color: #fff;
  font-family: Arial, sans-serif;
}

.remove-btn {
  cursor: pointer;
  outline: 0;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  background-color: transparent;
  /* border: 1px solid transparent; */
  padding: 6px 12px;
  font-size: 1rem;
  /* border-radius: .25rem; */
  /* transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out; */
  color: #dc3545;
  /* border-color: #dc3545; */
  border: none;
}
</style>