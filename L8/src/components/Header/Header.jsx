import { useLocation, useNavigate } from "react-router";
import "./style.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const list_menu = [
    { path: "/", title: "Главная" },
    { path: "/aboute", title: "О нас" },
    { path: "/services", title: "Услуги" },
    { path: "/contacts", title: "Контакты" },
  ];

  const go_new_page_fn = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div>
        <ul className="nav-link">
          {list_menu.map((item) => {
            return (
              <li
                onClick={() => go_new_page_fn(item.path)}
                key={item.path}
                className={`${location.pathname == item.path ? "active_menu" : ""}`}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
