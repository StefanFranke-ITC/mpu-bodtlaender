<template>
  <div class="background">
    <div class="background-color">
      <!---  Header   -->

        <HeaderComponent></HeaderComponent>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "PreiseView",
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

.profil-bild{
  height: 40vh;
  width: 100%;
  background-image: url("https://atm-deutschland.com/wp-content/uploads/2020/03/imressum.jpg");
  background-size: cover;
  border-radius: 70px 70px 70px 200px;
  box-shadow: 4px 4px 15px black;
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