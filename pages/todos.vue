<template>
  <div id="container" class="content-width">
    <div class="todos">
      <ul class="todos__lists">
        <li v-for="todo in todos" :key="todo.id" class="list">
          <div v-if="todo.created" class="flex">
            <div class="flex__left">
              行き先:{{ todo.name }}<br />
              やりたいこと:<span :class="{ done: todo.done }">
                {{ todo.place }}</span
              ><br />
              投稿日時:{{ todo.created.toDate() | dateFilter }}
            </div>
            <div class="flex__right">
              <button class="toggle-btn" @click="toggle(todo)">
                <transition name="fade" mode="out-in">
                  <div v-if="!todo.done" key="not-done">これから！</div>
                  <div v-if="todo.done" key="done">済んだ！</div>
                </transition>
              </button>
              <button class="toggle-btn delete" @click="remove(todo.id)">
                削除
              </button>
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
    <div class="form mb-lg">
      <form @submit.prevent="add">
        <input v-model="name" class="input" placeholder="行き先" />
        <input v-model="place" class="input" placeholder=" やりたいこと" />
        <button class="submit">追加する</button>
      </form>
    </div>
  </div>
</template>

<script>
import moment from "moment"

export default {
  filters: {
    dateFilter: function (date) {
      return moment(date).format("YYYY/MM/DD HH:mm")
    },
  },
  data: function () {
    return {
      name: "",
      place: "",
      done: false,
    }
  },
  computed: {
    todos() {
      return this.$store.getters["todos/orderdTodos"]
    },
  },
  created: function () {
    this.$store.dispatch("todos/init")
  },
  methods: {
    add() {
      this.$store.dispatch("todos/add", { name: this.name, place: this.place })
      this.name = ""
      this.place = ""
    },
    remove(id) {
      this.$store.dispatch("todos/remove", id)
      alert("削除します")
    },
    toggle(todo) {
      this.$store.dispatch("todos/toggle", todo)
    },
  },
}
</script>

<style lang="scss" scoped>
li > div > div > span.done {
  text-decoration: line-through;
}

.form {
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
}

.todos {
  &__lists {
    list-style: none;
  }
}

.list {
  margin-top: 20px;
  font-size: 18px;
}

.input {
  width: 70vw;
  height: 40px;
  margin: 10px auto;
  border: 1px solid black;
  border-radius: 5px;
  display: block;
  padding: 5px;
}

.submit {
  border: 2px solid black;
  background-color: aquamarine;
  width: 30vw;
  height: 40px;
  border-radius: 5px;
  margin-left: 10px;
}

.toggle-btn {
  height: 30px;
  width: 90px;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  background-color: salmon;
  border: 1px solid black;
}

.delete {
  background-color: black;
  color: white;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
