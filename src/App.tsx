import { products } from "./data/data";
import ThriftHappens from "./Components/ThriftHappens";

function App() {
  return (
    <div>
      <ThriftHappens data={products} />
    </div>
  );
}

export default App;
