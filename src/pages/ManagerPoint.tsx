import ManagerHeader from "../components/manager/ManagerHeader";
import Sidebar from "../components/manager/Sidebar";
import AllSendPoint from "../components/manager/AllSendPoint";

const ManagerPoint: React.FC = () => {
  return (
    <div className="ManagerPoint">
      <ManagerHeader />
      <div className="main">
        <Sidebar props="point" />
        <AllSendPoint />
      </div>
    </div>
  );
};

export default ManagerPoint;
