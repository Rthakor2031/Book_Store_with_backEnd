import React from 'react'
import RoutesAll from './Routes/RoutesAll'
import { Link } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div>
      <div style={{display:'flex', justifyContent:"space-around",backgroundColor:"lightgreen", height:"40px", alignItems:"center"}}>
      <Link to={'/BookList'}>BookList</Link>
      <Link to={'/BookForm'}>BookForm</Link>
      <Link to={'/BookDetails'}>BookDetails</Link>
      </div>
      <RoutesAll/>
    </div>
  )
}

export default App