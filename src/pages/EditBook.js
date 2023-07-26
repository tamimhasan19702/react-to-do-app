/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./BookSlice";

const EditBook = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(location.state)
  const { id, setId } = useState(location.state.id);
  const { title, setTitle } = useState(location.state.title);
  const { author, setAuthor } = useState(location.state.author);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, author }));
    navigate("/show-book", { replace: true });
  };

  return (
    <div>
      <h1>Edit Book</h1>
      <form>
        <div onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="author">author: </label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update book</button>
      </form>
    </div>
  );
};

export default EditBook;
