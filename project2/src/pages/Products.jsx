import { useEffect, useState } from "react";
import { getProducts } from "../api/getProducts";
import { useProducts } from "../stores/useProducts";
import { Cart } from "../components/Cart";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { addProduct } = useProducts();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        setError("");
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (isLoading) {
    return (
      <section className="box-border p-8 text-center text-xl font-medium text-[#08060d] dark:text-[#f3f4f6]">
        Загрузка товаров...
      </section>
    );
  }

  if (error) {
    return (
      <section className="box-border p-8 text-center">
        <h2 className="mb-3 text-2xl font-semibold text-[#08060d] dark:text-[#f3f4f6]">
          Ошибка загрузки
        </h2>
        <p className="m-0 text-lg text-red-600 dark:text-red-400">{error}</p>
      </section>
    );
  }

  return (
    <>
      <Cart />
      <section className="box-border flex flex-wrap gap-5 p-8 text-left">
        {products.map((product) => {
          return (
            <article
              className="flex min-h-[360px] max-w-80 flex-[1_1_240px] flex-col overflow-hidden rounded-lg border border-[#e5e4e7] bg-[rgb(116,116,116)] dark:border-[#2e303a]"
              key={product.id}
            >
              <img
                className="block aspect-[4/3] w-full bg-[#f4f3ec] object-cover dark:bg-[#1f2028]"
                src={product.images[0]}
                alt={product.title}
              />
              <div className="flex flex-1 flex-col justify-between gap-2.5 p-4">
                <h4 className="m-0 text-lg font-semibold leading-tight text-[#08060d] dark:text-[#f3f4f6]">
                  {product.title}
                </h4>
                <p className="m-0 text-[17px] font-bold text-[#aa3bff] dark:text-[#c084fc]">
                  {product.price} $
                </p>
                <button
                  className="mt-2 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#8b2dff] to-[#c026d3] px-4 text-sm font-semibold text-white shadow-lg shadow-[#8b2dff]/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#8b2dff]/30 focus:outline-none focus:ring-2 focus:ring-[#c084fc] focus:ring-offset-2 focus:ring-offset-[rgb(116,116,116)] active:translate-y-0 dark:focus:ring-offset-[#1f2028]"
                  onClick={() => addProduct(product)}
                >
                  Add to cart
                </button>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};
