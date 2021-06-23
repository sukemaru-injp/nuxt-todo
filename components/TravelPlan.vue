<template>
  <div class="travel content-width">
    <h2 class="title">あなただけの旅行を作る</h2>
    <div class="travel__inner">
      <div class="travel__item">
        <div class="travel__img">
          <img src="~/assets/images/IMG_2615.png" />
        </div>
        <div class="travel__title">Paris</div>
      </div>

      <div class="travel__item">
        <div class="travel__img">
          <img src="~/assets/images/IMG_4279.png" />
        </div>
        <div class="travel__title">Barcelona</div>
      </div>

      <div class="travel__item">
        <div class="travel__img">
          <img src="~/assets/images/IMG_5577.png" />
        </div>
        <div class="travel__title">Yakushima</div>
      </div>
    </div>
    <router-link to="/todos" class="btn float">旅程を作る</router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.title {
  padding-top: 30px;
}

// ボタン重複あり
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
