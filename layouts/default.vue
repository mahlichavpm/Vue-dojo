<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold hover:text-[#c95d33]">Victor's Vue Store</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink class="hover:text-[#c95d33]" to="/" >Home</NuxtLink></li>
          <li><NuxtLink class="hover:text-[#c95d33]" to="/products" >Products</NuxtLink></li>
          <li><NuxtLink class="hover:text-[#c95d33]" to="/cart" >Cart</NuxtLink></li>
          <li><NuxtLink class="hover:text-[#c95d33]" to="/about" >About</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>

    <footer class="container mx-auto p-4 text-center">

        <span class="mb-3 mb-md-0 text-muted">© 2023 Company, Inc</span>

    </footer>

  </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #f6a943;
  }

</style>