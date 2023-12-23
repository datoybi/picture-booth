"use client";
// @ts-nocheck
import React, { useState } from "react";

const LikeContext = React.createContext({
  likes: [],
  setLikes: () => {},
});

export function LikeContextProvider({ children }: { children: JSX.Element }) {
  const [likes, setLikes] = useState<any>([]);

  const setLikesHandler = (newLike: any) => {
    const isExist = likes.findIndex((like: any) => like.id === newLike.id) === -1;
    if (isExist) setLikes((prev: any) => [...prev, newLike]);
    else {
      setLikes((prev: any) => prev.filter((el: any) => el.id !== newLike.id));
    }
  };

  const likeIds = likes.map((like: any) => like.id);
  const likeData = { results: likes, total: likes.length };
  const contextValue = {
    likeData,
    setLikes: setLikesHandler,
    likeIds,
  };

  // console.log(likes);
  // console.log(likeIds);

  return <LikeContext.Provider value={contextValue}>{children}</LikeContext.Provider>;
}

export default LikeContext;
