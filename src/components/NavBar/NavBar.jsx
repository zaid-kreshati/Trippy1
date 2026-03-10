import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ logo, items, btn }) => {
  return (
    <nav>
      <h1>{logo}</h1>

      <div>
        <ul>
          {items?.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) => (isActive ? "li-active" : "")}
            >
              {({ isActive }) => (
                <li className={isActive ? "active" : ""}>
                  <div>
                    <item.icon />
                    <span>{item.content}</span>
                  </div>
                </li>
              )}
            </NavLink>
          ))}
        </ul>

        <button>{btn}</button>
      </div>
    </nav>
  );
};

export default NavBar;
