import type { Employee } from "../../states/searchResultState";
import Tag from "./Tag";
import Message from "./Message";

interface SendingProps {
  employee: Employee;
}

const Sending: React.FC<SendingProps> = ({ employee }) => {
  return (
    <div className="Sending">
      <div>
        <img src={employee.profileImageUrl} alt="프로필 이미지" />
        <h1> {employee.employeeName}님에게 선물하기</h1>
      </div>
      <div>
        <input type="number" />
        <p>points</p>
      </div>
      <Tag />
      <Message />
    </div>
  );
};

export default Sending;
