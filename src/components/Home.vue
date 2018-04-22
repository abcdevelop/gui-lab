<template>
  <v-container>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <v-layout
      justify-center
      align-center>
      <img src="../assets/logo.png">
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: 'GUI-LAB',
      subtitle: 'Application visant à rassembler les interfaces utilisateur utile à un ou plusieurs projets. L\'organisation graphique représente la principale préocupation, les données éventuelles ne sont que descriptives'
    }
  }
}
</script>
