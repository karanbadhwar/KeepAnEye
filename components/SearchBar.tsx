"use client";

import { scrapeAndStoreProduct } from "@/actions";
import { FormEvent, useState } from "react";

const isValidAmazonProductURL = (url: string): boolean => {
  try {
    const parsedURL = new URL(url);
    const hostName = parsedURL.hostname;

    //If the hostname contains amazon or not
    if (
      hostName.includes("amazon.com") ||
      hostName.includes("amazon.ca") ||
      hostName.endsWith("amazon")
    ) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

const SearchBar = () => {
  const [searchPrompt, setSearchPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductURL(searchPrompt);

    if (!isValidLink) return alert("Please enter a valid Amazon Product URL");

    try {
      setIsLoading(true);

      //Scrape the Product
      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter product link"
        className="searchbar-input"
      />
      <button
        type="submit"
        className="searchbar-btn"
        disabled={searchPrompt === ""}
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default SearchBar;
