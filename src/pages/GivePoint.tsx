import "../styles/SearchWorker.css";
import Header from "../components/common/Header";
import SearchWorker from "../components/givepoint/SearchWorker";
import WorkerList from "../components/givepoint/WorkerList";

const GivePoint: React.FC = () => {

  return (
    <div className="GivePoint">
      <Header  />
      <div className="main">
        <h1>포인트 선물하기</h1>
        <SearchWorker />
        <WorkerList />
      </div>
    </div>
  );
};

export default GivePoint;
