<template>
  <header class="header">
    <div class="header-left">
      <router-link to="/" class="title">TRAVEL TODO</router-link>
    </div>
    <div class="header-right">
      <button class="menu-icon" @click="toggle">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggle() {
      document.querySelector("#global-container").classList.toggle("menu-open")
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  background-color: aquamarine;
  height: 60px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.title {
  padding: 10px;
}

.menu-icon {
  background-color: transparent;
  border: none;
  outline: none !important;
  margin-right: 10px;
  margin-top: 6px;

  & > span {
    display: block;
    background-color: black;
    width: 30px;
    height: 2px;
    margin-bottom: 10px;
    transition: all 0.6s;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &:hover {
    cursor: pointer;
  }
}

.menu-open {
  & .menu-icon {
    position: fixed;
    top: 10px;
    right: 0;
    z-index: 100;
    & > span {
      background-color: white;
      &:nth-child(1) {
        transform: translateY(12px) rotate(135deg);
      }

      &:nth-child(2) {
        transform: scaleX(0) translateX(20px);
      }

      &:nth-child(3) {
        transform: translateY(-12px) rotate(-135deg);
      }
    }
  }
}
</style>
