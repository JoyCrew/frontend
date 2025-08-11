import { atom } from "recoil";

export interface GoodsState {
  id: number;
  image: string | null;
  name: string;
  point: number;
}

export const goodsState = atom<GoodsState[]>({
  key: "goodsState",
  default: [
    {
      id: 1,
      image: "",
      name: "상품1",
      point: 100,
    },
    {
      id: 2,
      image: "",
      name: "상품2",
      point: 100,
    },
    {
      id: 3,
      image: "",
      name: "상품3",
      point: 100,
    },
    {
      id: 4,
      image: "",
      name: "상품4",
      point: 100,
    },
    {
      id: 5,
      image: "",
      name: "상품5",
      point: 100,
    },
    {
      id: 6,
      image: "",
      name: "상품6",
      point: 100,
    },
  ],
});

export const selectedGoodsIdState = atom<number | null>({
  key: "selectedGoodsIdState",
  default: null,
});
