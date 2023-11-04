import "./App.css";
import { products } from "./data";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h2>Hello World</h2>
      <div>
        <Card product={products[0]} />
      </div>
    </div>
  );
}

export default App;
