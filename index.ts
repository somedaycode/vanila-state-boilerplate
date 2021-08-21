import "./index.scss";

import App from "@src/App";

function init() {
  new App(document.querySelector("#root") as HTMLElement);
}

init();
