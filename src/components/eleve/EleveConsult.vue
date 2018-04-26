<template>
  <v-card-text>
    <v-container grid-list-md>
      <v-layout>
        <v-flex xs12 sm6 md4>
          <v-text-field
            label="ID National"
            type="text"
            :value="eleve.idNational">
          </v-text-field>
          <v-text-field
            label="Nom"
            type="text"
            :value="eleve.nomEleve">
          </v-text-field>
          <v-text-field
            label="Prénom"
            type="text"
            :value="eleve.prenomEleve">
          </v-text-field>
          <v-text-field
            label="Sexe"
            type="text"
            :value="eleve.sexeId">
          </v-text-field>
          <v-text-field
            label="Date de naissance"
            type="text"
            :value="eleve.dateNaissEle">
          </v-text-field>
          <v-text-field
            label="Ville de naissance"
            type="text"
            :value="eleve.villeNaissance">
          </v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
    <Talents></Talents>
    <v-divider></v-divider>
    <v-chip label>Niveau de risque</v-chip>
    <v-chip label>Niveau de prévention</v-chip>
    <v-chip label>Etablissements fréquentés</v-chip>
    <v-chip label>Externe/Demi-pensionnaire/Pensionnaire</v-chip>
    <v-chip label>Temps de parcours</v-chip>
    <v-chip label>Retards constatés</v-chip>
    <v-chip label>Absences constatés</v-chip>
    <v-chip label>Rupture de résultats</v-chip>
    <v-chip label>Situation familiale</v-chip>
    <v-chip label>Suivi Professeur Principal</v-chip>
    <v-chip label>Suivi Psychologue</v-chip>
    <v-chip label>Suivi Conseiller Orientation</v-chip>
    <v-chip label>Orientations Possibles</v-chip>
    <v-chip label>Orientations Proposées</v-chip>
    <v-chip label>Suivi Educateur Social</v-chip>
    <v-chip label>Stage Immersion Action/Reaction</v-chip>
  </v-card-text>

</template>

<script>
import Talents from '@/components/talents/Talents'

export default {
  data () {
    return {
      eleve: {
        type: Object,
        default: () => ({
          idNational: '?NJKLCSLC',
          nomEleve: 'DUPONT',
          premonEleve: 'Jean',
          dateNaissEle: '01/01/2000'
        })
      }
    }
  },
  components: {
    Talents
  }
}
</script>
