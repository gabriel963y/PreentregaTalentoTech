import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from 'react-toastify';

export const useShopStore = create(persist(
    (set, get) => ({
        shop: [],
        toggleShop: (product) => {
            const exists = get().shop.some(p => p.id === product.id);
            if (exists) {
                toast.error('Producto eliminado del carrito de compras.');
                set({ shop: get().shop.filter(p => p.id !== product.id) });
            } else {
                toast.success('Producto agregado al carrito de compras.');
                set({ shop: [...get().shop, product] });
            }
        },
        addToShop: (product) => {
            const exists = get().shop.some(p => p.id === product.id);
            if (!exists) set({ shop: [...get().shop, product] });
        },
        removeFromShop: (id) => set({ shop: get().shop.filter(p => p.id !== id) }),
        clearShop: () => set({ shop: [] }),
        getTotal: () => {
            let total = 0;
            const items = get().shop;
            for (let i = 0; i < items.length; i++) {
                total += items[i].price;
            }
            return total;
        },
    }),
    {
        name: 'shop-storage'
    }
));
