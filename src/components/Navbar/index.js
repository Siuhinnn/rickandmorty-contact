import { Link } from "react-router-dom";

import { NavbarContainer } from "./style";

export default function Navbar() {
  return (
    <NavbarContainer>
      <ul>
        <li>
          <Link to="/">Rick and Morty</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </NavbarContainer>
  );
}
