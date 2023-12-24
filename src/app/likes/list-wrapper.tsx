"use client";

import { useContext } from "react";
import LikeContext from "@/like-context";
import PhotoList from "@/app/ui/common/photo-list";

const ListWrapper = () => {
  const { likeData } = useContext(LikeContext);

  return <PhotoList photoData={likeData} />;
};

export default ListWrapper;
