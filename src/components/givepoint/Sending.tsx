import "../../styles/Sending.css";
import type { Employee } from "../../states/searchResultState";
import Tag from "./Tag";
import Message from "./Message";
import up from "../../assets/up.svg";
import down from "../../assets/down.svg";
import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { tagState } from "../../states/tagState";
import apiClient from "../../api/axiosClient";

const MIN_POINT = 0;
const MAX_POINT = 999999;

interface SendingProps {
  employee: Employee;
}

const Sending: React.FC<SendingProps> = ({ employee }) => {
  const [messageContent, setMessageContent] = useState<string>("");
  const nav = useNavigate();
  const [buttonClassName, setButtonClassName] = useState<string>("smallGray");
  const [point, setPoint] = useState<number | null>(0);
  const selectedTags = useRecoilValue(tagState);
  const givingTags = selectedTags
    .filter((tag) => tag.isSelected)
    .map((tag) => tag.element);

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessageContent(e.target.value);
  };

  useEffect(() => {
    const isTagSelected = selectedTags.some((tag) => tag.isSelected);
    if (isTagSelected && point !== 0) {
      setButtonClassName("small");
    } else {
      setButtonClassName("smallGray");
    }
  }, [selectedTags, point]);

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

  const handleSubmit = async () => {
    if (buttonClassName == "small") {
      try {
        const requestBody = {
          receiverId: employee.employeeId,
          points: point,
          message: messageContent,
          tags: givingTags,
        };
        const response = await apiClient.post("api/gift-points", requestBody);
        console.log(requestBody);
        console.log("포인트 전송 성공", response.data);
        nav("/home");
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
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
      <Message
        messageContent={messageContent}
        handleInputChange={handleMessageChange}
      />
      <Button text="다음" onClick={handleSubmit} className={buttonClassName} />
    </div>
  );
};

export default Sending;
