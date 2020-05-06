<template>
  <section id="how-it-works" class="dark">
    <h2>Wie es funktioniert</h2>
    <div class="row block-wrapper">
    <how-it-works-block
      v-for="(item, index) in content"
      :key="index"
      :title="item.title"
      :desc="item.desc"
      :img="item.img"
      :class="[index === 2 ? 'last-block' : '']"
    >
      <a
        v-if="index === 1"
        href="#"
        class="block-link"
        target="_blank">Erfahre hier mehr über das <br>
        LILLYDOO Windel-Abo.
      </a>
    </how-it-works-block>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import HowItWorksBlock from '@/components/HowItWorksBlock.vue';

export default Vue.extend({
  name: 'ContentHeader',
  computed: {

  },
  data() {
    return {
      content: [
        {
          img: 'lillydoo-your-trialbox-icon.svg',
          title: 'DEIN TESTPAKET',
          desc: 'Wir schenken Dir die Produkte, Du übernimmst nur das Porto.'
        },
        {
          img: 'lillydoo-your-flexibility-icon.svg',
          title: 'DEINE FLEXIBILITÄT',
          desc: 'Erste Monatsbox nach 14 Tagen für 49,50 € erhalten. Oder noch vor der ersten Lieferung kündigen.'
        },
        {
          img: 'lillydoo-your-subscription-icon.svg',
          title: 'DEINE MONATSBOX',
          desc: 'Jederzeit Windelgröße, Designs und Lieferintervalle anpassen oder weitere Produkte hinzufügen.'
        }
      ]
    };
  },
  methods: {
  },
  components: {
    HowItWorksBlock
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/_typo.scss";
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/main.scss";

 #how-it-works {

  .block-wrapper {
    width: calc(100% - 3rem);
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: auto;
    justify-content: center;

    @media only screen and (min-width: $desktop-width) {
      flex-direction: row;
    }
  }

   .last-block {
      margin-bottom: 0 !important;
    }

  .block-link {
    color: $primary-color;
    text-decoration: none;
    font-size: .938rem;
  }

  h2 {
    padding: 1rem 0 1rem 0;
    text-align: center;
    margin-bottom: 10px;
    width: 100%;
    font-size: 1.688rem;
    line-height: 1.2;

    @media only screen and (min-width: $desktop-width) {
      padding: 2rem 0 2rem 0;
    }
  }
  }
</style>
