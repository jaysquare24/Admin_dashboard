import { ProductProvider } from "./ProductContext";

export const AppProvider = ({ children }) => {
    return (
        <ProductProvider>   
         {children}   
        </ProductProvider>
    );
}   