import { useState, useEffect } from "react";
import { getCarts } from "../services/cartServices";
import { useGetUser } from "./useGetUser";
import { useProducts } from "../context/ProductContext";

export const useGetCarts = () => {
  const [carts, setCarts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

 
  const {
    users,
    isLoading: usersLoading,
    error: usersError,
  } = useGetUser();

  const {
    products,
    isLoading: productsLoading,
    error: productsError,
  } = useProducts();

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await getCarts();

        if (!response || !Array.isArray(response)) {
          throw new Error("Invalid cart data");
        }

        const enrichedCart = response.map((cart) => {
          const user = users?.find((u) => u.id === cart.userId);

          const fullName = user
            ? `${user.name.firstname} ${user.name.lastname}`
            : "Unknown";

          const detailedProducts = cart.products.map((item) => {
            const product = products?.find((p) => p.id === item.productId);

            return {
              ...item,
              name: product?.title || "N/A",
              price: product?.price || 0,
              total: (product?.price || 0) * item.quantity,
            };
          });

          const cartTotal = detailedProducts.reduce(
            (acc, item) => acc + item.total,
            0
          );

          return {
            ...cart,
            userName: fullName,
            products: detailedProducts,
            total: cartTotal,
          };
        });

        setCarts(enrichedCart);
      } catch (err) {
        const message =
          err.message === "Network Error"
            ? "Check your network connection"
            : "Something went wrong, please try again.";

        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCarts();
  }, [users, products]);

  // Handle dependency loading
  if (usersLoading || productsLoading) {
    return { carts: [], isLoading: true, error: null };
  }

  // Handle dependency errors
  if (usersError || productsError) {
    return {
      carts: [],
      isLoading: false,
      error: usersError || productsError,
    };
  }

  return { carts, isLoading, error };
};