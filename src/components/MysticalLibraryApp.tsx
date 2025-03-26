import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import booksStore from "../store/booksStore";
import Home from "./Home";
import MyBooks from "./MyBooks";
import MysticalLayout from "./general/mysticalLayout";
import { MY_BOOKS_PATH, ROOT_PATH } from "../utils/paths";
import "./MysticalLibraryApp.css";

const browserRouter = createBrowserRouter([
  {
    path: ROOT_PATH,
    element: <MysticalLayout />,
    children: [
      { path: ROOT_PATH, element: <Home /> },
      { path: MY_BOOKS_PATH, element: <MyBooks /> },
    ],
  },
]);

const MysticalLibraryApp = () => (
  <Provider store={booksStore}>
    <RouterProvider router={browserRouter} />
  </Provider>
);

export default MysticalLibraryApp;
