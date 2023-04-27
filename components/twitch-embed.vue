<template>
  <iframe
    :src="src"
    frameborder="0"
    allowfullscreen="true"
    scrolling="no"
    width="100%"
  ></iframe>
</template>

<script>
export default {
  name: 'TwitchEmbed',
  props: {
    video: {
      type: String,
      default: '',
    },
    collection: {
      type: String,
      default: '',
    },
  },
  computed: {
    src() {
      const video = this.collection
        ? `collection=${this.collection}`
        : `video=${this.video}`
      let parent = 'www.jzimz.com'

      if (process.env.NODE_ENV === 'development') parent = 'localhost'

      return `https://player.twitch.tv/?${video}&parent=${parent}`
    },
  },
}
</script>

<style lang="less" scoped>
iframe {
  // TODO: Test this in dark mode
  border: solid 3px var(--color);
  border-radius: 3px;
  aspect-ratio: 16 / 9;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
</style>
