import "../../styles/EditPassword.css";
import PasswordLayout from "./PasswordLayout";
import { IoMdClose } from "react-icons/io";
import Button from "../common/Button";
import { useState, useEffect } from "react";
import apiClient from "../../api/axiosClient";

interface EditPasswordProps {
  onCancel: () => void;
}

const EditPassword: React.FC<EditPasswordProps> = ({ onCancel }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordSame, setIsPasswordSame] = useState<boolean>(true);

  useEffect(() => {
    if (newPassword && confirmPassword) {
      setIsPasswordSame(newPassword === confirmPassword);
    } else {
      setIsPasswordSame(true);
    }
  }, [newPassword, confirmPassword]);

  const onSubmit = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("모든 비밀번호 필드를 입력해주세요.");
      return;
    }

    if (!isPasswordSame) {
      alert("새 비밀번호와 확인 비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      await apiClient.post("/api/user/password/verify", {
        currentPassword: currentPassword,
      });

      await apiClient.post("/api/user/password", {
        newPassword: newPassword,
      });

      alert("비밀번호가 성공적으로 변경되었습니다.");
      onCancel();
    } catch (error) {
      console.log(error);
      onCancel();
    }
  };

  return (
    <div className="popup-overlay">
      <div className="EditPassword">
        <IoMdClose onClick={onCancel} className="close-icon" />
        <div className="password-container">
          <PasswordLayout
            label="기존 비밀번호"
            type="password"
            name="currentPassword"
            placeholder="비밀번호"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <PasswordLayout
            label="비밀번호 변경"
            name="newPassword"
            type="password"
            placeholder="비밀번호 변경"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <div className="last-passwordLayout">
            <PasswordLayout
              label="비밀번호 확인"
              name="confirmPassword"
              type="password"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={isPasswordSame.toString()}
            />
            {!isPasswordSame && (
              <p className="error-message">비밀번호가 일치하지 않습니다</p>
            )}
          </div>
        </div>
        <Button text="변경하기" className="small" onClick={onSubmit} />
      </div>
    </div>
  );
};

export default EditPassword;
