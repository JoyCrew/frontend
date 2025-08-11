import "../../styles/PointHistoryCard.css";
import PointHistoryItem from "./PointHistoryItem";
import { useRecoilState } from "recoil";
import { pointHistoryState } from "../../states/pointHistoryState";
import apiClient from "../../api/axiosClient";
import { useEffect } from "react";

const PointHistoryCard: React.FC = () => {
  const [history, setHistory] = useRecoilState(pointHistoryState);

  useEffect(() => {
    const getPointHistory = async () => {
      try {
        const response = await apiClient.get(`/api/transactions`);
        setHistory(response.data);
        console.log("성공", response.data);
      } catch (error) {
        console.error("실패", error);
      }
    };
    getPointHistory();
  }, [setHistory]);

  return (
    <div className="PointHistoryCard">
      <h2 className="title">포인트 사용 내역</h2>
      <div className="card-list-container">
        {history.map((entry) => (
          <PointHistoryItem key={entry.transactionId} entry={entry} />
        ))}
      </div>
    </div>
  );
};

export default PointHistoryCard;
