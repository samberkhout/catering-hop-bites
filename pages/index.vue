<template>
  <div class="font-sans bg-dark text-copper">
    <Hero />

    <section id="catering" class="py-16 bg-dark text-copper">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-4">BBQ Catering</h2>
        <p class="mb-6">Heerlijke slow-cooked BBQ gerechten en Amerikaanse classics voor ieder feestje.</p>
        <Gallery type="catering" />
      </div>
    </section>

    <section id="verhuur" class="py-16 bg-steel text-copper">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-4">Licht &amp; Geluid Verhuur</h2>
        <p class="mb-6">Compleet verhuurpakket van microfoons tot DJ-set en showverlichting.</p>
        <Gallery type="verhuur" />
      </div>
    </section>

    <section id="offerte" class="py-16 bg-dark text-copper">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-4">Offerte aanvragen</h2>
        <OfferForm />
      </div>
    </section>

    <footer class="py-8 bg-steel text-center text-copper">
      &copy; {{ new Date().getFullYear() }} BBQ &amp; Sound. Alle rechten voorbehouden.
    </footer>
  </div>
</template>

<script setup lang="ts">
// Geen extra logica nodig
</script>
