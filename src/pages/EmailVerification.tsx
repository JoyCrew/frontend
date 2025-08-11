import "../styles/EmailVerification.css";
import logo from "../assets/logo.svg";
import Popup from "../components/login/Popup";
import InputField from "../components/login/InputField";
import Button from "../components/common/Button";
import { useState } from "react";
import apiClient from "../api/axiosClient";

const EmailVerification: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = async () => {
    const isValid = validateEmail(email);
    setIsEmailValid(isValid);
    if (isValid) {
      try {
        const response = await apiClient.post(
          `/api/auth/password-reset/request`,
          { email: email }
        );
        console.log("이메일 전송 성공", response.data);
      } catch (error) {
        console.error("이메일 전송 실패:", error);
      }
    } else {
      console.log("유효하지 않은 이메일입니다.");
    }
  };

  return (
    <div className="EmailVerification">
      <Popup>
        <img src={logo} alt="logo" className="PopupLogo" />
        <p>비밀번호 변경을 위해 이메일 인증이 필요해요!</p>
        <InputField
          label="인증 이메일"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력해주세요"
          className={isEmailValid ? "email" : "email false"}
        />
        {!isEmailValid && (
          <p className="error-message">이메일을 올바르게 입력해주세요</p>
        )}
        <Button text="전송" onClick={handleEmailChange} className="small" />
      </Popup>
    </div>
  );
};

export default EmailVerification;
