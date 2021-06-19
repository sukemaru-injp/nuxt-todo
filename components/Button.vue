<template>
  <div class="transition mb-lg">
    <h1>Transition</h1>
    <button class="mb-lg" @click="show = !show">切り替えるよ！</button>
    <transition name="fade">
      <h2 v-if="show">どこに行こうか？</h2>
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
</style>
