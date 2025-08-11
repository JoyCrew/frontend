import type { AllEmployee } from "./allEmployeeState";
import { atom } from "recoil";

export const searchManagerState = atom<AllEmployee[]>({
  key: "searchManagerState",
  default: [],
});
