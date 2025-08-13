import "../../styles/GoodsList.css";
import { recentGoodsState } from "../../states/goodsState";
import { useRecoilValue } from "recoil";
import goodsImage from "../../assets/goodsImage.svg";

const RecentViewing: React.FC = () => {
  const recentGoods = useRecoilValue(recentGoodsState);
  return (
    <div className="RecentViewing">
      <h6>최근 본 상품</h6>
      <div className="item-container">
        {recentGoods.slice(0, 4).map((good) => (
          <img
            key={good.id}
            src={good.thumbnailUrl ? good.thumbnailUrl : goodsImage}
            alt={good.name}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentViewing;
