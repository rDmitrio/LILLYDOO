<template>
  <li
    :class="['trialbox-button', active ? 'active' : '']"
    @click="onClick"
  >
    <p>{{ title }}</p>
    <span>{{ description }}</span>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TrialboxButton',
  props: {
    id: {
      required: false,
      type: Number
    },
    title: {
      required: false,
      type: String,
      default: '1'
    },
    description: {
      required: false,
      type: String,
      default: '(2.5 KG)'
    },
    active: {
      required: false,
      type: Boolean,
      default: false
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
    onClick() {
      this.$emit('clicked', this.id);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/_typo.scss";
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/main.scss";

 .trialbox-button {
    border: 1px solid #7c7c7c;
    text-align: center;
    width: 30%;
    max-width: 78px;
    padding: 7px 5px 2px 5px;
    color: #7c7c7c;
    margin-right: 10px;
    display: inline-block;
    cursor: pointer;
    margin-bottom: 10px;

    p {
      font-size: 1.3rem;
      line-height: 1;
      margin: 0;
    }

    span {
      line-height: 1;
      font-size: .8rem;
    }

   &.active {
    background-color: $primary-color;
    border-color: $primary-color;
    color: #fff;
   }

   &:hover {
    background-color: $primary-color;
    border-color: $primary-color;
    color: #fff;
   }
  }
</style>
