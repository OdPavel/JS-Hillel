import './App.css';
import {Basket} from "./components/Basket";
import {Catalog} from "./components/Catalog";
import {Container} from "@mui/material";
import Header from "./components/Header";
import {useState} from "react";
import {ProductsList} from "./components/ProductsList";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Cart from "./components/Cart";
import MainLayout from "./components/MainLayout";

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false)
    console.log(isCartOpen)
    const [cartItems, setCartItems] = useState([])
    const [cart, setCart] = useState([])

    const deleteCart = (id) => {
        setCartItems((prev) => prev.filter((cart) => cart.id !== id))
    }

    return (
        <BrowserRouter>

            <div className="App">
                <Routes>
                    <Route path='/' element={<MainLayout
                        handleCart={() => setIsCartOpen(true)}
                    />}>

                        <Route path='about' element={<About/>}/>

                        <Route path='contacts' element={<Contacts/>}/>

                        <Route path='cart' element={
                            <Cart
                                cart={cart}
                            />}/>


                        <Route index element={
                            <Catalog
                                setCartItems={setCartItems}
                                setCart={setCart}
                            />
                        }/>


                        <Route path='basket' element={<Basket
                            cartOpen={isCartOpen}
                            closeCart={() => setIsCartOpen(false)}
                            items={cartItems}
                            deleteCart={deleteCart}
                        />}/>

                    </Route>


                </Routes>


            </div>
        </BrowserRouter>

    );
}

export default App;
