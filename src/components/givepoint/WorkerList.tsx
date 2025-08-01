import "../../styles/WorkerList.css";

import { useRecoilValue } from "recoil";
import { searchResultState } from "../../states/searchResultState";
import WorkerListItem from "./WorkerListItem";
import type { Employee } from "../../states/searchResultState";

const WorkerList: React.FC = () => {
  const searchResult = useRecoilValue(searchResultState);
  console.log(searchResult, "직원 결과");
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
            <WorkerListItem key={index} employee={employee} />
          ))
        ) : (
          <p>없음</p>
        )}
      </div>
    </div>
  );
};

export default WorkerList;
