import "../../styles/Profile.css";
import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";
import { authState } from "../../states/authState";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/profile.svg";
import apiClient from "../../api/axiosClient";

const Profile: React.FC = () => {
  const nav = useNavigate();
  const auth = useRecoilValue(authState);
  const { name } = auth;
  const setAuthState = useSetRecoilState(authState);

  const handleLogout = async () => {
    try {
      const response = await apiClient.post(`/api/auth/logout`);
      console.log("로그아웃 성공", response.data);
      setAuthState({
        accessToken: null,
        email: null,
        name: null,
        role: null,
        userId: null,
        isLoggedIn: false,
      });
      nav("/");
    } catch (error) {
      console.error("로그아웃 실패:", error);
      setAuthState({
        accessToken: null,
        email: null,
        name: null,
        role: null,
        userId: null,
        isLoggedIn: false,
      });
    }
  };
  return (
    <div className="Profile">
      <img src={profile} alt="프로필 사진" />
      <p>{name}</p>
      <div className="button-container">
        <button>정보 수정</button>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    </div>
  );
};

export default Profile;
