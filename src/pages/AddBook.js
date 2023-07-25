import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooks } from "./BookSlice";
import {useNavigate} from 'react-router-dom'

const AddBook = () => {
  const [title,setTitle] = useState('')
  const [author,setAuthor] = useState('')

  const numberOfBooks = useSelector(state => state.Books.books.length)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
  e.preventDefault()
  const book = {id:numberOfBooks + 1 ,title, author}
  dispatch(addBooks(book))
  navigate("/show-book", {replace: true})
  }

  return (
    <div>
        <h1>Add Book</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" name="title" value={title} onChange={e => setTitle(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="author">author: </label>
                <input type="text" id="author" name="author" value={author} onChange={e => setAuthor(e.target.value)} required/>
            </div>
            <button type="submit">Add book</button>
        </form>
    </div>
  );
};

export default AddBook;
