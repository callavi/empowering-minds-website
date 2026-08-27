import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./theme/theme.css";
import ScrollToHash from "./utils/ScrollToHash";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/empowering-minds/">
    <ScrollToHash />
    <App />
  </BrowserRouter>
);