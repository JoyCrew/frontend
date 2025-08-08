import "../../styles/WorkerListItem.css";
import type { Employee } from "../../states/searchResultState";
import type { AllEmployee } from "../../states/allEmployeeState";
import employeePerson from "../../assets/employeePerson.svg";

interface WorkerListItemProps {
  employee: Employee | AllEmployee;
  onToggle: () => void;
  showDetails?: string;
  className?: string;
}

const hasDetails = (emp: Employee | AllEmployee): emp is AllEmployee => {
  return "hireDate" in emp && "birthday" in emp;
};

const WorkerListItem: React.FC<WorkerListItemProps> = ({
  employee,
  onToggle,
  showDetails,
  className,
}) => {
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
          <div className="image-name">
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
                value={employee.pointsToSend || ""}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkerListItem;
