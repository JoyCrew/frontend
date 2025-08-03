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
  },
});
