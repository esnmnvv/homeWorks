import { Route, Routes } from "react-router";
import MainPage from "./pages/MainPage/MainPage";
import AbouteUsPage from "./pages/AbouteUsPage/AbouteUsPage";
import ServicsPage from "./pages/ServicsPage/ServicsPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LayoutMenu from "./layout/LayoutMenu/LayoutMenu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutMenu />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/aboute" element={<AbouteUsPage />} />
          <Route path="/services" element={<ServicsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
