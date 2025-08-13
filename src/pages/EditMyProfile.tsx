import "../styles/EditMyProfile.css";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import EditProfile from "../components/editprofile/EditProfile";

const EditMyProfile: React.FC = () => {
  const nav = useNavigate();
  return (
    <div className="EditMyProfile">
      <div className="header-container">
        <div className="profile-header">
          <img
            className="logo"
            src={logo}
            alt="logo"
            onClick={() => {
              nav("/home");
            }}
          />
        </div>
      </div>
      <div className="main">
        <EditProfile />
      </div>
    </div>
  );
};

export default EditMyProfile;
