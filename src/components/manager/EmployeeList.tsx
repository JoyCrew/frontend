import "../../styles/EmployeeList.css";
import type { AllEmployee } from "../../states/allEmployeeState";
import { allEmployeeState } from "../../states/allEmployeeState";
import useEmployeeSelection from "../../hooks/useEmployeeSelection";
import EmployeeUpload from "./EmployeeUpload";
import WorkerListItem from "../givepoint/WorkerListItem";

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
          <p className="joining">입사일</p>
          <p className="birth">생년월일</p>
        </div>
        <div className="item-container">
          {allEmployee.length > 0 ? (
            allEmployee.map((employee: AllEmployee, index: number) => (
              <WorkerListItem
                key={index}
                employee={employee}
                onToggle={() => handleToggle(index)}
                showDetails="joining-birth"
                className="EmployeeListItem"
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
