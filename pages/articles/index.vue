<template>
  <div class="page-articles">
    <the-nav />
    <article-card-list class="page-articles__list" :articles="articles" />
  </div>
</template>

<script>
export default {
  name: 'PageArticles',
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'slug', 'createdAt', 'description', 'readingTime'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>
<style lang="less" scoped>
.page-articles {
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__list {
    max-width: 520px;
  }
}
</style>
