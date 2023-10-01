<template>
  <div class="background">
    <div class="background-color">
      <!---  Header   -->
<<<<<<< HEAD
        <HeaderComponent></HeaderComponent>
=======
      <v-row style="max-width: 100%" class="d-flex justify-center mx-0">
        <v-col cols="1" style=" max-width: 90px" @click="$router.push('/')">
          <v-img class=" logo" src="https://mpu-institut-saar.de/wp-content/uploads/2022/01/cropped-logo-web-transparent.png">
          </v-img>
        </v-col>
        <v-col cols="3" class=" pl-0 d-flex align-center">
          <div>
            <h2 class="mb-n6">
              MPU Vorbereitung
            </h2>
            <br >
            <p class="text-white">
              B. Bodtländer Psychologischer Berater
            </p>
          </div>
        </v-col>
        <v-col cols="1" class="d-flex align-center">
          <h4 class="cursor" style="color: #C0C080">
            MPU
          </h4>
        </v-col>
        <v-col cols="1" class="d-flex align-center">
          <h4 class="cursor text-white" @click="$router.push('/info')">
            Info
          </h4>
        </v-col>

        <v-col cols="1" class="d-flex align-center">
          <h4 class="cursor text-white" @click="$router.push('/impressum')">
            Impressum
          </h4>
        </v-col>
        <v-col cols="2" class="d-flex align-center">
          <div class="cursor d-flex align-center justify-center ueber-mich">
            <h3>
              Über mich
            </h3>
          </div>
        </v-col>
        <v-col cols="2" class="d-flex align-center">
          <div class="cursor d-flex align-center justify-center  button-rechts">
            <h3>
              Kontakt
            </h3>
          </div>
        </v-col>
      </v-row>
>>>>>>> 4d84f6cda84725e9323b54fa3926984722535f7c
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


.cursor:hover{
  cursor: pointer;
  color: #C0C080 !important;
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