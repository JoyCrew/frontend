import "../common/Header.css";
import logo from "../../assets/logo.svg";
import person from "../../assets/person.svg";
import alarm from "../../assets/alarm.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../../states/authState";

interface HeaderProps {
  name: string;
  point: number;
}

const Header: React.FC<HeaderProps> = ({ name, point }) => {
  const nav = useNavigate();
  const location = useLocation();
  const { role } = useRecoilValue(authState);

  const navItems = [
    { name: "홈", path: "/home" },
    { name: "포인트 선물하기", path: "/give_point" },
    { name: "상품 구매하기", path: "/buying_goods" },
    { name: "마이페이지", path: "/mypage" },
  ];

  return (
    <div className="header-container">
      <header className="Header">
        <div className="left-section">
          <img className="logo" src={logo} alt="logo" />
          {role !== "EMPLOYEE" && (
            <p
              className="manager"
              onClick={() => {
                nav("/manager");
              }}
            >
              관리자
            </p>
          )}
        </div>

        <div className="navbar">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`nav-item ${
                location.pathname === item.path ? `active active_${index}` : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="right-section">
          <div className="profile">
            <img className="person" src={person} alt="person" />
            <div className="ment">
              <p className="name">{name}</p>
              <p className="point">{point} points</p>
            </div>
          </div>
          <img className="alarm" src={alarm} alt="alarm" />
        </div>
      </header>
    </div>
  );
};

export default Header;
