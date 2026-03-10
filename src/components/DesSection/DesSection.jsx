import "./DesSection.css";

const DesSection = ({
  title,
  description,
  firstImage,
  secondImage,
  reverse,
}) => {
  return (
    <div
      className="desSection"
      style={reverse ? { flexDirection: "row-reverse" } : {}}
    >
      {" "}
      <div className="desText">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="images">
        <img src={firstImage} alt="" />
        <img src={secondImage} alt="" />
      </div>
    </div>
  );
};

export default DesSection;
