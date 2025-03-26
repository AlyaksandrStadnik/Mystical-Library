import { Layout } from "antd";
import MysticalHeader from "./mysticalHeader";
import MysticalFooter from "./mysticalFooter";
import MysticalContent from "./mysticalContent";
import "./Mysticallayout.css";
import { Outlet } from "react-router-dom";

const MysticalLayout = () => (
  <Layout className="mystical-layout">
    <MysticalHeader />
    <MysticalContent>
      <Outlet />
    </MysticalContent>
    <MysticalFooter />
  </Layout>
);

export default MysticalLayout;
