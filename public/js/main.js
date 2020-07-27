'use strict';

let app = new Vue({
    el: '#app',
    data: {
        brand: "Vue Mastery",
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks',
        selectedVariant: 0,
        inventory: 100,
        onSale: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: '../img/vmSocks-green-onWhite.jpg',
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: '../img/vmSocks-blue-onWhite.jpg',
                variantQuantity: 0
            }
        ],
        sizes: ['Small', 'Medium', 'Large', 'X-Large'],
        cart: 0
    },

    methods: {
        addToCart: function() {
            this.cart += 1;
        },

        updateProduct: function(index) {
            this.selectedVariant = index;
        }
    },

    computed: {
        title: function() {
            return this.brand + ' ' + this.product;
        },

        image: function() {
            return this.variants[this.selectedVariant].variantImage;
        },

        inStock: function() {
            return this.variants[this.selectedVariant].variantQuantity;
        }
    }
});