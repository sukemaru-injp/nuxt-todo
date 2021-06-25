<template>
  <div class="description content-width">
    <div class="description__inner">
      <div class="description__img">
        <img src="~/assets/images/IMG_4349.png" alt="" />
      </div>
      <div class="description__texts">
        <div class="description__texts-inner">
          <div class="description__title">
            <span class="brown">Travel</span>
            <span>the world</span>
          </div>
          <div class="description__sub">旅メモで計画的に！</div>
          <div class="description__content">
            <p>
              あなたの旅行をより計画的に<br />
              行きたいところに行けるお手伝いをします。
            </p>
          </div>
          <div class="description__btn">
            <router-link to="/todos" class="btn float">
              計画を立てる
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.brown {
  color: brown;
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
