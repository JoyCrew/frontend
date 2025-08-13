import { atom } from "recoil";

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
