import { atom } from "recoil";

export interface Employee {
  employeeId: number;
  profileImageUrl: string | undefined;
  employeeName: string;
  departmentName: string;
  position: string | undefined;
  isSelected: boolean;
}

export const searchResultState = atom<Employee[]>({
  key: "searchResultState",
  default: [],
});
