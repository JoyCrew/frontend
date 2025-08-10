import buyProduct from "../assets/buyProduct.svg";
import buyProductGray from "../assets/buyProductGray.svg";
import buyHistory from "../assets/buyHistory.svg";
import buyHistoryGray from "../assets/buyHistoryGray.svg";
import employeeList from "../assets/employeeList.svg";
import employeeListGray from "../assets/employeeListGray.svg";
import send from "../assets/send.svg";
import sendGray from "../assets/sendGray.svg";

// 메뉴 아이템 인터페이스
export interface MenuItem {
  activeIcon: string;
  inactiveIcon: string;
  text: string;
  path: string;
}

// 직원/관리자용 메뉴 데이터
export const managerMenuItems: MenuItem[] = [
  {
    activeIcon: employeeList,
    inactiveIcon: employeeListGray,
    text: "직원 목록",
    path: "/manager",
  },
  {
    activeIcon: send,
    inactiveIcon: sendGray,
    text: "포인트 전송하기",
    path: "/manager/point",
  },
];

// 상품 구매/구매 내역 메뉴 데이터
export const userBuyingMenuItems: MenuItem[] = [
  {
    activeIcon: buyProduct,
    inactiveIcon: buyProductGray,
    text: "상품 구매하기",
    path: "/buying_goods",
  },
  {
    activeIcon: buyHistory,
    inactiveIcon: buyHistoryGray,
    text: "구매내역 조회",
    path: "/buying_history",
  },
];
