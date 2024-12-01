const path = require('path')
const fs = require("fs")

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
    async redirects() {
        const redirectsFile1 = path.join(__dirname, 'redirects.json');
        const redirectsFile2 = path.join(__dirname, 'redirects2.json');

        const redirects1 = JSON.parse(fs.readFileSync(redirectsFile1, 'utf-8'));
        const redirects2 = JSON.parse(fs.readFileSync(redirectsFile2, 'utf-8'));

        // Combine both redirect arrays
        const allRedirects = [...redirects1, ...redirects2];

        return allRedirects.map(redirect => ({
            source: redirect.source,
            destination: redirect.destination,
            permanent: redirect.permanent
        }));
    }
}
// #endregion

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
