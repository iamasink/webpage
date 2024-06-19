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
    // async headers() {
    //     return [
    //         {
    //             // Apply these headers to all routes in your application.
    //             source: "/(.*)",
    //             headers: securityHeaders,
    //         },
    //     ];
    // },
}

module.exports = nextConfig

const securityHeaders = [
    {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
    },
    {
        key: "X-DNS-Prefetch-Control",
        value: "on",
    },
    {
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
    },
    {
        key: "X-XSS-Protection",
        value: "1; mode=block",
    },
    {
        key: "x-content-type-options",
        value: "nosniff",
    },
];
