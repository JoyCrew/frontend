import "../../styles/PointMenu.css";
import Button from "../common/Button";
import PointItem from "./PointItem";
import { useRecoilState, useRecoilValue } from "recoil";
import apiClient from "../../api/axiosClient";
import { useEffect, useState } from "react";
import ManagerPopup from "./ManagerPopup";
import MessageInput from "./MessageInput";
import type { ChangeEvent } from "react";

import {
  availablePointsState,
  remainingPointsSelector,
  selectedEmployeeCountSelector,
  totalPointsToSendSelector,
} from "../../states/pointState";
import { allEmployeeState } from "../../states/allEmployeeState";

const PointMenu: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [isPopupOpen2, setIsPopupOpen2] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const [availablePoints, setAvailablePoints] =
    useRecoilState(availablePointsState);
  const remainingPoints = useRecoilValue(remainingPointsSelector);
  const selectedCount = useRecoilValue(selectedEmployeeCountSelector);

  const [totalPointsToSend, setTotalPointsToSend] = useRecoilState(
    totalPointsToSendSelector
  );
  const [allEmployees, setAllEmployees] = useRecoilState(allEmployeeState);

  const selectedEmployees = allEmployees.filter((emp) => emp.isSelected);

  useEffect(() => {
    const getAvailablePoints = async () => {
      try {
        const response = await apiClient.get(
          `/api/admin/employees/points/balance`
        );
        setAvailablePoints(response.data.companyTotalBalance);
      } catch (error) {
        console.error("사용 가능 포인트 가져오기 실패:", error);
      }
    };
    getAvailablePoints();
  }, [setAvailablePoints]);

  const handleTotalPointsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const limitedValue = Math.min(value, availablePoints);
    const finalValue =
      isNaN(limitedValue) || limitedValue < 0 ? 0 : limitedValue;
    setTotalPointsToSend(finalValue);
  };

  const handleGiveClick = () => {
    if (selectedEmployees.length === 0) {
      alert("포인트를 전송할 직원을 선택해주세요.");
      return;
    }
    if (totalPointsToSend <= 0) {
      alert("전송할 포인트를 입력해주세요.");
      return;
    }
    setIsPopupOpen(true);
  };

  const handleNext = () => {
    setIsPopupOpen(false);
    setIsPopupOpen2(true);
  };

  const handleGiveConfirm = async () => {
    try {
      const distributions = selectedEmployees.map((emp) => ({
        employeeId: emp.employeeId,
        points: emp.pointsToSend,
      }));

      const requestBody = {
        distributions: distributions,
        message: message,
        type: "AWARD_MANAGER_SPOT",
      };

      const response = await apiClient.post(
        `/api/admin/employees/points/distribute`,
        requestBody
      );
      console.log("포인트 전송 성공:", response.data);
      setIsPopupOpen(false);
      setIsPopupOpen2(false);
      setAllEmployees((prev) =>
        prev.map((emp) => ({ ...emp, isSelected: false, pointsToSend: 0 }))
      );
      setTotalPointsToSend(0);
      alert("포인트를 전송하였습니다");
    } catch (error) {
      console.error("포인트 전송 실패:", error);
      alert("포인트 전송에 실패했습니다.");
      setIsPopupOpen(false);
    }
  };

  const handldGiveCancel = () => {
    setIsPopupOpen(false);
    setIsPopupOpen2(false);
  };

  return (
    <div className="PointMenu">
      <Button text="전송하기" onClick={handleGiveClick} className="small" />
      <div className="point-container">
        <PointItem title="전송 가능 포인트" number={availablePoints} />
        <div className="PointItem">
          <h3>전송할 포인트</h3>
          <input
            type="number"
            placeholder="포인트 입력"
            value={totalPointsToSend === 0 ? "" : totalPointsToSend}
            onChange={handleTotalPointsChange}
          />
        </div>
        <PointItem title="전송 후 남는 포인트" number={remainingPoints} />
        <PointItem title="선택한 인원 수" number={selectedCount} />
      </div>
      {isPopupOpen && (
        <ManagerPopup
          title="포인트 전송"
          content={`${selectedCount}명에게 포인트를 전송하시겠습니까?`}
          button="다음"
          onConfirm={handleNext}
          onCancel={handldGiveCancel}
        />
      )}
      {isPopupOpen2 && (
        <MessageInput
          message={message}
          onChange={handleInputChange}
          onConfirm={handleGiveConfirm}
          onCancel={handldGiveCancel}
        />
      )}
    </div>
  );
};

export default PointMenu;
