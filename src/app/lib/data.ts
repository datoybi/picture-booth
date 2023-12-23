// import { unstable_noStore as noStore } from "next/cache";
import qs from "qs";
const UNSPLASH_URL = "http://api.unsplash.com";
const API_SECRET_KEY = "nZbJKwsynDty_NmYhzy-fSqT0miezU-hv5rKZNLOuuU";

export async function getPhotos({ query, page, per_page }: { query: string; page: number; per_page: number }) {
  const url =
    query === ""
      ? `${UNSPLASH_URL}/photos/?${qs.stringify({ client_id: API_SECRET_KEY, page, per_page })}`
      : `${UNSPLASH_URL}/search/photos/?${qs.stringify({ client_id: API_SECRET_KEY, page, per_page, query })}`;
  console.log(url);
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const photoData = query === "" ? { results: data, total: 1000, total_pages: 100 } : data;
      return photoData;
    }
  } catch (e) {
    console.error(e);
  }
}
