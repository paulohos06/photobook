<template>
  <div class="panel">
    <h4 class="panel-title" v-text="title" @dblclick="visibility"/>
    <transition name="panel-fade">
      <div class="panel-body" v-show="visible">
        <slot/>
      </div>
      <!-- .panel-body -->
    </transition>
  </div>
  <!-- .panel -->
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
      visible: true
    }
  },
  methods: {
    visibility: function() {
      return this.visible = !this.visible
    }
  }
}
</script>

<style scoped>
.panel {
  margin: 20px 10px;
  border: solid 2px #f8f8f8;
  box-shadow: 5px 5px 10px grey;
  vertical-align: top;
}
.panel-fade-enter-active, .panel-fade-leave-active {
  transition: opacity .5s;
}
.panel-fade-enter, .panel-fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
.panel-body {
  overflow: hidden;
}
</style>