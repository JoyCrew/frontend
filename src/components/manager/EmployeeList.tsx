import "../../styles/EmployeeList.css";
import { allEmployeeState } from "../../states/AllEmployeeState";
import type { Employee } from "../../states/searchResultState";
import WorkerListItem from "../givepoint/WorkerListItem";
import useEmployeeSelection from "../../hooks/useEmployeeSelection";
import EmployeeUpload from "./EmployeeUpload";

const EmployeeList: React.FC = () => {
  const { list: allEmployee, handleToggle } =
    useEmployeeSelection(allEmployeeState);

  return (
    <div className="EmployeeList">
      <h1>직원 등록</h1>
      <EmployeeUpload />
      <div className="WorkerList">
        <div className="title">
          <p className="name">이름</p>
          <p className="department">부서</p>
          <p className="position">포지션</p>
        </div>
        <div className="item-container">
          {allEmployee.length > 0 ? (
            allEmployee.map((employee: Employee, index: number) => (
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
      </div>
    </div>
  );
};

export default EmployeeList;
