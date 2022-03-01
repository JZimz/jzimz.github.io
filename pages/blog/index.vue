<template>
  <div class="page-blog-posts">
    <the-nav />
    <blog-post-preview-list class="page-blog-posts__list" :posts="posts" />
  </div>
</template>

<script>
export default {
  name: 'PageBlogPosts',
  async asyncData({ $content, params }) {
    const posts = await $content('blog-posts')
      .only(['title', 'slug', 'createdAt', 'description', 'readingTime'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      posts,
    }
  },
}
</script>
<style lang="less" scoped>
.page-blog-posts {
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__list {
    max-width: 520px;
  }
}
</style>
