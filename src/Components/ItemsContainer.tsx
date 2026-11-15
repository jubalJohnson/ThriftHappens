import type { ClothingProduct } from "../data/data.ts";
import ItemCard from "./ItemCard";

interface ItemsContainerProps {
  products: ClothingProduct[];
  handleAdjustQuantity: (id: number, delta: number) => void;
  handleAddtoCheckout: (cartItem: ClothingProduct) => void;
}
//Component to display all available products
export default function ItemsContainer({
  products,
  handleAdjustQuantity,
  handleAddtoCheckout,
}: ItemsContainerProps) {
  return (
    <div className="ItemsContainer">
      {
        //Display an item card for each product by providing neccesary informations
        products.map((product) => (
          <ItemCard
            key={product.id}
            product={product}
            handleAdjustQuantity={handleAdjustQuantity}
            handleAddtoCheckout={handleAddtoCheckout}
          />
        ))
      }
    </div>
  );
}
