import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { ProductProvider } from "../ProductContext";
import { TestComponent } from "./testComponents/TestComponent";
import * as api from "../../services/productService";

// Mock SearchContext (important)
vi.mock("../../context/SearchContext", () => ({
  useSearch: () => ({
    searchTerm: "",
    setSearchTerm: vi.fn(),
  }),
}));

describe("Context", () => {
  describe("ProductContext", () => {
    describe('handleDeleteProduct', () => {

        afterEach(() => {
        vi.restoreAllMocks();
        });

        it("tests handleDeleteProduct success", async () => {
        // Mock initial products (COMPLETE shape not needed now)
        vi.spyOn(api, "getProducts").mockResolvedValue([
            { id: 1, title: "Product1" },
        ]);

        // Mock delete success
        vi.spyOn(api, "deleteProduct").mockResolvedValue({});

        render(
            <ProductProvider>
            <TestComponent />
            </ProductProvider>
        );

        //Wait for product to appear
        expect(await screen.findByText("Product1")).toBeInTheDocument();

        // Click delete
        fireEvent.click(screen.getByRole("button", { name: /delete/i }));

        // Wait for removal
        await waitFor(() => {
            expect(screen.queryByText("Product1")).not.toBeInTheDocument();
        });

        // Ensure API was called correctly
        expect(api.deleteProduct).toHaveBeenCalledWith(1);
        });

        it("shows error message when delete fails", async () => {
            vi.spyOn(api, 'getProducts').mockResolvedValue([
                {id:1, title:"Product1"}
            ])

            vi.spyOn(api, "deleteProduct").mockRejectedValue(new Error("Failed to delete product"));
            
            render(
            <ProductProvider>
            <TestComponent />
            </ProductProvider>
        );

        expect(await screen.findByText('Product1')).toBeInTheDocument();
        
        fireEvent.click(screen.getByRole('button', {name: /delete/i}));

        const errMessage = await screen.findByText(/failed to delete product/i)

        expect(errMessage).toBeInTheDocument();
            
            
    })

    })

  });
});