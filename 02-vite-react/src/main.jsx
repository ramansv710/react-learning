import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
function MyApp() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

const AnotherElement = (
  <a href="https://google.com" target="_blank">
    Google
  </a>
);

const aReactElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: "_blank",
  },
  "Visit Google"
);

ReactDOM.createRoot(document.getElementById("root")).render(aReactElement);
