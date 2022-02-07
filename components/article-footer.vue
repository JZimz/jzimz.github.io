<template>
  <section class="article-footer">
    <div class="article-footer__title">
      <strong>Thanks for reading!</strong>
    </div>
    <div class="article-footer__content">
      Hopefully it was helpful. Follow me on Twitter where I post similar
      content and connect with fellow gamers.
    </div>
    <div class="article-footer__actions">
      <a
        class="action-link jz-flex-row"
        href="https://twitter.com/jzimz"
        target="_blank"
      >
        <twitter-icon /> Follow me on Twitter
      </a>
    </div>
  </section>
</template>

<script>
import { TwitterIcon } from 'vue-simple-icons'
export default {
  components: {
    TwitterIcon,
  },
}
</script>

<style lang="less" scoped>
.article-footer {
  text-align: center;
  padding: 0 100px;

  &__title {
    margin-bottom: 10px;
  }
  &__content {
    margin-bottom: 20px;
  }

  .action-link {
    padding: 10px 20px;
    background: var(--color);
    color: var(--bg);
    border-radius: 4px;
    text-decoration: none;
    font-size: var(--font-size-secondary);
    display: inline-flex;

    svg {
      margin-right: 10px;
      fill: var(--bg);
    }
  }
}
</style>
