<template>
  <div class="article-card-list">
    <article-card
      v-for="article in articles"
      :key="article.slug"
      class="article-card"
      v-bind="article"
    />
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="less" scoped>
.article-card-list {
  .article-card {
    margin-bottom: 30px;
  }
}
</style>
