const productDetail = {
    
    template: `
        <p>{{ title}} </p>
        <img :src="image" :alt="title" style="max-width: 100px;">
        <strong v-if="stars > 0">{{stars}}</strong>
    
        <button
            @click.prevent="addCart(product)"
            :disabled="productInCart"
            :class="['color', {'button-disabled' : productInCart}]">
            ADD CART
        </button>
    
    `,

    emits: ['add-prod-cart'],

    props: ['product', 'productInCart', 'title', 'image', 'stars'],
    
    data(){
        return {
            example: 123,
        }
    },

    methods: {
        addCart(product){
            console.log('Add cart in component')
            this.$emit('add-prod-cart', product)
        }
    },
}

app.component('product-detail', productDetail)

