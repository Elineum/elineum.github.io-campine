import "./Blur.scss";

export const Blur = ({ discontSection = false, questionsSection = false }) => {
  return (
    <div
      className={`blur ${
        discontSection
          ? "blur_discount"
          : questionsSection
          ? "blur_questions"
          : ""
      }`}
    ></div>
  );
};
