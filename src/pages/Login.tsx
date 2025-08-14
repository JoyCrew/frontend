import "../styles/Login.css";
import { useState } from "react";
import axios from "axios";
import logo from "../assets/logo.svg";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import Popup from "../components/login/Popup";
import InputField from "../components/login/InputField";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authState } from "../states/authState";

const Login: React.FC = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const setAuthState = useSetRecoilState(authState);

  const nav = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/auth/login`,
        { email: email, password: password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("로그인 성공", response.data);
      const { accessToken, name, role, userId, totalPoint, profileImageUrl } =
        response.data;
      setAuthState({
        accessToken: accessToken,
        email: email,
        name: name,
        role: role,
        userId: userId,
        totalPoint: totalPoint,
        profileImageUrl: profileImageUrl,
        isLoggedIn: true,
      });
      nav("/home");
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인에 실패하였습니다");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="Login">
      <Popup>
        <img src={logo} alt="logo" className="PopupLogo" />
        <InputField
          label="이메일"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email"
        />
        <InputField
          label="비밀번호"
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          rightText="비밀번호 변경"
          onRightTextClick={() => {
            nav("/email_verification");
          }}
          icon={showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          className="password"
          onIconClick={togglePasswordVisibility}
        />
        <Button text="로그인" onClick={handleLogin} className="login" />
      </Popup>
    </div>
  );
};

export default Login;
