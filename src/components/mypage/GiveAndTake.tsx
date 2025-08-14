import "../../styles/GiveAndTake.css";
import { useRecoilValue } from "recoil";
import { receivePointStatisticsState } from "../../states/pointStatisticsState";
import { sendPointStatisticsState } from "../../states/pointStatisticsState";
import type { PointStatisticsState } from "../../states/pointStatisticsState";
import { useState } from "react";
import GiveAndTakeItem from "./GiveAndTakeItem";

const GiveAndTake: React.FC = () => {
  const [isReceive, setIsReceive] = useState<boolean>(true);
  const receivePointStatistics = useRecoilValue(receivePointStatisticsState);
  const sendPointStatistics = useRecoilValue(sendPointStatisticsState);

  const currentData = isReceive ? receivePointStatistics : sendPointStatistics;

  const groupTransactionsByMonth = (transactions: PointStatisticsState[]) => {
    const grouped = new Map();
    transactions.forEach((item) => {
      const date = new Date(item.transactionDate);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const yearMonth = `${year}년 ${month}월`;

      if (!grouped.has(yearMonth)) {
        grouped.set(yearMonth, []);
      }
      grouped.get(yearMonth).push(item);
    });
    return grouped;
  };

  const groupedData = groupTransactionsByMonth(currentData);

  return (
    <div className="GiveAndTake">
      <div className="index-container">
        <h3
          onClick={() => {
            setIsReceive(true);
          }}
          className={`${isReceive}`}
        >
          받은 포인트
        </h3>
        <h3
          onClick={() => {
            setIsReceive(false);
          }}
          className={`${!isReceive}`}
        >
          보낸 포인트
        </h3>
      </div>
      <div className="item-container">
        {[...groupedData.keys()].map((yearMonth) => (
          <div key={yearMonth} className="per-month">
            <h4 className="month-header">{yearMonth.split(" ")[1]}</h4>
            {groupedData.get(yearMonth)?.map((item: PointStatisticsState) => (
              <GiveAndTakeItem key={item.transactionId} item={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiveAndTake;
