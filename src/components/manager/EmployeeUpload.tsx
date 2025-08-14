import "../../styles/EmployeeList.css";
import information from "../../assets/information.svg";
import employeePerson from "../../assets/employeePerson.svg";
import Button from "../common/Button";
import ManagerPopup from "./ManagerPopup";
import Searching2 from "../../assets/searching2.svg";
import apiClient from "../../api/axiosClient";
import { useState, useCallback, useEffect, useRef } from "react";
import { allEmployeeState } from "../../states/allEmployeeState";
import { searchManagerState } from "../../states/searchManagerState";
import type { AllEmployee } from "../../states/allEmployeeState";
import { useSetRecoilState, useRecoilState } from "recoil";

const EmployeeUpload: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const setAllEmployee = useSetRecoilState(allEmployeeState);
  const [searchManager, setSearchManager] = useRecoilState(searchManagerState);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const selectedEmployee = searchManager.find((emp) => emp.isSelected);

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

  //파일 업로드
  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await apiClient.post(
          "/api/admin/employees/bulk",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("파일 업로드 성공:", response.data);
        fetchEmployeesRecursive(0, "");
      } catch (error) {
        console.error("실패:", error);
        alert("파일 업로드에 실패했습니다.");
      }
    }
  };

  //직원 삭제
  const handleDeleteClick = () => {
    if (!selectedEmployee) {
      alert("삭제할 직원을 선택해주세요.");
      return;
    }
    setIsPopupOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await apiClient.delete(
        `/api/admin/employees/${selectedEmployee?.employeeId}` // 👈 선택된 직원의 ID를 URL에 포함
      );
      console.log("직원 삭제 성공:", response.data);
      setIsPopupOpen(false);
      fetchEmployeesRecursive(0, "");
    } catch (error) {
      console.error("직원 삭제 실패:", error);
      alert("직원 삭제에 실패했습니다.");
      setIsPopupOpen(false);
    }
  };

  const handleDeleteCancel = () => {
    setIsPopupOpen(false);
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

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <Button
          text="직원 등록"
          className="small"
          onClick={handleFileUploadClick}
        />
        <Button
          text="직원 삭제"
          className="small"
          onClick={handleDeleteClick}
        />
      </div>

      {isPopupOpen && (
        <ManagerPopup
          title="직원 삭제"
          content={`${selectedEmployee?.employeeName}님을 직원 목록에서 삭제하시겠습니까?`}
          button="삭제하기"
          onConfirm={handleDeleteConfirm}
          onCancel={handleDeleteCancel}
        />
      )}
    </div>
  );
};

export default EmployeeUpload;
