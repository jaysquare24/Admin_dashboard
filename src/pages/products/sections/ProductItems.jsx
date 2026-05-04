import { useState } from "react";
import { Modal } from "../../../components/common/modal/Modal";
import { EditProductForm } from "../../../components/common/modal/children/EditProductForm";
import { ProductItem } from "../components/ProductItem";


    
export const ProductItems = ({ products, onUpdateProduct, editingProduct, setEditingProduct, onDeleteProduct}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClose = () => {
    setIsOpen(false);
    setEditingProduct(null);
  };

  return (
    <section className="product-items">
      <div className="product-header">
        <h4 className="name">Name</h4>
        <h4 className="category">Category</h4>
        <h4 className="price">Price</h4>
        <h4 className="stock">Stock</h4>
        <h4 className="rating">Rating</h4>
        <h4 className="action">Action</h4>
      </div>

      {products?.map((product) => (
        <ProductItem 
          key={product.id} 
          product={product} 
          setEditingProduct={setEditingProduct}
          onDeleteProduct={onDeleteProduct}
          setIsOpen={setIsOpen}/>
      ))}

      {isOpen && editingProduct && (
        <Modal isOpen={isOpen} onClose={handleClose} title="Edit Product">
          <EditProductForm
            product={editingProduct}
            onSave={(newProduct) => {
              onUpdateProduct(newProduct);
              handleClose();
            }}
            onCancel={handleClose}
          />
        </Modal>
      )}
    </section>
  );
};