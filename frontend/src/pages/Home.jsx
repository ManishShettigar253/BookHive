import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import { FaBook } from "react-icons/fa"; // For a "Books" icon
import './Home.css'; // You can add your CSS in an external file, or use inline styles

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to BookHive</h1>
        <p>Your personal book management hub. Easily track, manage, and explore your book collection!</p>
        <div className="cta-buttons">
          <Link to="/books" className="cta-button">
            <FaBook /> View Books
          </Link>
          <Link to="/books/create" className="cta-button">
            <MdOutlineAddBox /> Add New Book
          </Link>
        </div>
      </div>

      <div className="about-section">
        <h2>About BookHive</h2>
        <p>BookHive is a simple and efficient tool to keep track of your favorite books. Whether you are an avid reader or just starting your collection, BookHive helps you organize and explore your books with ease.</p>
      </div>

    </div>
  );
};

export default Home;
