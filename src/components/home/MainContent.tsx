import "../../styles/MainContent.css";
import { IoArrowForwardSharp } from "react-icons/io5";
import mainImage1 from "../../assets/mainImage1.svg";
import mainImage3 from "../../assets/mainImage3.svg";
import mainImage4 from "../../assets/mainImage4.svg";

import mainFrame1 from "../../assets/mainFrame1.svg";
import mainFrame2 from "../../assets/mainFrame2.svg";
import mainFrame3 from "../../assets/mainFrame3.svg";
import mainFrame4 from "../../assets/mainFrame4.svg";

const images: { [key: number]: string | null } = {
  1: mainImage1,
  2: null,
  3: mainImage3,
  4: mainImage4,
};

const backgroundImages: { [key: number]: string } = {
  1: mainFrame1,
  2: mainFrame2,
  3: mainFrame3,
  4: mainFrame4,
};

interface MainContentProps {
  index: number;
  title: string;
  link: string;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

const MainContent: React.FC<MainContentProps> = ({
  index,
  title,
  link,
  hoveredIndex,
  setHoveredIndex,
}) => {
  const isCurrentlyHovered = hoveredIndex === index;
  const isMoved = hoveredIndex !== null && index > hoveredIndex;
  const translateXValue = isMoved ? "18.125rem" : "0rem";

  return (
    <div
      className="MainContent"
      style={{
        transform: `translateX(${translateXValue})`,
        transition: "transform 0.5s ease-in-out",
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div
        className={`initial ${
          isCurrentlyHovered ? "is-hovered" : ""
        } initial_${index}`}
      >
        <h1>0{index}</h1>
      </div>

      <div
        className={`hovering ${
          isCurrentlyHovered ? "is-hovered" : ""
        } hovering_${index}`}
      >
        <img src={backgroundImages[index]} alt="" className="frame-image" />
        <div className="frame-div">
          <h1>0{index}</h1>
          {images[index] && (
            <img
              src={images[index] || ""}
              alt="mainImage"
              className={`image image_${index}`}
            />
          )}
          <h2>{title}</h2>
          <div
            className="button-container"
            onClick={() => {
              console.log(link);
            }}
          >
            <IoArrowForwardSharp className="arrow-icon" />
            <p>Learn more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
