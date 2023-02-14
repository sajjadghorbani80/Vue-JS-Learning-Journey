const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2015, color: 'yellow' },
                { id: 2016, color: 'blue' }
            ],
            sizes: ['M', 'S', 'L', 'XL', 'XXL']
        }
    }
})
