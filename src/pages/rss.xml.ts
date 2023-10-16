import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';


export const GET: APIRoute = async (context) => {
    const posts = await getCollection("posts");
    return rss({
        title: "Astro Starter Blog",
        description: "A starter blog demonstrating what Astro can do.",
        site: context.site || "",
        items: posts.map(post => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/posts/${post.slug}/`,
            author: post.data.author,
        })),
        customData: `<language>en-us</language>`,
    })
}