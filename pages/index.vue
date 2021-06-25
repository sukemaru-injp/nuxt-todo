<template>
  <div id="container">
    <Swiper></Swiper>
    <hr />
    <div class="main-content">
      <Description></Description>
    </div>
    <div class="main-content">
      <ButtonComponent></ButtonComponent>
    </div>
    <div class="main-content">
      <FindTravel></FindTravel>
    </div>
    <div class="main-content">
      <TravelPlan></TravelPlan>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "~/components/Button.vue"
import Swiper from "~/components/Swiper.vue"
import FindTravel from "~/components/FindTravel.vue"
import TravelPlan from "~/components/TravelPlan.vue"
import Description from "~/components/Description.vue"

export default {
  components: {
    ButtonComponent,
    Swiper,
    FindTravel,
    TravelPlan,
    Description,
  },
}
</script>

<style lang="scss" scoped>
.main-content {
  text-align: center;
  padding: 10px;
  margin-bottom: 30px;
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
