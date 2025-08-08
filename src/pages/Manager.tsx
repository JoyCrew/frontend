import ManagerHeader from "../components/manager/ManagerHeader";
import Sidebar from "../components/manager/Sidebar";
import EmployeeList from "../components/manager/EmployeeList";

const Manager: React.FC = () => {
  return (
    <div className="Manager">
      <ManagerHeader />
      <div className="main">
        <Sidebar props="employee" />
        <EmployeeList />
      </div>
    </div>
  );
};

export default Manager;
