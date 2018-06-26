import React from "react";
import "./Profile.scss";

export class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    return (
      <div id="pCard">
        <div id="profile">
          <img class="banner" src={props.img} />
          <br />
          <label>{props.name}</label>
        </div>
        <div id="description">r</div>
      </div>
    );
  }
}
