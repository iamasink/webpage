
import { Post } from "@/interfaces/post"
import fs from "fs"
import RSS from "rss"

export default async function generateRssFeed(allPosts: Post[]) {
    const site_url =
        process.env.NODE_ENV === "production"
            ? "https://iamas.ink"
            : "http://localhost:3000"

    const feedOptions: RSS.FeedOptions = {
        title: "Blog posts | RSS Feed",
        description: "iamas.ink/blog",
        site_url: site_url,
        feed_url: `${site_url}/rss.xml`,
        image_url: `${site_url}/logo.jpeg`,
        pubDate: new Date(),
        copyright: `All rights reserved ${new Date().getFullYear()}`,
    }

    const feed = new RSS(feedOptions)

    // Add each individual post to the feed.
    allPosts.map((post) => {
        console.log(post)
        feed.item({
            title: post.title,
            description: `${post.description || ""}`,
            url: `${site_url}/blog/${post.slug}`,
            date: post.date,
        })
    })

    // Write the RSS feed to a file as XML.
    console.log(feed)
    fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }))
}
