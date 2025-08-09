import "../styles/ChangePassword.css";
import Popup from "../components/login/Popup";
import InputField from "../components/login/InputField";
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import Button from "../components/common/Button";
import apiClient from "../api/axiosClient";

const ChangePassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isPasswordSame, setIsPasswordSame] = useState<boolean>(true);

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const nav = useNavigate();

  const onClickChangePassword = async () => {
    if (!token) {
      alert("토큰이 존재하지 않습니다.");
      nav("/email_verification");
      return;
    }
    if (password !== password2) {
      setIsPasswordSame(false);
      return;
    }
    try {
      const response = await apiClient.post(`/api/auth/reset-password`, {
        newPassword: password,
        token: token,
      });
      console.log("비밀번호 변경 성공", response.data);
      nav("/");
    } catch (error) {
      console.error("비밀번호 변경 실패:", error);
      alert("비밀번호 변경에 실패했습니다. 다시 시도해 주세요.");
    }
  };

  useEffect(() => {
    if (password && password2) {
      setIsPasswordSame(password === password2);
    } else {
      setIsPasswordSame(true);
    }
  }, [password, password2]);

  return (
    <div className="ChangePassword">
      <Popup>
        <img src={logo} alt="logo" className="PopupLogo" />
        <InputField
          label="비밀번호 변경"
          type="password"
          name="password1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password"
        />
        <InputField
          label="비밀번호 확인"
          type="password"
          name="password2"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          className="password-check"
        />
        {!isPasswordSame && (
          <p className="error-message">비밀번호가 일치하지 않습니다</p>
        )}
        <Button
          text="비밀번호 변경"
          onClick={onClickChangePassword}
          className="login"
        />
      </Popup>
    </div>
  );
};

export default ChangePassword;
