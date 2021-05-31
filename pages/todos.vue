<template>
  <div id="container">
    <div class="todos">
      <ul class="todos__lists">
        <li v-for="todo in todos" :key="todo.id" class="list">
          行き先:{{ todo.name }}<br>
          やりたいこと:{{ todo.place }}<br>
          <button @click="remove(todo.id)">DEL</button>
          <input type="checkbox" v-bind:checked="todo.done" @change="toggle(todo)">
        </li>
      </ul>
    </div>
    <div class="form">
      <form v-on:submit.prevent="add">
        <input v-model="name" class="input" placeholder="行き先">
        <input v-model="place" class="input" placeholder="行き先でのプラン">
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
      place: '',
      done: false
    }
  },
  created: function() {
    this.$store.dispatch('todos/init')
  },
  methods: {
    add() {
      this.$store.dispatch('todos/add', {name:this.name, place: this.place})
      this.name = ''
      this.place = ''
    },
    remove(id) {
      this.$store.dispatch('todos/remove', id)
    },
    toggle(todo) {
      this.$store.dispatch('todos/toggle', todo)
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos.todos
    }
  }
}
</script>
