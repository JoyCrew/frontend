import "../styles/EditProfile.css";
import logo from "../assets/logo.svg";
import Button from "../components/common/Button";
import person from "../assets/person.svg";
import { useRecoilValue, useRecoilState } from "recoil";
import { profileState } from "../states/propfileState";
import { useNavigate } from "react-router-dom";
import InformationLayout from "../components/editprofile/InformationLayout";
import apiClient from "../api/axiosClient";
import { editingProfileState } from "../states/propfileState";
import { MdEdit } from "react-icons/md";
import { useRef } from "react";

const EditProfile: React.FC = () => {
  const nav = useNavigate();
  const profile = useRecoilValue(profileState);
  const [editingProfile, setEditingProfile] =
    useRecoilState(editingProfileState);
  const fullAddress = `${editingProfile.address || ""} ${
    editingProfile.detailAddress || ""
  }`.trim();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onSubmitEdit = async () => {
    if (editingProfile) {
      alert("정보를 수정해주세요");
    }

    try {
      const response = await apiClient.patch("/api/user/profile", {
        name: profile.name,
        profileImageUrl: editingProfile.profileImageUrl,
        personalEmail: editingProfile.personalEmail,
        phoneNumber: editingProfile.phoneNumber,
        birthday: editingProfile.birthday,
        address: fullAddress,
      });
      console.log(response.data);
      nav("/mypage");
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("오류가 발생하였습니다. 다시 시도해보세요");
    }
  };

  const onClickPassword = () => {
    console.log("비밀번호 변경");
  };

  const changeImage = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingProfile((prev) => ({
          ...prev,
          profileImageUrl: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="EditProfile">
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
        <div className="item-container">
          <div className="top-container">
            <h3>내 정보</h3>
            <Button text="정보 수정" onClick={onSubmitEdit} className="small" />
          </div>
          <div className="main-container">
            <div className="image-name">
              <div>
                <img
                  src={
                    editingProfile.profileImageUrl
                      ? editingProfile.profileImageUrl
                      : person
                  }
                  alt="profile"
                />
                <MdEdit className="edit-icon" onClick={changeImage} />
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                  accept="image/*"
                />
              </div>

              <h5>{profile.name}</h5>
            </div>
            <div className="text-div">
              <div className="left-div">
                <InformationLayout label="이메일" name="email" type="email" />
                <div className="password">
                  <p>비밀번호</p>
                  <Button
                    text="비밀번호 변경"
                    onClick={onClickPassword}
                    className="profileChange"
                  />
                </div>
                <InformationLayout
                  label="휴대폰 번호"
                  name="phoneNumber"
                  type="tel"
                />
                <InformationLayout
                  label="주소"
                  name="address"
                  type="textarea"
                />
              </div>
              <div className="right-div">
                <InformationLayout
                  label="생년월일"
                  name="birthday"
                  type="date"
                />
                <InformationLayout label="입사일" name="hireDate" type="date" />
                <InformationLayout label="부서" name="department" type="text" />
                <InformationLayout label="포지션" name="position" type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
