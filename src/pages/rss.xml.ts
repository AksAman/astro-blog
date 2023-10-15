import rss, { pagesGlobToRssItems } from '@astrojs/rss';


export async function GET(context) {
    return rss({
        title: "Astro Starter Blog",
        description: "A starter blog demonstrating what Astro can do.",
        site: context.site,
        items: await pagesGlobToRssItems(
            import.meta.glob("./posts/*.md"),
        ),
        customData: `<language>en-us</language>`,
    })
}