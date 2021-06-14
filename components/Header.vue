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
      document.querySelector("body").classList.toggle("menu-open")
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
    width: 35px;
    height: 2px;
    margin-bottom: 10px;
    transition: all 0.5s;

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
    & > span {
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
