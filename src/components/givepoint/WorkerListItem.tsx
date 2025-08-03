import "../../styles/WorkerListItem.css";
import type { Employee } from "../../states/searchResultState";
import employeePerson from "../../assets/employeePerson.svg";

interface WorkerListItemProps {
  employee: Employee;
  onToggle: () => void;
}

const WorkerListItem: React.FC<WorkerListItemProps> = ({
  employee,
  onToggle,
}) => {
  return (
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
      </div>
    </div>
  );
};

export default WorkerListItem;
