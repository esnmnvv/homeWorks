import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

const LayoutMenu = () => {
  return (
    <div>
      <Header />
      <Main />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutMenu;
