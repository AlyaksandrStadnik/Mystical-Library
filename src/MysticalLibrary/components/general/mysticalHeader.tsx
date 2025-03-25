import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import { MY_BOOKS_PATH, ROOT_PATH } from "../../utils/paths";
import "./MysticalHeader.css";

const MysticalHeader = () => {
  return (
    <Header className="mystical-header">
      <Link className="mystical-home-link" to={ROOT_PATH}>
        Mystical Library
      </Link>
      <Link className="mystical-myBooks-link" to={MY_BOOKS_PATH}>
        MyBooks
      </Link>
    </Header>
  );
};

export default MysticalHeader;
