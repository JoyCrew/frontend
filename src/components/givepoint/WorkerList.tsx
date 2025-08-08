import "../../styles/WorkerList.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useEmployeeSelection from "../../hooks/useEmployeeSelection";
import { searchResultState } from "../../states/searchResultState";
import WorkerListItem from "./WorkerListItem";
import type { Employee } from "../../states/searchResultState";
import Button from "../common/Button";

const WorkerList: React.FC = () => {
  const nav = useNavigate();
  const { list: searchResult, handleToggle } =
    useEmployeeSelection(searchResultState);
  const [buttonClassName, setButtonClassName] = useState<string>("smallGray");

  useEffect(() => {
    const selectedEmployee = searchResult.find(
      (employee) => employee.isSelected
    );
    if (selectedEmployee) {
      setButtonClassName("small");
    } else {
      setButtonClassName("smallGray");
    }
  }, [searchResult]);

  const onClickButton = () => {
    const selectedEmployee = searchResult.find(
      (employee) => employee.isSelected
    );

    if (selectedEmployee) {
      nav("/give_point/send/");
    } else {
      console.log("선택 필수");
    }
  };

  return (
    <div className="WorkerList">
      <div className="title">
        <p className="name">이름</p>
        <p className="department">부서</p>
        <p className="position">포지션</p>
      </div>
      <div className="item-container">
        {searchResult.length > 0 ? (
          searchResult.map((employee: Employee, index: number) => (
            <WorkerListItem
              key={index}
              employee={employee}
              onToggle={() => handleToggle(index)}
            />
          ))
        ) : (
          <p></p>
        )}
      </div>
      <Button text="다음" onClick={onClickButton} className={buttonClassName} />
    </div>
  );
};

export default WorkerList;
