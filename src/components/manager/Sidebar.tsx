import "../../styles/Sidebar.css";
import employeeList from "../../assets/employeeList.svg";
import sendGray from "../../assets/sendGray.svg";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const nav = useNavigate();
  return (
    <div className="Sidebar">
      <div
        onClick={() => {
          nav("/manager");
        }}
      >
        <img src={employeeList} alt="" />
        <p>직원 목록</p>
      </div>
      <div
        onClick={() => {
          nav("/manager/point");
        }}
      >
        <img src={sendGray} alt="" />
        <p>포인트 전송하기</p>
      </div>
    </div>
  );
};

export default Sidebar;
