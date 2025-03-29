import { Spin } from "antd";
import "./MysticalSpinner.css";

const MysticalSpinner = () => (
  <div className="mystical-spinner-container">
    <Spin size="large" className="mystical-spinner" />
  </div>
);

export default MysticalSpinner;
