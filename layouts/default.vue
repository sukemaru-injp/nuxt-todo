<template>
  <div id="global-container">
    <Header></Header>
    <Nuxt />
    <nav class="mobile">
      <ul class="mobile__main">
        <li class="mobile__item">
          <a href="#">新規登録</a>
        </li>
        <li class="mobile__item">
          <a href="#">ログイン</a>
        </li>
        <li class="mobile__item">
          <a href="#">Our Service</a>
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

<style lang="scss"></style>
