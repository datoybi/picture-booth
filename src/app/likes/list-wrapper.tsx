"use client";

import { useContext } from "react";
import LikeContext from "@/like-context";
import PhotoList from "@/app/ui/common/photo-list";

const ListWrapper = ({ page }: { page: number }) => {
  const { likeData } = useContext(LikeContext);

  return <PhotoList photoData={likeData} page={page} />;
};

export default ListWrapper;
