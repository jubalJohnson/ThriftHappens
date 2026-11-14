import type { ClothingProduct } from "../data/data.ts";
import ItemCard from "./ItemCard";

interface ItemsContainerProps {
  products: ClothingProduct[];
}

export default function ItemsContainer({ products }: ItemsContainerProps) {
  return (
    <div>
      {products.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </div>
  );
}
