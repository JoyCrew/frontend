import ManagerHeader from "../components/manager/ManagerHeader";
import Sidebar from "../components/common/Sidebar";
import EmployeeList from "../components/manager/EmployeeList";
import { managerMenuItems } from "../data/SidebarMenu";

const Manager: React.FC = () => {
  return (
    <div className="Manager">
      <ManagerHeader />
      <div className="main">
        <Sidebar activePath="/manager" menuItems={managerMenuItems} />
        <EmployeeList />
      </div>
    </div>
  );
};

export default Manager;
