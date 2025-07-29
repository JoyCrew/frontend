import "../styles/Login.css";
import { useState } from "react";
import logo from "../assets/logo.svg";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import Popup from "../components/login/Popup";
import TextLink from "../components/login/TextLink";
import InputField from "../components/login/InputField";
import Button from "../components/common/Button";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log("로그인 시도", email, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="Login">
      <Popup>
        <img src={logo} alt="logo" className="PopupLogo" />
        <TextLink
          prefixText="계정이 없으시다면?"
          linkText="회원가입하기"
          to="/signup"
        />
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
          rightText="비밀번호 찾기"
          onRightTextClick={() => {
            console.log("비밀번호 찾기");
          }}
          icon={showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          className="password"
          onIconClick={togglePasswordVisibility}
        />
        <Button text="로그인" onClick={handleLogin} className="login" />
        <Button
          text="구글 계정으로 로그인"
          onClick={handleLogin}
          className="google"
        />
      </Popup>
    </div>
  );
};

export default Login;
