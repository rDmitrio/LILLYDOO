<template>
  <div class="how-it-works-block">
    <img :src="require(`@/assets/img/howItWorks/${img}`)">
    <h4>{{ title }}</h4>
    <p>{{ desc }}</p>

    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';


export default Vue.extend({
  name: 'HowItWorksBlock',
  props: {
    img: {
      required: false,
      type: String,
      default: ''
    },
    title: {
      required: false,
      type: String,
      default: ''
    },
    desc: {
      required: false,
      type: String,
      default: ''
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

 .how-it-works-block {
   width: calc(100% - 3rem);
   padding-left: 1.5rem;
   padding-right: 1.5rem;
   height: auto;
   text-align: center;
   margin-bottom: 3.75rem;

   @media only screen and (min-width: $desktop-width) {
      width: calc(33% - 3rem);
      margin-bottom: 0;
    }

   img {
    width: 25%;
    margin-bottom: 15px;
    margin-bottom: 15px;
    vertical-align: middle;

    @media only screen and (min-width: $desktop-width) {
      width: 70px;
    }
   }

   h4 {
    font-weight: 700;
    font-family: cera_promedium, Helvetica, Roboto, Arial,sans-serif;
    font-size: 1.063rem;
    line-height: 1.5;
    margin-bottom: 10px;
    text-transform: uppercase;
   }

   p {
    font-size: .938rem;
    margin-bottom: 30px;
   }
 }
</style>
