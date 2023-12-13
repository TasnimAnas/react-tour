import { useState } from "react";
import "./TourCard.css";

const TourCard = ({ name, info, image, price, deleteTour, id }) => {
  const [visibleInfo, setVisibleInfo] = useState(`${info.slice(0, 150)}...`);
  const showFullInfo = () => {
    setVisibleInfo(info);
  };
  const showLessInfo = () => {
    setVisibleInfo(`${info.slice(0, 150)}...`);
  };
  return (
    <div className="tourCard">
      <div className="price">{`\$${price}`}</div>
      <img src={image} />
      <h4 className="tourName">{name}</h4>
      <p className="tourInfo">
        <span>{visibleInfo}</span>
        {info !== visibleInfo && (
          <span className="readToggle" onClick={showFullInfo}>
            {" Read more"}
          </span>
        )}
        {info === visibleInfo && (
          <span className="readToggle" onClick={showLessInfo}>
            {" Show Less"}
          </span>
        )}
      </p>
      <button
        onClick={() => {
          console.log("Here");
          deleteTour(id);
        }}
        className="notInterestedBtn"
      >
        Not Interested
      </button>
    </div>
  );
};
export default TourCard;
