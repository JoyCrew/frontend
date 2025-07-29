import Header from "../components/common/Header";
import SearchWorker from "../components/givepoint/SearchWorker";

const GivePoint: React.FC = () => {
  return (
    <div className="main">
      <div className="GivePoint">
        <Header name="홍길동" point={30} />
        <SearchWorker />
      </div>
    </div>
  );
};

export default GivePoint;
