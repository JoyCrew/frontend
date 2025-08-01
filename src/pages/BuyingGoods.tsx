import Header from "../components/common/Header";
import useHeaderData from "../hooks/useHeaderData";

const BuyingGoods: React.FC = () => {
  const { name, point } = useHeaderData();

  return (
    <div className="main">
      <div className="BuyingGoods">
        <Header name={name} point={point} />
      </div>
    </div>
  );
};

export default BuyingGoods;
