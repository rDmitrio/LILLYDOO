<template>
  <a :href="link" class="action-button">{{ title }}</a>
</template>

<script lang="ts">
import Vue from 'vue';


export default Vue.extend({
  name: 'ActionButton',
  props: {
    title: {
      required: false,
      type: String,
      default: ''
    },
    link: {
      required: false,
      type: String,
      default: '#'
    }
  },
  computed: {
  },
  data() {
    return {
    };
  },
  components: {

  },
  methods: {
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/_typo.scss";
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/main.scss";

 .action-button {
   font-family: cera_promedium, Helvetica, Roboto, Arial, sans-serif;
   -webkit-appearance: none;
   -moz-appearance: none;
   cursor: pointer;
   font-weight: 400;
   text-align: center;
   text-decoration: none;
   padding: 0 18px;
   width: calc(100% - 36px);
   font-size: 1.063rem;
   background-color: $primary-color;
   color: #fff !important;
   display: block !important;
   transition: background-color .3s ease-out;
   text-transform: uppercase;
   height: 45px;
   line-height: 2.8 !important;
   margin: auto;
   margin-top: 2rem;
   margin-bottom: 1rem;

   &:focus, &:hover {
     background-color: #99dfdd;
   }
  }
</style>
