import "../../styles/EmployeeDetail.css";

import type { AllEmployee } from "../../states/allEmployeeState";
import { IoMdClose } from "react-icons/io";
import DetailLayout from "./DetailLayout";
import person from "../../assets/person.svg";

interface EmployeeDetailProps {
  employee: AllEmployee;
  onClose: () => void;
}

const EmployeeDetail: React.FC<EmployeeDetailProps> = ({
  employee,
  onClose,
}) => {
  let firstAddress: string = "";
  let secondAddress: string = "";
  const address = employee.address;

  if (address === null || address === undefined) {
    firstAddress = "";
    secondAddress = "";
  } else {
    const words = address.split(" ");
    const midPoint = Math.ceil(words.length / 2);
    const firstAddressArray = words.slice(0, midPoint);
    const secondAddressArray = words.slice(midPoint);
    firstAddress = firstAddressArray.join(" ");
    secondAddress = secondAddressArray.join(" ");
  }

  return (
    <div className="EmployeePopup-overlay">
      <div className="EmployeeDetail">
        <IoMdClose className="close-icon" onClick={onClose} />
        <div className="detail-container">
          <img
            src={employee.profileImageUrl ? employee.profileImageUrl : person}
          />
          <h3>{employee.employeeName}</h3>
          <DetailLayout name="이메일" information={employee.email} />
          <DetailLayout name="휴대폰 번호" information={employee.phoneNumber} />
          <DetailLayout name="생년월일" information={employee.birthday} />
          <DetailLayout name="입사일" information={employee.hireDate} />
          <DetailLayout name="부서" information={employee.departmentName} />
          <DetailLayout name="포지션" information={employee.position} />
          <DetailLayout name="주소" information={firstAddress} />
          <DetailLayout name="" information={secondAddress} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
