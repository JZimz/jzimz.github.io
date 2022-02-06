<template>
  <img
    :src="src"
    :alt="alt"
    :style="{
      'margin-bottom': '20px',
      width: '100%'
    }"/>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    }
  }
}
</script>