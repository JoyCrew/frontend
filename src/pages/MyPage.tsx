import "../styles/MyPage.css";
import Header from "../components/common/Header";
import useHeaderData from "../hooks/useHeaderData";
import PointStatus from "../components/mypage/PointStatus";
import Profile from "../components/mypage/Profile";
import useMyInfo from "../hooks/useMyInfo";
import PointHistoryCard from "../components/mypage/PointHistory";
import GiveAndTake from "../components/mypage/GiveAndTake";
import TagHistory from "../components/mypage/TagHistory";

const MyPage = () => {
  const { name, point } = useHeaderData();
  useMyInfo();
  return (
    <div className="MyPage">
      <Header name={name} point={point} />
      <div className="main">
        <div className="top-container">
          <PointStatus />
          <PointHistoryCard />
        </div>
        <Profile />
        <div className="bottom-container">
          <GiveAndTake />
          <TagHistory />
        </div>
      </div>
    </div>
  );
};

export default MyPage;
