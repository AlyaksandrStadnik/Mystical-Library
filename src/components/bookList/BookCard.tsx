import { Button, Card, Flex } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppState, Book, Mode } from "../../utils/types";
import { resolveBookListItemButtonValues } from "../../utils/modeHelper";
import MysticalRating from "./MysticalRating";
import "./BookCard.css";

export type BookCardProps = {
  book: Book;
};

const BookCard = ({ book }: BookCardProps) => {
  const { id, title, author, status, cover } = book;
  const myBooks = useSelector((state: AppState) => state.books.myBooks);
  const dispatch = useDispatch();
  const myBook = myBooks.find((item) => item.id === id);
  const mode = myBook ? Mode.MY_BOOK_MODE : Mode.ALL_BOOKS_MODE;

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
        {mode === Mode.MY_BOOK_MODE && (
          <p className="mystical-card-status">{status}</p>
        )}
        {mode === Mode.MY_BOOK_MODE && (
          <MysticalRating bookId={id} rating={myBook?.rating || 0} />
        )}
        <Button className="mystical-card-button" onClick={handleButtonClick}>
          {buttonTitle}
        </Button>
      </Flex>
    </Card>
  );
};

export default BookCard;
