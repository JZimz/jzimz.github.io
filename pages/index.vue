<template>
  <div class="page-home">
    <div class="profile-photo"></div>
    <div class="profile-text">
      <h1>JZimz</h1>
    </div>
    <div class="page-body">
      <section class="about">
        <strong class="intro">Hello!</strong> My name is Jason but most know me
        as JZimz <em>(jay zimz)</em> online. I’ve always loved gaming and really
        enjoy getting to interact with fellow gamers on stream along with
        creating gaming related content. I'm typically playing Apex Legends but
        definitely like mix it up from time to time.
      </section>
      <section class="linkage">
        <a href="https://www.twitch.tv/jzimz" target="_blank" class="link-item">
          <img src="/icons/twitch.svg" alt="Twitch logo" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCxyaFKlRSXJ-D0-UICa6W3g/"
          target="_blank"
          class="link-item"
        >
          <img src="/icons/youtube.svg" alt="YouTube logo" />
        </a>
        <a
          href="https://www.instagram.com/jzimztv/"
          target="_blank"
          class="link-item"
        >
          <img src="/icons/instagram.svg" alt="Instagram icon" />
        </a>
        <a href="https://twitter.com/jzimz" target="_blank" class="link-item">
          <img src="/icons/twitter.svg" alt="Twitter icon" />
        </a>
      </section>
      <section ref="donate" class="donate">
        <a
          class="donate-link"
          target="_blank"
          href="http://buymeacoffee.com/jzimz"
        >
          ☕️ Buy me a coffee!
        </a>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    // TODO: I'm unsure how to insert this donate button on a SSR app.
    // const DONATE_BUTTON_ATTRS = {
    //   type: 'text/javascript',
    //   src: 'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js',
    //   'data-name': 'bmc-button',
    //   'data-slug': 'jzimz',
    //   'data-color': '#FFDD00',
    //   'data-emoji': '',
    //   'data-font': 'Cookie',
    //   'data-text': 'Buy me a coffee',
    //   'data-outline-color': '#000000',
    //   'data-font-color': '#000000',
    //   'data-coffee-color': '#ffffff',
    // }
    // const donateButton = document.createElement('script')
    // Object.keys(DONATE_BUTTON_ATTRS).forEach((key) => donateButton.setAttribute(key, DONATE_BUTTON_ATTRS[key]))
    // this.$refs.donate.appendChild(donateButton)
  },

  methods: {
    handleDonateClick() {
      window.location.href = 'http://buymeacoffee.com/jzimz'
    },
  },
}
</script>

<style lang="less">
.page-home {
  // TODO: Make a base site style
  font-family: 'Roboto Slab', serif;
  font-weight: 300;
  @black: #0d0f11;
  @white: #ffffff;
  strong {
    font-weight: 600;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;

  section {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  .intro {
    font-size: 20px;
  }

  .profile-photo {
    width: 130px;
    height: 130px;
    background-color: @white;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-image: url('/img/profile.png');
    background-size: 100%;

    &:hover {
      background-image: url('/img/profile-alt.png');
      background-size: 100%;
    }
  }

  .profile-text h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    margin-top: 0.5em;
    font-size: 2em;
    text-align: center;
  }

  .page-body {
    padding: 0 20px;
    max-width: 520px;
  }

  .linkage {
    text-align: center;
    display: flex;
    justify-content: space-evenly;

    .link-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      font-weight: 400;

      img {
        height: 36px;
        width: 36px;
      }
    }
  }

  .donate {
    text-align: center;

    .donate-link {
      font-size: 24px;
    }
  }
}
</style>
