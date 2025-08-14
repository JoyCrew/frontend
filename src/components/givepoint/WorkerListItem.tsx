import "../../styles/WorkerListItem.css";
import type { Employee } from "../../states/searchResultState";
import type { AllEmployee } from "../../states/allEmployeeState";
import employeePerson from "../../assets/employeePerson.svg";
import EmployeeDetail from "../manager/EmployeeDetail";
import { useState } from "react";

interface WorkerListItemProps {
  employee: Employee | AllEmployee;
  onToggle: () => void;
  showDetails?: string;
  className?: string;
  onPointsChange?: (employeeId: number, value: number) => void;
}

const hasDetails = (emp: Employee | AllEmployee): emp is AllEmployee => {
  return "hireDate" in emp && "birthday" in emp;
};

const WorkerListItem: React.FC<WorkerListItemProps> = ({
  employee,
  onToggle,
  showDetails,
  className,
  onPointsChange,
}) => {
  const [isDetail, setIsDetail] = useState<boolean>(false);
  const handlePointsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onPointsChange) {
      onPointsChange(employee.employeeId, Number(e.target.value));
    }
  };

  const showDetail = () => {
    if (showDetails === "joining-birth") {
      setIsDetail(true);
    }
  };

  return (
    <div className={className}>
      <div className="WorkerListItem">
        <input
          type="checkbox"
          className="checkbox"
          checked={employee.isSelected}
          onChange={onToggle}
        />
        <div className="info-container">
          <div className="image-name" onClick={showDetail}>
            <img
              src={
                employee.profileImageUrl
                  ? employee.profileImageUrl
                  : employeePerson
              }
              alt=""
            />
            <p className="name">{employee.employeeName}</p>
          </div>
          <p className="department">{employee.departmentName}</p>
          <p className="position">{employee.position}</p>
          {showDetails === "joining-birth" && hasDetails(employee) && (
            <>
              <p className="joining">{employee.hireDate}</p>
              <p className="birth">{employee.birthday}</p>
            </>
          )}
          {showDetails === "point" && hasDetails(employee) && (
            <>
              <input
                type="number"
                className="point"
                value={employee.pointsToSend ?? 0}
                onChange={handlePointsChange}
                onClick={(e) => e.stopPropagation()}
              />
            </>
          )}

          {isDetail && (
            <EmployeeDetail
              employee={employee as AllEmployee}
              onClose={() => {
                setIsDetail(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkerListItem;
