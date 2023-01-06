<template>
  <div class="container text-center first">
    <h3 class="p-4">Welcome to Victor's Vue Store!</h3>
    <img src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" class="img-fluid" alt="banner">
  </div>
  <div class="container flex p-4 justify-content-center">
    <NuxtLink class="btn text-xl" to="/products">Go shopping</NuxtLink>
  </div>
</template>

<script setup>

</script>

<style scoped>
h3 {
  font-size: 36px;
  color: white;
  font-weight: bolder;
}

.first {
  background-image: linear-gradient(to right, #fbdf84 ,#f7a741 );
}
</style>