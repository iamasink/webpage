/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    // async rewrites() {
    //     return [
    //         {
    //             source: "/html/:slug",
    //             destination: "/html/:slug.html",
    //         }
    //     ]
    // },
}

module.exports = nextConfig
