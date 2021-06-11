<template>
  <div class="content">
    <h2 class="content__title">Find Travel</h2>
    <p class="content__sub-title">お気に入りの旅先を探そう</p>
    <div class="content__inner">
      <div class="content__item">
        <div class="cover-slide inview darken">
          <img src="~/assets/images/IMG_0362.png" class="img-zoom">
        </div>
        <p class="item-title">香港</p>
      </div>
    </div>
    <div class="content__inner">
      <div class="content__item">
        <div class="cover-slide inview darken">
          <img src="~/assets/images/IMG_2496.png" class="img-zoom">
        </div>
        <p class="item-title">ロンドン</p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import "~/assets/styles/_mixin.scss";

.content {
  background-color: beige;
  margin: 20px;
  padding: 10px;
}

.cover-slide {
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: burlywood;
    opacity: 0.6;
    z-index: 10;
  }

  &.inview {
    &::after {
      @include animation(
        $name: kf-cover-slide,
        $duration: 1.5s,
        $timing-function: ease-in-out,
        );
    }
  }
}

@keyframes kf-cover-slide {
  0% {
    left: 0;
    right: 100%;
  }

  50% {
    left: 0;
    right: 0;
  }

  100% {
    left: 100%;
    right: 0;
  }
}

.img-zoom {
  opacity: 0;

  .inview & {
    opacity: 1;
    transition: transform 0.4s ease;
    @include animation(
      $name: kf-img-show,
      $duration: 1.5s,
      $timing-function: ease-in-out,
      $fill-mode: none,
      );

    &:hover {
      transform: scale(1.1);
    }
  }
}

@keyframes kf-img-show {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }
  51% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
  }
}

.darken {
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    transition: background-color 0.3s ease;
    pointer-events: none;
  }

  &:hover::before {
    background-color: rgba(0, 0, 0, 0.3);
  }
}

.item-title {
  margin: 30px;
}
</style>
