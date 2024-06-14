import React from "react";
import { books } from "../data";
import Book from "./ui/Book";

export default function Discounted() {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <div className="section__title">
            <h2>
            Discounted <span className="purple">Books</span>
            </h2>
          </div>
          <div className="books">
            {
                books.filter((book) => book.salePrice !== null).map(book => <Book book={book} key={book.id} />)
            }
          </div>
        </div>
      </div>
    </section>
  );
}
