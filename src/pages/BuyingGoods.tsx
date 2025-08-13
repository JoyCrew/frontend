import Header from "../components/common/Header";
import GoodsList from "../components/buying/GoodsList";
import Sidebar from "../components/common/Sidebar";
import { userBuyingMenuItems } from "../data/SidebarMenu";
// import useProductList from "../hooks/useProductList";

const BuyingGoods: React.FC = () => {
  // useProductList();

  return (
    <div className="BuyingGoods">
      <Header />
      <div className="main">
        <Sidebar activePath="/buying_goods" menuItems={userBuyingMenuItems} />
        <GoodsList />
      </div>
    </div>
  );
};

export default BuyingGoods;
