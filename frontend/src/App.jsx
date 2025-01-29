// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
// import CreateBook from './pages/CreateBook.jsx';
// import DeleteBook from './pages/DeleteBook.jsx';
// import EditBook from './pages/EditBook.jsx';
// import ShowBook from './pages/ShowBook.jsx';
import Books from './pages/Books.jsx'; // List of books
import About from './pages/About.jsx'; // About page
import Navbar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} /> {/*
          <Route path="/books/create" element={<CreateBook />} />
          <Route path="/books/delete/:id" element={<DeleteBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/books/details/:id" element={<ShowBook />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
      <style>{`
        /* General Layout Styling */
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }

        h2 {
          color: #333;
        }

        main {
          padding: 20px;
        }
      `}</style>
    </div>
  );
}

export default App;
