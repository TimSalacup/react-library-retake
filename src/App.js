import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { useState } from "react";


function App() {
  const [cart, setCart] = useState([]);

  function addToCart() {
    console.log("add to cart");
  }
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" exact element={<Books books = { books }/>} />
          <Route path="/books/:id" element={<BookInfo books = { books } addToCart = {addToCart}/>} />
          <Route path="/cart" element={<Cart books = { books }/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
