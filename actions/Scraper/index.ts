import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapeAmazonProduct(url: string) {
  if (!url) return;

  //BrightData proxy configuration

  //   curl -i --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_b7352fc5-zone-keepaneye:efssvvk56fav -k "https://geo.brdtest.com/welcome.txt"

  const userName = String(process.env.BRIGHT_DATA_USERNAME);
  const password = String(process.env.BRIGHT_DATA_PASSWORD);
  const port = 22225;
  const session_id = (1000000 * Math.random()) | 0;

  const options = {
    auth: {
      username: `${userName}-session-${session_id}`,
      password: password,
    },
    host: "brd.superproxy.io",
    port,
    rejectUnauthorized: false,
  };

  try {
    const response = await axios.get(url, options);
  } catch (error: any) {
    throw new Error(`Failed to scrape product from Amazon ${error.message}`);
  }
}
