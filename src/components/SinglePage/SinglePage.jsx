import React from "react";
import "./SinglePage.scss";

export class SinglePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let props = this.props;
    // <div id="profile-banner">
    //   <div id="profile-wrapper">
    //     <img
    //       id="profile-img"
    //       src="http://images.goodsmile.info/cgm/images/product/20160705/5788/39963/large/27908f72991ab2e05f9989aab8200ac9.jpg"
    //       width={200}
    //     />
    //     <div id="profile-desc">
    //       <div id="skillLine">{props.skillLine}</div>
    //       <br />
    //       <div id="supportingLine">{props.supportingLine}</div>
    //       <div id="profileFooter">
    //         <label id="location">Based out of {props.location} |</label>
    //         <button id="workButton">
    //           See my work <span>&#10174;</span>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    return (
      <React.Fragment>
        <div id="fixedProfile">
          <div id="fixedProfileContent">
            <img
              src="https://pm1.narvii.com/6378/1a08731d4d4f912b512dafaef99f0b5692b7ad3e_hq.jpg"
              alt="Shadow"
              align="middle"
            />
            <div id="fixedProfileDesc">
              <h3>Shadow</h3>
              <p>XYZ</p>
            </div>
          </div>
        </div>
        <div id="about">2nd</div>
      </React.Fragment>
    );
  }
}
