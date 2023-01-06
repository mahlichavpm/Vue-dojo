<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold hover:text-[#12b488]">Victor's Vue Store</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink class="hover:text-[#12b488]" to="/" >Home</NuxtLink></li>
          <li><NuxtLink class="hover:text-[#12b488]" to="/about" >About</NuxtLink></li>
          <li><NuxtLink class="hover:text-[#12b488]" to="/products" >Products</NuxtLink></li>
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
    color: #12b488;
  }
  .router-link-exact-active.btn {
    background-color: rgb(140, 26, 130);
  }
</style>