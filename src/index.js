import React from "react";
import { render } from "react-dom";
import { Navbar } from "./components/Navbar/Navbar";

import "./styles.scss";

const App = () => (
  <div>
    <Navbar
      list={[
        {
          name: "home",
          href: "#"
        },
        {
          name: "contact",
          href: "#"
        },
        {
          name: "about",
          href: "#"
        }
      ]}
    />
  </div>
);

render(<App />, document.getElementById("app"));
