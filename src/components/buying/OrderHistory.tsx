import "../../styles/BuyingHistory.css";
import OrderHistoryItem from "./OrderHistoryItem";
import { orderState } from "../../states/orderState";
import { useRecoilValue } from "recoil";

const OrderHistory = () => {
  const orders = useRecoilValue(orderState);
  return (
    <div className="OrderHistory">
      <h2 className="title-ment">주문/배송 내역</h2>
      <div className="item-container">
        {orders.length !== 0 ? (
          orders.map((order) => (
            <OrderHistoryItem order={order} key={order.orderId} />
          ))
        ) : (
          <p className="no-order">최근 주문 내역이 없습니다</p>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
