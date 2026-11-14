import type { ClothingProduct } from "../data/data.ts";
import ItemCard from "./ItemCard";

interface ItemsContainerProps {
  products: ClothingProduct[];
  handleAdjustQuantity: (id: number, delta: number) => void;
}

export default function ItemsContainer({
  products,
  handleAdjustQuantity,
}: ItemsContainerProps) {
  return (
    <div>
      {products.map((product) => (
        <ItemCard
          key={product.id}
          product={product}
          handleAdjustQuantity={handleAdjustQuantity}
        />
      ))}
    </div>
  );
}
