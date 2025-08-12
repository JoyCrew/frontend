import "../styles/MyPage.css";
import Header from "../components/common/Header";
import PointStatus from "../components/mypage/PointStatus";
import Profile from "../components/mypage/Profile";
import useMyInfo from "../hooks/useMyInfo";
import PointHistoryCard from "../components/mypage/PointHistory";
import GiveAndTake from "../components/mypage/GiveAndTake";
import TagHistory from "../components/mypage/TagHistory";

const MyPage = () => {
  useMyInfo();
  return (
    <div className="MyPage">
      <Header  />
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
