import { useMemo } from "react"


export const useFilteredItems = (items = [], searchTerm) => {
    
   const filteredItems = useMemo(() => {
      if(!items) return [];
      return items.filter(item => item.title && item.title.toLowerCase().includes(searchTerm))
        
    }, [items, searchTerm]);

   return filteredItems;

}