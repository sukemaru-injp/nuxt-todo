<template>
  <div id="container">
    <div class="todos">
      <ul class="todos__lists">
        <li v-for="todo in todos" :key="todo.id" class="list">
          <div v-if='todo.created' class="flex">
            <div class="flex__left">
              行き先:{{ todo.name }}<br>
              やりたいこと:<span v-bind:class="{ done: todo.done }"> {{ todo.place }}</span><br>
              投稿日時:{{ todo.created.toDate() | dateFilter }}
            </div>
            <div class="flex__right">
              <button @click="toggle(todo)" class='toggle-btn red'>
                <div v-if="todo.done === false">これから！</div>
                <div v-if="todo.done === true">済んだ！</div>
              </button>
              <button @click="remove(todo.id)" class="toggle-btn delete">削除</button>
            </div>
          </div>
          <hr>
        </li>
      </ul>
    </div>
    <div class="form">
      <form v-on:submit.prevent="add">
        <input v-model="name" class="input" placeholder="行き先">
        <input v-model="place" class="input" placeholder=" やりたいこと">
        <button class="submit">追加する</button>
      </form>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

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
      this.$store.dispatch('todos/add', {name: this.name, place: this.place})
      this.name = ''
      this.place = ''
    },
    remove(id) {
      this.$store.dispatch('todos/remove', id)
      alert('削除します')
    },
    toggle(todo) {
      this.$store.dispatch('todos/toggle', todo)
    }
  },
  computed: {
    todos() {
      return this.$store.getters['todos/orderdTodos']
    }
  },
  filters: {
      dateFilter: function(date) {
        return moment(date).format('YYYY/MM/DD HH:mm')
      }
    }
}

</script>

<style scoped>
li > div >  div > span.done {
  text-decoration: line-through;
}
</style>
