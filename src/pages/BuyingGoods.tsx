import Header from "../components/common/Header";
import GoodsList from "../components/buying/GoodsList";
import Sidebar from "../components/common/Sidebar";
import { userBuyingMenuItems } from "../data/SidebarMenu";

const BuyingGoods: React.FC = () => {

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
