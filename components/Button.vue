<template>
  <div class="transition mb-lg">
    <h1>Transition</h1>
    <button class="mb-lg" @click="show = !show">アニメーション</button>
    <transition
      name="fade"
      enter-active-class="animate__animated animate__bounce"
    >
      <h2 v-if="show" appear>どこに行こうか？</h2>
    </transition>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div class="circle" v-if="show"></div>
    </transition>
    <transition name="slide" appear>
      <h3 v-if="show">見てみよう！</h3>
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
  methods: {
    beforeEnter(el) {
      el.style.transform = "scale(0)"
    },
    enter(el, done) {
      let scale = 0
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`
        scale += 0.1
        if (scale > 1) {
          clearInterval(interval)
          done()
        }
      }, 20)
    },
    leave(el, done) {
      let scale = 1
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`
        scale -= 0.1
        if (scale < 0) {
          clearInterval(interval)
          done()
        }
      }, 20)
    },
  },
}
</script>

<style lang="scss" scoped>
.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 100px;
  background-color: brown;
}

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
