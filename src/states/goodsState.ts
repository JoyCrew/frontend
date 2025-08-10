import { atom } from "recoil";

export interface GoodsState {
  image: string | null;
  name: string;
  point: number;
}

export const goodsState = atom<GoodsState[]>({
  key: "goodsState",
  default: [
    {
      image: "",
      name: "상품1",
      point: 100,
    },
    {
      image: "",
      name: "상품2",
      point: 100,
    },
    {
      image: "",
      name: "상품3",
      point: 100,
    },
    {
      image: "",
      name: "상품4",
      point: 100,
    },
    {
      image: "",
      name: "상품5",
      point: 100,
    },
    {
      image: "",
      name: "상품6",
      point: 100,
    },
  ],
});
