import "../styles/MyPage.css";
import Header from "../components/common/Header";
import useHeaderData from "../hooks/useHeaderData";
import PointStatus from "../components/mypage/PointStatus";
import Profile from "../components/mypage/Profile";
import useMyInfo from "../hooks/useMyInfo";

const MyPage = () => {
  const { name, point } = useHeaderData();
  useMyInfo();
  return (
    <div className="MyPage">
      <Header name={name} point={point} />
      <div className="main">
        <PointStatus />
        <Profile />
      </div>
    </div>
  );
};

export default MyPage;
