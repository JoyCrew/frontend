import { atom } from "recoil";

export interface GoodsState {
  id: number;
  keyword: string;
  rankOrder: number;
  name: string;
  thumbnailUrl: string | null;
  price: number;
  detailUrl: string;
  itemId: number;
  registeredAt: string;
}

export const goodsState = atom<GoodsState[]>({
  key: "goodsState",
  default: [
    {
      id: 1,
      keyword: "HEALTH_SUPPLEMENTS",
      rankOrder: 1,
      name: "더미상품_1",
      thumbnailUrl: "",
      price: 5652,
      detailUrl: "https://example.com/products/1",
      itemId: 1001,
      registeredAt: "2025-07-26",
    },
    {
      id: 2,
      keyword: "STATIONERY_OFFICE",
      rankOrder: 2,
      name: "더미상품_2",
      thumbnailUrl: "",
      price: 7433,
      detailUrl: "https://example.com/products/2",
      itemId: 1002,
      registeredAt: "2025-06-14",
    },
    {
      id: 3,
      keyword: "HOME_INTERIOR",
      rankOrder: 3,
      name: "더미상품_3",
      thumbnailUrl: "",
      price: 11525,
      detailUrl: "https://example.com/products/3",
      itemId: 1003,
      registeredAt: "2024-11-09",
    },
    {
      id: 4,
      keyword: "HOME_INTERIOR",
      rankOrder: 4,
      name: "더미상품_4",
      thumbnailUrl: "",
      price: 12615,
      detailUrl: "https://example.com/products/4",
      itemId: 1004,
      registeredAt: "2025-03-23",
    },
    {
      id: 5,
      keyword: "HOME_INTERIOR",
      rankOrder: 5,
      name: "더미상품_5",
      thumbnailUrl: "",
      price: 43069,
      detailUrl: "https://example.com/products/5",
      itemId: 1005,
      registeredAt: "2025-01-01",
    },
    {
      id: 6,
      keyword: "HOME_INTERIOR",
      rankOrder: 6,
      name: "더미상품_6",
      thumbnailUrl: "",
      price: 44028,
      detailUrl: "https://example.com/products/6",
      itemId: 1006,
      registeredAt: "2025-04-18",
    },
    {
      id: 7,
      keyword: "STATIONERY_OFFICE",
      rankOrder: 7,
      name: "더미상품_7",
      thumbnailUrl: "",
      price: 15427,
      detailUrl: "https://example.com/products/7",
      itemId: 1007,
      registeredAt: "2025-01-20",
    },
    {
      id: 8,
      keyword: "WOMEN_CLOTHING",
      rankOrder: 8,
      name: "더미상품_8",
      thumbnailUrl: "",
      price: 4592,
      detailUrl: "https://example.com/products/8",
      itemId: 1008,
      registeredAt: "2024-09-02",
    },
    {
      id: 9,
      keyword: "WOMEN_CLOTHING",
      rankOrder: 9,
      name: "더미상품_9",
      thumbnailUrl: "",
      price: 40980,
      detailUrl: "https://example.com/products/9",
      itemId: 1009,
      registeredAt: "2024-11-02",
    },
    {
      id: 10,
      keyword: "WOMEN_CLOTHING",
      rankOrder: 10,
      name: "더미상품_10",
      thumbnailUrl: "",
      price: 17271,
      detailUrl: "https://example.com/products/10",
      itemId: 1010,
      registeredAt: "2025-05-12",
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
