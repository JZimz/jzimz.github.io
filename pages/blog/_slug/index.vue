<template>
  <div class="page-blog-post">
    <the-nav />
    <article class="blog-post">
      <div class="blog-post__header">
        <h1>{{ post.title }}</h1>
        <h3>{{ post.description }}</h3>
        <div>
          <div class="meta jz-flex-row">
            <img
              class="author-profile-pic"
              src="/img/profile.png"
              alt="Author profile picture"
            />
            <nuxt-link class="author-name" to="/"> Jason Sims </nuxt-link>
            <span>{{ post.createdAt | formatDate }}</span>
            <span>&middot;</span>
            <span>{{ post.readingTime.text }}</span>
          </div>
          <!-- TODO: Add share links here -->
        </div>
      </div>
      <nuxt-content class="blog-post__content" :document="post" />
      <section><div class="divider"></div></section>
      <blog-post-footer></blog-post-footer>
    </article>
  </div>
</template>

<script>
import { toMeta } from '@/util/meta.util'
const HOST = 'jzimz.com'

export default {
  name: 'PageBlogPost',
  async asyncData({ $content, params }) {
    const post = await $content('blog-posts', params.slug).fetch()

    return {
      post,
    }
  },
  head() {
    const { slug, title, description, thumbnail } = this.post

    return {
      htmlAttrs: {
        prefix: 'og: https://ogp.me/ns#',
      },
      title: `JZimz | ${title}`,
      meta: toMeta({
        'twitter:card': 'summary_large_image',
        'twitter:site': '@jzimz',
        'twitter:creator': '@jzimz',
        'og:url': `https://${HOST}/blog/${slug}`,
        'og:title': title,
        'og:description': description,
        'og:image': `https://${HOST}${thumbnail}`,
        // TODO: Look into the "article" type
        // 'og:type': 'website',
      }),
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
    width: 100%;
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
  }

  .divider {
    border: solid 1px var(--border-color);
    margin: 40px 100px;
  }
}
</style>
