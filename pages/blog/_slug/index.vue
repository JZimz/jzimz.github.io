<template>
  <div class="page-blog-post">
    <the-nav />
    <article class="blog-post">
      <div class="blog-post__header">
        <h1>{{ page.title }}</h1>
        <h3>{{ page.description }}</h3>
        <div>
          <div class="meta jz-flex-row">
            <img
              class="author-profile-pic"
              src="/img/profile.png"
              alt="Author profile picture"
            />
            <nuxt-link class="author-name" to="/"> Jason Sims </nuxt-link>
            <span>{{ page.createdAt | formatDate }}</span>
            <span>&middot;</span>
            <span>{{ page.readingTime.text }}</span>
          </div>
          <!-- TODO: Add share links here -->
        </div>
      </div>
      <nuxt-content class="blog-post__content" :document="page" />
    </article>
  </div>
</template>

<script>
export default {
  name: 'PageBlog',
  async asyncData({ $content, params }) {
    const page = await $content('articles', params.slug).fetch()

    return {
      page,
    }
  },
}
</script>
<style lang="less" scoped>
.page-blog-post {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;

  &__sidebar {
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    margin-right: 600px;

    .sidebar-body {
      width: 200px;
    }
  }

  .blog-post {
    max-width: 680px;

    &__header {
      .meta {
        display: flex;
        align-items: center;
        font-size: var(--font-size-tertiary);
        color: var(--grey-1);
        margin-top: 20px;

        > :not(:last-child) {
          margin-right: 6px;
        }

        .author-name {
          text-decoration: none;
          color: var(--grey-1);
          font-weight: var(--font-weight-semi-bold);
        }
        .author-profile-pic {
          border-radius: 50%;
          height: 28px;
          width: 28px;
        }
      }
    }
    &__content {
    }
  }
}
</style>
