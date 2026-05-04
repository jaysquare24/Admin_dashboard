export const CartRow = ({ cart, onView }) => {
  return (
    <tr>
        <td data-label="ID">#{cart.id}</td>
        <td data-label="User">{cart.userName}</td>
        <td data-label="Date">{new Date(cart.date).toLocaleDateString()}</td>
        <td data-label="Items">{cart.products.length}</td>
        <td data-label="Total">${cart.total.toFixed(2)}</td>
        <td>
            <button onClick={onView}>View</button>
        </td>
    </tr>
  );
};
