import { iconLogo } from "../../assets";

import "./header.css";

function Header() {
  return (
    <header className="header">
      <img
        src={iconLogo}
        alt="A rocket flying next to name of this website, that is ToDo"
      />
    </header>
  );
}

export default Header;
