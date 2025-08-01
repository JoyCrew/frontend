import "../../styles/Profile.css";
import { useRecoilValue } from "recoil";
import { authState } from "../../states/authState";
import profile from "../../assets/profile.svg";

const Profile: React.FC = () => {
  const auth = useRecoilValue(authState);
  const { name } = auth;
  return (
    <div className="Profile">
      <img src={profile} alt="프로필 사진" />
      <p>{name}</p>
      <div className="button-container">
        <button>정보 수정</button>
        <button>로그아웃</button>
      </div>
    </div>
  );
};

export default Profile;
