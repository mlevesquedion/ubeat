<template>
  <section class="section">
    <h1
      class="title is-size-2-desktop is-size-3-tablet is-size-5-mobile is-primary flex-centered"
    >
      We couldn't find that page.
    </h1>
    <div class="flex-centered">
      <img
        src="https://media1.tenor.com/images/4baee94ad8634680ebd9cbf372f9888e/tenor.gif?itemid=7817705"
        alt="cat typing away furiously on keyboard"
      />
    </div>
    <router-link to="/">
      <p
        class="subtitle is-size-2-desktop is-size-3-tablet is-size-5-mobile is-primary flex-centered bumped-down"
      >
        Back to home
      </p>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'NotFound'
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';

.subtitle:hover {
  color: $background-lighter;
}
</style>
