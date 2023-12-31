import { Fragment , useState} from "react";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';

import Header from "./components/Layout/Header";
import CartProvider from "./store/cart-Provider";
function App() {

  const[cartIsShown , setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
