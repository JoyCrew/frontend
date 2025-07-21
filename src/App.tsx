import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyPage from "./pages/MyPage";
import GivePoint from "./pages/GivePoint";
import BuyingGoods from "./pages/BuyingGoods";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/give_point" element={<GivePoint />} />
        <Route path="/buying_goods" element={<BuyingGoods />} />
      </Routes>
    </>
  );
}

export default App;
