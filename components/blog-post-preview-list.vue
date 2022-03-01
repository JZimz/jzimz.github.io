<template>
  <div class="blog-post-preview-list">
    <blog-post-preview
      v-for="post in posts"
      :key="post.slug"
      class="blog-post-preview"
      v-bind="post"
    />
  </div>
</template>

<script>
export default {
  name: 'BlogPostPreviewList',
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="less" scoped>
.blog-post-preview-list {
  .blog-post-preview {
    margin-bottom: 30px;
  }
}
</style>
