import Carousel from "./components/Carousel";

function App() {
    const definitions = [
        { url: 'https://www.ixbt.com/img/n1/news/2022/6/6/32a52ad-google_large.jpg', id: 1 },
        { url: 'https://marketer.ua/wp-content/uploads/2017/09/google-ranking-factors.png', id: 2 },
        { url: 'https://itech.co.ua/wp-content/uploads/2021/01/google-1.jpg', id: 3 },
    ];
  return (
    <div className="App">
     <Carousel  data={definitions}/>
    </div>
  );
}

export default App;
