import clsx from "clsx";
import { Suspense } from "react";
import Modal from "@/app/ui/common/modal";
import { getPhoto } from "@/app/lib/data";
import ListWrapper from "@/app/likes/list-wrapper";
import { ListSkeleton } from "@/app/ui/skeletons";

export default async function LikePage({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string; show?: string; id?: string };
}) {
  const show = Boolean(searchParams?.show) || false;
  const id = searchParams?.id || "";
  const isOpenModal = show === true && id !== "";
  const photo = isOpenModal ? await getPhoto({ id }) : null;

  return (
    <main className={clsx("mt-25", "container")}>
      <Suspense fallback={<ListSkeleton />}>
        <ListWrapper />
      </Suspense>

      {isOpenModal && photo && <Modal photo={photo} />}
    </main>
  );
}
