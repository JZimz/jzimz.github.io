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
      <a href="https://www.twitch.tv/jzimz" target="_blank" class="link-item">
        <twitch-icon />
      </a>
      <a
        href="https://www.youtube.com/channel/UCxyaFKlRSXJ-D0-UICa6W3g/"
        target="_blank"
        class="link-item"
      >
        <you-tube-icon />
      </a>
      <a href="https://www.tiktok.com/@jzimz" target="_blank" class="link-item">
        <tik-tok-icon />
      </a>
      <a
        href="https://www.instagram.com/jzimztv/"
        target="_blank"
        class="link-item"
      >
        <instagram-icon />
      </a>
      <a href="https://twitter.com/jzimz" target="_blank" class="link-item">
        <twitter-icon />
      </a>
      <a href="http://buymeacoffee.com/jzimz" target="_blank" class="link-item">
        <buy-me-a-coffee-icon />
      </a>
    </section>
    <!-- TODO: WIP <section-divider />
    <section class="articles">
      <h2>Latest Articles</h2>
      <article-list :articles="articles" />
    </section> -->
  </div>
</template>

<script>
// import {
//   TwitchIcon,
//   TwitterIcon,
//   // CoffeeIcon,
//   YoutubeIcon,
//   InstagramIcon,
// } from 'vue-feather-icons'
import {
  YouTubeIcon,
  TwitchIcon,
  TikTokIcon,
  InstagramIcon,
  TwitterIcon,
  BuyMeACoffeeIcon,
} from 'vue-simple-icons'

export default {
  name: 'IndexPage',
  components: {
    // TwitchIcon,
    // TwitterIcon,
    // CoffeeIcon,
    YouTubeIcon,
    TwitchIcon,
    TikTokIcon,
    InstagramIcon,
    TwitterIcon,
    BuyMeACoffeeIcon,
    // YoutubeIcon,
    // InstagramIcon,
  },
  head: {
    // TODO: See if there is already a library that will translate a JSON object
    // to the corresponding open-id/twitter card meta tags. Starting with just
    // twitter cards for now.
    meta: [
      {
        hid: 'home-twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'home-twitter:site',
        name: 'twitter:site',
        content: '@jzimz',
      },
      {
        hid: 'home-twitter:title',
        name: 'twitter:title',
        content: 'JZimz - Developer | Gamer',
      },
      {
        hid: 'home-twitter:description',
        name: 'twitter:description',
        content:
          'I play video games, code things, and try to share what I learn along the way!',
      },
      {
        hid: 'home-twitter:image',
        name: 'twitter:image',
        content: 'https://jzimz.com/img/profile.png',
      },
    ],
  },
  // TODO: Articles are a WIP
  // async asyncData ({ $content, params }) {
  //   const articles = await $content('articles')
  //     .only(['title', 'slug', 'createdAt', 'description'])
  //     .sortBy('age', 'desc')
  //     .limit(3)
  //     .fetch()

  //   return {
  //     articles
  //   }
  // },
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
      background-image: url('/img/profile.png');
      background-size: 100%;
      border: solid 4px var(--color);
      filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));

      &:hover {
        background-image: url('/img/profile-alt.png');
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
  }
}
</style>
