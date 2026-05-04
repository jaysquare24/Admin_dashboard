import { useState } from "react";
import { CartRow } from "./CartRow";
import {CartModal} from "./CartModal";

export const CartTable = ({ carts }) => {
  const [selectedCart, setSelectedCart] = useState(null);

  return (
    <>
      <table className="cart-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Date</th>
            <th>Items</th>
            <th>Total ($)</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {carts.map(cart => (
            <CartRow
              key={cart.id}
              cart={cart}
              onView={() => setSelectedCart(cart)}
            />
          ))}
        </tbody>
      </table>

      {selectedCart && (
        <CartModal
          cart={selectedCart}
          onClose={() => setSelectedCart(null)}
        />
      )}
    </>
  );
};
