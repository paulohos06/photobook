<template>
  <div id="app">
    <Navbar/>
    <transition name="page">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: { Navbar }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page-enter-active, .page-leave-active {
  transition: opacity .2s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
