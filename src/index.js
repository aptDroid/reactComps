import React from "react";
import { render } from "react-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { ProfileLanding } from "./components/Landing/ProfileLanding";

import "./styles.scss";

const App = () => {
  /*return (
    <div>
      <Navbar
        list={[
          {
            name: "google",
            href: "https://www.google.com/"
          },
          {
            name: "facebook",
            href: "https://www.facebook.com"
          },
          {
            name: "deviantart",
            href: "https://aptdroid.deviantart.com/gallery/"
          }
        ]}
      />
      <br />
      <div id="pCont">
        <Profile
          img={
            "https://vignette.wikia.nocookie.net/vsbattles/images/a/a7/Ancient-apparition-fanart-wallpaper.png/revision/latest?cb=20170919204549"
          }
          name={"Ancient Appartition"}
        />

        <Profile
          img={
            "https://vignette.wikia.nocookie.net/vsbattles/images/a/a7/Ancient-apparition-fanart-wallpaper.png/revision/latest?cb=20170919204549"
          }
          name={"Ancient Appartition"}
        />
        <Profile
          img={
            "https://vignette.wikia.nocookie.net/vsbattles/images/a/a7/Ancient-apparition-fanart-wallpaper.png/revision/latest?cb=20170919204549"
          }
          name={"Ancient Appartition"}
        />
      </div>
    </div>
  );
  */
  return (
    <React.Fragment>
      <Navbar
        list={[
          {
            name: "google",
            href: "https://www.google.com/"
          },
          {
            name: "facebook",
            href: "https://www.facebook.com"
          },
          {
            name: "deviantart",
            href: "https://aptdroid.deviantart.com/gallery/"
          }
        ]}
      />
      <ProfileLanding
        skillLine={"CARRY"}
        supportingLine={"SUPP HERO"}
        location={"Bangalore"}
      />
      <ProfileLanding
        skillLine={"CARRY"}
        supportingLine={"SUPP HERO"}
        location={"Bangalore"}
      />
    </React.Fragment>
  );
};
render(<App />, document.getElementById("app"));
