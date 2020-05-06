<template>
  <div class="includes-block">
    <div class="left-content content">
      <img :src="require(`@/assets/img/includes/${img}`)">
    </div>
    <div class="right-content content">
      <h4>{{ title }}</h4>
    <li
      v-for="(item, index) in desc"
      :key="index"
    >
    {{ item }}
    </li>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';


export default Vue.extend({
  name: 'IncludesBlock',
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
      type: Array,
      default: () => []
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

 .includes-block {
   width: calc(100% - 3rem);
   padding-left: 1.5rem;
   padding-right: 1.5rem;
   height: auto;
   margin-bottom: 3.75rem;

   @media only screen and (min-width: $desktop-width) {
      width: calc(50% - 3rem);
      margin-bottom: 0;

    }

    .content {
      display: inline-block;
    }

    .left-content {
      width: 37%;

      @media only screen and (min-width: $desktop-width) {
        width: 25%;
      }


      img {
        width: 100%;
        margin-bottom: 15px;
        margin-bottom: 15px;
        vertical-align: middle;
      }
    }

    .right-content {
      width: 57%;
      float: right;

      @media only screen and (min-width: $desktop-width) {
        width: 66%;
      }

      h4 {
       font-weight: 700;
       font-family: cera_promedium, Helvetica, Roboto, Arial,sans-serif;
       font-size: 1.063rem;
       line-height: 1.5;
       margin-bottom: 10px;
       text-transform: uppercase;
      }

      li {
        font-size: .938rem;
        font-family: cera_proregular, Helvetica, Roboto, Arial, sans-serif;
      }
    }
 }
</style>
