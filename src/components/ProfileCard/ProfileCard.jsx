import React from "react";
import "./ProfileCard.scss";

export class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="img-area">
        Hello
        <div id="img-wrapper">
          <img src="../../../res/img/pic.jpg" />
        </div>
      </div>
    );
  }
}
