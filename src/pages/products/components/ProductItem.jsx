export const ProductItem = ({product, setEditingProduct, setIsOpen, onDeleteProduct}) => {
    return(
        <div className="product-item">
          <p className="name">{product.title}</p>
          <p className="category" data-label="Category">{product.category}</p>
          <p className="price" data-label="Price">${product.price.toFixed(2)}</p>
          <p className="stock" data-label="Stock">{product.rating?.count || 0}</p>
          <p className="rating" data-label="Rating">{product.rating?.rate || 0}</p>

          <div className="actions " >
                <button
                className="edit"
                onClick={() => {
                    setEditingProduct(product);
                    setIsOpen(true);
                }}
                >
                Edit
                </button>

                <button className="delete" role="button" onClick={() => onDeleteProduct(product.id)}>Delete</button>
          </div>
        </div>
    )
}