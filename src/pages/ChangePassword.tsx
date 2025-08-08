import "../styles/ChangePassword.css";
import Popup from "../components/login/Popup";
import InputField from "../components/login/InputField";
import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import Button from "../components/common/Button";

const ChangePassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isPasswordSame, setIsPasswordSame] = useState<boolean>(true);

  const onClickChangePassword = () => {
    if (password === password2) {
      console.log("비밀번호 변경 완료");
    } else {
      console.log("비밀번호가 일치하지 않습니다.");
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
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password"
        />
        <InputField
          label="비밀번호 확인"
          type="password"
          name="password"
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
