import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ showMore }) => {
  return (
    <>
      <button type="button" className={css.button} onClick={showMore}>
        Load more
      </button>
    </>
  );
};
export default LoadMoreBtn;
