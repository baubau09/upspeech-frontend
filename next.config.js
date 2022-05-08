/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        FB_API: process.env.FB_API,
        FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
        FB_PROJECT_ID: process.env.FB_PROJECT_ID,
        FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
        FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID,
        FB_APP_ID: process.env.FB_APP_ID
    },
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://127.0.0.1:5000/api/:path*',
          },
        ]
    },
    
}

module.exports = nextConfig
