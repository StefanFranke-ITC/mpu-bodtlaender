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
    methods:{
        resize() {
            window.addEventListener('resize', this.checkMobileView);
        },
        checkMobileView() {
            console.log('yes')
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
