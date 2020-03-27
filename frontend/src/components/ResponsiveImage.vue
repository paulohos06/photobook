<template>
  <img v-bind:src="url" :alt="title">
</template>

<script>
export default {
  props: {
    url: { type: String, required: true},
    title: { type: String }
  }
}
</script>

<style scoped>
img {
  width: 200px;
  height: 170px;
  margin: 10px;
}
</style>