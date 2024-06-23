import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [inputs, changeInputs] = useState([]);

  function addToCart(book, itemValue) {
    // if it is the first time putting it in the cart:
    if (!cart.find((item) => item.id === book.id)) {
      setCart([...cart, book]);
      changeInputs([...inputs, {id: book.id, value: itemValue}])
    }
    else {
      inputs.map(input => input.id === book.id ? {...input, value: input.value + itemValue} : input)
      console.log(inputs);
    }
  }

  useEffect(() => {
    console.log(cart);
    console.log(inputs);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={<BookInfo books={books} addToCart={addToCart}/>}
          />
          <Route path="/cart" element={<Cart books={books} cart={cart} itemValue={inputs}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
