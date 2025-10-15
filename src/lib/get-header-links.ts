import type { LayoutQuery } from "@/generated/graphql";

export function getHeaderLinks(layout: LayoutQuery) {
  return layout.global!.header!.link!.map((link) => ({
    text: link!.text,
    url: link!.url,
  }));
}
