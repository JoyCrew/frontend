import ManagerHeader from "../components/manager/ManagerHeader";
import AllSendPoint from "../components/manager/AllSendPoint";
import Sidebar from "../components/common/Sidebar";
import { managerMenuItems } from "../data/SidebarMenu";

const ManagerPoint: React.FC = () => {
  return (
    <div className="ManagerPoint">
      <ManagerHeader />
      <div className="main">
        <Sidebar activePath="/manager/point" menuItems={managerMenuItems} />
        <AllSendPoint />
      </div>
    </div>
  );
};

export default ManagerPoint;
