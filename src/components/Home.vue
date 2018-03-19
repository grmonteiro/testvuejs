<template>
    <div class="container">
        <h1>Doodles:</h1>
        <ul>
            <li v-for="doodle in doodles"><router-link :to="{ name: 'doodle', params: { doodle:doodle, name:doodle.name }}">{{ doodle.name }}</router-link></li>
        </ul>
    </div>
</template>

<script>
import { doodleApi } from "../main";
export default {
  data() {
    // les données utilisées dans le template pour le rendre réactif
    return {
      loading: false,
      doodles: []
    };
  },
  props: [
    // les données venant du composant parent
  ],
  created() {
    // appelé après la création
  },
  mounted() {
    // appelé après l'insertion dans le DOM
    this.init();
  },
  methods: {
    // les methodes du composants
    // ces méthodes sont appelables directement depuis le template
    init() {
      this.refreshDoodles();
    },
    refreshDoodles() {
      doodleApi
        .get("doodles")
        .then(response => {
          console.log(response.data);
          this.doodles = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
    }
  }
};
</script>
