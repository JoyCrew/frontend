import "../styles/Signup.css";
import { useState } from "react";
import background from "../assets/background.svg";
import logo from "../assets/logo.svg";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import Popup from "../components/login/Popup";
import InputField from "../components/login/InputField";
import Button from "../components/common/Button";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = () => {
    console.log("회원가입 완료");
  };

  return (
    <div className="SignUp">
      <img src={background} alt="" className="background" />
      <Popup>
        <img src={logo} alt="logo" className="PopupLogo" />
        <InputField
          label="이메일"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력해주세요"
          className="email"
        />
        <InputField
          label="이름"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="사용자 이름"
          className="name"
        />
        <InputField
          label="부서"
          type="text"
          name="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          placeholder="부서"
          className="department"
        />
        <InputField
          label="비밀번호"
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          placeholder="비밀번호를 입력하세요"
          className="password"
          onIconClick={togglePasswordVisibility}
        />
        <Button text="회원가입" onClick={handleSignUp} className="signup" />
      </Popup>
    </div>
  );
};
export default SignUp;
