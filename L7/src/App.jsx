import { Route, Routes } from "react-router";
import AbouteUs from "./pages/AbouteUs/AbouteUs";
import AddAddressPage from "./pages/AddAddressPage/AddAddressPage";
import AddDescription from "./pages/AddDescription/AddDescription";
import ViewApart from "./pages/ViewApart/ViewApart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AbouteUs />}></Route>
        <Route path="/add_apart_address" element={<AddAddressPage />}></Route>
        <Route
          path="/add_description_apart"
          element={<AddDescription />}
        ></Route>
        <Route path="/view_apart" element={<ViewApart />}></Route>
      </Routes>
    </>
  );
}

export default App;
