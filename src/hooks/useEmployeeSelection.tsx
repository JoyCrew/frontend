import { RecoilState, useRecoilState } from "recoil";
import type { Employee } from "../states/searchResultState";

const useEmployeeSelection = (state: RecoilState<Employee[]>) => {
  const [list, setList] = useRecoilState(state);

  const handleToggle = (index: number) => {
    setList((prevList) => {
      const isAlreadySelected = prevList[index].isSelected;
      const newList = prevList.map((employee, i) => {
        return {
          ...employee,
          isSelected: !isAlreadySelected && i === index,
        };
      });
      return newList;
    });
  };

  return { list, handleToggle };
};

export default useEmployeeSelection;
