import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BooksPage from './components/BooksPage';
import CategoriesPage from './components/CategoriesPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element ={<BooksPage />}></Route>
        <Route path= "category" element = {<CategoriesPage />}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
