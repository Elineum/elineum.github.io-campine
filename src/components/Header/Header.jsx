import { useState, useEffect } from "react";
import { Logo } from "../Logo/Logo";
import { Button } from "../Button/Button";
import "./Header.scss";

export const Header = () => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("scroll-block");
  }, [isActive]);

  return (
    <header className="page-header">
      <div className="container disable-container">
        <div className="page-header__content-wrap">
          <Logo></Logo>
          <div
            className="page-header__burger-wrap"
            onClick={() => setActive(!isActive)}
          >
            <div
              className={`page-header__burger ${
                isActive ? "page-header__burger_active" : ""
              }`}
            ></div>
          </div>
          <div
            className={`page-header__nav-wrap ${
              isActive ? "" : "page-header__nav-wrap_hidden"
            }`}
          >
            <nav>
              <ul className="page-header__list">
                <li className="page-header__item">
                  <a href="#" className="page-header__link">
                    Меню
                  </a>
                </li>
                <li className="page-header__item">
                  <a href="#" className="page-header__link">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
            <Button>Купить путевку</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
