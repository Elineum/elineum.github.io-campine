import getUniqId from "../../utils/getIdHelper";
import { Button } from "../Button/Button";
import "./Form.scss";

export const Form = ({ discount = false, questions = false }) => {
  const Name_Id = getUniqId();
  const Tel_Id = getUniqId();
  const Check_Id = getUniqId();

  return (
    <form
      className={`comp-form ${discount ? "comp-form_discount" : ""} ${
        questions ? "comp-form_questions" : ""
      }`}
    >
      <div className="comp-form__wrap">
        <label className="comp-form__label" htmlFor={Name_Id}>
          Имя
        </label>
        <input
          className="comp-form__input"
          placeholder="Имя"
          type="text"
          id={Name_Id}
        />
      </div>
      <div className="comp-form__wrap comp-form__wrap_long-space">
        <label className="comp-form__label" htmlFor={Tel_Id}>
          Номер телефона*
        </label>
        <input
          className="comp-form__input"
          placeholder="+375 (xx) xxx-xx-xx"
          type="tel"
          id={Tel_Id}
          required
        />
        <div className="comp-form__text">
          <p>*Поля, обязательные для заполнения</p>
        </div>
      </div>
      <Button form={true}>Хочу веселится!</Button>
      <div className="comp-form__check-wrap">
        <label htmlFor={Check_Id} className="comp-form__custom-box">
          <input
            type="checkbox"
            id={Check_Id}
            className="comp-form__checkbox"
            defaultChecked
          />
          <span className="comp-form__checkmark"></span>
        </label>
        <div className="comp-form__text">
          <p>
            Я принимаю{" "}
            <a href="#" className="comp-form__label-link">
              условия обработки персональных данных
            </a>
          </p>
        </div>
      </div>
    </form>
  );
};
