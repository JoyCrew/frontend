import type { PointHistoryEntry } from "./PointHistory";

interface PointHistoryItemProps {
  entry: PointHistoryEntry;
}

const PointHistoryItem: React.FC<PointHistoryItemProps> = ({ entry }) => {
  return <div className="PointHistoryItem">하이</div>;
};

export default PointHistoryItem;
