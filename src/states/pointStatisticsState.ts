import { atom } from "recoil";

export interface PointStatisticsState {
  transactionId: number;
  type: string;
  amount: number;
  counterparty: string;
  message: string | null;
  transactionDate: string;
  profileImageUrl: string | null;
  department: string | null;
}

export const receivePointStatisticsState = atom<PointStatisticsState[]>({
  key: "receivePointStatisticsState",
  default: [],
});

export const sendPointStatisticsState = atom<PointStatisticsState[]>({
  key: "sendPointStatisticsState",
  default: [],
});
