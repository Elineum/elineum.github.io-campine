import { Button } from "../Button/Button";
import { IntroBlobs } from "../IntroBlobs/IntroBlobs";
import { Blur } from "../Blur/Blur";
import getUniqId from "../../utils/getIdHelper";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import telegram from "../../assets/icons/telegram.png";
import blobStar1 from "../../assets/images/blobStar1.png";
import blobStar2 from "../../assets/images/blobStar2.png";
import blobStar3 from "../../assets/images/blobStar3.png";
import "./Introduction.scss";
import { Socials } from "../Socials/Socials";

export const Introduction = () => {
  const blobsContent = [
    {
      blob: blobStar1,
      text: "Задолбались на работе? Вам пора в Кемпайн!",
    },
    {
      blob: blobStar2,
      text: "Подружись, развлекись, отдохни :)",
    },
    {
      blob: blobStar3,
      text: "Ниже вас ждет сюрприз :3",
    },
  ];

  return (
    <section className="intro">
      <div className="container relative">
        <div className="intro__flex">
          <Blur />
          <div className="intro__main-part">
            <div>
              <h1 className="intro__title">Зажги себя заново</h1>
              <div className="intro__text">
                <p>
                  Кемпайн - лагерь, где каждый может открыть нового себя и
                  встретить настоящих друзей.
                </p>
              </div>
              <div className="intro__buttons">
                <Button>Выбрать смену</Button>
                <Button transparent={true}>Наши смены</Button>
              </div>
            </div>
            <Socials />
          </div>
          <div className="intro__blob-part">
            {blobsContent.map((item) => (
              <IntroBlobs imageSrc={item.blob} key={getUniqId()}>
                {item.text}
              </IntroBlobs>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
