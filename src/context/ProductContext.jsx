import { createContext, useContext, useState, useEffect } from "react";
import { addProduct, getProducts, updateProduct, deleteProduct } from "../services/productService";


const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
      const fetchProducts = async () => {
          setProductsLoading(true);
          setError(null);

          try {
            const data = await getProducts();
            setProducts(data);
          } catch (err) {
              setError("Failed to fetch products.");
          } finally {
              setProductsLoading(false);
          }
      };
      fetchProducts();
  }, []);


  const handleUpdateProduct = async (updatedProduct) => {
      setProductsLoading(true);
      setError(null);
      try{
        const savedProduct = await updateProduct(updatedProduct);
        if(savedProduct){
          setProducts(prev =>
            prev.map(p =>
              p.id === updatedProduct.id
                ? {
                    ...p,
                    ...updatedProduct,
                    rating: updatedProduct.rating || p.rating
                  }
                : p
            )
          );

          setSuccessMessage("Product updated successfully.");
          setTimeout(() => {
            setSuccessMessage(null);
          }, 3000);
        }
  
      }catch(error){
        setError("Failed to update product. Please try again.");
      }finally{
        setProductsLoading(false);
      }
  };

  const handleAddProduct = async (newProduct) => {
    try {
      const savedProduct = await addProduct(newProduct);

      const nomalizedSavedProduct = {
        ...savedProduct,
        rating: newProduct.rating || {
            rate:0,
            count:0
        }
      }
  
      if (savedProduct) {
        setProducts(prev => [...prev, nomalizedSavedProduct]);

        setSuccessMessage("Product added successfully.");
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      }
    } catch (error) {
      setError(error.message);
    }finally{
        setProductsLoading(false);
    }
  };

  const handleDeleteProduct = async (productId) => {
    setProductsLoading(true);
    setError(null);
    try{
      const response = await deleteProduct(productId);
      if(response){
        setProducts(prev => prev.filter(product => product.id !== productId));

        setSuccessMessage("Product deleted successfully.");
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      }
      
    }catch(err){
      setError(err.message);
    }finally{
      setProductsLoading(false)
    }
  }

  
  return (
    <ProductContext.Provider value={{ 
      products,
      setProducts,
      handleUpdateProduct,
      handleAddProduct,
      handleDeleteProduct,
      loading: productsLoading,
      error,
      successMessage
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);