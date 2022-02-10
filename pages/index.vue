<template>
  <div class="page-home">
    <section class="hero">
      <div class="hero-photo"></div>
      <div class="hero-content">
        <strong>Hello!</strong> My name is Jason but most know me as JZimz
        <em>(jay zimz)</em> online. I'm a full-time web developer that loves
        gaming and the process of creating content. Lately, you'll find me
        playing Warzone but I'm into most FPS games and puzzle platformers. If
        you'd like to get in touch,
        <a
          target="_blank"
          href="https://twitter.com/messages/compose?recipient_id=1226548642397310976"
          class="twitter-dm-link"
          >my DMs are open!</a
        >
      </div>
    </section>
    <section class="linkage">
      <a
        href="https://www.twitch.tv/jzimz"
        rel="noopener"
        target="_blank"
        class="link-item"
      >
        <twitch-icon size="2x" />
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
      <a
        href="https://twitter.com/jzimz"
        rel="noopener"
        target="_blank"
        class="link-item"
      >
        <twitter-icon size="2x" />
      </a>
      <a
        href="http://buymeacoffee.com/jzimz"
        rel="noopener"
        target="_blank"
        class="link-item"
      >
        <buy-me-a-coffee-icon size="2x" />
      </a>
    </section>
    <section><div class="divider"></div></section>
    <section class="articles">
      <article-card-list :articles="articles" />
      > Check out all of my <nuxt-link to="articles">blog posts</nuxt-link>
    </section>
  </div>
</template>

<script>
import {
  YouTubeIcon,
  TwitchIcon,
  TikTokIcon,
  InstagramIcon,
  TwitterIcon,
  BuyMeACoffeeIcon,
} from 'vue-simple-icons'
import { toMeta } from '@/util/meta.util'

export default {
  name: 'IndexPage',
  components: {
    YouTubeIcon,
    TwitchIcon,
    TikTokIcon,
    InstagramIcon,
    TwitterIcon,
    BuyMeACoffeeIcon,
  },
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'slug', 'createdAt', 'description', 'readingTime'])
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()

    return {
      articles,
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

    &:not(:last-child) {
      margin-bottom: 30px;
    }

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
      margin-top: 20px;
    }
  }

  .linkage {
    text-align: center;
    display: flex;
    justify-content: space-evenly;

    .feather {
      stroke: var(--color);
    }
    svg {
      fill: var(--color);
    }
  }
}
</style>
