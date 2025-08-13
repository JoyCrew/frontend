import "../../styles/BuyingHistory.css";
import { FaChevronDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { useRecoilValue } from "recoil";
import { orderState } from "../../states/orderState";

const OnGoingOrder: React.FC = () => {
  const orders = useRecoilValue(orderState);

  const placedCount = orders.filter(
    (order) => order.status === "PLACED"
  ).length;
  const shippedCount = orders.filter(
    (order) => order.status === "SHIPPED"
  ).length;
  const deliveredCount = orders.filter(
    (order) => order.status === "DELIVERED"
  ).length;

  return (
    <div className="OnGoingOrder">
      <div className="title-container">
        <h2 className="title-ment">진행중인 주문</h2>
        <div className="button-container">
          <p>최근 3개월</p>
          <FaChevronDown className="down-icon" />
        </div>
      </div>
      <div className="item-container">
        <div>
          <h1>{placedCount}</h1>
          <p>주문완료</p>
        </div>
        <FaAngleRight className="right-icon" />

        <div>
          <h1>{shippedCount}</h1>
          <p>배송중</p>
        </div>
        <FaAngleRight className="right-icon" />

        <div>
          <h1>{deliveredCount}</h1>
          <p>배송완료</p>
        </div>
      </div>
    </div>
  );
};

export default OnGoingOrder;
