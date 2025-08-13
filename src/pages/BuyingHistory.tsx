import "../styles/BuyingHistory.css";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import { userBuyingMenuItems } from "../data/SidebarMenu";
import OrderHistory from "../components/buying/OrderHistory";
import OnGoingOrder from "../components/buying/OnGoingOrder";
import useGetOrderGood from "../hooks/useGetOrderGood";

const BuyingHistory: React.FC = () => {
  useGetOrderGood();

  return (
    <div className="BuyingHistory">
      <Header />
      <div className="main">
        <Sidebar activePath="/buying_history" menuItems={userBuyingMenuItems} />
        <div className="history-container">
          <OnGoingOrder />
          <OrderHistory />
        </div>
      </div>
    </div>
  );
};

export default BuyingHistory;
