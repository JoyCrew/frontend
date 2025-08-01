import Header from "../components/common/Header";
import useHeaderData from "../hooks/useHeaderData";
import SearchWorker from "../components/givepoint/SearchWorker";

const GivePoint: React.FC = () => {
  const { name, point } = useHeaderData();
  return (
    <div className="main">
      <div className="GivePoint">
        <Header name={name} point={point} />
        <SearchWorker />
      </div>
    </div>
  );
};

export default GivePoint;
