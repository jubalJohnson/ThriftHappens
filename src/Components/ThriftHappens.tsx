import logo from "../assets/images/logo.png";
import type { ClothingProduct } from "../data/data";
import ItemsContainer from "./ItemsContainer";
import { useState } from "react";

interface ThriftHappensProps {
  data: ClothingProduct[];
}

export default function ThriftHappens({ data }: ThriftHappensProps) {
  const [productInfo, setProductInfo] = useState<ClothingProduct[]>(
    data.map((product) => ({ ...product })),
  );

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

  return (
    <div>
      <img src={logo} alt="logo" height={100} width={180} />
      <ItemsContainer
        products={productInfo}
        handleAdjustQuantity={handleAdjustQuantity}
      />
    </div>
  );
}
