<template>
  <footer class="footer">
    <div class="logo">
      <p class="logo__title">TRAVEL TODO</p>
    </div>
    <nav class="footer__nav">
      <ul class="footer__ul">
        <li class="footer__li"><a href="#">Contact</a></li>
        <li class="footer__li"><a href="#">Company</a></li>
      </ul>
    </nav>
    <div class="footer__copyright">&copy; Ryosuke2021</div>
  </footer>
</template>

<script></script>

<style lang="scss" scoped>
$cGray: gray;

.footer {
  background-color: aquamarine;
  padding: 10px;

  &__nav {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  &__ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
  }

  &__li {
    margin: 10px;

    & > a {
      color: gray;
    }
  }

  &__copyright {
    text-align: center;
    color: $cGray;
  }
}

.logo {
  justify-content: center;
  font-size: 30px;
  display: flex;
  color: $cGray;
}
</style>
