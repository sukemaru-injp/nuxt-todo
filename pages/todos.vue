<template>
  <div id="container">
    <div class="todos">
      <ul class="todos_list">
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.name }}
          {{ todo.created }}
          <button @click="remove(todo.id)">DEL</button>
        </li>
      </ul>
    </div>
    <div class="form">
      <form v-on:submit.prevent="add">
        <input v-model="name" class="input">
        <button class="submit">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: '',
      done: false
    }
  },
  created: function() {
    this.$store.dispatch('todos/init')
  },
  methods: {
    add() {
      this.$store.dispatch('todos/add', this.name)
      this.name = ''
    },
    remove(id) {
      this.$store.dispatch('todos/remove', id)
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos.todos
    }
  }
}
</script>
