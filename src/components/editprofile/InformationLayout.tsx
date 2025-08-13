import "../../styles/InformationLayout.css";

import { useRecoilValue, useRecoilState } from "recoil";
import { profileState } from "../../states/propfileState";
import { editingProfileState } from "../../states/propfileState";
import Button from "../common/Button";

interface InformationLayoutProps {
  label: string;
  name: string;
  type: string;
}

const InformationLayout: React.FC<InformationLayoutProps> = ({
  label,
  name,
  type,
}) => {
  const profile = useRecoilValue(profileState);
  const [editingProfile, setEditingProfile] =
    useRecoilState(editingProfileState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditingProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const profileValue = (profile[name as keyof typeof profile] || "").toString();

  const searchAddress = () => {
    new window.daum.Postcode({
      oncomplete: (data) => {
        setEditingProfile((prevProfile) => ({
          ...prevProfile,
          zonecode: data.zonecode,
          address: data.roadAddress,
          detailAddress: "",
        }));
      },
    }).open();
  };

  return (
    <div
      className={`InformationLayout ${
        name === "address" ? "addressLayout" : ""
      }`}
    >
      <label htmlFor={name}>{label}</label>

      {name === "address" ? (
        <div className="address-content-container">
          <div className="address-button">
            <input
              type="text"
              name="zonecode"
              value={editingProfile.zonecode || ""}
              readOnly
            />
            <Button
              text="주소 찾기"
              onClick={searchAddress}
              className="profileChange"
            />
          </div>
          <input
            type="text"
            name="address"
            value={editingProfile.address || ""}
            readOnly
          />
          <input
            type="text"
            name="detailAddress"
            placeholder="상세주소 입력"
            onChange={onChange}
            value={editingProfile.detailAddress || ""}
          />
        </div>
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          onChange={onChange}
          placeholder={profileValue}
          value={editingProfile[name as keyof typeof editingProfile] || ""}
        />
      )}
    </div>
  );
};

export default InformationLayout;
