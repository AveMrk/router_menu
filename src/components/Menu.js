import { NavLink } from "react-router-dom";
export default function Menu({ items }) {
  return (
    <nav class="menu">
      {items.map((el) => (
        <NavLink className="menu__item" to={el.link}>
          {el.name}
        </NavLink>
      ))}
    </nav>
  );
}
