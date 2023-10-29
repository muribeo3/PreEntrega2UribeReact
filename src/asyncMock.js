export const products = [
    { name: 'Vestido', category: 'Ropa', price: 150, stock: 10, img: 'https://www.tco.pt/12595-large_default/vestido-206013.jpg' },
    { name: 'Tenis running', category: 'Calzado', price: 200, stock: 10, img: 'https://http2.mlstatic.com/D_NQ_NP_2X_753973-MLM31906279142_082019-F.jpg' },
    { name: 'Tenis casual', category: 'Calzado', price: 250, stock: 10, img: 'https://http2.mlstatic.com/tenis-casual-mujer-calzado-D_NQ_NP_740247-MLM25620830479_052017-F.jpg' },
    { name: 'Pantalon', category: 'Ropa', price: 100, stock: 10, img: 'https://media.wuerth.com/stmedia/modyf/shop/900px/5028401.jpg' },
    { name: 'Falda', category: 'Ropa', price: 80, stock: 10, img: 'https://www.uniformall.es/assets/attachments/FALDA.jpg ' },
    { name: 'Aretas', category: 'Accesorios', price: 300, stock: 10, img: 'https://s3.amazonaws.com/images.ecwid.com/images/17136330/1385060692.jpg' },
    { name: 'Bolsa', category: 'Accesorios', price: 350, stock: 10, img: 'https://tse4.mm.bing.net/th?id=OIP.YdnJUH1dmHk-iuf0qTdxoAHaHa&pid=Api&P=0&h=180' },
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
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}