import { useEffect, useState } from "react";
import { useProducts } from "../stores/useProducts";

export const Cart = () => {
  const { productList } = useProducts();
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let money = 0;

    productList.forEach((product) => (money = money + product.price));

    setSum(money);
  }, [productList]);

  return (
    <>
      <h2>Count: {productList.length}</h2>
      <h2>Price: {sum} $</h2>
    </>
  );
};
