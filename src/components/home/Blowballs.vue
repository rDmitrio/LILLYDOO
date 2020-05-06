<template>
  <section id="blowballs">
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Blowballs',
  components: {
  },
  computed: {
  },
  data() {
    return {

    };
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

 #blowballs {
    background-size: contain;
    width: 100%;
    height: 142px;
    max-height: 254px;
    background-repeat: repeat-x;
    background-image: url('~@/assets/img/blowballs/pusteblume-pattern-04.png');
    padding: 0 !important;

    @media only screen and (min-width: $desktop-width) {
      height: 300px;
    }
}
</style>
