import { Logo } from "../Logo/Logo";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container disable-container">
        <div className="page-footer__content">
          <Logo isFooter={true}></Logo>
          <div className="page-footer__text">
            <p>2016-2022</p>
          </div>
          <div className="page-footer__link-wrap">
            <a href="#" className="page-footer__link">
              Оплата, возврат и всякое разное
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
