import logo from "../assets/images/logo.png";
import type { ClothingProduct } from "../data/data";
import ItemsContainer from "./ItemsContainer";

interface ThriftHappensProps {
  data: ClothingProduct[];
}
export default function ThriftHappens({ data }: ThriftHappensProps) {
  return (
    <div>
      <img src={logo} alt="logo" height={100} width={180} />
      <ItemsContainer products={data} />
    </div>
  );
}
