import "../styles/MyPage.css";
import Header from "../components/common/Header";
import useHeaderData from "../hooks/useHeaderData";
import PointStatus from "../components/mypage/PointStatus";

const MyPage = () => {
  const { name, point } = useHeaderData();
  return (
    <div className="main">
      <div className="MyPage">
        <Header name={name} point={point} />
        <PointStatus />
      </div>
    </div>
  );
};

export default MyPage;
