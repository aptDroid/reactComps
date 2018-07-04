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
        <div id="parallax1">
          <div id="fixedProfileBg1">
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
        <div id="test1">
          I am Shadow, the descendant of the king of the Shadow realm
        </div>
        <div id="parallax2">
          <div id="fixedProfileBg2">
            <img
              src="https://pbs.twimg.com/profile_images/3237841929/a9446c37115715d619178123d7868ee5_400x400.jpeg"
              alt="Shadow"
              align="middle"
            />
            <div id="fixedProfileDesc">
              <h3>Shadow</h3>
              <p>XYZ</p>
            </div>
          </div>
        </div>
        <div id="test2">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
        <div id="about">Full color</div>
      </React.Fragment>
    );
  }
}
