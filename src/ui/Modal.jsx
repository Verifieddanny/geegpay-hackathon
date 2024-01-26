import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { HiXMark } from "react-icons/hi2";
import useHandleClick from "../hooks/useHandleClick";
import html2canvas from "html2canvas";
import { FaArrowCircleDown } from "react-icons/fa";
import { useDarkMode } from "../context/UseDarkModeContext";
const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
  &.dark {
    background-color: #0d062d;
    color: white;
  }
`;

const WaterMark = styled.img`
  opacity: 0.4;
  position: relative;
  z-index: -1;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;

    color: var(--color-grey-500);
  }
`;

const StyleDownload = styled(FaArrowCircleDown)`
  &.download {
    position: absolute;
    bottom: 1rem;
    right: 1.9rem;
    cursor: pointer;
  }
`;

const ModalContext = createContext();
function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: openWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(openWindowName) });
}
// function Window({ children, name }) {
//   const { close, openName } = useContext(ModalContext);
//   const styledModalRef = useHandleClick(close);

//   if (name !== openName) return null;
//   return createPortal(
//     <Overlay>
//       <StyledModal ref={styledModalRef}>
//         <Button onClick={close}>
//           <HiXMark />
//         </Button>
//         {cloneElement(children, { onCloseModal: close })}

//         <StyleDownload className="download" />
//       </StyledModal>
//       ;
//     </Overlay>,
//     document.body
//     //documet.querySelector("body");
//   );
// }
// function Window({ children, name }) {
//   const { close, openName } = useContext(ModalContext);
//   const styledModalRef = useHandleClick(close);

//   const downloadContent = () => {
//     const modalContent = document.querySelector(`#${name}`);

//     if (modalContent) {
//       const blob = new Blob([modalContent.innerText], { type: "text/plain" });
//       const downloadLink = document.createElement("a");
//       downloadLink.href = URL.createObjectURL(blob);
//       downloadLink.download = "modal-content.txt";

//       document.body.appendChild(downloadLink);
//       downloadLink.click();
//       document.body.removeChild(downloadLink);
//     }
//   };

//   if (name !== openName) return null;

//   return createPortal(
//     <Overlay>
//       <StyledModal ref={styledModalRef} id={name}>
//         <Button onClick={close}>
//           <HiXMark />
//         </Button>
//         {cloneElement(children, { onCloseModal: close })}

//         <StyleDownload className="download" onClick={downloadContent} />
//         <WaterMark src="/geepay1.png" />
//       </StyledModal>
//     </Overlay>,
//     document.body
//   );
// }
function Window({ children, name }) {
  const { close, openName } = useContext(ModalContext);
  const styledModalRef = useHandleClick(close);
  const { isDarkMode } = useDarkMode();

  const handleDownload = () => {
    const modalContent = document.getElementById("modal-content");

    if (modalContent) {
      html2canvas(modalContent).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = imgData;
        a.download = "styled-modal.png";
        a.click();
      });
    }
  };

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal
        ref={styledModalRef}
        id="modal-content"
        className={isDarkMode ? "dark" : ""}
      >
        <Button onClick={close}>
          <HiXMark />
        </Button>
        {cloneElement(children, { onCloseModal: close })}
        <WaterMark src="/geepay1.png" />
        <StyleDownload className="download" onClick={handleDownload} />
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
