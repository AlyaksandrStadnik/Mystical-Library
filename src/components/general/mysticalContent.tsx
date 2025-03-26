import { Content } from "antd/es/layout/layout";
import "./mysticalContent.css";

const MysticalContent = ({ children }: { children: React.ReactNode }) => (
  <Content className="mystical-content">{children}</Content>
);

export default MysticalContent;
