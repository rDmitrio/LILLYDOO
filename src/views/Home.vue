<template>
  <div class="home">
    <content-header />
    <trial-box />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContentHeader from '@/components/home/ContentHeader.vue';
import TrialBox from '@/components/home/TrialBox.vue';

@Component({
  components: { ContentHeader, TrialBox }
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
