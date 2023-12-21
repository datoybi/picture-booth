import { createPortal } from "react-dom";

const ModalPortal = ({ children }: { children: JSX.Element }) => {
  const element = document.getElementById("modal") as HTMLElement;
  return createPortal(children, element);
};

export default ModalPortal;
