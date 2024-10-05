import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BookList = () => {
  const [bookdata , setbookdata] = useState([])

  const getdatafromDB = ()=>{
    axios.get('http://localhost:5001/book/getAllbooks').then((res)=>{
      setbookdata(res.data)
      console.log(res.data)
    })
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    getdatafromDB()
  },[])
  return (
    <div>
    <center><b>Book List</b></center>
    {bookdata.length > 0 ? (
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>ISBN</th>
          </tr>
        </thead>
        <tbody>
          {bookdata.map((el) => (
            <tr key={el._id}>
              <td>{el.title}</td>
              <td>{el.author}</td>
              <td>${el.price}</td>
              <td>{el.isbn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <h4>Data Not Found!</h4>
    )}
  </div> 
  )
}

export default BookList