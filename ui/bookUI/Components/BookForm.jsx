import React, { useState } from 'react';
import axios from 'axios';

const BookForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    description: "",
    isbn: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Create Book (Add)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post('http://localhost:5001/book/Create', formData);
      console.log(response);
      alert("Data Posted Successfully...");

      setFormData({
        title: "",
        author: "",
        price: "",
        description: "",
        isbn: "",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  // Fetch Book Details by ISBN (for update or delete)

  const fetchBookDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/book/${formData.isbn}`);
      const bookData = response.data;

      setFormData({
        title: bookData.title,
        author: bookData.author,
        price: bookData.price,
        description: bookData.description,
        isbn: bookData.isbn,
      });
    } catch (error) {
      alert("Book not found or error fetching details.");
    }
  };

  // Update Book
  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5001/book/Update/${formData.isbn}`, formData);
      console.log(response);
      alert("Book Updated Successfully");
    } catch (error) {
      alert("Error updating book.");
    }
  };

  
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:5001/book/Delete/${formData.isbn}`);
      console.log(response);
      alert("Book Deleted Successfully");

      setFormData({
        title: "",
        author: "",
        price: "",
        description: "",
        isbn: "",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h3><center>Book Form</center></h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div>
          <label>ISBN:</label>
          <input
            type="text"
            name="isbn"
            value={formData.isbn}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Add Book</button>
        <button type="button" onClick={handleUpdate}>Update Book</button>
        <button type="button" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};

export default BookForm;
