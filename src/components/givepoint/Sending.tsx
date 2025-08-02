import "../../styles/Sending.css";
import type { Employee } from "../../states/searchResultState";
import Tag from "./Tag";
import Message from "./Message";
import up from "../../assets/up.svg";
import down from "../../assets/down.svg";
import { useState } from "react";
import type { ChangeEvent } from "react";

const MIN_POINT = 0;
const MAX_POINT = 999999;

interface SendingProps {
  employee: Employee;
}

const Sending: React.FC<SendingProps> = ({ employee }) => {
  const [point, setPoint] = useState<number | null>(0);
  const handleIncrease = () => {
    const currentPoint = point ?? 0;
    if (currentPoint < MAX_POINT) {
      setPoint(currentPoint + 1);
    }
  };
  const handleDecrease = () => {
    const currentPoint = point ?? 0;
    if (currentPoint > MIN_POINT) {
      setPoint(currentPoint - 1);
    }
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      setPoint(null);
      return;
    }
    const value = parseInt(inputValue, 10);

    if (isNaN(value) || value < MIN_POINT) {
      setPoint(MIN_POINT);
    } else if (value > MAX_POINT) {
      setPoint(MAX_POINT);
    } else {
      setPoint(value);
    }
  };

  return (
    <div className="Sending">
      <div className="title">
        <img src={employee.profileImageUrl} alt="프로필 이미지" />
        <h1> {employee.employeeName}님에게 선물하기</h1>
      </div>
      <div className="point-container">
        <div className="input-container">
          <input
            type="number"
            value={point !== null ? point : ""}
            onChange={handleInputChange}
          />
          <div className="arrow-container">
            <img src={up} alt="" className="up" onClick={handleIncrease} />
            <img src={down} alt="" className="down" onClick={handleDecrease} />
          </div>
        </div>

        <p>points</p>
      </div>
      <Tag />
      <Message />
    </div>
  );
};

export default Sending;
