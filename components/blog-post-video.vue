<template>
  <div
    ref="container"
    class="blog-post-video"
    :style="{
      'background-image': `url(${placeholder})`,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BlogPostVideo',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="less" scoped>
.blog-post-video {
  position: relative;
  margin-top: 1em;
  aspect-ratio: 16 / 9;
  background-size: cover;

  > * {
    display: block;
    height: 100%;
    width: 100%;
  }
}
</style>
