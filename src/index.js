import React from "react";
import { render } from "react-dom";
import { Navbar } from "./components/Navbar/Navbar";

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
  </div>
);

render(<App />, document.getElementById("app"));
