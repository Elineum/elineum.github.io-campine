import "./IntroBlobs.scss";

export const IntroBlobs = ({ children, imageSrc }) => {
  return (
    <div className="intro-blobs">
      <div className="intro-blobs__img-wrap">
        <img src={imageSrc} alt="blob" />
      </div>
      <div className="intro-blobs__text">
        <p>{children}</p>
      </div>
    </div>
  );
};
