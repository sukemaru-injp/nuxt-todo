<template>
  <div>
    <h2>usersID{{ $route.params.id }}</h2>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
}
</script>

<style scoped></style>
