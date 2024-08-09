import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App";
import GlobalStyles from "./styles.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
