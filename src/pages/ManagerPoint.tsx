import ManagerHeader from "../components/manager/ManagerHeader";
import Sidebar from "../components/manager/Sidebar";

const ManagerPoint: React.FC = () => {
  return (
    <div className="ManagerPoint">
      <ManagerHeader />
      <div className="main">
        <Sidebar props="point" />
      </div>
    </div>
  );
};

export default ManagerPoint;
