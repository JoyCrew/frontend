import { atom } from "recoil";

export interface OrderState {
  orderId: number;
  employeeId: number;
  productId: number;
  productName: string;
  thumbnailUrl: string | null;
  productItemId: number;
  productUnitPrice: number;
  quantity: number;
  totalPrice: number;
  status: string;
  orderedAt: string;
  shippedAt: string | null;
  deliveredAt: string | null;
}

export const orderState = atom<OrderState[]>({
  key: "orderState",
  default: [],
});
