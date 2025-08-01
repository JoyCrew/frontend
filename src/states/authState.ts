import { atom } from "recoil";

interface AuthState {
  accessToken: string | null;
  email: string | null;
  name: string | null;
  role: string | null;
  userId: string | null;
  isLoggedIn: boolean;
}

export const authState = atom<AuthState>({
  key: "authState",
  default: {
    accessToken: null,
    email: null,
    name: null,
    role: null,
    userId: null,
    isLoggedIn: false,
  },
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      const savedState = localStorage.getItem("auth_state");
      if (savedState) {
        setSelf(JSON.parse(savedState));
      }
      onSet((newValue, _, isReset) => {
        if (isReset) {
          localStorage.removeItem("auth_state");
        } else {
          localStorage.setItem("auth_state", JSON.stringify(newValue));
        }
      });
    },
  ],
});
