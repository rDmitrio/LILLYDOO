<template>
<div class="trialbox-images">
  <img class="oekotex-green-logo"
     src="@/assets/img/trialbox/oekotex_green_de.svg"
     alt="Oeko-Tex Certificate">

   <img
     v-if="id === 0"
     src="@/assets/img/trialbox/lillydoo-testpaket-10.jpg"
     alt="`Lillydoo Testpaket mit Windeln in Größe 1 und 15 Feuchttüchern`"
     class="trialbox-banner"
   >
   <img
     v-else-if="id === 1"
     src="@/assets/img/trialbox/lillydoo-testpaket-20.jpg"
     alt="`Lillydoo Testpaket mit Windeln in Größe 2 und 15 Feuchttüchern`"
     class="trialbox-banner"
   >
   <img
     v-else-if="id === 2"
     src="@/assets/img/trialbox/lillydoo-testpaket-30.jpg"
     alt="`Lillydoo Testpaket mit Windeln in Größe 3 und 15 Feuchttüchern`"
     class="trialbox-banner"
   >
   <img
     v-else-if="id === 3"
     src="@/assets/img/trialbox/lillydoo-testpaket-40.jpg"
     alt="`Lillydoo Testpaket mit Windeln in Größe 4 und 15 Feuchttüchern`"
     class="trialbox-banner"
   >
   <img
     v-else-if="id === 4"
     src="@/assets/img/trialbox/lillydoo-testpaket-50.jpg"
     alt="`Lillydoo Testpaket mit Windeln in Größe 5 und 15 Feuchttüchern`"
     class="trialbox-banner"
   >
</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TrialboxImages',
  props: {
    id: {
      required: false,
      type: Number,
      default: 0
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

.trialbox-images {
  .oekotex-green-logo {
    position: absolute;
    width: 24%;
    top: 13%;
    left: 9%;
    z-index: 10;
    box-shadow: -2px 2px 6px -3px rgba(0,0,0,.4);
    border-radius: 3px;
  }

  .trialbox-banner {
    position: relative;
    width: 100%;
  }
}

</style>
