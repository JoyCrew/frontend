import "../../styles/GoodsList.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useState } from "react";
import {
  categoryState,
  goodsState,
  selectedGoodsIdState,
} from "../../states/goodsState";
import { selectedCategoryState } from "../../states/goodsState";
import type { GoodsState } from "../../states/goodsState";
import GoodsListItem from "./GoodsListItem";
import GoodsCategory from "./GoodsCategory";
import ChangePopup from "./ChangePopup";
import RecentViewing from "./RecentViewing";
import apiClient from "../../api/axiosClient";

const GoodsList: React.FC = () => {
  const goods = useRecoilValue(goodsState);
  const selectedCategory = useRecoilValue(selectedCategoryState);
  const category = useRecoilValue(categoryState);
  const setSelectedGoodsId = useSetRecoilState(selectedGoodsIdState);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const postRecentView = async (id: number) => {
    try {
      const response = await apiClient.post(`/api/recent-views/${id}`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const openPopup = (id: number) => {
    setSelectedGoodsId(id);
    postRecentView(id);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedGoodsId(null);
  };

  const itemList = selectedCategory === null ? goods : category;
  console.log(itemList);

  return (
    <>
      <div className="GoodsList">
        <GoodsCategory />
        <div className="item-container">
          {itemList.length > 0 ? (
            itemList.map((goodsItem: GoodsState) => (
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
