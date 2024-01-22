import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FormSubmit from "./pages/FormSubmit";
import DataTable from "./pages/DataTable";
import { Toaster } from "react-hot-toast";
import FinalConfirm from "./pages/FinalConfirm";
import BuyTicket from "./pages/BuyTicket";
import Fail from "./pages/Fail";
import ThankYou from "./pages/ThankYou";
import Ga from "./pages/Ga";
import Vvip from "./pages/Vvip";
import SVvip from "./pages/SVvip";
import Vip from "./pages/Vip";
import Detail from "./pages/Detail";
import LineUp from "./pages/LineUp";
import FOF from "./pages/FOF";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      <Routes>
        <Route path="/" element={<FOF/>}/>
        {/* <Home/> */}
        {/* <Route path="/details" element={<Detail />} />
        <Route path="/line-up" element={<LineUp />} />
        <Route path="/buy-ticket" element={<BuyTicket />} />
        <Route path="/final-confirm" element={<FinalConfirm />} />
        <Route
          path="/form-submit"
          element={<FormSubmit refresh={refresh} setRefresh={setRefresh} />}
        />
        <Route path="/ThankYou" element={<ThankYou />} />
        <Route path="/fail" element={<Fail />} />
        <Route path="/ga" element={<Ga />} />
        <Route path="/vip" element={<Vip />} />
        <Route path="/vvip" element={<Vvip />} />
        <Route path="/SVvip" element={<SVvip />} />
        <Route
          path="/table_7D7TW<b10999O~X~"
          element={<DataTable refresh={refresh} setRefresh={setRefresh} />}
        /> */}
      </Routes>
    </>
  );
};

export default App;
