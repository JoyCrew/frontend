import "../styles/MyPage.css";
import Header from "../components/common/Header";
import PointStatus from "../components/mypage/PointStatus";

const MyPage = () => {
  return (
    <div className="main">
      <div className="MyPage">
        <Header name="홍길동" point={30} />
        <PointStatus />
      </div>
    </div>
  );
};

export default MyPage;
