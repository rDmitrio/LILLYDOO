<template>
  <section id="content-header" class="lillydoo-trialbox-headline">
      <div class="info-overlay">
        <h1 class="text-center">Dein gratis Testpaket</h1>
        <action-button class="button" link='#' title="Wähle Deine Größe" />
      </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import ActionButton from '@/components/ActionButton.vue';

export default Vue.extend({
  name: 'ContentHeader',
  computed: {

  },
  data() {
    return {
      buttons: [
        {
          title: 1,
          desc: '(2.5 KG)',
          active: true
        },
        {
          title: 2,
          desc: '(2.5 KG)',
          active: true
        },
        {
          title: 3,
          desc: '(2.5 KG)',
          active: true
        },
        {
          title: 4,
          desc: '(2.5 KG)',
          active: true
        },
        {
          title: 5,
          desc: '(2.5 KG)',
          active: true
        }
      ]
    };
  },
  methods: {
  },
  components: {
    ActionButton
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/_typo.scss";
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/main.scss";

 #content-header {
    display: flex;
    padding-top: 0;
    padding-bottom: 0;
    min-height: 35.25rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #f8f8f8;

    @media only screen and (min-width: $desktop-width) {
      min-height: 38rem;
      justify-content: flex-end;
    }

    &.lillydoo-trialbox-headline {
      background-image: url('~@/assets/img/header/header-trialbox-mobile.jpg');

      @media (min-width: $tablet-width) {
        background-image: url('~@/assets/img/header/header-trialbox-tablet.jpg');
      }

      @media (min-width: $desktop-width) {
        background-image: url('~@/assets/img/header/header-trialbox-desktop.jpg');
      }
    }

    .info-overlay {
      align-self: flex-end;
      padding: 2.5rem 1rem 1.5rem 1rem;
      width: calc(100% - 2rem);
      background: rgba(255,255,255,.7);

      .button {
        max-width: 15.6rem ;

        @media only screen and (min-width: $desktop-width) {
          max-width:  18.1rem;
        }
      }

      @media only screen and (min-width: $desktop-width) {
        padding: 2.5rem 2.5rem 1.5rem 2.5rem;
        width: calc(31.25rem - 5rem);
        margin-right: 4rem;
        align-self: center;
        justify-self: right;
      }
    }
  }
</style>
