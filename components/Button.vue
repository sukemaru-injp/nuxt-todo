<template>
  <div class="transition mb-lg">
    <h1>Transition</h1>
    <button class="mb-lg" @click="show = !show">切り替えるよ！</button>
    <transition name="fade">
      <h2 v-show="show">どこに行こうか？</h2>
    </transition>
    <transition name="slide">
      <h3 v-if="show">Bye!!</h3>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    }
  },
}
</script>

<style lang="scss" scoped>
// フェード
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 3s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 3s;
}
.fade-leave-to {
  opacity: 0;
}

// アニメーション
.slide-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 0.5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 0.5s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }

  to {
    transform: translateX(0);
  }
}
</style>
