import "../../styles/PointStatus.css";
import PointMini from "./PointMini";

const PointStatus: React.FC = () => {
  return (
    <div className="PointStatus">
      <p>포인트 현황</p>
      <PointMini point={35} ment="받은 포인트" className="receive" />
      <PointMini point={15} ment="보낸 포인트" className="send" />
    </div>
  );
};

export default PointStatus;
