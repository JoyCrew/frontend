import "../../styles/PointStatus.css";
import PointMini from "./PointMini";
import { useRecoilValue } from "recoil";
import { profileState } from "../../states/propfileState";

const PointStatus: React.FC = () => {
  const { totalBalance, giftableBalance } = useRecoilValue(profileState);
  return (
    <div className="PointStatus">
      <p className="title">포인트 현황</p>
      <PointMini
        point={totalBalance ? totalBalance : 0}
        ment="구매 가능 포인트"
        className="buy"
      />
      <PointMini
        point={giftableBalance ? giftableBalance : 0}
        ment="전송 가능 포인트"
        className="give"
      />
    </div>
  );
};

export default PointStatus;
