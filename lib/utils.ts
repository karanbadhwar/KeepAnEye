export function extractPrice(...elements: any) {
  for (const el of elements) {
    const priceText = el.text().trim();

    if (priceText) return priceText.replace(/\D/g, "");
  }

  return "";
}
