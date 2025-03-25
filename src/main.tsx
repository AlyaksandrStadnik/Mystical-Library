import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MysticalLibraryApp from "./MysticalLibrary/components/MysticalLibraryApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MysticalLibraryApp />
  </StrictMode>
);
