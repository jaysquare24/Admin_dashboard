export const CartModal = ({ cart, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        <div className="modal-header">
          <h3>Cart #{cart.id}</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          <p><strong>User:</strong> {cart.userName}</p>
          <p><strong>Date:</strong> {new Date(cart.date).toLocaleString()}</p>

          <div className="cart-products">
            {cart.products.map((item, index) => (
              <div key={index} className="product-row">
                <span>{item.name}</span>
                <span>Qty: {item.quantity}</span>
                <span>${item.total.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <h4>Total: ${cart.total.toFixed(2)}</h4>
        </div>

      </div>
    </div>
  );
};