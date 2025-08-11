import { atom } from "recoil";

export interface AllEmployee {
  employeeId: number;
  employeeName: string;
  email: string;
  departmentName: string;
  position: string | undefined;
  profileImageUrl: string | undefined;
  adminLevel: string | undefined;
  birthday: string | undefined;
  address: string | undefined;
  hireDate: string | undefined;
  isSelected: boolean;
  pointsToSend: number;
}

export const allEmployeeState = atom<AllEmployee[]>({
  key: "allEmployeeState",
  default: [],
});
