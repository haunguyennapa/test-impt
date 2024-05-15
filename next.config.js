/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "content.flexlinks.com" }
        ]
    }
}

module.exports = nextConfig
