import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { deleteProduct, getProducts, updateProduct, addProduct } from '../productService';
import { mockFetchSuccess, mockFetchError, mockFetchReject } from './utils/mockFetch';


describe('productService APIs', () =>{
    describe('getProducts API', () => {
        afterEach(()=>{
            vi.restoreAllMocks();
        });

        it('calls getProducts endpoint correctly', async () => {
            mockFetchSuccess([]);
            await getProducts();

            expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products');
            expect(fetch).toHaveBeenCalledTimes(1);
        })
       
        it('handles fetch successfully', async () => {

            const mockData = [{ id: 1, title: "Product 1" }];

            mockFetchSuccess(mockData)

            const result = await getProducts();

            expect(result).toEqual(mockData);
        });

        it('handles getProducts fetch error correctly', async()=>{
           mockFetchError()

            await expect(getProducts()).rejects.toThrow("Error fetching products");
        });

        it("handles getProduct Network errors correctly", async () => {
           mockFetchReject()

            await expect(getProducts()).rejects.toThrow("Network error");
        });

    })

    describe('updateProduct API', ()=>{

        const product = { id: 1, title: "Product 1" };
        const mockData = [{ id: 1, title: "Product 1" }];

        afterEach(()=>{
            vi.restoreAllMocks();
        })

        it('calls updateProduct endpoint correctly', async()=>{

            const product = { id: 1, title: "Product 1" };
            mockFetchSuccess([]);

            await updateProduct(product)

            expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products/1', {
                method: 'PUT',
                headers:{
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(product)

            });
        });

        it('it handles updateProduct success correctly', async()=>{
            
            mockFetchSuccess(mockData)

            const result = await updateProduct(product)

            expect(result).toEqual(mockData);
        });

        it('handles updateProduct fetch error correctly', async()=>{

            const product = { id: 1, title: "Product 1" };
            mockFetchError()

            await expect(updateProduct(product)).rejects.toThrow("Failed to update product")
        });

        it("handles updateProduct Network errors correctly", async () => {
           mockFetchReject()

            await expect(updateProduct(product)).rejects.toThrow("Network error");
        });
    });

    describe('addProduct API', () => {

        const newProduct = { title: "New Product" };
        const mockData = [{ id: 5, title: "New Product" }];

        afterEach(()=>{
            vi.restoreAllMocks();
        })

        it('calls addProduct endpoint correctly', async()=>{
            mockFetchSuccess([])

            await addProduct(newProduct);

            expect(fetch).toHaveBeenCalledWith( 'https://fakestoreapi.com/products',{
                method: 'POST',
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct)

            });
        });

        it('handle addProduct success correctly', async () => {
            mockFetchSuccess(mockData);

            const result = await addProduct(newProduct);

            expect(result).toEqual(mockData)

        });

        it('handle addProduct fetch error correctly', async () => {
            mockFetchError();

            await expect(addProduct(newProduct)).rejects.toThrow('Failed to Add Product')
        });

        it("handles addProduct Network errors correctly", async () => {
           mockFetchReject()

            await expect(addProduct(newProduct)).rejects.toThrow("Network error");
        });
    })

    describe('deleteItem API', () => {
        // Reset mocks between tests
        afterEach(() => {
            vi.restoreAllMocks();
        });

        it("calls delete endpoint correctly", async () => {
            mockFetchSuccess([]);

            await deleteProduct(1);

            expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products/1", {
            method: "DELETE",
            });
            expect(fetch).toHaveBeenCalledTimes(1);
        });

        it('handles fetch succesSfully', async () => {
            mockFetchSuccess({success: true})

            const result = await deleteProduct(1);
            expect(result).toEqual({ success: true });
        });

        it('handle deleteItem fetch error correctly', async () => {
            mockFetchError("Failed to delete Item, try again");

            await expect(deleteProduct(1)).rejects.toThrow('Failed to delete Item, try again')
        })

        it("handles Network errors correctly", async () => {
           mockFetchReject()

            await expect(deleteProduct(1)).rejects.toThrow("Network error");
        });
    });

});