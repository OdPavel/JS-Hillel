import Cart from "./Components/Cart";


function App() {
    const items = [
        {id: 1, title: 'hi Pavel!!!' },
        {id: 2, text: 'how are you?' }
    ];
    return (
        <div className="App">
            <Cart data = {items}/>
        </div>
    );
}

export default App;
