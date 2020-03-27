import Vue from 'vue'

Vue.directive('transform', {
  bind(el, binding) {
    let current = 0
    let effect = ''

    el.addEventListener('dblclick', () => {
      if (binding.arg === 'rotate') {
        const rotate = binding.value || 90
        if (binding.modifiers.reverse) current -= rotate
        else current += rotate

        effect = `rotate(${current}deg)`
      } else if(binding.arg === 'scale') {
        const size = binding.value || 1.2
        effect = `scale(${size})`
      }

      el.style.transform = effect
      if (binding.modifiers.animate) el.style.transition = 'transform 1s'
    })
  }
})