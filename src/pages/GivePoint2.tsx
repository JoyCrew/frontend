import Header from "../components/common/Header";
import useHeaderData from "../hooks/useHeaderData";
import Sending from "../components/givepoint/Sending";
import employeePerson from "../assets/employeePerson.svg";

const GivePoint2: React.FC = () => {
  const { name, point } = useHeaderData();
  return (
    <div className="GivePoint2">
      <Header name={name} point={point} />
      <div className="main">
        <Sending
          employee={{
            profileImageUrl: employeePerson,
            employeeName: "김민준",
            departmentName: "경영지원팀",
            position: "팀장",
          }}
        />
      </div>
    </div>
  );
};

export default GivePoint2;
