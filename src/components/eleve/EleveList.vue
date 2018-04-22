<template>
  <v-container>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: 'EleveList',
      subtitle: 'Liste des élèves'
    }
  }
}
</script>
