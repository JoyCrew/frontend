import Header from "../components/common/Header";
import useHeaderData from "../hooks/useHeaderData";
import Sending from "../components/givepoint/Sending";
import employeePerson from "../assets/employeePerson.svg";
import { useRecoilValue } from "recoil";
import { searchResultState } from "../states/searchResultState";

const GivePoint2: React.FC = () => {
  const { name, point } = useHeaderData();
  const allEmployess = useRecoilValue(searchResultState);
  const SelectedEmployee = allEmployess.find((emp) => emp.isSelected);
  const employeeData = SelectedEmployee || {
    employeeId: 0,
    profileImageUrl: employeePerson,
    employeeName: "",
    departmentName: "",
    position: "",
    isSelected: false,
  };
  return (
    <div className="GivePoint2">
      <Header name={name} point={point} />
      <div className="main">
        <Sending employee={employeeData} />
      </div>
    </div>
  );
};

export default GivePoint2;
