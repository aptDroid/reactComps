import React from "react";
import "./Navbar.scss";

export class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let list = this.props.list.map((item, index) => {
      return (
        <a key={index} className="nItem" href={item.href}>
          {item.name}
        </a>
      );
    });

    // <i>&spades;</i>

    return (
      <div id="navbar">
        <div id="navItems">{list}</div>
      </div>
    );
  }
}
