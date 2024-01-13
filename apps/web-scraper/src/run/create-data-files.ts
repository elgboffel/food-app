import { crawler } from "web-crawler";
import { createFile } from "common";
import { scraper } from "../features/scraper";
import { crawlersSetting } from "../crawlerSettings";
import puppeteer from "puppeteer";

export async function main() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  for (const settings of crawlersSetting) {
    const crawlerData = await crawler(
      page,
      settings.startUrl,
      settings,
      settings.startUrl,
    );

    if (!crawlerData) throw new Error("No crawler data found");

    const data = Array.from(crawlerData).map(([, data]) => data);

    createFile(
      `${settings.name.toLowerCase().replace(" ", "-")}-urls.ts`,
      "__generated",
      `export const data: Array<{ url: string; urlRefs: string[], hits: number; }> = ${JSON.stringify(
        data,
      )}`,
    );

    // console.log("Start scraping");
    //
    // const { recipes, failedPages } = await scraper(data, settings);
    // console.log({ failedPages });
    // console.log(`Pages scraped: ${recipes.length}`);
    //
    // createFile(
    //   `${settings.name.toLowerCase().replace(" ", "-")}-data.ts`,
    //   "__generated",
    //   `export const data = ${JSON.stringify(recipes)}`,
    // );
  }

  await browser.close();
}

main();
