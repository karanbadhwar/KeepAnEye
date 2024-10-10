"use server";

import { scrapeAmazonProduct } from "./Scraper";

export async function scrapeAndStoreProduct(productURL: string) {
  // Checking if the product is Empty URL
  if (!productURL) return;

  try {
    const scrapedProduct = await scrapeAmazonProduct(productURL);
  } catch (error: any) {
    throw new Error(`Failed to create/update product ${error.message}`);
  }
}
