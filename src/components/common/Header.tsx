import "../common/Header.css";
import logo from "../../assets/logo.svg";
import person from "../../assets/person.svg";
import alarm from "../../assets/alarm.svg";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  name: string;
  point: number;
}

const Header: React.FC<HeaderProps> = ({ name, point }) => {
  const location = useLocation();

  const navItems = [
    { name: "홈", path: "/" },
    { name: "포인트 선물하기", path: "/give_point" }, // 실제 경로로 변경 필요
    { name: "상품 구매하기", path: "/buying_goods" }, // 실제 경로로 변경 필요
    { name: "마이페이지", path: "/mypage" }, // 실제 경로로 변경 필요
  ];

  return (
    <div className="header-container">
      <header className="Header">
        <img className="logo" src={logo} alt="logo" />
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
