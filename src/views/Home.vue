<template>
  <hero-block></hero-block>
  <products-block></products-block>
  <my-features></my-features>
</template>

<script>
import HeroBlock from '@/components/HeroBlock.vue'
import ProductsBlock from '@/components/ProductsBlock.vue'
import MyFeatures from '@/components/MyFeatures.vue';
export default {
  components: { HeroBlock,ProductsBlock,MyFeatures },
  
}
</script>

<style>

</style>
