<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" alt="product image" class="mx-auto my-7">
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Price - ${{product.price.toFixed(2)}}</p>
        <p>{{}}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Description:</h3>
        <p class="mb-7">{{ product.description }}</p>
        <button @click="handleAddToCart(product.id)" class="btn">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";

//   import {useStore} from "vuex";
//
// const { product } = defineProps(['product']);

  // const test = this.$store.state.test;

  // const store = useStore();
  // const test = computed(() => store.state.test)
  //
  //
  //
  // const handleAddToCart = (id) => {
  //   console.log(id)
  // }

export default {
 props: {
   product : {
     type: Object,
     default: () => ({
       id: '',
       title: '',
       price: '',
       image: '',
       description: '',
     }),
   }
 },
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  },
  computed: {
    // a computed getter
    getTest() {
      // `this` points to the component instance
      console.log(this.$store)
      return this.$store.state.test;
    }
  }
}


</script>

<style scoped>
  img {
    max-width: 400px;
  }
</style>