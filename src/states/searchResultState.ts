import { atom } from "recoil";

export interface Employee {
  profileImageUrl: string | null;
  employeeName: string;
  departmentName: string;
  position: string | null;
}

export const searchResultState = atom<Employee[]>({
  key: "searchResultState",
  default: [],
});
