import { useMemo } from "react";

export const useFilteredItems = (items = [], searchTerm = "") => {
   const filteredItems = useMemo(() => {
    if (!searchTerm) return items;

    return items.filter((item) => {
      // Product fields
      if (item.title) {
        return item.title.toLowerCase().includes(searchTerm);
      }

      // User fields
      if (item.username) {
        return item.username.toLowerCase().includes(searchTerm);
      }

      return false;
    });
   }, [items, searchTerm]);

  return filteredItems;
};