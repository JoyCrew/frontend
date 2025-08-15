import { atom } from "recoil";

export interface GoodsState {
  id: number;
  keyword: string | null;
  rankOrder: number;
  name: string;
  thumbnailUrl: string | null;
  price: number;
  detailUrl: string | null;
  itemId: string | number;
  registeredAt: string;
}

export const goodsState = atom<GoodsState[]>({
  key: "goodsState",
  default: [],
});

export const selectedGoodsIdState = atom<number | null>({
  key: "selectedGoodsIdState",
  default: null,
});

export const recentGoodsState = atom<GoodsState[]>({
  key: "recentGoodsState",
  default: [],
});

export const selectedCategoryState = atom<string | null>({
  key: "selectedCategoryState",
  default: null,
});

export const categoryState = atom<GoodsState[]>({
  key: "categoryState",
  default: [],
});

export const searchGoodsState = atom<GoodsState[]>({
  key: "searchGoodsState",
  default: [],
});

export const isSearchGoodsState = atom<boolean>({
  key: "isSearchGoodsState",
  default: false,
});
