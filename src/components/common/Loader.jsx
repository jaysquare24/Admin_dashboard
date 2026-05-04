export const Loader = ({ size = 24, fullScreen = false }) => {
  return (
    <div className={fullScreen ? "spinner-wrapper full" : "spinner-wrapper"}>
      <div
        className="spinner"
        style={{ width: size, height: size }}
      ></div>
    </div>
  );
};