"use client";

import React, { useState } from "react";
import { Photo } from "@/app/lib/definitions";
import { PAGINATION } from "./constants";

type ContextType = {
  likeData: { results: Photo[]; total_pages: number };
  setLikesData: (Photo: Photo) => void;
  likeIds: string[];
};

const LikeContext = React.createContext<ContextType>({
  likeData: { results: [], total_pages: 0 },
  setLikesData: () => {},
  likeIds: [],
});

export function LikeContextProvider({ children }: { children: React.ReactNode }) {
  const [likes, setLikes] = useState<Photo[]>([]);

  const setLikesHandler = (newLike: Photo) => {
    const isExist = likes.findIndex((like) => like.id === newLike.id) === -1;
    if (isExist) setLikes((prevLikes) => [...prevLikes, newLike]);
    else {
      setLikes((prevLikes) => prevLikes.filter((like) => like.id !== newLike.id));
    }
  };

  const totalPage = Math.ceil(likes.length / PAGINATION.pageRange);
  const likeIds = likes.map((like: Photo) => like.id);
  const likeData = { results: likes, total_pages: totalPage };
  const contextValue = {
    likeData,
    setLikesData: setLikesHandler,
    likeIds,
  };

  return <LikeContext.Provider value={contextValue}>{children}</LikeContext.Provider>;
}

export default LikeContext;
