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
  default: [
    {
      employeeId: 1,
      employeeName: "김땡땡",
      email: "minjun.kim@example.com",
      departmentName: "경영지원팀",
      position: "사원",
      profileImageUrl: "",
      adminLevel: "EMPLOYEE",
      birthday: "1992-03-15",
      address: "서울시 강남구 테헤란로 123",
      hireDate: "2020-05-20",
      isSelected: false,
      pointsToSend: 0,
    },
    {
      employeeId: 2,
      employeeName: "이서연",
      email: "seoyeon.lee@example.com",
      departmentName: "마케팅팀",
      position: "대리",
      profileImageUrl: "",
      adminLevel: "EMPLOYEE",
      birthday: "1995-07-22",
      address: "경기도 성남시 분당구 판교로 456",
      hireDate: "2021-08-11",
      isSelected: false,
      pointsToSend: 0,
    },
    {
      employeeId: 3,
      employeeName: "박지훈",
      email: "jihun.park@example.com",
      departmentName: "개발팀",
      position: "팀장",
      profileImageUrl: "",
      adminLevel: "MANAGER",
      birthday: "1988-11-03",
      address: "서울시 마포구 월드컵북로 789",
      hireDate: "2018-02-10",
      isSelected: false,
      pointsToSend: 0,
    },
    {
      employeeId: 4,
      employeeName: "최유진",
      email: "yujin.choi@example.com",
      departmentName: "경영지원팀",
      position: "부장",
      profileImageUrl: "",
      adminLevel: "ADMIN",
      birthday: "1985-01-25",
      address: "인천시 연수구 송도동 1011",
      hireDate: "2015-09-01",
      isSelected: false,
      pointsToSend: 0,
    },
    {
      employeeId: 5,
      employeeName: "정하윤",
      email: "hayun.jeong@example.com",
      departmentName: "마케팅팀",
      position: "사원",
      profileImageUrl: "",
      adminLevel: "EMPLOYEE",
      birthday: "1998-04-18",
      address: "부산시 해운대구 마린시티 1213",
      hireDate: "2022-03-30",
      isSelected: false,
      pointsToSend: 0,
    },
  ],
});
