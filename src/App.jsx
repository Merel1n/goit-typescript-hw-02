import { useEffect, useState } from "react";
import "./App.css";
import fetchImagesWithQuery from "./components/js/searchImagesApi";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

// import Modal from "react-modal";

function App() {
  const [showGalleryImages, setShowGalleryImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalState, setModalState] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!query) return;
    async function asyncWraper() {
      try {
        setError("");
        setLoading(true);
        const images = await fetchImagesWithQuery(query, page);
        setShowGalleryImages((prevShowGalleryImages) => [
          ...prevShowGalleryImages,
          ...images,
        ]);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    asyncWraper();
  }, [query, page]);

  const onSearch = async (query) => {
    setQuery(query);
    setPage(1);
    setShowGalleryImages([]);
  };

  async function showMore() {
    setPage(page + 1);
  }
  function handleOpenModal(modalData) {
    setIsOpen(true);
    setModalState(modalData);
  }
  function closeModal() {
    setIsOpen(false);
    setModalState(null);
  }
  return (
    <>
      <SearchBar onSearch={onSearch} />
      <ImageGallery
        showGalleryImages={showGalleryImages}
        showMore={showMore}
        openModal={handleOpenModal}
      />
      {showGalleryImages.length !== 0 && !loading && (
        <LoadMoreBtn showMore={showMore} />
      )}
      {error && <ErrorMessage error={error} />}
      <Loader status={loading} />
      {modalState !== null && (
        <ImageModal
          modalState={modalState}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      )}
    </>
  );
}

export default App;
