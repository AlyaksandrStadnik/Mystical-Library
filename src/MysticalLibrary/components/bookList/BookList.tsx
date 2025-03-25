import { BookListProps } from "../../utils/types";
import BookCard from "./BookCard";
import "./BookList.css";

const BookList = ({ source, mode }: BookListProps) => {
  return (
    <>
      {!source.length && (
        <div className="empty-grid-container">
          <p>There is nothing to reveal, My Lord...</p>
        </div>
      )}
      {source.length > 0 && (
        <div className="mystical-booklist-container">
          {source.map((item) => {
            return (
              <BookCard
                key={item.id}
                id={item.id}
                title={item.title}
                author={item.author}
                status={item.status}
                cover={item.cover}
                mode={mode}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default BookList;
