import { products } from "./data";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="cards">
        {products.map((product) => {
          return <Card product={product} />;
        })}
      </div>
    </div>
  );
}

export default App;
