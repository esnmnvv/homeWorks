import { useProducts } from "../stores/useProducts";

export const CartPage = () => {
  const { productList, deleteProduct } = useProducts();

  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-[repeat(auto-fill,minmax(220px,260px))] justify-center gap-5 px-6 pb-10">
      {productList.map((product) => {
        return (
          <div
            key={product.id}
            className="flex min-h-32 w-full flex-col justify-between gap-4 rounded-lg border border-[#e5e4e7] bg-white p-5 shadow-md shadow-black/10 transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-[#2e303a] dark:bg-[#1f2028]"
          >
            <h4 className="m-0 text-lg font-semibold leading-tight text-[#08060d] dark:text-[#f3f4f6]">
              {product.title}
            </h4>
            <p className="m-0 text-[17px] font-bold text-[#aa3bff] dark:text-[#c084fc]">
              {product.price} $
            </p>
            <button
              onClick={() => deleteProduct(product.id)}
              className="mt-2 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#8b2dff] to-[#c026d3] px-4 text-sm font-semibold text-white shadow-lg shadow-[#8b2dff]/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#8b2dff]/30 focus:outline-none focus:ring-2 focus:ring-[#c084fc] focus:ring-offset-2 focus:ring-offset-[rgb(116,116,116)] active:translate-y-0 dark:focus:ring-offset-[#1f2028]"
            >
              Удалить с корзины
            </button>
          </div>
        );
      })}
    </div>
  );
};
