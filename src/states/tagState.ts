import { atom } from "recoil";

interface TagState {
  name: string;
  isSelected: boolean;
}

export const TagState = atom<TagState[]>({
  key: "tagState",
  default: [
    {
      name: "태그1",
      isSelected: false,
    },
    {
      name: "태그2",
      isSelected: false,
    },
    {
      name: "태그3",
      isSelected: false,
    },
    {
      name: "태그4",
      isSelected: false,
    },
    {
      name: "태그5",
      isSelected: false,
    },
    {
      name: "태그6",
      isSelected: false,
    },
    {
      name: "태그7",
      isSelected: false,
    },
    {
      name: "태그8",
      isSelected: false,
    },
  ],
});
