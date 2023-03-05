import "./Logo.scss";
import logo from "../../assets/images/logo.png";

export const Logo = ({ isFooter }) => {
  return (
    <div className="logo">
      <a href="/" className="logo__link">
        <div
          className={`logo__img-wrap ${isFooter ? "logo__img-wrap_foot" : ""}`}
        >
          <img src={logo} alt="logo" />
        </div>
        <div className="logo__text">
          <p>кемпайн</p>
        </div>
      </a>
    </div>
  );
};
