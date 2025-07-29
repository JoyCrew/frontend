import type { Employee } from "../../types/Employee";

interface WorkerListProps {
  employee: Employee[];
}

const WorkerList: React.FC<WorkerListProps> = ({ employee }) => {
  return <div className="WorkerList">workerlist</div>;
};

export default WorkerList;
