import { API_URL } from "./api";

export const getProducts = async () =>{
 
  const response = await fetch(`${API_URL}/products`);
  const data = await response.json();
  console.log(data);

  if(!response.ok) {
    throw new Error(`Error fetching products`);
  }

  return data;
 
};

export const updateProduct = async (product) => {
  const response = await fetch(`${API_URL}/products/${product.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
  });

  if (!response.ok) {
    throw new Error("Failed to update product");
  }

  const data = await response.json();
  return data;
};

export const addProduct = async (product) => {
  const response = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
  });

  if(!response.ok) throw new Error('Failed to Add Product');
    
  const data = response.json();
  return data;
  
};

export const deleteProduct = async(id) =>{
  
  const response = await fetch(`${API_URL}/products/${id}`,{
    method: 'DELETE'
  })

  if(!response.ok){
    throw new Error('Failed to delete Item, try again');
  }

  return await response.json();

}