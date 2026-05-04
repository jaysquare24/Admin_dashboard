import { getProducts } from "../../services/productService"
import { ProductItems } from "./sections/ProductItems";
import { useState, useEffect, use } from "react";
import { Pagination } from "../../components/common/Pagination";
import { updateProduct } from "../../services/productService";
import { useSearch } from "../../context/SearchContext";
import { ProductFilters } from "./sections/ProductFilters";
import { useDebounce } from "../../hook/useDebounce";
import { useFilteredItems } from "../../hook/useFilteredItems";
import { Button } from "../../components/common/Button";
import { useProducts } from "../../context/ProductContext";
import { Loader } from "../../components/common/Loader";
import { ErrorState } from "../../components/common/ErrorState";

export const Products = () => {
  const { products, handleUpdateProduct, handleDeleteProduct, loading, error, successMessage } = useProducts();
  const [editingProduct, setEditingProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { searchTerm, setSearchTerm } = useSearch();
    
  const normalizedSearchTerm = searchTerm ? searchTerm.toLowerCase() : "";

  const filteredProducts = useFilteredItems( products, useDebounce(normalizedSearchTerm));
  const productsLength = filteredProducts.length > 0 ? filteredProducts.length : products.length;
  const itemsPerPage = 10;
  const totalPages = Math.ceil(productsLength / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <Loader fullScreen={true} />;
  }

  if (error) {  
    return <ErrorState message={error} onRetry={() => window.location.reload()} />;
  }


  return (
    <div className="products">
      {successMessage && <div className="success-message">{successMessage}</div>}
      {searchTerm ? (
      <div className="product-filters-container">
        <h2>Searched Products</h2>
        <ProductFilters 
          filteredProducts={filteredProducts.length > 10? filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : filteredProducts}
          onUpdateProduct={handleUpdateProduct} 
          editingProduct={editingProduct} 
          setEditingProduct={setEditingProduct} 
          searchTerm={searchTerm} 
        />
        <Button className="go-back-button" onClick={() => setSearchTerm("")}> Go Back</Button>
      </div>) 
        
      :(
      <>
        <h2>Products</h2>
        <ProductItems
          products={products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
          onUpdateProduct={handleUpdateProduct}
          editingProduct={editingProduct}
          setEditingProduct={setEditingProduct}
          searchTerm = {searchTerm}
          onDeleteProduct={handleDeleteProduct}
        />
      </>)}
      {totalPages > 1 && (
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  )
} 