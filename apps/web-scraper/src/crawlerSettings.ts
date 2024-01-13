import { Page } from "puppeteer";

export enum Domains {
  Valdemarsro = "https://www.valdemarsro.dk",
  SpisBedre = "https://spisbedre.dk",
  Arla = "https://arla.dk",
}

export type CrawlerSettings = {
  domain: string;
  startUrl: string;
  name: string;
  skipRules?: (url: string) => boolean;
  refSkipRules?: (url: string) => boolean;
  htmlActions?: (browserPage: Page, url?: string) => void;
};

export const crawlersSetting: CrawlerSettings[] = [
  // {
  //   domain: Domains.Valdemarsro,
  //   startUrl: Domains.Valdemarsro,
  //   name: "Valdemarsro",
  // },
  {
    domain: Domains.SpisBedre,
    startUrl: Domains.SpisBedre + "/kategorier",
    name: "Spis Bedre",
    skipRules: (url) =>
      !url.includes("/kategorier") && !url.includes("/opskrifter/"),
    refSkipRules: (url) => url.includes("/kategorier"),
    htmlActions: async (browserPage: Page, url?: string) => {
      if (!url?.includes("/kategorier/")) return;
      console.log("loadMoreButtonSelector start");
      const loadMoreButtonSelector = ".px-40";

      let clicks = 1;
      let loadMore = true;

      while (loadMore) {
        try {
          await browserPage.locator(loadMoreButtonSelector).click();
          browserPage.on("console", (msg) =>
            console.log("PAGE LOG:", msg.text()),
          );
          console.log(`Load more clicks: ${clicks}`);
          clicks += 1;
        } catch (e) {
          loadMore = false;
        }
      }
      console.log("loadMoreButtonSelector end");

      return;
    },
  },
  // {
  //   domain: Domains.Arla,
  //   startUrl: Domains.Arla + "/opskrifter/",
  //   name: "Arla",
  //   skipRules: (url) => !url.includes("/opskrifter/"),
  // },
];
