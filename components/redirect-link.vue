<template>
  <div>
    {{ msg }} If you are not redirected automatically,
    <a :href="to"> click here </a>.
  </div>
</template>

<script>
export default {
  name: 'RedirectLink',
  props: {
    msg: {
      type: String,
      default: 'Sending you somewhere else.',
    },
    to: {
      type: String,
      required: true,
    },
    toDeep: {
      type: String,
      default: null,
    },
  },
  mounted() {
    if (this.toDeep) {
      this.navTo(this.toDeep)
      // Fallback to the standard link.
      setTimeout(() => {
        this.navTo(this.to)
      }, 1000)
    } else {
      this.navTo(this.to)
    }
  },
  methods: {
    navTo(url) {
      window.location.replace(this.to)
    },
  },
}
</script>
