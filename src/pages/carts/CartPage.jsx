import { useGetCarts } from "../../hook/useGetCart";
import { CartTable } from "./components/CartTable";
import { Loader } from "../../components/common/Loader";
import { ErrorState } from "../../components/common/ErrorState";

export const CartPage = () => {
  const { carts, isLoading, error } = useGetCarts();

  if (isLoading) {
    return <Loader fullScreen={true} />;
  }

  if (error) {  
    return <ErrorState message={error} onRetry={() => window.location.reload()} />;
  }

  return (
    <div className="cart-page">
      <h2>Cart Management</h2>
      <CartTable carts={carts} />
    </div>
  );
};
