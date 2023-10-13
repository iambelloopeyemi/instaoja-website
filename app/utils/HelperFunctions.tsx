export function transformLinks(links: string[]) {
  return links.map((link) => ({
    text: link,
    link: link.split(" ").join("-").toLowerCase(),
  }));
}
