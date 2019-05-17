import React from "react";

import "./MainNav.scss";

class MainNav extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Home</li>
          <li>About me</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}

export default MainNav;
