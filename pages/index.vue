<template>
  <div class="page-home">
    <section class="hero">
      <!-- <div class="hero-photo"></div> -->
      <twitch-embed video="1866096776" />
      <div class="linkage">
        <a
          href="https://www.twitch.tv/jzimz"
          rel="noopener"
          target="_blank"
          class="link-item"
        >
          <twitch-icon size="2x" />
        </a>
        <a
          href="https://www.youtube.com/channel/UC2aEpE5nPsW9BV9-MpSxzMg"
          rel="noopener"
          target="_blank"
          class="link-item"
        >
          <you-tube-gaming-icon size="2x" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCxyaFKlRSXJ-D0-UICa6W3g/"
          rel="noopener"
          target="_blank"
          class="link-item"
        >
          <you-tube-icon size="2x" />
        </a>
        <a
          href="https://twitter.com/jzimz"
          rel="noopener"
          target="_blank"
          class="link-item"
        >
          <twitter-icon size="2x" />
        </a>
        <a
          href="https://www.tiktok.com/@jzimz"
          rel="noopener"
          target="_blank"
          class="link-item"
        >
          <tik-tok-icon size="2x" />
        </a>
        <a
          href="https://www.instagram.com/jzimztv/"
          rel="noopener"
          target="_blank"
          class="link-item"
        >
          <instagram-icon size="2x" />
        </a>
      </div>
      <div class="hero-content">
        <strong>Hello!</strong> My name is Jason but most know me as JZimz
        <em>(jay zimz)</em> online. I'm a full-time web developer that loves
        gaming and the process of creating content. Lately, you'll find me
        playing Apex Legends but I'm into most Battle Royale games and puzzle
        platformers. If you'd like to get in touch,
        <a
          target="_blank"
          href="https://twitter.com/messages/compose?recipient_id=1226548642397310976"
          class="twitter-dm-link"
          >my DMs are open!</a
        >
      </div>
    </section>
    <section><div class="divider"></div></section>
    <section class="blog-posts">
      <blog-post-preview-list :posts="posts" />
      > Check out all of my <nuxt-link to="blog">blog posts</nuxt-link>
    </section>
  </div>
</template>

<script>
import {
  TwitchIcon,
  YouTubeGamingIcon,
  YouTubeIcon,
  TikTokIcon,
  InstagramIcon,
  TwitterIcon,
} from 'vue-simple-icons'
import { toMeta } from '@/util/meta.util'

export default {
  name: 'IndexPage',
  components: {
    TwitchIcon,
    YouTubeGamingIcon,
    YouTubeIcon,
    TikTokIcon,
    InstagramIcon,
    TwitterIcon,
  },
  async asyncData({ $content, params }) {
    const posts = await $content('blog-posts')
      .only(['title', 'slug', 'createdAt', 'description', 'readingTime'])
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()

    return {
      posts,
    }
  },
  head: {
    htmlAttrs: {
      prefix: 'og: https://ogp.me/ns#',
    },
    meta: toMeta({
      description:
        'JZimz is full-time web developer, gamer, and content creator sharing what he learns along the way.',
      'twitter:card': 'summary',
      'twitter:site': '@jzimz',
      'twitter:creator': '@jzimz',
      'og:url': 'https://jzimz.com',
      'og:title': 'JZimz - Developer | Gamer',
      'og:description':
        'I play video games, code things, and try to share what I learn along the way!',
      'og:image': 'https://jzimz.com/img/profile.png',
      'og:type': 'website',
    }),
  },
}
</script>

<style lang="less" scoped>
.page-home {
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    max-width: 520px;
    margin-bottom: 30px;

    .divider {
      border-top: 1px solid var(--border-color);
      border-radius: 5px;
    }
  }

  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    &-photo {
      width: 300px;
      height: 300px;
      background-color: var(--bg);
      border-radius: 50%;
      background-repeat: no-repeat;
      background-image: url('/img/profile.webp');
      background-size: 100%;
      border: solid 4px var(--color);
      filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));

      &:hover {
        background-image: url('/img/profile-alt.webp');
        background-size: 100%;
      }
    }

    &-content {
      margin-top: 10px;
    }
  }

  .linkage {
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 30px;

    .feather {
      stroke: var(--color);
    }
    svg {
      fill: var(--color);
    }
  }
}
</style>
