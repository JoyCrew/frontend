import { atom } from "recoil";

export interface PointHistoryState {
  transactionId: number;
  type: string;
  amount: number;
  counterparty: string;
  message: string;
  transactionDate: string;
}

export const pointHistoryState = atom<PointHistoryState[]>({
  key: "pointHistoryState",
  default: [],
});
