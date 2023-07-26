/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./BookSlice";
import { Link } from "react-router-dom";

const ShowBook = () => {
  const books = useSelector((state) => state.Books.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      <h1>ShowBook</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const { id, title, author } = book;
              return (
                <tr>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <Link to="/edit-book" state={{ id, title, author }}>
                      <button>Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowBook;
