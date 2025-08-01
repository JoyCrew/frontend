import type { PointHistoryEntry } from "./PointHistory";

interface PointHistoryItemProps {
  entry: PointHistoryEntry;
}

const PointHistoryItem: React.FC<PointHistoryItemProps> = ({ entry }) => {
  console.log(entry);
  return <div className="PointHistoryItem"></div>;
};

export default PointHistoryItem;
