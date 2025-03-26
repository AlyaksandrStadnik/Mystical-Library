import { Button, Card, Flex } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./BookCard.css";
import { AppState, Mode } from "../../utils/types";
import { resolveBookListItemButtonValues } from "../../utils/modeHelper";

export type BookListItemProps = {
  id: number;
  title: string;
  author: string;
  status: string;
  cover: string;
};

const BookListItem = ({
  id,
  title,
  author,
  status,
  cover,
}: BookListItemProps) => {
  const myBooks = useSelector((state: AppState) => state.books.myBooks);
  const dispatch = useDispatch();
  const mode = myBooks.find((item) => item.id === id)
    ? Mode.MY_BOOK_MODE
    : Mode.ALL_BOOKS_MODE;

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
