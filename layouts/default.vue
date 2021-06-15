<template>
  <div id="global-container">
    <Header></Header>
    <Nuxt />
    <nav class="mobile">
      <ul class="mobile__main">
        <li class="mobile__item">
          <a href="#" class="mobile__link">新規登録</a>
        </li>
        <li class="mobile__item">
          <a href="#" class="mobile__link">ログイン</a>
        </li>
        <li class="mobile__item">
          <a href="#" class="mobile__link">Our Service</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Header from "~/components/Header.vue"

export default {
  components: {
    Header,
  },
  methods: {
    constructor() {
      this.DOM = {}
      this.DOM.btn = document.querySelector(".menu-open")
      this.DOM.container = document.querySelector("#global-container")
    },
  },
}
</script>

<style lang="scss" scoped>
.mobile {
  position: relative;
  z-index: 10;
  right: 0;
  top: 0;
  display: none;

  &__main {
    color: white;
    padding: 0;
    opacity: 0;
    margin-right: 10px;
  }

  &__item {
    list-style: none;
    display: block;
    padding-top: 20px;
  }

  &__link {
    display: block;
    color: white;
    text-decoration: none;
  }
}

.menu-open {
  transition: all 1s;
  & .mobile {
    display: block;
    background-color: teal;
    width: 50vw;
    height: 100vh;
    position: fixed;
    z-index: 60;
    text-align: center;
    opacity: 0.8;

    &__main {
      opacity: 1;
    }
  }
}
</style>
