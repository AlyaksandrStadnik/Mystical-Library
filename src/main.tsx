import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MysticalLibraryApp from "./components/MysticalLibraryApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MysticalLibraryApp />
  </StrictMode>
);
