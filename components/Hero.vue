<template>
  <div>
    <header class="sticky top-0 z-50 bg-dark text-copper">
      <nav class="container mx-auto flex items-center justify-between py-4 px-4">
        <div class="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" class="h-10" />
          <span class="font-bold text-2xl">BBQ &amp; Sound</span>
        </div>
        <ul class="hidden md:flex space-x-6">
          <li><a href="#catering" class="hover:text-copper-dark">BBQ Catering</a></li>
          <li><a href="#verhuur" class="hover:text-copper-dark">Licht &amp; Geluid</a></li>
          <li><a href="#offerte" class="hover:text-copper-dark">Offerte</a></li>
        </ul>
        <a href="#offerte" class="hidden md:block bg-copper text-dark px-4 py-2 rounded hover:bg-copper-dark">Vraag offerte aan</a>
      </nav>
    </header>

    <section class="relative h-screen flex items-center justify-center bg-cover bg-center" :style="{ backgroundImage: 'url(/hero.jpg)' }">
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Sizzling BBQ &amp; Events</h1>
        <p class="text-xl md:text-2xl mb-6">Amerikaanse catering &amp; verhuur in vintage stijl</p>
        <a href="#offerte" class="bg-copper text-dark px-6 py-3 rounded hover:bg-copper-dark">Offerte aanvragen</a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// geen extra script nodig
</script>
