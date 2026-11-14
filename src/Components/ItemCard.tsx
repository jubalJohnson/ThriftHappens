import type { ClothingProduct } from "../data/data";

interface ItemCardProps {
  product: ClothingProduct;
  handleAdjustQuantity: (id: number, delta: number) => void;
}

export default function ItemCard({
  product,
  handleAdjustQuantity,
}: ItemCardProps) {
  return (
    <div>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} width={150} />
      <p>Fit: {product.fit}</p>
      <p>Category: {product.category}</p>
      <p>Color: {product.color}</p>
      <p>{product.description}</p>
      <p>Size: {product.size}</p>
      <p>Price: {product.price.toFixed(2)}$</p>
      <p>Quantity: {product.quantity}</p>
      <div>
        <button onClick={() => handleAdjustQuantity(product.id, -1)}>-</button>
        <span> {product.itemQuantity} </span>
        <button onClick={() => handleAdjustQuantity(product.id, 1)}>+</button>
      </div>
    </div>
  );
}
