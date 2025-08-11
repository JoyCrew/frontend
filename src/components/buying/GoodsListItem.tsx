import "../../styles/GoodsList.css";
import type { GoodsState } from "../../states/goodsState";
import goodsImage from "../../assets/goodsImage.svg";

interface GoodsListItemProps {
  goods: GoodsState;
  onClick?: () => void;
}

const GoodsListItem: React.FC<GoodsListItemProps> = ({ goods, onClick }) => {
  console.log(goods);
  return (
    <div className="GoodsListItem" onClick={onClick}>
      <img src={goods.image ? goods.image : goodsImage} alt="goods" />
      <p>{goods.name}</p>
      <h3>{goods.point} 포인트</h3>
    </div>
  );
};

export default GoodsListItem;
