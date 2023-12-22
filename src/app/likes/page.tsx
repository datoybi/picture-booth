"use client";
import clsx from "clsx";
import PhotoList from "../ui/common/photo-list";
import { useContext } from "react";
import LikeContext from "@/like-context";

const LikePage = () => {
  const { likeData } = useContext(LikeContext);

  return (
    <main className={clsx("mt-25", "container")}>
      <PhotoList photoData={likeData} />
    </main>
  );
};

export default LikePage;
