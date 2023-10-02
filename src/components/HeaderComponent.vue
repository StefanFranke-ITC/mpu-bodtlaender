<template>
  <v-row v-if="!$store.state.mobile" class="d-flex justify-center mx-0" style="max-width: 100%">
    <v-col class="cursor" cols="1" style=" max-width: 90px" @click="$router.push('/')">
      <v-img class=" logo"
             src="https://mpu-institut-saar.de/wp-content/uploads/2022/01/cropped-logo-web-transparent.png"
             @click="$router.push('/')">
      </v-img>
    </v-col>
    <v-col class="cursor pl-0 d-flex align-center" cols="3" @click="$router.push('/')">
      <div>
        <h2 class="mb-n6">
          MPU Vorbereitung
        </h2>
        <br>
        <p class="text-white">
          B. Bodtländer Psychologischer Berater
        </p>
      </div>
    </v-col>
    <v-col class="d-flex align-center" cols="1">
      <h4 v-if="$route.path === '/mpu'" class="cursor " style="color: #C0C080">
        MPU
      </h4>
      <h4 v-else class="cursor text-white" @click="$router.push('/mpu')">
        MPU
      </h4>
    </v-col>
    <v-col class="d-flex align-center" cols="1">
      <h4 v-if="$route.path === ('/info')" class="cursor " style="color: #C0C080">
        Info
      </h4>
      <h4 v-else class="cursor text-white" @click="$router.push('/info')">
        Info
      </h4>
    </v-col>

    <v-col class="d-flex align-center" cols="1">
      <h4 v-if="$route.path === ('/impressum')" class="cursor" style="color: #C0C080">
        Impressum
      </h4>
      <h4 v-else class="cursor text-white" @click="$router.push('/impressum')">
        Impressum
      </h4>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <div class="cursor d-flex align-center justify-center ueber-mich" @click="$router.push('überMich')">
        <h3>
          Über mich
        </h3>
      </div>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <v-dialog width="500">
        <template v-slot:activator="{ props }">
          <div class="cursor d-flex align-center justify-center button-rechts" style="max-width: 220px" v-bind="props">
            <h3>
              Kontakt
            </h3>
          </div>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card class="pt-4 kontaktformular">
            <v-row class="d-flex justify-center mx-0" style="width: 100%">
              <v-col cols="10">
                <h3>Bitte füllen Sie das Formular aus, und ich werde mich umgehend bei Ihnen melden.</h3>
              </v-col>
              <v-col cols="10">
                <v-text-field label="Vorname" variant="outlined">

                </v-text-field>
              </v-col>
              <v-col class="formularinhalte" cols="10">
                <v-text-field label="Nachname" variant="outlined">

                </v-text-field>
              </v-col>
              <v-col class="formularinhalte" cols="10">
                <v-text-field label="Email" variant="outlined">

                </v-text-field>
              </v-col>
              <v-col class="formularinhalte" cols="10">
                <v-text-field label="Handynummer" variant="outlined">

                </v-text-field>
              </v-col>
              <v-col class="formularinhalte" cols="10">
                <v-textarea label="Nachricht" variant="outlined">

                </v-textarea>
              </v-col>

            </v-row>
            <v-card-actions class="px-14 mb-6 d-flex justify-space-between">
              <v-btn
                  text="Senden"
                  @click="isActive.value = false"
              ></v-btn>
              <v-btn
                  text="Abbrechen "
                  @click="isActive.value = false"
              ></v-btn>

            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
  <v-row v-if="$store.state.mobile" class="mx-0" style="width: 100%;">
    <v-col class="cursor" cols="1" style=" max-width: 90px" @click="$router.push('/')">
      <v-img class="logo-mobile"
             src="https://mpu-institut-saar.de/wp-content/uploads/2022/01/cropped-logo-web-transparent.png"
             @click="$router.push('/')">
      </v-img>
    </v-col>
    <v-col class="cursor pl-0 d-flex " cols="7" @click="$router.push('/')">
      <div>
        <h4 class="mb-n6">
          MPU Vorbereitung
        </h4>
        <br>
        <p class="text-white" style="font-size: 10px">
          B. Bodtländer Psychologischer Berater
        </p>
      </div>
    </v-col>
    <v-col class="d-flex align-center">
      <Icon icon="solar:map-arrow-right-bold" style="font-size: 30px; color: rgba(255, 176, 1, 0.7)"/>
    </v-col>
  </v-row>
</template>


<script>
import {Icon} from '@iconify/vue';

export default {
  components: {Icon}
}
</script>

<style>
.cursor:hover {
  cursor: pointer;
  color: rgba(255, 176, 1, 0.7) !important;
  text-shadow: 1px 1px black;
}

.logo-mobile {
  border: white solid 1px;
  border-radius: 100%;
  background-color: white;
  height: 39px;
  width: 39px;
}

.ueber-mich {
  border-radius: 30px;
  border: 2px solid #C0C080;
  height: 50px;
  width: 100%;
  box-shadow: 4px 4px 7px black;
}

.logo {
  border: white solid 1px;
  border-radius: 100%;
  background-color: white;
  height: 70px;
  width: 70px;
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

.kontaktformular {
  height: 700px;
  width: 500px;
  background-color: transparent;
  background-image: linear-gradient(to right, rgba(192, 192, 128, 0.70) 20%, rgba(255, 176, 1, 0.70) 100%);
  backdrop-filter: blur(4px);
  border: solid 2px rgba(3, 3, 3, 0.93);
  border-radius: 30px !important;
}

.kontaktformular-mobile {
  height: 600px;
  width: 350px;
  background-color: transparent;
  background-image: linear-gradient(to right, rgba(192, 192, 128, 0.70) 20%, rgba(255, 176, 1, 0.70) 100%);
  backdrop-filter: blur(4px);
  border: solid 2px rgba(3, 3, 3, 0.93);
  border-radius: 30px !important;
}

.kontaktformular-mobile1 {
  height: 65vh;
  width: 90%;
  background-color: transparent;
  background-image: linear-gradient(to right, rgba(192, 192, 128, 0.70) 20%, rgba(255, 176, 1, 0.70) 100%);
  backdrop-filter: blur(4px);
  border: solid 2px rgba(3, 3, 3, 0.93);
  border-radius: 30px !important;
}

.formularinhalte {
  margin-top: -60px;
}

.formularinhalte-mobile {
  margin-top: -35px;
}

</style>