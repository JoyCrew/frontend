import "../../styles/EmployeeList.css";
import information from "../../assets/information.svg";
import Button from "../common/Button";
import Searching2 from "../../assets/searching2.svg";

const EmployeeUpload: React.FC = () => {
  const onClickbutton = () => {
    console.log("버튼 클릭");
  };
  return (
    <div className="EmployeeUpload">
      <div className="input-container">
        <input type="text" placeholder="직원 검색하기" />
        <img src={Searching2} alt="" />
      </div>

      <div className="right-container">
        <img src={information} alt="" />
        <div className="information-bubble">
          직원 정보가 담긴
          <br />
          csv 파일을 업로드하세요
        </div>
        {/* 말풍선 css 수정 필요 */}
        <Button text="파일 업로드" className="small" onClick={onClickbutton} />
        <Button text="직원 등록" className="small" onClick={onClickbutton} />
      </div>
    </div>
  );
};

export default EmployeeUpload;
