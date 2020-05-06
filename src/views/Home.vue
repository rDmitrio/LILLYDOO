<template>
  <div class="home">
    <content-header />
    <trial-box />
    <how-it-works />
    <includes />
    <blowballs />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContentHeader from '@/components/home/ContentHeader.vue';
import TrialBox from '@/components/home/TrialBox.vue';
import HowItWorks from '@/components/home/HowItWorks.vue';
import Includes from '@/components/home/Includes.vue';
import Blowballs from '@/components/home/Blowballs.vue';

@Component({
  components: {
    ContentHeader,
    TrialBox,
    HowItWorks,
    Includes,
    Blowballs
  }
})
export default class Home extends Vue {

}
</script>

<style scoped lang="scss">
@import "@/assets/scss/_typo.scss";
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/main.scss";

.home {

}
</style>
