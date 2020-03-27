<template>
  <div>
    <button :class="btnClass" :type="type" @click="action">
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    className: String,
    type: { type: String, required: true },
    label: { type: String, required: true },
    confirm: Boolean
  },
  computed: {
    btnClass: function() {
      if (!this.className) return 'default'
      else if (this.className === 'primary') return 'primary'
      else return this.className
    }
  },
  methods: {
    action: function() {
      if (this.className === 'close') {
        if (this.confirm) {
          if (confirm('Deseja remover a imagem?')) {
            this.$emit('btnAction')
          }
        } else {
          this.$emit('btnAction')
        }
      }
    }
  }
}
</script>

<style scoped>
button {
  outline: none;
  display: inline-block;
  padding: 8px;
  margin: 10px;
  border-radius: 3px;
  font-size: 13px;
  cursor: pointer;
}
.default {
  background: #5A6168;
  border: 1px solid #5A6168;
  color: #FFF;
}
.primary {
  background: #1169D9;
  border: 1px solid #1169D9;
  color: #FFF;
}
.close {
  background: #ff5c5c;
  border: 1px solid #e33e41;
  color: #FFF;
}
.success {
  background: #218838;
  border: 1px solid #218838;
  color: #FFF;
}
</style>