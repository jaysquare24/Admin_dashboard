import { useState} from "react";

export const EditProductForm = ({ product, onSave, onCancel }) => {
    const [formData, setFormData] = useState(product ? {
        title: product.title,
        category: product.category,
        price: product.price,
        stock: product.rating.count || 0,
        rating: product.rating.rate  || 0
    }: {});


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === "price" || name === "stock" || name === "rating"
            ? Number(value)
            : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = { ...product, 
            title: formData.title,
            category: formData.category,
            price: formData.price,
            rating: {
            rate: formData.rating,
            count: formData.stock
            }
        };
        onSave(updatedProduct);
       
    };



    return (
        <form className="edit-form" onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
            </label>
            <label>
                Category:
                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                />
            </label>
            <label>
                Price:
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                />
            </label>
            <label>
                Stock:
                <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                />
            </label>
            <label>
                Rating:
                <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>
                Cancel
            </button>
        </form>
    );                  
};