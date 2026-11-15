import NavBar from "./NavBar";
import type { ClothingProduct } from "../data/data";
import ItemsContainer from "./ItemsContainer";
import { useState } from "react";
import CheckoutContainer from "./CheckoutContainer";

interface ThriftHappensProps {
  data: ClothingProduct[];
}

export default function ThriftHappens({ data }: ThriftHappensProps) {
  const [productInfo, setProductInfo] = useState<ClothingProduct[]>(
    data.map((product) => ({ ...product })),
  );
  const [cartItems, setCartItems] = useState<ClothingProduct[]>([]);
  //This function handels the quantity change when pressing + or -
  // Avoids negative quantity and quantity above the available stock
  function handleAdjustQuantity(id: number, delta: number) {
    setProductInfo((prevData) =>
      prevData.map((product) =>
        product.id === id
          ? {
              ...product,
              itemQuantity:
                product.itemQuantity + delta >= 0 &&
                product.itemQuantity + delta <= product.quantity
                  ? product.itemQuantity + delta
                  : product.itemQuantity,
            }
          : product,
      ),
    );
  }
  //Function to add selected item and selected quantity to the checkout
  function handleAddtoCheckout(cartItem: ClothingProduct) {
    if (cartItem.itemQuantity === 0) {
      return;
    }
    setCartItems((prevCart) => {
      if (prevCart.filter((product) => product.id === cartItem.id).length > 0) {
        return prevCart.map((product) =>
          product.id === cartItem.id
            ? { ...product, quantity: product.quantity + cartItem.itemQuantity }
            : product,
        );
      }
      return [
        ...prevCart,
        { ...cartItem, quantity: cartItem.itemQuantity, itemQuantity: 0 },
      ];
    });

    setProductInfo((prevData) =>
      prevData.map((product) =>
        product.id === cartItem.id
          ? {
              ...product,
              quantity: product.quantity - cartItem.itemQuantity,
              itemQuantity: 0,
            }
          : product,
      ),
    );
  }
  //Function to remove an item from checkout and add removed quantity to availble stock
  function handleRemoveFromCheckout(cartItem: ClothingProduct) {
    setCartItems((prevCart) =>
      prevCart.filter((item) => item.id !== cartItem.id),
    );

    setProductInfo((prevData) =>
      prevData.map((product) =>
        product.id === cartItem.id
          ? { ...product, quantity: product.quantity + cartItem.quantity }
          : product,
      ),
    );
  }
  //Function to add all quantity of items in checkout back to the stock
  //And clear the checkout
  function handleEmptyCheckout() {
    setProductInfo((prevData) =>
      prevData.map((product) => {
        const itemsInCart = cartItems.filter((item) => item.id === product.id);
        return itemsInCart.length > 0
          ? { ...product, quantity: product.quantity + itemsInCart[0].quantity }
          : product;
      }),
    );
    setCartItems([]);
  }

  return (
    <div className="ThriftHappens">
      <NavBar />
      <div className="ProductsCheckout">
        <ItemsContainer
          products={productInfo}
          handleAdjustQuantity={handleAdjustQuantity}
          handleAddtoCheckout={handleAddtoCheckout}
        />
        <CheckoutContainer
          cartItems={cartItems}
          handleRemoveFromCheckout={handleRemoveFromCheckout}
          handleEmptyCheckout={handleEmptyCheckout}
        />
      </div>
    </div>
  );
}
