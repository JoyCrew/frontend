import wwhitelogo from "../../assets/whitelogo.svg";
import "../../styles/ManagerHeader.css";
import { useNavigate } from "react-router-dom";

const ManagerHeader: React.FC = () => {
  const nav = useNavigate();
  return (
    <div className="manager-header-container">
      <div className="ManagerHeader">
        <img
          src={wwhitelogo}
          alt="logo"
          onClick={() => {
            nav("/");
          }}
        />
      </div>
    </div>
  );
};

export default ManagerHeader;
