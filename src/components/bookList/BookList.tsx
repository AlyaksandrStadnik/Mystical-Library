import { Book } from "../../utils/types";
import BookCard from "./BookCard";
import "./BookList.css";

type BookListProps = {
  source: Book[];
};

const BookList = ({ source }: BookListProps) => (
  <>
    <div className="mystical-booklist-container">
      {source.map((item) => (
        <BookCard
          key={item.id}
          id={item.id}
          title={item.title}
          author={item.author}
          status={item.status}
          cover={item.cover}
        />
      ))}
    </div>
  </>
);

export default BookList;
