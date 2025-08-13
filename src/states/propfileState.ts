import { atom, selector } from "recoil";

interface ProfileState {
  employeeId: number | null;
  name: string | null;
  email: string | null;
  profileImageUrl: string | null;
  totalBalance: number | null;
  giftableBalance: number | null;
  level: string | null;
  department: string | null;
  position: string | null;
  birthday: string | null;
  address: string | null;
  hireDate: string | null;
  phoneNumber: string | null;
}

interface EditingProfileState {
  profileImageUrl: string | null;
  personalEmail: string | null;
  phoneNumber: string | null;
  birthday: string | null;
  zonecode: string | null; // 우편번호
  address: string | null; // 메인 주소 (예: 서울특별시 강남구)
  detailAddress: string | null; // 상세 주소 (예: 테헤란로 123)
}

export const profileState = atom<ProfileState>({
  key: "profileState",
  default: {
    employeeId: null,
    name: null,
    email: null,
    profileImageUrl: null,
    totalBalance: null,
    giftableBalance: null,
    level: null,
    department: null,
    position: null,
    birthday: null,
    address: null,
    hireDate: null,
    phoneNumber: null,
  },
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      const savedState = localStorage.getItem("profile_state");
      if (savedState != null) {
        setSelf(JSON.parse(savedState));
      }

      onSet((newValue, _, isReset) => {
        if (isReset) {
          localStorage.removeItem("profile_state");
        } else {
          localStorage.setItem("profile_state", JSON.stringify(newValue));
        }
      });
    },
  ],
});

export const editingProfileState = atom<EditingProfileState>({
  key: "editingProfileState",
  default: selector({
    key: "editingProfileStateDefault",
    get: ({ get }) => {
      const profile = get(profileState);
      return {
        profileImageUrl: profile.profileImageUrl,
        personalEmail: profile.email,
        phoneNumber: profile.phoneNumber,
        birthday: profile.birthday,
        zonecode: null,
        address: profile.address,
        detailAddress: null,
      };
    },
  }),
});
