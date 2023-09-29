<template>

  <div class="background">
    <div class="background-color">
      <!---  Header   -->
      <v-row style="max-width: 100%" class="d-flex justify-center mx-0">
        <v-col cols="1" style=" max-width: 90px">
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
                Willkommen beim Institut <br> für MPU-Beratung und<br>  Suchtprävention <br> im Saarland.
            </h1>
            <p class="text-white mt-10">
                Ihr Ansprechpartner rund um das Thema Medizinisch-Psychologische Untersuchung (MPU).
            </p>
            <p class="text-white mt-4">
                In der MPU-Vorbereitung gehe ich mit Ihnen den gleichen Weg, den der
                Gutachter mit Ihnen im Gespräch beschreitet.
            </p>
            <div style="max-width: 220px" class="mt-6 d-flex align-center justify-center button-rechts">
               <h3>
                   Termin Vereinbaren
               </h3>
            </div>
        </v-col>
        <v-col class="d-flex justify-center" cols="5">
            <div class="profil-bild">
            </div>
        </v-col>
      </v-row>
        <v-row style="max-width: 100%" class="mt-16 d-flex justify-center mx-0">
            <v-col cols="10">
                <v-row  style="max-width: 100%" class="footer mx-0">
                    <v-col class="d-flex justify-center align-center">
                        <Icon class="ml-12" style="font-size: 40px" icon="streamline:phone-telephone-android-phone-mobile-device-smartphone-iphone" />
                        <div class="text-center" style="width: 100%">
                            <h2>
                                Ruf mich an
                            </h2>
                            <h4>
                                <a class="text-black" target="_blank" href="tel:+4915121225525">
                                    015121225525
                                </a>
                            </h4>
                        </div>
                    </v-col>
                    <v-divider class="border-opacity-100" vertical="true"></v-divider>
                    <v-col class="d-flex align-center">
                        <Icon style="font-size: 40px" class="ml-5" icon="line-md:email" />
                        <div class="text-center" style=" width: 100%" >
                        <h2>
                            Schreib mir eine Mail
                        </h2>
                        <h4 >
                            <a class="text-black" target="_blank" href="mailto:info@example.com">
                            Info@MPU-Institut-Saar.de
                            </a>
                        </h4>

                        </div>
                    </v-col >
                    <v-divider class="border-opacity-100" vertical="true"></v-divider>
                    <v-col class="d-flex align-center">
                        <Icon  style="font-size: 40px" class="ml-5" icon="tdesign:location" />
                        <div class="text-center" style=" width: 100%" >
                            <h2>
                                So findest du mich
                            </h2>
                            <h4 >
                                <a class="text-black" target="_blank" href="https://www.google.com/maps/place/Alter+Woog+13,+66606+St.+Wendel/@49.4682475,7.1711813,17z/data=!3m1!4b1!4m6!3m5!1s0x4795c02751fedd21:0xa98259caf324f91d!8m2!3d49.4682475!4d7.1737616!16s%2Fg%2F11c25gpd9k?entry=ttu">
                                    Alter Wog 13, 66606 Sankt Wendel
                                </a>
                            </h4>

                        </div>

                    </v-col>

                </v-row>
            </v-col>
        </v-row>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
export default ({
  name: 'HomeView',

  components: {
      Icon,
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
