import "../../styles/GoodsList.css";

import { useRecoilValue } from "recoil";
import { goodsState } from "../../states/goodsState";
import type { GoodsState } from "../../states/goodsState";
import GoodsListItem from "./GoodsListItem";
import GoodsCategory from "./GoodsCategory";

const GoodsList: React.FC = () => {
  const goods = useRecoilValue(goodsState);
  //useRecoilState로 상품 목록 받아오기
  return (
    <div className="GoodsList">
      <GoodsCategory />
      <div className="item-container">
        {goods.length > 0 ? (
          goods.map((goods: GoodsState, index: number) => (
            <GoodsListItem key={index} goods={goods} />
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default GoodsList;
