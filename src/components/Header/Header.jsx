import "./Header.scss";
import { Logo } from "../Logo/Logo";
import { Button } from "../Button/Button";

export const Header = () => {
  return (
    <header>
      <div className="container disable-container">
        <Logo></Logo>
        <div>
          <nav>
            <ul>
              <li>
                <a href="#">Меню</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </nav>
          <Button>Купить путевку</Button>
        </div>
      </div>
    </header>
  );
};
