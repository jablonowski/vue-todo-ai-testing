<template>
  <div>
    <form v-on:submit.prevent="addNewTodo">
      <input class="add-input" type="text" v-model="newTodoText" id="new-todo" placeholder="Add a todo e.g. call mom" />
      <input type="checkbox" id="important" v-model="isImportant" />
      <label for="important">Important</label>
      <button class="add-btn" id="add-todo">Add</button>
    </form>
    <ul class="todo-list" id="todo-list">
      <todo-item v-for="(todo, index) in todos" :key="todo.id" :title="todo.title" :isImportant="todo.isImportant"
        @remove="todos.splice(index, 1)"></todo-item>
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
      nextTodoId: 0,
    };
  },
  methods: {
    addNewTodo() {
      if (!this.newTodoText) {
        return;
      }
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

<style>
.todo-list {
  list-style-type: none;
  padding: 0;
}

.add-btn {
  cursor: pointer;
  outline: 0;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 1rem;
  border-radius: .25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  color: #0d6efd;
  border-color: #0d6efd;

  :hover {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }

}

.add-input {
  margin-right: 6px;
  padding: 6px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 4px;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  :focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }

}
</style>
