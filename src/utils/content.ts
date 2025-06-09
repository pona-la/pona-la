import { getCollection } from "astro:content";

// posts, sorted from newest to oldest.

export const posts = await getCollection("blog");
