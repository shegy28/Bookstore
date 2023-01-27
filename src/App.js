import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BooksPage from './components/BooksPage';
import CategoriesPage from './components/CategoriesPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='book-container'>
          <Navbar />
          <Routes>
            <Route path="/" element={<BooksPage />} />
            <Route path="category" element={<CategoriesPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
