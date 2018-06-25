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
    return (
      <div id="navbar">
        <i>&spades;</i>
        <span id="navItems">{list}</span>
      </div>
    );
  }
}
