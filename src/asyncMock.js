const products = [
    { id: 1, name: 'Camisa', category: 'Ropa', price: 50, stock: 10 },
    { id: 2, name: 'Vestido', category: 'Ropa', price: 150, stock: 10 },
    { id: 3, name: 'Tenis running', category: 'Calzado', price: 200, stock: 10 },
    { id: 4, name: 'Tenis casual', category: 'Calzado', price: 250, stock: 10 },
    { id: 5, name: 'Pantalon', category: 'Ropa', price: 100, stock: 10 },
    { id: 6, name: 'Falda', category: 'Ropa', price: 80, stock: 10 },
    { id: 7, name: 'Aretas', category: 'Accesorios', price: 300, stock: 10 },
    { id: 8, name: 'Bolsa', category: 'Accesorios', price: 350, stock: 10 },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}


export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === productId))
        }, 1000)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === category))
        }, 1000)
    })
}