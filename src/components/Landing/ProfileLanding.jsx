import React from "react";
import "./ProfileLanding.scss";

export class ProfileLanding extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let props = this.props;
    return (
      <div id="profileBrief">
        <div id="profileComponents">
          <div id="skillLine">{props.skillLine}</div>
          <br />
          <div id="supportingLine">{props.supportingLine}</div>
          <div id="profileFooter">
            <label id="location">Based out of {props.location} |</label>
            <button id="workButton">
              See my work <span>&#10174;</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
