import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import WareHouse from "./pages/Admin/Manage/warehouse/WareHouse.js";
import TakeOut from "./pages/Admin/Manage/takeout/TakeOut.js";
import History from "./pages/Admin/Manage/history/History.js";
import SpeVerhicle from "./pages/Admin/Manage/speverhicle/SpeVerhicle.js";
import Setting from "./pages/Admin/System/setting/Setting.js";
import LayoutHonda from "./pages/Admin/Layout/LayoutHonda.js";
import Scanner from "./pages/Admin/Manage/scanner/Scanner.js";
import Maker from "./pages/Admin/Manage/maker/Maker.js";
import Account from "./pages/Admin/System/account/Account.js";
import VerhicleType from "./pages/Admin/System/verhicletype/VerhicleType.js";
import Decentral from "./pages/Admin/System/decentral/Decentral.js";
import DashBoard from "./pages/Admin/Dashboard.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutHonda />}>
            <Route path="dashboard" element={<DashBoard />}></Route>
            <Route path="manage/warehouse" element={<WareHouse />}></Route>
            <Route path="manage/takeout" element={<TakeOut />}></Route>
            <Route path="manage/speverhicle" element={<SpeVerhicle />}></Route>
            <Route path="manage/scanner" element={<Scanner />}></Route>
            <Route path="manage/maker" element={<Maker />}></Route>
            <Route path="manage/history" element={<History />}></Route>
            <Route path="system/setting" element={<Setting />}></Route>
            <Route path="system/account" element={<Account />}></Route>
            <Route
              path="system/verhicletype"
              element={<VerhicleType />}
            ></Route>
            <Route path="system/decentral" element={<Decentral />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
