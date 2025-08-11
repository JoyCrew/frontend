import "../../styles/AllSendPoint.css";
import useMultipleSelection from "../../hooks/useMultipleSelection";
import type { AllEmployee } from "../../states/allEmployeeState";
import { allEmployeeState } from "../../states/allEmployeeState";
import PointMenu from "./PointMenu";
import WorkerListItem from "../givepoint/WorkerListItem";

const AllSendPoint: React.FC = () => {
  const { list: allEmployee, handleToggle } =
    useMultipleSelection(allEmployeeState);
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
