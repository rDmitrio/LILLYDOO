<template>
  <main id="app">
    <router-view/>
  </main>
</template>

<style lang="scss">
@import "@/assets/scss/_typo.scss";
@import "@/assets/scss/_variables.scss";

body {
  padding: 0;
  margin: 0;
  background-color: #2e2e2e;
}

#app {
    color: #000;
    cursor: auto;
    font-family: cera_proregular,Helvetica,Roboto,Arial,sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0;
}

</style>
