import { atom } from "recoil";

export interface TagState {
  name: string;
  isSelected: boolean;
}

export const tagState = atom<TagState[]>({
  key: "tagState",
  default: [
    {
      name: "Customers",
      isSelected: false,
    },
    {
      name: "Flexibility",
      isSelected: false,
    },
    {
      name: "Goals",
      isSelected: false,
    },
    {
      name: "Extraordinary",
      isSelected: false,
    },
    {
      name: "Teamwork",
      isSelected: false,
    },
    {
      name: "Innovation",
      isSelected: false,
    },
    {
      name: "Simplicity",
      isSelected: false,
    },
    {
      name: "Deliver Results",
      isSelected: false,
    },
  ],
});
