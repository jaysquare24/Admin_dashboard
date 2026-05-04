import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom"
import { FiBell } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { SearchBar } from "../../common/SearchBar";
import { Button } from "../../common/Button";
import { useSearch } from "../../../context/SearchContext";
import { Modal } from "../../common/modal/Modal";
import { AddProductForm } from "../../common/modal/children/AddProductForm";
import { useProducts } from "../../../context/ProductContext";

export const TopBar = ({toggleSidebar}) => {
  const  [isOpen, setIsOpen] = useState(false);
  const { handleAddProduct, products } = useProducts();
  const location = useLocation()
  const { searchTerm, setSearchTerm } = useSearch(); 

  const handleFutureFeature = () => {
    alert("This feature is not implemented in the demo version.")
  }
  
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddProductButton = () => {
    if(products.length <= 20){
      setIsOpen(true)
    }else{
      alert("This demo allows adding only one product because the API does not persist newly created products.")
    }
  }

  return (
    <header className="top-bar">
      {location.pathname !== "/products" &&
      <h1 className="logo">StoreMetrics</h1>}
      {location.pathname == "/products" && (
      <div className="top-bar-left">
        <SearchBar searchTerm={searchTerm} onSearchChange={handleChange} />
        <Button onClick={handleAddProductButton}>Add Product</Button>
        <Button onClick={handleAddProductButton} className={'mobile-add'}>+</Button>
      </div>
      )}
      <nav className="top-bar-right">  
        <NavLink onClick={handleFutureFeature} ><FiBell className="icon" /></NavLink>
        <NavLink onClick={handleFutureFeature}><FaUserCircle className="icon" /></NavLink> 
        <button className="menu-btn" onClick={toggleSidebar}>
          ☰
        </button>  
      </nav>
      
      {isOpen && 
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Add Product">
          <AddProductForm 
            onSave={handleAddProduct}
            setIsOpen={setIsOpen}
          />
        </Modal>
      }
    </header>
  )
}