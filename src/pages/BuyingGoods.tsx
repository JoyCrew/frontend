import Header from "../components/common/Header";
import useHeaderData from "../hooks/useHeaderData";

const BuyingGoods: React.FC = () => {
  const { name, point } = useHeaderData();

  return (
    <div className="BuyingGoods">
      <Header name={name} point={point} />
      <div className="main"></div>
    </div>
  );
};

export default BuyingGoods;
