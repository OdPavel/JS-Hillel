import './App.css';
import {Basket} from "./components/Basket";
import {Catalog} from "./components/Catalog";
import {Container} from "@mui/material";
import Header from "./components/Header";
import {useState} from "react";

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false)
  return (
    <div className="App">

            <Header
            handleCart={()=>setIsCartOpen(true)}
            />
        <Container>
            <Catalog/>

        </Container>
        <Basket cartOpen={isCartOpen}
                closeCart={() => setIsCartOpen(false)}
        />

    </div>
  );
}

export default App;
