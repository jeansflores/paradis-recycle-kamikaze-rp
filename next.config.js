const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/compra',
        permanent: true
      }
    ]
  }
})
