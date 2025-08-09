import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "./pages/Home";
import Login from "./pages/Login";
import EmailVerification from "./pages/EmailVerification";
import ChangePassword from "./pages/ChangePassword";
import MyPage from "./pages/MyPage";
import GivePoint from "./pages/GivePoint";
import GivePoint2 from "./pages/GivePoint2";
import BuyingGoods from "./pages/BuyingGoods";
import Manager from "./pages/Manager";
import ManagerPoint from "./pages/ManagerPoint";

function App() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  console.log("api 링크", API_BASE_URL);
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/signup" element={<SignUp />} /> */}
            <Route path="/email_verification" element={<EmailVerification />} />
            <Route path="/reset-password" element={<ChangePassword />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/give_point" element={<GivePoint />} />
            <Route path="/give_point/send" element={<GivePoint2 />} />
            <Route path="/buying_goods" element={<BuyingGoods />} />
            <Route path="/manager" element={<Manager />} />
            <Route path="/manager/point" element={<ManagerPoint />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
