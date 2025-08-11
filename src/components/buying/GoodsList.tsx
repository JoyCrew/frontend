import "../../styles/GoodsList.css";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { useState } from "react";
import { goodsState, selectedGoodsIdState } from "../../states/goodsState";
import type { GoodsState } from "../../states/goodsState";
import GoodsListItem from "./GoodsListItem";
import GoodsCategory from "./GoodsCategory";
import ChangePopup from "./ChangePopup";

const GoodsList: React.FC = () => {
  //useRecoilState로 상품 목록 받아오기
  const goods = useRecoilValue(goodsState);
  const setSelectedGoodsId = useSetRecoilState(selectedGoodsIdState);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const openPopup = (id: number) => {
    setSelectedGoodsId(id);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedGoodsId(null);
  };

  return (
    <>
      <div className="GoodsList">
        <GoodsCategory />
        <div className="item-container">
          {goods.length > 0 ? (
            goods.map((goodsItem: GoodsState) => (
              <GoodsListItem
                key={goodsItem.id}
                goods={goodsItem}
                onClick={() => openPopup(goodsItem.id)}
              />
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
      {showPopup && <ChangePopup onClose={closePopup} />}
    </>
  );
};

export default GoodsList;
