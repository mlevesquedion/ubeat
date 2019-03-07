<template>
  <header>
    <h1 id="not-found-message" class="subtitle is-size-2-desktop is-size-3-tablet is-size-5-mobile is-primary flex-centered">
    We could not find that page :(((((((
    </h1>

    <h2>
      <router-link to="/">
        <p id="back-message" class="subtitle is-size-2-desktop is-size-3-tablet is-size-5-mobile is-primary flex-centered"> Back to home page</p>
      </router-link>
    </h2></header>


</template>

<script>
  export default {
    name: 'PageNotFound'
  };
</script>

<style scoped lang="scss">
  @import '@/assets/sass/styles.scss';

  #not-found-message {
    padding-top: 1em;
    font-family: $stylish-text;
  }

  #back-message {
    font-family: $stylish-text;
  }
</style>
