import type { ClothingProduct } from "../data/data";

interface CheckoutCardProps {
  cartItem: ClothingProduct;
  handleRemoveFromCheckout: (cartItem: ClothingProduct) => void;
}
//Component to display checkout item details and total of each item based on quantity
export default function CheckoutCard({
  cartItem,
  handleRemoveFromCheckout,
}: CheckoutCardProps) {
  return (
    <div>
      <img src={cartItem.image} alt={cartItem.name} width={100} />
      <h3>{cartItem.name}</h3>
      <p>Price: {cartItem.price.toFixed(2)}$</p>
      <p>Quantity: {cartItem.quantity}</p>
      <p>Subtotal: {(cartItem.price * cartItem.quantity).toFixed(2)}$</p>
      {/*Button to remove a particluar item from checkout*/}
      <button onClick={() => handleRemoveFromCheckout(cartItem)}>Remove</button>
    </div>
  );
}
