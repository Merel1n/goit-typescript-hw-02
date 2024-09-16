import css from "./ErrorMessage.module.css";
const ErrorMessage = ({ error }) => {
  console.log(error);

  return (
    <p className={css.text}>
      Something went wrong, try again <span>{error}</span>
    </p>
  );
};
export default ErrorMessage;
