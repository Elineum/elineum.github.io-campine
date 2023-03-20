import getUniqId from "../../utils/getIdHelper";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import telegram from "../../assets/icons/telegram.png";
import "./Socials.scss";

export const Socials = ({ contacts = false }) => {
  const Socials_Data = [
    { href: "#", img: facebook, alt: "facebook" },
    { href: "#", img: instagram, alt: "instagram" },
    { href: "#", img: telegram, alt: "telegram" },
  ];

  return (
    <div className="socials">
      <ul
        className={`socials__list ${contacts ? "socials__list_contacts" : ""}`}
      >
        {Socials_Data.map((item) => (
          <li className="socials__item" key={getUniqId()}>
            <a href={item.href}>
              <img src={item.img} alt={item.alt} className="socials__img" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
