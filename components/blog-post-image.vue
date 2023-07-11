<template>
  <p>
    <img :src="src" :alt="alt" :style="{ width: '100%' }" />
  </p>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
  },
}
</script>
