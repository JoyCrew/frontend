import "../styles/SearchWorker.css";
import Header from "../components/common/Header";
import useHeaderData from "../hooks/useHeaderData";
import SearchWorker from "../components/givepoint/SearchWorker";
import WorkerList from "../components/givepoint/WorkerList";

const GivePoint: React.FC = () => {
  const { name, point } = useHeaderData();
  return (
    <div className="GivePoint">
      <Header name={name} point={point} />
      <div className="main">
        <h1>포인트 선물하기</h1>
        <SearchWorker />
        <WorkerList />
      </div>
    </div>
  );
};

export default GivePoint;
