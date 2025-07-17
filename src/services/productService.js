import React from 'react'
const API_URL = 'https://6879353463f24f1fdca14c28.mockapi.io/products'

export const getProducts = async () => {
    const res = await fetch(API_URL)
    if (!res.ok) throw new Error('Error al obtener los productos.')
    return await res.json()
}

export const addProduct = async (product) => {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    })
    if (!res.ok) throw new Error('Error al crear el producto.')
    return await res.json()
}

export const updateProduct = async (product) => {
    const res = await fetch(`${API_URL}/${product.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    })
    if (!res.ok) throw new Error('Error al actualizar el producto.')
    return await res.json()
}

export const deleteProduct = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
    if (!res.ok) throw new Error('Error al eliminar el producto.')
    return await res.json()
}