<template>
  <article class="article-card">
    <NuxtLink class="article-card__link" :to="`/blog/${slug}`">
      <h2>{{ title }}</h2>
      <h3 v-if="description" class="description">
        {{ description }}
      </h3>
    </NuxtLink>
    <div class="article-card__footer jz-flex-row">
      <span>{{ createdAt | formatDate }}</span>
      <span>&middot;</span>
      <span>{{ readingTime.text }}</span>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ArticlePreview',
  props: {
    createdAt: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    readingTime: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="less" scoped>
.article-card {
  &__link {
    text-decoration: none;
  }

  &__footer {
    font-size: var(--font-size-tertiary);
    color: var(--grey-1);
    margin-top: 8px;
  }
}
</style>
