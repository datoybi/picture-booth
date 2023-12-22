// import { unstable_noStore as noStore } from "next/cache";
import qs from "qs";
const UNSPLASH_URL = "http://api.unsplash.com";
const API_SECRET_KEY = "nZbJKwsynDty_NmYhzy-fSqT0miezU-hv5rKZNLOuuU";

//랜덤이면 paging 안보여주기

export async function getPhotos({ page, per_page }: { page: number; per_page: number }) {
  // noStore();
  // const queryString = qs.stringify({ client_id: process.env.API_SECRET_KEY, page, per_page });
  const queryString = qs.stringify({ client_id: API_SECRET_KEY, page, per_page });
  // console.log(queryString);
  // const response = await fetch(`${UNSPLASH_URL}?${queryString}`);
  console.log(queryString);
  // const response = await fetch(`${UNSPLASH_URL}photos/?${queryString}`);
  try {
    const response = await fetch(`${UNSPLASH_URL}/photos/random/?${queryString}`);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
  } catch (e) {
    console.error(e);
  }
}

export async function getRandomPhotos() {
  const queryString = qs.stringify({ client_id: API_SECRET_KEY, count: 30 });
  try {
    const response = await fetch(`${UNSPLASH_URL}/photos/random/?${queryString}`);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
  } catch (e) {
    console.error(e);
  }
}
