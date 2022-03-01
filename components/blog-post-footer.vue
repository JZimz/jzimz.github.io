<template>
  <section class="blog-post-footer">
    <div class="blog-post-footer__title">
      <strong>Thanks for reading!</strong>
    </div>
    <div class="blog-post-footer__content">
      Hopefully it was helpful. Follow me on Twitter where I post similar
      content and connect with fellow gamers.
    </div>
    <div class="blog-post-footer__actions">
      <a
        class="action-link jz-flex-row"
        href="https://twitter.com/jzimz"
        rel="noopener"
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
.blog-post-footer {
  text-align: center;

  @media only screen and (min-width: 600px) {
    padding: 0 100px;
  }

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
