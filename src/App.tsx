import "./App.css";
import { products } from "./data/data";
import ThriftHappens from "./Components/ThriftHappens";
//Main app component
function App() {
  return (
    <div>
      <ThriftHappens data={products} />
    </div>
  );
}

export default App;
