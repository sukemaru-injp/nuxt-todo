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
    <div class="main-content">
      <FindTravel></FindTravel>
    </div>
    <div class="main-content">
      <FadeSection></FadeSection>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "~/components/Button.vue"
import Swiper from "~/components/Swiper.vue"
import FindTravel from "~/components/FindTravel.vue"
import FadeSection from "~/components/FadeSection.vue"

export default {
  components: {
    ButtonComponent,
    Swiper,
    FindTravel,
    FadeSection,
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

.main-content {
  text-align: center;
  padding: 10px;
}

.btn {
  width: 200px;
  display: inline-block;
  border: 2px solid black;
  padding: 10px 40px;
  color: black;
  border-radius: 5px;
  font-weight: 600;
  margin: 20px 10px;
  text-align: center;

  &.float:hover {
    transition: all 0.5s;
    background-color: aquamarine;
    color: black;
    text-decoration: none;
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.3);
  }
}
</style>
