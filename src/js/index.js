//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Player } from "./component/player.js";
import { Player2 } from "./component/player_noapi";
import { Player3 } from "./component/player_hooks";

//render your react application
ReactDOM.render(<Player3 />, document.querySelector("#app"));
