import parse from "node-html-parser";
import { Page } from "puppeteer";
import { CrawlerSettings } from "web-scraper/src/crawlerSettings";

export type CrawlData = {
  url: string;
  urlRefs: string[];
  hits: number;
};

export async function crawler(
  browserPage: Page,
  url: string,
  settings: CrawlerSettings,
  ref?: string,
  skipRules?: (url: string) => boolean,
  crawlData: Map<string, CrawlData> = new Map(),
): Promise<Map<string, CrawlData>> {
  const urlObj = createUrlObj(url, settings);
  const refUrlObj = ref ? createUrlObj(ref, settings) : urlObj;

  if (!urlObj || !refUrlObj) return crawlData;

  console.log(`${urlObj.href} - crawled`);

  //TODO: remove
  if (crawlData.size > 50) return crawlData;

  try {
    await browserPage.goto(urlObj.href);

    if (settings.htmlActions)
      await settings.htmlActions(browserPage, urlObj.href);

    crawlData.set(url, {
      url: urlObj.href,
      urlRefs: [refUrlObj.href],
      hits: 1,
    });

    const content = await browserPage.content();

    const hrefs = parse(content)
      ?.querySelectorAll("a")
      ?.map((x) => x.getAttribute("href") ?? null);

    for (const href of hrefs) {
      if (!href) continue;

      if (
        href == "#" ||
        href.includes("javascript:") ||
        href.includes("mailto:") ||
        href.includes("?")
      ) {
        continue;
      }

      if (settings?.skipRules && settings.skipRules(href)) continue;

      const urlified = createUrlObj(href, settings);

      if (!urlified) continue;

      if (urlified.origin !== urlObj.origin) continue;
      const exists = crawlData.get(urlified.href);

      if (exists) {
        const existingRef = exists.urlRefs;

        if (
          existingRef &&
          !existingRef.includes(urlObj.href) &&
          (settings.refSkipRules ? settings.refSkipRules(urlObj.href) : true)
        )
          existingRef.push(urlObj.href);

        crawlData.set(urlified.href, {
          url: urlified.href,
          urlRefs: existingRef,
          hits: exists.hits + 1,
        });
        continue;
      }

      await crawler(
        browserPage,
        urlified.href,
        settings,
        urlObj.href,
        skipRules,
        crawlData,
      );
    }
  } catch (e) {
    console.error(e);
    return crawlData;
  }
  return crawlData;
}

function createUrlObj(url: string, settings: CrawlerSettings): URL | null {
  try {
    if (!url.startsWith("http://") && !url.startsWith("https://"))
      return new URL(
        `${settings.domain}${url.startsWith("/") ? url : "/" + url}`,
      );

    return new URL(url);
  } catch (e) {
    console.error(`Failed get url object from url ${url}`);
    return null;
  }
}
