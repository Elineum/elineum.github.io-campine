import { Blur } from "../Blur/Blur";
import { Form } from "../Form/Form";
import blobClear from "../../assets/images/blobClear.png";
import "./Discount.scss";

export const Discount = () => {
  return (
    <section className="discount">
      <div className="container relative">
        <div className="discount__flex">
          <Blur discontSection={true} />
          <div className="discount__main-part">
            <h2 className="discount__title">Готовы к приключениям?</h2>
            <div className="discount__say-word-wrap">
              <div className="discount__say-word">
                <p>Сообщи нам секретное слово: </p>
              </div>
              <div className="discount__blob">
                <div className="discount__blob-img">
                  <img src={blobClear} alt="blob" />
                </div>
                <div className="discount__blob-text">
                  <strong>лето</strong>
                </div>
              </div>
            </div>
            <div className="discount__get-discount">
              <p>и получи скидку 10%!</p>
            </div>
          </div>
          <Form discount={true} />
        </div>
      </div>
    </section>
  );
};
