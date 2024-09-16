import { useEffect } from "react";
import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { AiFillLike } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDescription } from "react-icons/md";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
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

const ImageModal = ({
  modalState: { urls, id, alt, likes, user, description },
  closeModal,
  modalIsOpen,
}) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.removeProperty("overflow-y");
    };
  }, []);
  return (
    <Modal
      shouldCloseOnEsc={false}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={css.box}>
        <img id={id} src={urls.regular} alt={alt} className={css.img} />
        <ul className={css.list}>
          <li className={css.item}>
            <span>
              <AiFillLike />
            </span>
            Likes: <span>{likes}</span>
          </li>
          <li className={css.item}>
            <span>
              <FiUser />
            </span>
            Author: <span>{user.name}</span>
          </li>
          <li className={css.item}>
            <span>
              <CiLocationOn />
            </span>
            Location <span>{user.location}</span>
          </li>
          <li className={css.item}>
            <span>
              <MdOutlineDescription />
            </span>
            {description}
          </li>
        </ul>
      </div>
    </Modal>
  );
};
export default ImageModal;
