import css from "./ImageCard.module.css";

const ImageCard = ({
  id,
  src,
  alt,
  openModal,
  urls,
  likes,
  user,
  description,
}) => {
  return (
    <a
      href=""
      className={css.container}
      onClick={(e) => {
        e.preventDefault();
        openModal({ id, alt, urls, likes, user, description });
      }}
    >
      <img className={css.img} src={src} alt={alt} />
    </a>
  );
};
export default ImageCard;
