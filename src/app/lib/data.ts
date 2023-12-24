import qs from "qs";
const UNSPLASH_URL = "http://api.unsplash.com";
const API_SECRET_KEY = "nZbJKwsynDty_NmYhzy-fSqT0miezU-hv5rKZNLOuuU";
import { PhotoDetail } from "@/app/lib/definitions";

const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (e) {
    console.error(e);
  }
};

export async function getPhotos({ query, page, per_page }: { query: string; page: number; per_page: number }) {
  const url =
    query === ""
      ? `${UNSPLASH_URL}/photos/?${qs.stringify({ client_id: API_SECRET_KEY, page, per_page })}`
      : `${UNSPLASH_URL}/search/photos/?${qs.stringify({ client_id: API_SECRET_KEY, page, per_page, query })}`;
  const data = await fetchData(url);

  const getResult = (data: any) => data.map((el: any) => ({ id: el.id, url: el.urls.small, slug: el.slug }));
  const photoData =
    query === ""
      ? { results: getResult(data), total_pages: 100 }
      : { results: getResult(data.results), total_pages: data.total_pages };
  return photoData;
}

export async function getPhoto({ id }: { id: string }) {
  const url = `${UNSPLASH_URL}/photos/${id}/?${qs.stringify({ client_id: API_SECRET_KEY })}`;
  const data = await fetchData(url);

  return {
    id: data.id,
    slug: data.slug,
    width: data.width,
    height: data.height,
    downloads: data.downloads,
    url: data.urls.regular,
    downloadUrl: data.urls.small_s3,
    userName: data.user.name,
    createdAt: data.created_at,
    tags: data.tags.map((tag: { title: string }) => tag.title),
  } as PhotoDetail;
}
