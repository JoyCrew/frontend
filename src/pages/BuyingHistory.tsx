import Header from "../components/common/Header";
import useHeaderData from "../hooks/useHeaderData";
import Sidebar from "../components/common/Sidebar";
import { userBuyingMenuItems } from "../data/SidebarMenu";

const BuyingHistory: React.FC = () => {
  const { name, point } = useHeaderData();
  return (
    <div className="BuyingHisory">
      <Header name={name} point={point} />
      <div className="main">
        <Sidebar activePath="/buying_history" menuItems={userBuyingMenuItems} />
      </div>
    </div>
  );
};

export default BuyingHistory;
