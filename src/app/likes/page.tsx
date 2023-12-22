"use client";
import clsx from "clsx";
import PhotoList from "../ui/common/photo-list";
import { useContext } from "react";
import LikeContext from "@/like-context";

const LikePage = () => {
  const { likes } = useContext(LikeContext);

  return (
    <main className={clsx("mt-25", "container")}>
      <PhotoList photos={likes} />
    </main>
  );
};

export default LikePage;
