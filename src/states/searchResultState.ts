import { atom } from "recoil";

export interface Employee {
  profileImageUrl: string | undefined;
  employeeName: string;
  departmentName: string;
  position: string | undefined;
}

export const searchResultState = atom<Employee[]>({
  key: "searchResultState",
  default: [
    {
      profileImageUrl: "",
      employeeName: "김민준",
      departmentName: "경영지원팀",
      position: "팀장",
    },
    {
      profileImageUrl: "",
      employeeName: "이서연",
      departmentName: "마케팅팀",
      position: "사원",
    },
    {
      profileImageUrl: "",
      employeeName: "박지훈",
      departmentName: "개발팀",
      position: "선임",
    },
    {
      profileImageUrl: "",
      employeeName: "최유진",
      departmentName: "디자인팀",
      position: "주임",
    },
    {
      profileImageUrl: "",
      employeeName: "정우성",
      departmentName: "영업팀",
      position: "과장",
    },
    {
      profileImageUrl: "",
      employeeName: "한지민",
      departmentName: "인사팀",
      position: "대리",
    },
    {
      profileImageUrl: "",
      employeeName: "윤하늘",
      departmentName: "재무팀",
      position: "팀장",
    },
  ],
});
