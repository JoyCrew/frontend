import { atom, selector } from "recoil";
import { allEmployeeState } from "./allEmployeeState";

//전송 가능 포인트
export const availablePointsState = atom<number>({
  key: "availablePointsState",
  default: 2500,
});

//전송할 포인트
export const sendingPointsState = atom<number>({
  key: "sendingPointsState",
  default: 0,
});

//선택한 인원 수 계산
export const selectedEmployeeCountSelector = selector<number>({
  key: "selectedEmployeeCountSelector",
  get: ({ get }) => {
    const allEmployees = get(allEmployeeState);
    return allEmployees.filter((employee) => employee.isSelected).length;
  },
});

//전송 후 남는 포인트
export const remainingPointsSelector = selector<number>({
  key: "remainingPointsSelector",
  get: ({ get }) => {
    const availablePoints = get(availablePointsState);
    const sendingPoints = get(sendingPointsState);
    return availablePoints - sendingPoints;
  },
});
