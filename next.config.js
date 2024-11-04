/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async headers() {
      return [
        {
          source: '/favicon.ico',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-cache, no-store, must-revalidate'
            }
          ]
        }
      ]
    }
  }