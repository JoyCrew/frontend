import { RecoilState, useRecoilState } from "recoil";

const useMultipleSelection = <T extends { isSelected: boolean }>(
  state: RecoilState<T[]>
) => {
  const [list, setList] = useRecoilState(state);

  const handleToggle = (index: number) => {
    setList((prevList) => {
      const newList = prevList.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            isSelected: !item.isSelected,
          };
        }
        return item;
      });
      return newList;
    });
  };

  return { list, handleToggle };
};

export default useMultipleSelection;
