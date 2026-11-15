import type { ClothingProduct } from "../data/data";

interface ItemCardProps {
  product: ClothingProduct;
  handleAdjustQuantity: (id: number, delta: number) => void;
  handleAddtoCheckout: (cartItem: ClothingProduct) => void;
}
//Component to display product details and +, - and Add to checkout buttons for each product
export default function ItemCard({
  product,
  handleAdjustQuantity,
  handleAddtoCheckout,
}: ItemCardProps) {
  return (
    <div className="ItemCard">
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
        {/*+ and - buttons to add or remove quantity*/}
        <button onClick={() => handleAdjustQuantity(product.id, -1)}>-</button>
        <span> {product.itemQuantity} </span>
        <button onClick={() => handleAdjustQuantity(product.id, 1)}>+</button>
      </div>
      {/*Button to add quantity to checkout additionaly out of stock text 
      when available stock is 0 and button is disabled*/}
      <button
        onClick={() => handleAddtoCheckout(product)}
        disabled={product.quantity === 0}
      >
        {product.quantity === 0 ? "Out of stock" : "Add to checkout"}
      </button>
    </div>
  );
}
