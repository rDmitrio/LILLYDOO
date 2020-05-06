<template>
  <section id="includes" class="bright">
    <div class="row">
      <h2>Dein Testpaket enthält</h2>
      <div class="row block-wrapper">
        <includes-block
          v-for="(item, index) in includes"
          :key="index"
          :img="item.img"
          :title="item.title"
          :desc="item.desc"
          :class="[index === 1 ? 'last-block' : '']"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import IncludesBlock from '@/components/IncludesBlock.vue';

export default Vue.extend({
  name: 'Includes',
  components: {
    IncludesBlock
  },
  computed: {
  },
  data() {
    return {
      includes: [
        {
          img: 'lillydoo-little-blowballs-design-preview-tp.png',
          title: '10 LILLYDOO WINDELN',
          desc: [
            '0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz',
            'Extra weich und super bequem',
            'Mit unseren Turbo Tunneln für eine ideale Passform und schnelle Absorption'
          ]
        },
        {
          img: 'water-wipes-15-small.png',
          title: '15 FEUCHTTÜCHER MIT 99 % WASSER',
          desc: [
            '0 % Parfüme & PEGs, 100 % biologisch abbaubar',
            'Natürlich rein, extra mild, Alternative zu "Wasser & Watte"'
          ]
        }
      ]
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

 #includes {

   .block-wrapper {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: auto;
    justify-content: center;

    @media only screen and (min-width: $desktop-width) {
      flex-direction: row;
      width: calc(100% - 3rem);
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      justify-content: start;
    }
   }

   .last-block {
      margin-bottom: 0 !important;
    }

   h2 {
    padding: 1rem 0 1rem 0;
    text-align: center;
    margin-bottom: 10px;
    width: 100%;
    font-size: 1.5rem;
    line-height: 1.2;

    @media only screen and (min-width: $desktop-width) {
      padding: 2rem 0 2rem 0;
      font-size: 1.688rem;
    }
  }
}
</style>
