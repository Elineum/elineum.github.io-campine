import getUniqId from "../../utils/getIdHelper";
import "./ContactInfo.scss";

export const ContactInfo = () => {
  const Contact_Data = [
    { type: "mailto:", info: "mail@campine.com" },
    { type: "tel:", info: "+375-29-123-45-67" },
    { type: "tel:", info: "+375-33-234-56-78" },
    { type: "tel:", info: "+375-25-345-67-89" },
  ];

  return (
    <div className="contact-info">
      <ul className="contact-info__list">
        {Contact_Data.map((item) => (
          <li className="contact-info__item" key={getUniqId()}>
            <a
              href={item.type + item.info.replace(/-/g, "")}
              className="contact-info__link"
            >
              {item.info}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
