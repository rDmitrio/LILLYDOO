<template>
  <section id="trial-box" class="bright">
    <div class="row">
      <div class="column left-column">
          <trialbox-images :id="imgId" />
      </div>
      <div class="column right-column">
        <form class="addToCartTrialbox">
          <h2>Entdecke unsere Hautfreundlichkeit</h2>
          <div class="tb-button-container">
            <p style="margin-bottom: 10; text-transform: uppercase;">Wähle Deine Größe</p>
            <ul class="custom-slide-controls">
              <trialbox-button
                v-for="(btn, index) in buttons"
                :key="index"
                :id="index"
                :title="index + 1"
                :description="btn.desc"
                :active="btn.active"
                @clicked="onTrialBtnClick"
              />
            </ul>
          </div>
          <p>
            Teste jetzt unsere hautfreundlichen Windeln
             und erhalte unsere Feuchttücher mit 99 % Wasser zu
             Größe 1 - 3 oder die Sensitiven Feuchttücher zu Größe 4 - 5.
          </p>
          <ul>
            <li class="primary-color">
            Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50 € pro Lieferung.
            </li>
            <li>
            Preise inkl. MwSt., ggf. zzgl.
            <a href="#" class="primary-color">Versandkosten</a>
            </li>
          </ul>
          <action-button class="button" link='#' title="In den Warenkorb legen" />
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import TrialboxButton from '@/components/TrialboxButton.vue';
import TrialboxImages from '@/components/TrialboxImages.vue';
import ActionButton from '@/components/ActionButton.vue';

export default Vue.extend({
  name: 'Trialbox',
  components: {
    TrialboxButton,
    TrialboxImages,
    ActionButton
  },
  computed: {
  },
  data() {
    return {
      imgId: 0,
      buttons: [
        {
          desc: '(2-5 KG)',
          active: true
        },
        {
          desc: '(4-8 KG)',
          active: false
        },
        {
          desc: '(6-10 KG)',
          active: false
        },
        {
          desc: '(9-14 KG)',
          active: false,
          hasSensetiveWipes: true
        },
        {
          desc: '(11-16 KG)',
          active: false,
          hasSensetiveWipes: true
        }
      ]
    };
  },
  methods: {
    onTrialBtnClick(id) {
      this.imgId = id;

      this.$store.dispatch('pack/setPackInfo', {
        id,
        hasSensetiveWipes: this.buttons[id].hasSensetiveWipes === true
      });

      this.buttons.forEach((btn, index) => {
        if (index === id) {
          this.buttons[index].active = true;
        } else {
          this.buttons[index].active = false;
        }
      });
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/_typo.scss";
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/main.scss";

 #trial-box {
   h2 {
    font-size: 1.688rem;
    line-height: 1.2;
    text-transform: none;
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
  }

      .button {
        max-width: calc(100% - 20px)
      }

    .primary-color {
      color: $primary-color;
    }

    .column {
     position: relative;
     padding: 10px;
     width: calc(100% - 20px);
     display: inline-block;

     @media only screen and (min-width: $desktop-width) {
       width: calc(50% - 20px);
     }
    }

   .right-column {
     float: right;

     @media only screen and (min-width: $desktop-width) {
       width: calc(40%);
     }

    .addToCartTrialbox {


      .custom-slide-controls {
        list-style: none;
        padding-inline-start: 0;
        margin-left: 0;
      }

      &:after {
        content: "";
        clear: both;
        display: block;
        visibility: hidden;
        height: 0;
      }
    }
   }
  }
</style>
