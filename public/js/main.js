'use strict';

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">
        <div class="product-image">
            <img :src="image">
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <span v-if="onSale">On Sale!</span>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>
            <p>{{ description }}</p>

            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <p>Sizes:</p>
            <ul>
                <li v-for="size in sizes">{{ size }}</li>
            </ul>

            <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box" :style="{ backgroundColor: variant.variantColor}" @mouseover="updateProduct(index)">
            
            </div>

            <button v-on:click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to Cart</button>
        </div>
    </div>`,

    data: function() {
        return {
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
            sizes: ['Small', 'Medium', 'Large', 'X-Large']}
    },

    methods: {
        addToCart: function() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
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
        },

        shipping: function() {
            if (this.premium) {
                return "Free"
            } else {
                return 2.99
            }
        }
    }
});

let app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },

    methods: {
        updateCart: function(variantId) {
            this.cart.push(variantId);
        }
    }
});