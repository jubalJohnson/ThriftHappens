import type { ClothingProduct } from "../data/data";
import CheckoutCard from "./CheckoutCard";

interface CheckoutContainerProps {
  cartItems: ClothingProduct[];
  handleRemoveFromCheckout: (cartItem: ClothingProduct) => void;
  handleEmptyCheckout: () => void;
}
//Component to display checkout items and grant total
export default function CheckoutContainer({
  cartItems,
  handleRemoveFromCheckout,
  handleEmptyCheckout,
}: CheckoutContainerProps) {
  return (
    <div className="CheckoutContainer">
      <h2>Cart</h2>
      <br />
      {/*Display checkout card for items in checkout*/}
      {cartItems.map((cartItem) => (
        <CheckoutCard
          key={cartItem.id}
          cartItem={cartItem}
          handleRemoveFromCheckout={handleRemoveFromCheckout}
        />
      ))}
      {/*Button for emptying the cart and adding quantity in checkout back to available stock */}
      <button onClick={handleEmptyCheckout} disabled={cartItems.length === 0}>
        Empty Checkout
      </button>
      {/*reduce() used for finding cart total, if cart is empty "cart empty displayed"*/}
      <h3>
        {cartItems.length > 0
          ? `Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}$`
          : "Cart Empty"}
      </h3>
    </div>
  );
}
