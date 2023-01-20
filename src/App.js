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
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="category" element={<CategoriesPage />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
