import { atom } from "recoil";

export interface TagState {
  name: string;
  isSelected: boolean;
  element: string;
}

export const tagState = atom<TagState[]>({
  key: "tagState",
  default: [
    {
      name: "Customers",
      isSelected: false,
      element: "CUSTOMERS",
    },
    {
      name: "Flexibility",
      isSelected: false,
      element: "FLEXIBILITY",
    },
    {
      name: "Goals",
      isSelected: false,
      element: "GOALS",
    },
    {
      name: "Extraordinary",
      isSelected: false,
      element: "EXTRAORDINARY",
    },
    {
      name: "Teamwork",
      isSelected: false,
      element: "TEAMWORK",
    },
    {
      name: "Innovation",
      isSelected: false,
      element: "INNOVATION",
    },
    {
      name: "Simplicity",
      isSelected: false,
      element: "SIMPLICITY",
    },
    {
      name: "Deliver Results",
      isSelected: false,
      element: "DELIVER_RESULTS",
    },
  ],
});
