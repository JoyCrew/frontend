import { RecoilState, useRecoilState } from "recoil";

const useEmployeeSelection = <T extends { isSelected: boolean }>(
  state: RecoilState<T[]>
) => {
  const [list, setList] = useRecoilState(state);

  const handleToggle = (index: number) => {
    setList((prevList) => {
      const isAlreadySelected = prevList[index].isSelected;
      const newList = prevList.map((item, i) => {
        return {
          ...item,
          isSelected: !isAlreadySelected && i === index,
        };
      });
      return newList;
    });
  };

  return { list, handleToggle };
};

export default useEmployeeSelection;
