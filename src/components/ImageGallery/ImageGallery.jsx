import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ showGalleryImages, openModal }) => {
  return (
    <>
      <ul className={css.list}>
        {showGalleryImages.map(
          ({ id, urls, alt_description, likes, user, description }) => (
            <li key={id} className={css.item}>
              <ImageCard
                id={id}
                src={urls.small}
                alt={alt_description}
                likes={likes}
                user={user}
                urls={urls}
                description={description}
                openModal={openModal}
              />
            </li>
          )
        )}
      </ul>
    </>
  );
};
export default ImageGallery;
