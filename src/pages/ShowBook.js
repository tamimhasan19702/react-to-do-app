/** @format */

import React from "react";
import { useSelector } from "react-redux";

const ShowBook = () => {
  const books = useSelector((state) => state.Books.books);
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
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowBook;
