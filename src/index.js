import React from "react";
import { render } from "react-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";

import "./styles.scss";

const App = () => (
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

render(<App />, document.getElementById("app"));
