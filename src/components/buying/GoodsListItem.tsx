import "../../styles/GoodsList.css";
import type { GoodsState } from "../../states/goodsState";
import goodsImage from "../../assets/goodsImage.svg";

interface GoodsListItemProps {
  goods: GoodsState;
}

const GoodsListItem: React.FC<GoodsListItemProps> = ({ goods }) => {
  console.log(goods);
  return (
    <div className="GoodsListItem">
      <img src={goods.image ? goods.image : goodsImage} alt="goods" />
      <p>{goods.name}</p>
      <h3>{goods.point} 포인트</h3>
    </div>
  );
};

export default GoodsListItem;
