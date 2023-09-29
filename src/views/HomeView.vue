<template>

  <div class="background">
    <div class="background-color">
      <!---  Header   -->
      <v-row style="max-width: 100%" class=" mx-0">
        <v-col style=" max-width: 90px">
          <v-img class=" logo" src="https://mpu-institut-saar.de/wp-content/uploads/2022/01/cropped-logo-web-transparent.png">
          </v-img>
        </v-col>
        <v-col cols="3" class="ml-9 pl-0 d-flex align-center">
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
          <h4 class="cursor text-white">
            MPU
          </h4>
        </v-col>
        <v-col cols="1" class="d-flex align-center">
          <h4 class="cursor text-white">
            preise
          </h4>
        </v-col>

        <v-col cols="1" class="d-flex align-center">
          <h4 class="cursor text-white">
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
      <!---  body   -->
      <v-row style="max-width: 100%" class="mt-16 d-flex justify-center mx-0">
        <v-col  cols="5">
            <h1 class="text-white">
                Willkommen beim Institut <br> für MPU-Beratung <br> und Suchtprävention <br> im Saarland.
            </h1>
            <p class="text-white mt-10">
                Ihr Ansprechpartner rund um das Thema Medizinisch-Psychologische Untersuchung (MPU).
            </p>
        </v-col>
        <v-col class="d-flex justify-center" cols="5">
            <div class="profil-bild">
            </div>
        </v-col>
      </v-row>
        <v-row style="max-width: 100%" class="mt-16 d-flex justify-center mx-0">
            <v-col cols="10">
                <v-row  style="max-width: 100%" class="footer mx-0">
                    <v-col></v-col>
                    <v-divider class="border-opacity-100" vertical="true"></v-divider>
                    <v-col></v-col>
                    <v-divider class="border-opacity-100" vertical="true"></v-divider>
                    <v-col></v-col>
                    <v-divider class="border-opacity-100" vertical="true"></v-divider>
                    <v-col></v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
  </div>
</template>

<script>

export default ({
  name: 'HomeView',

  components: {

  },
});
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
.logo{
  border: white solid 1px;
  border-radius: 100%;
  background-color: white;
  height: 70px;
    margin-left: 40px;
  width: 70px;
}
.ueber-mich{
  border-radius: 30px;
  border: 2px solid #C0C080;
  height: 50px;
  width: 100%;
  box-shadow: 4px 4px 7px black;

}
.button-rechts{
  border-radius: 30px;
  border: 2px solid black;
  height: 50px;
  width: 100%;
  background-image: linear-gradient(to right, rgba(192, 192, 128, 0.66) 20%, rgba(255, 176, 1, 0.7) 100%);
  backdrop-filter: blur(4px);
  box-shadow: 4px 4px 7px black;

}
.profil-bild{
  height: 40vh;
  width: 100%;
  background-image: url("https://mpu-institut-saar.de/wp-content/uploads/2022/06/999543c1-1-2048x1367.jpg");
  background-size: cover;
  border-radius: 70px 70px 70px 200px;
  box-shadow: 4px 4px 15px black;
}
.footer{
    margin-top: 4vh;
    border: 2px solid black;
    height: 15vh;
    border-radius: 100px;
    background-image: linear-gradient(to right, rgba(192, 192, 128, 0.51) 50%, rgba(255, 176, 1, 0.51) 70%);
    backdrop-filter: blur(4px);
    box-shadow: 4px 4px 15px black;
    padding: 20px;

}
.cursor{
    cursor: pointer;
}

</style>
