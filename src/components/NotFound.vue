<template>
  <section class="section">
    <p class="responsive-heading title">
      We couldn't find that page.
    </p>
    <div class="flex-centered">
      <img
        alt="cat typing away furiously on keyboard"
        class="padded"
        src="https://media1.tenor.com/images/4baee94ad8634680ebd9cbf372f9888e/tenor.gif?itemid=7817705"
      />
    </div>
    <router-link to="/">
      <p class="responsive-heading subtitle bumped-down">
        Take me back
      </p>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'NotFound'
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/styles.scss';

.subtitle:hover {
  color: $background-lighter;
}

.padded {
  padding: 20px;
}
</style>
