<template>
  <div>
    <form v-on:submit.prevent="addNewTodo">
      <label for="new-todo">Add a todo</label>
      <input
        type="text"
        v-model="newTodoText"
        id="new-todo"
        placeholder="E.g. do the dishes"
      />
      <button id="add-todo">Add</button>
    </form>
    <ul id="todo-list">
      <todo-item
        v-for="(todo, index) in todos"
        :key="todo.id"
        :title="todo.title"
        @remove="todos.splice(index, 1)"
      ></todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItemVue from "./components/TodoItem.vue";
export default {
  name: "App",
  components: {
    TodoItem: TodoItemVue,
  },
  data() {
    return {
      newTodoText: "",
      todos: [
      ],
      nextTodoId: 4,
    };
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
      });
      this.newTodoText = "";
    },
  },
};
</script>

<style>
</style>
