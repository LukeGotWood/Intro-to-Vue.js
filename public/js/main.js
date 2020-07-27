'use strict';

let app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks',
        image: '../img/vmSocks-green-onWhite.jpg',
        inventory: 100,
        onSale: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: '../img/vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: '../img/vmSocks-blue-onWhite.jpg'
            }
        ],
        sizes: ['Small', 'Medium', 'Large', 'X-Large'],
        cart: 0
    },

    methods: {
        addToCart: function() {
            this.cart += 1;
        },

        updateProduct: function(variantImage) {
            this.image = variantImage;
        }
    }
});