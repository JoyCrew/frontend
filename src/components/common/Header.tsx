import "../common/Header.css";
import logo from "../../assets/logo.svg";
import person from "../../assets/person.svg";

interface HeaderProps {
  name: string;
  point: number;
}

const Header: React.FC<HeaderProps> = ({ name, point }) => {
  return (
    <header className="Header">
      <img className="logo" src={logo} alt="logo" />
      <div className="navbar">
        <p className="home">홈</p>
        <p className="point">포인트 선물하기</p>
        <p className="product">상품 구매하기</p>
        <p className="mypage">마이페이지</p>
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
