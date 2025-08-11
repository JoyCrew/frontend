import "../../styles/EmployeeList.css";
import information from "../../assets/information.svg";
import employeePerson from "../../assets/employeePerson.svg";
import Button from "../common/Button";
import Searching2 from "../../assets/searching2.svg";
import apiClient from "../../api/axiosClient";
import { useState, useCallback, useEffect } from "react";
import { allEmployeeState } from "../../states/allEmployeeState";
import { searchManagerState } from "../../states/searchManagerState";
import type { AllEmployee } from "../../states/allEmployeeState";
import { useSetRecoilState } from "recoil";

const EmployeeUpload: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const setAllEmployee = useSetRecoilState(allEmployeeState);
  const setSearchManager = useSetRecoilState(searchManagerState);

  const fetchEmployeesRecursive = useCallback(
    async (page: number, keyword: string) => {
      try {
        const response = await apiClient.get(`/api/admin/employees`, {
          params: {
            keyword: keyword,
            page: page,
            size: 20,
          },
        });

        const newEmployees: AllEmployee[] = response.data.employees.map(
          (
            employee: Omit<AllEmployee, "isSelected" | "pointsToSend"> & {
              profileImageUrl?: string;
            }
          ) => ({
            ...employee,
            isSelected: false,
            pointsToSend: 0,
            profileImageUrl: employee.profileImageUrl || employeePerson,
          })
        );

        const isInitialLoad = keyword === "";

        if (page === 0) {
          if (isInitialLoad) {
            setAllEmployee(newEmployees);
            setSearchManager(newEmployees);
          } else {
            setSearchManager(newEmployees);
          }
        } else {
          if (isInitialLoad) {
            setAllEmployee((prevEmployees) => [
              ...prevEmployees,
              ...newEmployees,
            ]);
            setSearchManager((prevEmployees) => [
              ...prevEmployees,
              ...newEmployees,
            ]);
          } else {
            setSearchManager((prevEmployees) => [
              ...prevEmployees,
              ...newEmployees,
            ]);
          }
        }

        if (!response.data.last) {
          fetchEmployeesRecursive(page + 1, keyword);
        }
      } catch (error) {
        console.log("직원 목록 가져오기 실패", error);
        const isInitialLoad = keyword === "";
        if (isInitialLoad) {
          setAllEmployee([]);
          setSearchManager([]);
        } else {
          setSearchManager([]);
        }
      }
    },
    [setAllEmployee, setSearchManager]
  );

  useEffect(() => {
    fetchEmployeesRecursive(0, "");
  }, [fetchEmployeesRecursive]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    fetchEmployeesRecursive(0, searchTerm);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  const onClickbutton = () => {
    console.log("버튼 클릭");
  };

  return (
    <div className="EmployeeUpload">
      <div className="input-container">
        <input
          type="text"
          placeholder="직원 검색하기"
          onChange={handleInputChange}
          value={searchTerm}
          onKeyDown={handleKeyDown}
        />
        <img src={Searching2} alt="" onClick={handleSearchClick} />
      </div>

      <div className="right-container">
        <img src={information} alt="" />
        <div className="information-bubble">
          직원 정보가 담긴
          <br />
          csv 파일을 업로드하세요
        </div>

        <Button text="파일 업로드" className="small" onClick={onClickbutton} />
        <Button text="직원 등록" className="small" onClick={onClickbutton} />
        <Button text="직원 삭제" className="small" onClick={onClickbutton} />
      </div>
    </div>
  );
};

export default EmployeeUpload;
