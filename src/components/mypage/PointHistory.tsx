import PointHistoryItem from "./PointHistoryItem";

export interface PointHistoryEntry {
  id: number;
  date: string;
  name: string;
  time: string;
  activity: string;
  amount: number;
}

interface PointHistoryCardProps {
  historyEntries: PointHistoryEntry[];
}

const PointHistoryCard: React.FC<PointHistoryCardProps> = ({
  historyEntries,
}) => {
  return (
    <div className="PointHistoryCard">
      <div className="card-header">
        <h2 className="card-title">포인트 내역</h2>
        <span className="card-arrow">&gt;</span>{" "}
        {/* 화살표 아이콘 또는 Link 컴포넌트 */}
      </div>
      <div className="card-list-container">
        {historyEntries.map((entry) => (
          <PointHistoryItem key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
};

export default PointHistoryCard;
