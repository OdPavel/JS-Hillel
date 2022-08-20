import Hi from "./components/Card";

function App() {
    return (
        <div className='App'>

            <Hi title = ' hi Pavel!!!' />
            <hr/>
            <Hi text = 'how are you? '/>
            <hr/>
            <Hi title = 'hi Pavel!!!' text = 'how are you? '/>
        </div>


    );
}

export default App;
