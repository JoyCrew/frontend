import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import { userBuyingMenuItems } from "../data/SidebarMenu";

const BuyingHistory: React.FC = () => {

  return (
    <div className="BuyingHisory">
      <Header />
      <div className="main">
        <Sidebar activePath="/buying_history" menuItems={userBuyingMenuItems} />
      </div>
    </div>
  );
};

export default BuyingHistory;
