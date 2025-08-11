import "../../styles/AllSendPoint.css";
import { useRecoilState, useRecoilValue } from "recoil";
import type { AllEmployee } from "../../states/allEmployeeState";
import { allEmployeeState } from "../../states/allEmployeeState";
import PointMenu from "./PointMenu";
import WorkerListItem from "../givepoint/WorkerListItem";
import { totalPointsToSendSelector } from "../../states/pointState";

const AllSendPoint: React.FC = () => {
  const [allEmployee, setAllEmployee] = useRecoilState(allEmployeeState);
  const totalPointsToSend = useRecoilValue(totalPointsToSendSelector);
  const selectedCount = allEmployee.filter((emp) => emp.isSelected).length;

  const handleToggle = (index: number) => {
    setAllEmployee((prevList) => {
      const isCurrentlySelected = prevList[index].isSelected;
      const newSelectedCount = isCurrentlySelected
        ? selectedCount - 1
        : selectedCount + 1;
      const newList = prevList.map((item, i) => {
        if (i === index) {
          const newIsSelected = !item.isSelected;
          const pointsPerEmployee =
            newSelectedCount > 0 ? totalPointsToSend / newSelectedCount : 0;
          return {
            ...item,
            isSelected: newIsSelected,
            pointsToSend: newIsSelected ? pointsPerEmployee : 0,
          };
        }
        return {
          ...item,
          pointsToSend:
            item.isSelected && newSelectedCount > 0
              ? totalPointsToSend / newSelectedCount
              : 0,
        };
      });
      return newList;
    });
  };

  const handlePointChange = (employeeId: number, value: number) => {
    setAllEmployee((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.employeeId === employeeId
          ? { ...employee, pointsToSend: value }
          : employee
      )
    );
  };

  return (
    <div className="AllSendPoint">
      <h1>포인트 전송하기</h1>
      <PointMenu />
      <div className="WorkerList">
        <div className="title">
          <p className="name">이름</p>
          <p className="department">부서</p>
          <p className="position">포지션</p>
          <p className="point">보낼 보인트</p>
        </div>
        <div className="item-container">
          {allEmployee.length > 0 ? (
            allEmployee.map((employee: AllEmployee, index: number) => (
              <WorkerListItem
                key={index}
                employee={employee}
                onToggle={() => handleToggle(index)}
                showDetails="point"
                className="AllSendPointItem"
                onPointsChange={handlePointChange}
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

export default AllSendPoint;
