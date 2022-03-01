<template>
  <nav class="site-nav">
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/blog">Blog</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheNav',
}
</script>

<style lang="less" scoped>
.site-nav {
  width: 100%;
  padding-bottom: 40px;

  ul {
    display: flex;
    justify-content: center;
    margin: 0;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      list-style: none;

      &:not(:last-child) {
        margin-right: 20px;
      }

      a {
        color: var(--grey-1);
        text-decoration: none;

        &.nuxt-link-exact-active,
        &:hover {
          color: var(--color);
          transition: color 0.3s;
        }
      }
    }
  }
}
</style>
