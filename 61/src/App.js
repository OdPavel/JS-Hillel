import './App.css';
import {Basket} from "./components/Basket";
import {Catalog} from "./components/Catalog";
import {Container} from "@mui/material";
import Header from "./components/Header";
import {useState} from "react";
import {ProductsList} from "./components/ProductsList";

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const deleteCart =(id)=>{
        setCartItems((prev)=> prev.filter((cart)=>cart.id !== id))
    }


    return (
        <div className="App">

            <Header
                handleCart={() => setIsCartOpen(true)}
            />
            <Container>
                <Catalog
                    setCartItems={setCartItems}

                />

            </Container>

            <Basket

                cartOpen={isCartOpen}
                closeCart={() => setIsCartOpen(false)}
                items={cartItems}
                deleteCart={deleteCart}
            />

        </div>
    );
}

export default App;
