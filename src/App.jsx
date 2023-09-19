import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'
import Cards from './components/Cards'
import { data } from './Data'

function App() {

  return (
    <>
    <img src={logo}></img>
    <h1>Learn To Code</h1>
    {data.map((data) => {
      return(
        <Cards title={data.title} img={data.img} desc={data.desc} link={data.link}/>
      )
    })}
    </>
  )
}

export default App
