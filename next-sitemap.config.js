/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://iamas.ink',
    generateRobotsTxt: true, // (optional)
    additionalSitemaps: [
        'https://q.iamas.ink/sitemap.xml'
    ],
}