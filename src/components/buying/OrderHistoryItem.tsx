import "../../styles/BuyingHistory.css";
import type { OrderState } from "../../states/orderState";
import goodsImage from "../../assets/goodsImage.svg";
import Button from "../common/Button";
import apiClient from "../../api/axiosClient";
import { useState } from "react";
import ManagerPopup from "../manager/ManagerPopup";

interface OrderHistoryItemProps {
  order: OrderState;
}

const OrderHistoryItem: React.FC<OrderHistoryItemProps> = ({ order }) => {
  const [isCancel, setIsCancel] = useState<boolean>(false);

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

  const onClickCancel = async () => {
    try {
      await apiClient.patch(`/api/orders/${order.orderId}/cancel`);
      setIsCancel(false);
    } catch (error) {
      console.log(error);
      setIsCancel(false);
    }
  };

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
        {order.status === "PLACED" && (
          <Button
            text="구매취소"
            onClick={() => {
              setIsCancel(true);
            }}
            className="white"
          />
        )}
      </div>
      {isCancel && (
        <ManagerPopup
          title="구매 취소"
          content="주문을 취소하시겠습니까?"
          button="취소하기"
          onConfirm={onClickCancel}
          onCancel={() => {
            setIsCancel(false);
          }}
        />
      )}
    </div>
  );
};

export default OrderHistoryItem;
