import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserProductsStore = create(persist(
    (set, get) => ({
        userProducts: [],
        counterId: 1,
        addProduct: (product) => {
            const newProduct = { ...product, id: get().counterId };
            set({
                userProducts: [...get().userProducts, newProduct],
                counterId: get().counterId + 1
            });
        },
        updateProduct: (product) => {
            set({
                userProducts: get().userProducts.map(p => p.id === product.id ? product : p)
            });
        },
        deleteProduct: (id) => {
            const newList = get().userProducts.filter(p => p.id !== id);
            const resetId = newList.length === 0 ? 1 : get().counterId;
            set({ userProducts: newList, counterId: resetId });
        }
    }),
    { name: 'user-products-storage' }
));
