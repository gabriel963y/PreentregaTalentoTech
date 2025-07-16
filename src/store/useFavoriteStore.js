import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from 'react-toastify';

export const useFavoriteStore = create(persist(
    (set, get) => ({
        favorite: [],
        toggleFavorite: (product) => {
            const exists = get().favorite.some(fav => fav.id === product.id);
            if (exists) {
                toast.error('Producto eliminado de favoritos');
                set({ favorite: get().favorite.filter(fav => fav.id !== product.id) });
            } else {
                toast.success('Producto agregado a favoritos.');
                set({ favorite: [...get().favorite, product] });
            }
        },
        clearFavorites: () => set({ favorite: [] }),
        removeFavoriteById: (id) => {
            const updated = get().favorite.filter(p => p.id !== id);
            set({ favorite: updated });
        }
    }),
    { name: 'favorite-storage' }
));
