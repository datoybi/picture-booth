import clsx from "clsx";
import PhotoList from "../ui/common/photo-list";

const LikePage = () => {
  return (
    <main className={clsx("mt-25", "container")}>
      <PhotoList />
    </main>
  );
};

export default LikePage;
