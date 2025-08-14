import { atom } from "recoil";

export interface TagState {
  name: string;
  isSelected: boolean;
  element: string;
  count: number;
}

export const tagState = atom<TagState[]>({
  key: "tagState",
  default: [
    {
      name: "Customers",
      isSelected: false,
      element: "CUSTOMERS",
      count: 0,
    },
    {
      name: "Flexibility",
      isSelected: false,
      element: "FLEXIBILITY",
      count: 0,
    },
    {
      name: "Goals",
      isSelected: false,
      element: "GOALS",
      count: 0,
    },
    {
      name: "Extraordinary",
      isSelected: false,
      element: "EXTRAORDINARY",
      count: 0,
    },
    {
      name: "Teamwork",
      isSelected: false,
      element: "TEAMWORK",
      count: 0,
    },
    {
      name: "Innovation",
      isSelected: false,
      element: "INNOVATION",
      count: 0,
    },
    {
      name: "Simplicity",
      isSelected: false,
      element: "SIMPLICITY",
      count: 0,
    },
    {
      name: "Deliver Results",
      isSelected: false,
      element: "DELIVER_RESULTS",
      count: 0,
    },
  ],
});
