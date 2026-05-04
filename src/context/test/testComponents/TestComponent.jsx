import { useProducts } from "../../ProductContext";

export const TestComponent = () => {
  const { products, handleDeleteProduct, error } = useProducts();

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <span>{p.title}</span>
          <button onClick={() => handleDeleteProduct(p.id)}>
            Delete
          </button>
        </div>
      ))}

      {error && <p>{error}</p>}
    </div>
  );
};