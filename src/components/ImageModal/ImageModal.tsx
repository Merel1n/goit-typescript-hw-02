import { FC, useEffect } from "react";
import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { AiFillLike } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDescription } from "react-icons/md";
import { Image } from "../App/App.types";
import {} from "react";

const customStyles = {
  // overlay: {
  //   position: "fixed",
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   backgroundColor: "rgba(0, 0, 0, 0.75)",
  // },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    maxWidth: "75%",
    maxHeight: "75%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
  },
};
Modal.setAppElement("#root");

interface ImagesModalProps {
  closeModal: () => void;
  modalIsOpen: boolean;
  modalImage: Image | null;
}
const ImageModal: FC<ImagesModalProps> = ({ closeModal, modalIsOpen, modalImage }) => {
  
  return (
    <Modal
      shouldCloseOnEsc={false}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {modalImage && (
        <div className={css.box}>
          <img
            id={modalImage.id}
            src={modalImage.urls.regular}
            alt={modalImage.alt_description}
            className={css.img}
          />
          <ul className={css.list}>
            <li className={css.item}>
              <span>
                <AiFillLike />
              </span>
              Likes: <span>{modalImage.likes}</span>
            </li>
            <li className={css.item}>
              <span>
                <FiUser />
              </span>
              Author: <span>{modalImage.user.name}</span>
            </li>
            <li className={css.item}>
              <span>
                <CiLocationOn />
              </span>
              Location <span>{modalImage.user.location}</span>
            </li>
            <li className={css.item}>
              <span>
                <MdOutlineDescription />
              </span>
              {modalImage.description}
            </li>
          </ul>
        </div>
      )}
    </Modal>
  );
};
export default ImageModal;
