import "../../styles/PointHistoryItem.css";

import type { PointHistoryState } from "../../states/pointHistoryState";

interface PointHistoryItemProps {
  entry: PointHistoryState;
}

const PointHistoryItem: React.FC<PointHistoryItemProps> = ({ entry }) => {
  const dateObj = new Date(entry.transactionDate);
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const formattedDate = `${month}월 ${day}일`;

  const hours = dateObj.getHours().toString().padStart(2, "0");
  const minutes = dateObj.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;

  return (
    <div className="PointHistoryItem">
      <p className="date">{formattedDate}</p>
      <div className="content">
        <h4>{entry.counterparty}</h4>
        <div className="additional">
          <p>{formattedTime}</p>
          <p>|</p>
          <p>{entry.message}</p>
        </div>
      </div>
      <h3>-{entry.amount}</h3>
    </div>
  );
};

export default PointHistoryItem;
