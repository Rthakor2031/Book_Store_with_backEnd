import React from 'react'
import {Routes , Route} from 'react-router-dom'
import BookForm from '../../Components/BookForm'
import BookList from '../../Components/BookList'
import BookDetails from '../../Components/BookDetails'

const RoutesAll = () => {
  return (
    <Routes>
        <Route path='/BookList' element={<BookList />}>BookList</Route>
        <Route path='/BookForm' element={<BookForm />}>BookForm</Route>
        <Route path='/BookDetails' element={<BookDetails />}>BookDetails</Route>
    </Routes>
  )
}

export default RoutesAll