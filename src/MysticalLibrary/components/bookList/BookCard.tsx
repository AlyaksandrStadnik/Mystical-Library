import { Button, Card, Flex } from "antd";
import { useDispatch } from "react-redux";
import "./BookCard.css";
import { BookListItemProps } from "../../utils/types";
import { resolveBookListItemButtonValues } from "../../utils/modeHelper";

const BookListItem = ({
  id,
  title,
  author,
  status,
  cover,
  mode,
}: BookListItemProps) => {
  const dispatch = useDispatch();

  const { buttonTitle, buttonAction } = resolveBookListItemButtonValues(mode);

  const handleButtonClick = () => {
    dispatch(buttonAction({ id, title, author, status, cover }));
  };

  return (
    <Card
      className="mystical-card"
      cover={<img alt={title} src={cover} className="mystical-card-image" />}
    >
      <Flex vertical justify="space-between" className="mystical-card-content">
        <h3 className="mystical-card-title">{title}</h3>
        <p className="mystical-card-author">{author}</p>
        <p className="mystical-card-status">{status}</p>
        <Button className="mystical-card-button" onClick={handleButtonClick}>
          {buttonTitle}
        </Button>
      </Flex>
    </Card>
  );
};

export default BookListItem;
