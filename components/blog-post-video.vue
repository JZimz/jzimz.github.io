<template>
  <div class="blog-post-video">
    <slot />
    <img
      v-if="placeholder"
      class="placeholder-image"
      :src="placeholder"
      alt="Video thumbnail"
    />
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

  .placeholder-image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
  }
}
</style>
