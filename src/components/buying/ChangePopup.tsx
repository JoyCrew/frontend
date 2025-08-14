import "../../styles/ChangePopup.css";

import { IoMdClose } from "react-icons/io";
import { FaSquareMinus } from "react-icons/fa6";
import { FaSquarePlus } from "react-icons/fa6";
import goodsImage from "../../assets/goodsImage.svg";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedGoodsIdState, goodsState } from "../../states/goodsState";
import type { GoodsState } from "../../states/goodsState";

import { profileState } from "../../states/propfileState";
import apiClient from "../../api/axiosClient";

interface ChangePopupProps {
  onClose: () => void;
}

const ChangePopup: React.FC<ChangePopupProps> = ({ onClose }) => {
  const nav = useNavigate();
  const { address } = useRecoilValue(profileState);
  const allGoods = useRecoilValue(goodsState);
  const [selectedGoodsId, setSelectedGoodsId] =
    useRecoilState(selectedGoodsIdState);

  const [quantity, setQuantity] = useState(1);
  const [goods, setGoods] = useState<GoodsState | undefined>(undefined);

  useEffect(() => {
    if (selectedGoodsId) {
      const foundGoods = allGoods.find((g) => g.id === selectedGoodsId);
      setGoods(foundGoods);
    }
  }, [selectedGoodsId, allGoods]);

  const onClickChange = async () => {
    try {
      const response = await apiClient.post("/api/orders", {
        productId: selectedGoodsId,
        quantity: quantity,
      });
      console.log(selectedGoodsId, quantity);
      console.log(response.data);
      setSelectedGoodsId(null);
      onClose();
      alert("상품 교환이 성공적으로 완료되었습니다!");
      nav("/buying_history");
    } catch (error) {
      console.log(error);
      setSelectedGoodsId(null);
      onClose();
      alert("상품 교환이 실패하였습니다.");
    }
  };

  const handleQuantityChange = (type: "plus" | "minus") => {
    if (type === "plus") {
      setQuantity((prev) => prev + 1);
    } else if (type === "minus" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const onChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  if (!goods) return null;

  return (
    <div className="popup-overlay">
      <div className="ChangePopup">
        <IoMdClose onClick={onClose} className="close-icon" />
        <div className="item-container">
          <div className="GoodsListItem">
            <img
              src={goods.thumbnailUrl ? goods.thumbnailUrl : goodsImage}
              alt="goods"
            />
            <p>{goods.name}</p>
            <h3>{goods.price} 포인트</h3>
          </div>
          <div className="right-container">
            <p>{goods.detailUrl}</p>
            <div className="address-container">
              <h3>배송지 정보</h3>
              <p>{address}</p>
            </div>
            <div className="quantity-container">
              <h3>수량 선택</h3>
              <div className="input-container">
                <FaSquareMinus
                  onClick={() => handleQuantityChange("minus")}
                  className="quantity-icon"
                />
                <input
                  type="number"
                  value={quantity}
                  onChange={onChangeQuantity}
                />
                <FaSquarePlus
                  onClick={() => handleQuantityChange("plus")}
                  className="quantity-icon"
                />
              </div>
            </div>
          </div>
          <Button text="교환하기" onClick={onClickChange} className="popup" />
        </div>
      </div>
    </div>
  );
};

export default ChangePopup;
