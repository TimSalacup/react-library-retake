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
  const [cartNum, changeCartNum] = useState(0);
  const [prices, updatePricesArray] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalDetails, setTotalDetails] = useState({tax: 0, subtotal: 0})
  function addToCart(book, itemValue) {
    // if it is the first time putting it in the cart:
    if (!cart.find((item) => item.id === book.id)) {
      setCart([...cart, book]);
      changeInputs([
        ...inputs,
        {
          id: book.id,
          value: itemValue,
          price: +book.salePrice || book.originalPrice,
        },
      ]);
    }
  }

  function updateInputValues(id, newValue) {
    changeInputs(
      inputs.map((input) =>
        input.id === id ? { ...input, value: +newValue } : input
      )
    );
  }

  function updatePrices(newPrice, priceId) {
    if (!prices.find((price) => price.id === priceId)) {
      // first time putting the price in the array
      updatePricesArray([...prices, { id: priceId, price: newPrice }]);
    } else
      updatePricesArray(
        prices.map((price) =>
          price.id === priceId ? { ...price, price: newPrice } : price
        )
      );
  }

  function totalCartNumber() {
    let booksTotal = 0;
    for (let i = 0; i < inputs.length; i++) {
      booksTotal += inputs[i].value;
    }
    changeCartNum(booksTotal);
  }

  function totalPrices() {
    let temp = 0;
    for (let i = 0; i < inputs.length; i++) {
      temp += inputs[i].price * inputs[i].value;
    }
    setTotal(temp);
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
    changeInputs(inputs.filter(input => input.id !== id));
    updatePricesArray(prices.filter(price => price.id !== id));
  }

  useEffect(() => {
    // calculates the prices total
    totalPrices();
  }, [inputs, prices]);

  useEffect(() => {
    totalCartNumber();
  }, [inputs, prices]);

  useEffect(() => {
    setTotalDetails({ tax: cartNum, subtotal: total - cartNum});

  }, [total, inputs])

  return (
    <Router>
      <div className="App">
        <Nav cartNum={cartNum} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={<BookInfo books={books} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                books={books}
                cart={cart}
                inputs={inputs}
                updateInputValues={updateInputValues}
                updatePrices={updatePrices}
                totalPrice = {total}
                totalDetails = {totalDetails}
                removeItem = {removeItem}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
