<template>
  <div id="container">
    <Swiper></Swiper>
    <hr />
    <div class="main-content">
      <router-link to="/todos" class="btn float">旅程を作る</router-link>
      <router-link to="/todos" class="btn float">メモを作る</router-link>
      <p class="want">やりたいことをやろう</p>
    </div>
    <div class="main-content">
      <ButtonComponent></ButtonComponent>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "~/components/Button.vue"
import Swiper from "~/components/Swiper.vue"

export default {
  components: {
    ButtonComponent,
    Swiper,
  },
}
</script>

<style lang="scss" scoped>
.want {
  color: red;

  &:hover {
    color: blue;
  }
}
</style>
