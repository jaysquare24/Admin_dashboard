import { SearchProvider } from "./SearchContext";
import { ProductProvider } from "./ProductContext";

export const AppProvider = ({ children }) => {
    return (
        <ProductProvider>   
            <SearchProvider>
                {children}
            </SearchProvider>
        </ProductProvider>
    );
}   