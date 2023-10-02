<template>
  <div v-if="!$store.state.mobile"  class="background">
    <div class="background-color">
      <!---  Header   -->
        <HeaderComponent></HeaderComponent>

    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "MPUView",
    components: {HeaderComponent}
}
</script>

<style>
.background {
  background-image: url("../assets/Background.png");
  background-size: cover;
  height: 100%;
  position: fixed;
  width: 100%;
}
.background-color{
  background-image: linear-gradient(to right, #78684F 50%, rgba(0, 255, 0, 0.03) 70%);
  height: 100vh;
  padding-top: 30px;
}



.kontaktformular{
  height: 700px;
  width: 500px;
  background-color: transparent;
  background-image: linear-gradient(to right, rgba(192, 192, 128, 0.70) 20%, rgba(255, 176, 1, 0.70) 100%);
  backdrop-filter: blur(4px);
  border: solid 2px rgba(3, 3, 3, 0.93);
  border-radius: 30px !important;
}

.cursor:hover{
  cursor: pointer;
  color: #C0C080 !important;
}


.formularinhalte{
  margin-top: -60px;
}

.logo{
  border: white solid 1px;
  border-radius: 100%;
  background-color: white;
  height: 70px;
  width: 70px;
}



.ueber-mich{
  border-radius: 30px;
  border: 2px solid #C0C080;
  height: 50px;
  width: 100%;
  box-shadow: 4px 4px 7px black;

}
.button-rechts {
  border-radius: 30px;
  border: 2px solid black;
  height: 50px;
  width: 100%;
  background-image: linear-gradient(to right, rgba(192, 192, 128, 0.66) 20%, rgba(255, 176, 1, 0.7) 100%);
  backdrop-filter: blur(4px);
  box-shadow: 4px 4px 7px black;
}
</style>