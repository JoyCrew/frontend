import "../../styles/ChangePopup.css";

import { IoMdClose } from "react-icons/io";
import { FaSquareMinus } from "react-icons/fa6";
import { FaSquarePlus } from "react-icons/fa6";
import goodsImage from "../../assets/goodsImage.svg";
import Button from "../common/Button";

import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedGoodsIdState, goodsState } from "../../states/goodsState";
import type { GoodsState } from "../../states/goodsState";

import { profileState } from "../../states/propfileState";

interface ChangePopupProps {
  onClose: () => void;
}

const ChangePopup: React.FC<ChangePopupProps> = ({ onClose }) => {
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

  const onClickChange = () => {
    // 상품 교환 로직 필요
    setSelectedGoodsId(null);
    onClose();
  };

  const handleQuantityChange = (type: "plus" | "minus") => {
    if (type === "plus") {
      setQuantity((prev) => prev + 1);
    } else if (type === "minus" && quantity > 1) {
      setQuantity((prev) => prev - 1);
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
            <div className="address-container">
              {/* 변경 필요 */}
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
                <input type="number" value={quantity} />
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
