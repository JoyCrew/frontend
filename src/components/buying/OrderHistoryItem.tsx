import "../../styles/BuyingHistory.css";
import type { OrderState } from "../../states/orderState";
import goodsImage from "../../assets/goodsImage.svg";

interface OrderHistoryItemProps {
  order: OrderState;
}

const OrderHistoryItem: React.FC<OrderHistoryItemProps> = ({ order }) => {
  const koreanStatus =
    order.status === "PLACED"
      ? "주문완료"
      : order.status === "SHIPPED"
      ? "배송중"
      : order.status === "DELIVERED"
      ? "배송완료"
      : order.status === "CANCELED"
      ? "취소"
      : "";

  const dateOnly = order.orderedAt.split("T")[0];

  return (
    <div className="OrderHistoryItem">
      <h6>{koreanStatus}</h6>
      <div className="item-detail-container">
        <img
          src={order.thumbnailUrl ? order.thumbnailUrl : goodsImage}
          alt={order.productName}
        />
        <div className="text-container">
          <p>{dateOnly} 주문</p>
          <h4>{order.productName}</h4>
          <h5>{order.totalPrice} 포인트</h5>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryItem;
