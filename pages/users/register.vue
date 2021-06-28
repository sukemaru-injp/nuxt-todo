<template>
  <div id="container">
    <h2>新規登録</h2>
    <div class="user-form">
      <div class="user-form__email">
        <label for="email">Email:</label>
        <input type="email" id="emial" v-model="email" class="input" />
      </div>
      <div class="user-form__pass">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" class="input" />
      </div>

      <div class="user-form__btn">
        <button @click="newUser">登録する</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    newUser() {},
  },
}
</script>

<style lang="scss" scoped>
#container {
  height: 100vh;
  padding: 20px;
  text-align: center;
}

.user-form {
  &__email {
    margin-bottom: 30px;
  }

  &__pass {
    margin-bottom: 30px;
  }

  &__btn {
    & > button {
      padding: 10px;
    }
  }
}

.input {
  height: 40px;
  width: 20vw;
}
</style>
