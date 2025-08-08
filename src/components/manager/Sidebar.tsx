import "../../styles/Sidebar.css";
import employeeList from "../../assets/employeeList.svg";
import employeeListGray from "../../assets/employeeListGray.svg";
import send from "../../assets/send.svg";
import sendGray from "../../assets/sendGray.svg";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  props: string;
}

const Sidebar: React.FC<SidebarProps> = ({ props }) => {
  const nav = useNavigate();
  return (
    <div className={`Sidebar Sidebar_${props}`}>
      <div
        onClick={() => {
          nav("/manager");
        }}
        className="employee-div"
      >
        <img
          src={props == "employee" ? employeeList : employeeListGray}
          alt=""
        />
        <p>직원 목록</p>
      </div>
      <div
        onClick={() => {
          nav("/manager/point");
        }}
        className="point-div"
      >
        <img src={props == "employee" ? sendGray : send} alt="" />
        <p>포인트 전송하기</p>
      </div>
    </div>
  );
};

export default Sidebar;
