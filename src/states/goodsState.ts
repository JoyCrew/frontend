import { atom } from "recoil";

export interface GoodsState {
  id: number;
  keyword: string | null;
  rankOrder: number;
  name: string;
  thumbnailUrl: string | null;
  price: number;
  detailUrl: string | null;
  itemId: number;
  registeredAt: string;
}

export const goodsState = atom<GoodsState[]>({
  key: "goodsState",
  default: [
    {
      id: 1,
      keyword: "BEAUTY",
      rankOrder: 1,
      name: "무선 키보드",
      thumbnailUrl: "",
      price: 35000,
      detailUrl: "",
      itemId: 1001,
      registeredAt: "2025-08-01 00:00:00",
    },
    {
      id: 2,
      keyword: "BEAUTY",
      rankOrder: 2,
      name: "게이밍 마우스",
      thumbnailUrl: "",
      price: 25000,
      detailUrl: "www.w.djslkfjdslkfjksldjf;sl",
      itemId: 1002,
      registeredAt: "2025-08-02 00:00:00",
    },
    {
      id: 3,
      keyword: "BEAUTY",
      rankOrder: 3,
      name: "27인치 모니터",
      thumbnailUrl: "",
      price: 220000,
      detailUrl: "",
      itemId: 1003,
      registeredAt: "2025-08-03 00:00:00",
    },
    {
      id: 4,
      keyword: "BEAUTY",
      rankOrder: 4,
      name: "무선 헤드셋",
      thumbnailUrl: "",
      price: 90000,
      detailUrl: "",
      itemId: 1004,
      registeredAt: "2025-08-04 00:00:00",
    },
    {
      id: 5,
      keyword: "BEAUTY",
      rankOrder: 5,
      name: "RGB 마우스패드",
      thumbnailUrl: "",
      price: 20000,
      detailUrl: "",
      itemId: 1005,
      registeredAt: "2025-08-05 00:00:00",
    },
    {
      id: 6,
      keyword: "BEAUTY",
      rankOrder: 6,
      name: "14인치 노트북",
      thumbnailUrl: "",
      price: 1200000,
      detailUrl: "",
      itemId: 1006,
      registeredAt: "2025-08-06 00:00:00",
    },
    {
      id: 7,
      keyword: "BEAUTY",
      rankOrder: 7,
      name: "USB-C 허브",
      thumbnailUrl: "",
      price: 45000,
      detailUrl: "",
      itemId: 1007,
      registeredAt: "2025-08-07 00:00:00",
    },
    {
      id: 8,
      keyword: "BEAUTY",
      rankOrder: 8,
      name: "블루투스 스피커",
      thumbnailUrl: "",
      price: 80000,
      detailUrl: "",
      itemId: 1008,
      registeredAt: "2025-08-08 00:00:00",
    },
    {
      id: 9,
      keyword: "BEAUTY",
      rankOrder: 9,
      name: "HD 웹캠",
      thumbnailUrl: "",
      price: 60000,
      detailUrl: "",
      itemId: 1009,
      registeredAt: "2025-08-09 00:00:00",
    },
    {
      id: 10,
      keyword: "BEAUTY",
      rankOrder: 10,
      name: "1TB 외장하드",
      thumbnailUrl: "",
      price: 120000,
      detailUrl: "",
      itemId: 1010,
      registeredAt: "2025-08-10 00:00:00",
    },
  ],
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
  // BEAUTY, APPLIANCES, FURNITURE, CLOTHING, FOOD
  key: "categoryState",
  default: [],
});
