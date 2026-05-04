import { useState } from "react";

export const AddProductForm = ({ onSave, setIsOpen }) => {    
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        price:0,
        stock: 0,
        rating: 0,      
        imgUrl: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === "price" || name === "stock" || name === "rating"
            ? Number(value)
            : value
        }));  
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            title: formData.title,
            category: formData.category,
            price: formData.price,
            rating: {
                rate: formData.rating,
                count: formData.stock
            },
            imgUrl: formData.imgUrl
        };
        onSave(newProduct);   
        setIsOpen(false);   
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
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
            <label>
                Image URL:
                <input 
                    type="text"
                    name="imgUrl"
                    value={formData.imgUrl}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Save Product</button>
        </form>
    );
}