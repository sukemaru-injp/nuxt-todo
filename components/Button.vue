<template>
  <div class="like">
    <button @click="add">いいね {{ num }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 5,
    }
  },
  methods: {
    add: function() {
      this.num += 1
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
