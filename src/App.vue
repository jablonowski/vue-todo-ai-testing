<template>
  <div class="container">
    <h1>My Todo List</h1>
    <form v-on:submit.prevent="addNewTodo" class="todo-form">
      <input
        class="add-input"
        type="text"
        v-model="newTodoText"
        id="new-todo"
        placeholder="Add a todo e.g. call mom"
      />
      <div class="important-checkbox">
        <input type="checkbox" id="important" v-model="isImportant" />
        <label for="important">Important</label>
      </div>
      <button class="add-btn" id="add-todo">Add</button>
    </form>
    <ul class="todo-list" id="todo-list">
      <todo-item
        v-for="(todo, index) in todos"
        :key="todo.id"
        :title="todo.title"
        :isImportant="todo.isImportant"
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
      todos: [],
      isImportant: false,
      nextTodoId: 0,
    };
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
        isImportant: this.isImportant,
      });
      this.newTodoText = "";
      this.isImportant = false;
    },
  },
};
</script>

<style scoped>
/* General container styling */
.container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

/* Form styling */
.todo-form {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.add-input {
  flex: 1;
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.add-input:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.important-checkbox {
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
}

.important-checkbox label {
  margin-left: 5px;
  cursor: pointer;
}

.add-btn {
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: #0d6efd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
}

.add-btn:hover {
  background-color: #0b5ed7;
}

/* Todo list styling */
.todo-list {
  list-style-type: none;
  padding: 0;
}

/* Todo item styling (you might want to move this to TodoItem.vue) */
.todo-list li {
  padding: 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.todo-list li:last-child {
  border-bottom: none;
}

.todo-list li span {
  flex: 1;
}

.todo-list li button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
}

.todo-list li button:hover {
  background-color: #bb2d3b;
}
</style>
