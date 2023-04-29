import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Footer from './components/Footer';
import Header from './components/Header';
import CatEdit from './pages/CatEdit';
import CatIndex from './pages/CatIndex';
import CatNew from './pages/CatNew';
import CatShow from './pages/CatShow';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import './App.css';

const App = () => {

  const [cats, setCats] = useState([])

  useEffect(() => {
    readCat()
  }, [])

  const readCat = () => {
    fetch('http://localhost:3000/cats')
    .then(response => response.json())
    .then(data => {
      setCats(data)
    })
    .catch((errors) => console.log("Cat read errors: ", errors))
  }

  const createCat = (cat) => {
    fetch('http://localhost:3000/cats', {
    body: JSON.stringify(cat),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
    })
    .then(response => response.json())
    .then(data => readCat())
    .catch((errors) => console.log("Cat create errors: ", errors))

  }

  const updateCat = (cat, id) =>{
    fetch(`http://localhost:3000/cats/${id}`, {
    body: JSON.stringify(cat),
    headers: {
      "Content-Type": "application/json"
    },
    method: "PATCH"
    })
    .then(response => response.json())
    .then(data => readCat())
    .catch((errors) => console.log("Cat update errors: ", errors))
  }

  const deleteCat = (id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
  })
    .then(response => response.json())
    .then(data => readCat())
    .catch((errors) => console.log("delete cat errors: ", errors))
}


  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats}/>} />
        <Route path="/catshow/:id" element={<CatShow cats={cats} deleteCat={deleteCat}/>} />
        <Route path="/catnew" element={<CatNew createCat={createCat}/>} />
        <Route path="/catedit/:id" element={<CatEdit cats={cats} updateCat={updateCat} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
