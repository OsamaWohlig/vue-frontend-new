<template>
  <section class="text-gray-600 body-font text-center">
  <div class="container px-5 py-12 mx-auto">
    <h1 class="sm:text-3xl text-2xl font-medium title-font py-12 text-gray-900 mb-4">Our Products</h1>
      <div class="flex flex-wrap -m-4">
        <div v-for="data in apiData" :key="data._id" productData="data.name" @click="$router.push({name:'product'})" class="lg:w-1/4 md:w-1/2 p-4 w-full hover:cursor-pointer">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src="data.imageData.downloadurl">
          </a>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{data.brand}}</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">{{data.name}}</h2>
            <p class="mt-1">${{data.price}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    data(){
        return{
            apiData:null,
        }
    },
    methods:{
        async getProducts(){
            fetch('http://localhost:5000/getProducts',{
              headers:{
                'authorization': localStorage.getItem('accessToken')
              }
            })
                .then(res=>res.json())
                .then(data=>console.log(data))
                .catch(err=>console.log(err.message))
        }
    },
    mounted(){
        this.getProducts()
        // console.log(this.apiData)
    }
}
</script>

<style>

</style>