import { Rate } from "antd";
import { ReadOutlined } from "@ant-design/icons";
import "./MysticalRating.css";
import { useDispatch } from "react-redux";
import { changeBookRating } from "../../store/booksSlice";

export type MysticalRatingProps = {
  bookId: number;
  rating: number;
};

const MysticalRating = ({ bookId, rating }: MysticalRatingProps) => {
  const dispatch = useDispatch();

  const handleChange = (newValue: number) => {
    dispatch(changeBookRating({ id: bookId, rating: newValue }));
  };

  return (
    <Rate
      character={<ReadOutlined />}
      allowHalf
      className="mystical-rating"
      onChange={handleChange}
      value={rating}
    />
  );
};

export default MysticalRating;
