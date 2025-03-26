import { Select } from "antd";
import "./MysticalTypeSelector.css";

type TypeSelectorProps = {
  value: string;
  onChange: (value: string) => void;
};

const options = [
  {
    value: "title",
    label: "By Title",
  },
  {
    value: "author",
    label: "By Author",
  },
];

const MysticalTypeSelector = ({ value, onChange }: TypeSelectorProps) => (
  <Select
    className="mystical-select"
    value={value}
    options={options}
    onChange={onChange}
    popupClassName="mystical-select-dropdown"
  />
);

export default MysticalTypeSelector;
