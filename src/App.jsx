import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import ListPatients from "./components/ListPatients.jsx";

function App() {
    return (
    <div className="App">
     <div className="container mx-auto">
         <Header/>
         <div className="mt-5 md:flex ">
             <Form/>
             <ListPatients/>
         </div>
     </div>
    </div>
  )
}

export default App
