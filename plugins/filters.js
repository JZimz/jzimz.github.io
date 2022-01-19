import Vue from 'vue'

Vue.filter('formatDate', (value, locale = 'en-US') => {
  const now = new Date()
  const dateValue = new Date(value)

  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    day: 'numeric',
    ...(now.getFullYear() !== dateValue.getFullYear()
      ? {
          year: 'numeric',
        }
      : {}),
  }).format(dateValue)
})
