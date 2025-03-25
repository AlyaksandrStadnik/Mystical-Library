import { Content } from "antd/es/layout/layout";
import "./mysticalContent.css";

const MysticalContent = ({ children }: { children: React.ReactNode }) => {
  return <Content className="mystical-content">{children}</Content>;
};

export default MysticalContent;
