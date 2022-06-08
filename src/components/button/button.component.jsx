import "./button.styles.scss";
import Spinner from "../spinner/spinner.component";

const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, isLoading, buttonType, ...otherProps }) => {
  return (
    <button
      disabled={isLoading}
      className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {isLoading ? <Spinner /> : <span>{children}</span>}
    </button>
  );
};

export default Button;
