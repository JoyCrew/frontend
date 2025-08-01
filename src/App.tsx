import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import GivePoint from "./pages/GivePoint";
import BuyingGoods from "./pages/BuyingGoods";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/signup" element={<SignUp />} /> */}
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/give_point" element={<GivePoint />} />
            <Route path="/buying_goods" element={<BuyingGoods />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
