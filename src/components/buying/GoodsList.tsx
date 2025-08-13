import "../../styles/GoodsList.css";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { useState } from "react";
import { goodsState, selectedGoodsIdState } from "../../states/goodsState";
import type { GoodsState } from "../../states/goodsState";
import GoodsListItem from "./GoodsListItem";
import GoodsCategory from "./GoodsCategory";
import ChangePopup from "./ChangePopup";
import RecentViewing from "./RecentViewing";
const GoodsList: React.FC = () => {
  const goods = useRecoilValue(goodsState);
  const setSelectedGoodsId = useSetRecoilState(selectedGoodsIdState);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const openPopup = (id: number) => {
    setSelectedGoodsId(id);
    // 최근 본 상품에 추가하면 되겠다
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
        <RecentViewing />
      </div>
      {showPopup && <ChangePopup onClose={closePopup} />}
    </>
  );
};

export default GoodsList;
