import { ContactInfo } from "../ContactInfo/ContactInfo";
import { Socials } from "../Socials/Socials";
import pin from "../../assets/icons/pin.png";
import "./Contacts.scss";

export const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">
        <h2 className="contacts__title">Наши контакты</h2>
      </div>
      <div className="contacts__map"></div>
      <div className="container contact-container">
        <div className="contacts__info-box">
          <Socials contacts={true} />
          <ContactInfo />
          <div className="contacts__coords">
            <div className="contacts__img-wrap">
              <img src={pin} alt="icon" />
            </div>
            <div className="contacts__coord-text">
              <p>54.881089, 26.679538</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
