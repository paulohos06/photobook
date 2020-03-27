<template>
  <nav class="menu">
    <ul>
      <li v-for="route in menuRoutes" :key="route.id">
        <router-link :to="route.path">{{ route.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default { 
  data() {
    return {
      routes: this.$router.options.routes
    }
  },
  computed: {
    menuRoutes: function() {
      return this.routes.filter(item => item.menu)
    }
  }
}
</script>

<style scoped>
.menu li {
  display: inline;
  list-style: none;
  padding: 0 10px;
}
.menu li a {
  text-decoration: none;
}
</style>