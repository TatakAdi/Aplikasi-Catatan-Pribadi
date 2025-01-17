import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import PersonalNoteApp from "./Components/PersonalNoteApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PersonalNoteApp />
  </StrictMode>
);
