<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>


<script>
export default {
  created() {
    this.checkMobileView()
    this.resize()

  },
  data() {
    return {}

  },
  computed: {
    isMobile() {
      return this.$store.state.mobile; // Annahme: Deine Store-Variable für Mobile
    }
  },
  watch: {
    isMobile(newValue) {
      if (newValue) {
        this.$router.push('/');
      }
    }
  },
  methods: {
    resize() {
      window.addEventListener('resize', this.checkMobileView);
    },
    checkMobileView() {
      if (window.innerWidth >= 1800) {
        this.wide = true;
        this.$store.state.wide = true;
      } else {
        this.wide = false;
        this.$store.state.wide = false;

      }
      if (window.innerWidth <= 1000) {
        this.mobile = true;
        this.$store.state.mobile = true;
      } else {
        this.mobile = false;
        this.$store.state.mobile = false;

      }
      if (window.innerWidth <= 1300) {
        this.tabletHorizontal = true
        this.$store.state.tabletHorizontal = true
      } else {
        this.tabletHorizontal = false
        this.$store.state.tabletHorizontal = false
      }
    }
  }
}
</script>
<style>

::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
