<template>
  <form class="space-y-4 max-w-xl mx-auto" @submit.prevent="submitForm">
    <div>
      <label for="naam" class="block font-semibold mb-1">Naam</label>
      <input v-model="form.naam" id="naam" type="text" class="w-full px-3 py-2 rounded bg-steel text-white" required />
    </div>
    <div>
      <label for="email" class="block font-semibold mb-1">E-mail</label>
      <input v-model="form.email" id="email" type="email" class="w-full px-3 py-2 rounded bg-steel text-white" required />
    </div>
    <div>
      <label for="datum" class="block font-semibold mb-1">Datum</label>
      <input v-model="form.datum" id="datum" type="date" class="w-full px-3 py-2 rounded bg-steel text-white" required />
    </div>
    <div>
      <label for="personen" class="block font-semibold mb-1">Aantal personen</label>
      <input v-model="form.personen" id="personen" type="number" min="1" class="w-full px-3 py-2 rounded bg-steel text-white" required />
    </div>
    <div>
      <label for="feest" class="block font-semibold mb-1">Type feest</label>
      <select v-model="form.feest" id="feest" class="w-full px-3 py-2 rounded bg-steel text-white" required>
        <option value="bedrijfsfeest">Bedrijfsfeest</option>
        <option value="verjaardag">Verjaardag</option>
        <option value="bruiloft">Bruiloft</option>
      </select>
    </div>
    <div>
      <label for="pakket" class="block font-semibold mb-1">Verhuurpakket</label>
      <select v-model="form.pakket" id="pakket" class="w-full px-3 py-2 rounded bg-steel text-white" required>
        <option value="basis">Basis</option>
        <option value="deluxe">Deluxe</option>
        <option value="pro">Pro</option>
      </select>
    </div>
    <button type="submit" class="bg-copper text-dark px-4 py-2 rounded hover:bg-copper-dark">Verstuur</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  naam: '',
  email: '',
  datum: '',
  personen: '',
  feest: '',
  pakket: ''
})

function submitForm() {
  alert(JSON.stringify(form.value))
}
</script>
