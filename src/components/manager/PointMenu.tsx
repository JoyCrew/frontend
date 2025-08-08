import "../../styles/PointMenu.css";
import Button from "../common/Button";
import PointItem from "./PointItem";
import { useRecoilState, useRecoilValue } from "recoil";

import {
  availablePointsState,
  sendingPointsState,
  remainingPointsSelector,
  selectedEmployeeCountSelector,
} from "../../states/pointState";

const PointMenu: React.FC = () => {
  const [sendingPoints, setSendingPoints] = useRecoilState(sendingPointsState);
  const availablePoints = useRecoilValue(availablePointsState);
  const remainingPoints = useRecoilValue(remainingPointsSelector);
  const selectedCount = useRecoilValue(selectedEmployeeCountSelector);

  const handleSendingPointsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(e.target.value);
    const limitedValue = Math.min(value, availablePoints);
    setSendingPoints(limitedValue);
  };

  return (
    <div className="PointMenu">
      <Button
        text="전송하기"
        onClick={() => {
          console.log("전송");
        }}
        className="small"
      />
      <div className="point-container">
        <PointItem title="전송 가능 포인트" number={availablePoints} />
        <div className="PointItem">
          <h3>전송할 포인트</h3>
          <input
            type="number"
            placeholder="포인트 입력"
            value={sendingPoints === 0 ? "" : sendingPoints}
            onChange={handleSendingPointsChange}
          />
        </div>
        <PointItem title="전송 후 남는 포인트" number={remainingPoints} />
        <PointItem title="선택한 인원 수" number={selectedCount} />
      </div>
    </div>
  );
};

export default PointMenu;
