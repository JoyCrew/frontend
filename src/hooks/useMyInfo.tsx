import { useSetRecoilState } from "recoil";
import { profileState } from "../states/propfileState";
import { useEffect } from "react";
import apiClient from "../api/axiosClient";

const useMyInfo = () => {
  const setProfile = useSetRecoilState(profileState);
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await apiClient.get(`/api/user/profile`);
        console.log("프로필 불러오기 성공", response.data);
        const {
          employeeId,
          name,
          email,
          profileImageUrl,
          totalBalance,
          giftableBalance,
          level,
          department,
          position,
          birthday,
          address,
          hireDate,
        } = response.data;
        setProfile({
          employeeId: employeeId,
          name: name,
          email: email,
          profileImageUrl: profileImageUrl,
          totalBalance: totalBalance,
          giftableBalance: giftableBalance,
          level: level,
          department: department,
          position: position,
          birthday: birthday,
          address: address,
          hireDate: hireDate,
        });
      } catch (error) {
        console.error("프로필 불러오기 실패", error);
      }
    };

    loadProfile();
  }, [setProfile]);
};

export default useMyInfo;
