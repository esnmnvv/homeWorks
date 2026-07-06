import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex flex-col gap-9 mt-4">
      <nav className="flex text-[48px] gap-9 items-center w-full justify-center">
        <Link to={"/products"}>Catalog</Link>
        <Link to={"/cart"}>Cart</Link>
      </nav>
      <Outlet />
    </div>
  );
};
