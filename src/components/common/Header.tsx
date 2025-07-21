import "../common/Header.css";
import logo from "../../assets/logo.svg";
import person from "../../assets/person.svg";
import { Link } from "react-router-dom";

interface HeaderProps {
  name: string;
  point: number;
}

const Header: React.FC<HeaderProps> = ({ name, point }) => {
  return (
    <header className="Header">
      <img className="logo" src={logo} alt="logo" />
      <div className="navbar">
        <Link to={"/"} className="home">
          홈
        </Link>
        <Link to={"/"} className="point">
          포인트 선물하기
        </Link>
        <Link to={"/"} className="product">
          상품 구매하기
        </Link>
        <Link to={"/"} className="mypage">
          마이페이지
        </Link>
      </div>
      <div className="profile">
        <img className="person" src={person} alt="person" />
        <div className="ment">
          <p className="name">{name}</p>
          <p className="point">{point} points</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
