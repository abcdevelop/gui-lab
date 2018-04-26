<template>
  <v-select
    label="Talents"
    multiple
    autocomplete
    chips
    :items="items">
  </v-select>
</template>

<script>
  export default {
    data() {
      return {
        items: ['Jeux video', 'Batterie', 'Guitare', 'Saxo', 'Musique', 'Danse', 'Foot', 'Basketball', 'Natation', 'Lecteur', 'Ecrivain', 'Informatique', 'Mécanique']
      }
    }
  }
</script>
