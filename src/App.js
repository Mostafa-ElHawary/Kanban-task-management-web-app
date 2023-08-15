import React from "react";
import GlobalStyle from "./globalStyle";

import { Hstyle, Cont } from "./localStyle";

function App() {
  return (
    <>
      <GlobalStyle />

      <Cont
        style={{ height: "100vh", display: "grid", "align-items": "center" }}
      >
        <Hstyle
          style={{
            color: "rgb(94, 94, 94)",
            "text-align": "center",
          }}
        >
          Welcome to{" "}
          <span style={{ color: "rgb(76, 227, 160)" }}>
            Kanban task management web app
          </span>{" "}
          This app is under construction ..
        </Hstyle>
      </Cont>
    </>
  );
}

export default App;
