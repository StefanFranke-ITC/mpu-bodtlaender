<template>
    <v-row v-if="!$store.state.mobile"  style="max-width: 100%" class="d-flex justify-center mx-0">
        <v-col  cols="1" style=" max-width: 90px" class="cursor" @click="$router.push('/')">
            <v-img @click="$router.push('/')" class=" logo" src="https://mpu-institut-saar.de/wp-content/uploads/2022/01/cropped-logo-web-transparent.png">
            </v-img>
        </v-col>
        <v-col @click="$router.push('/')" cols="3" class="cursor pl-0 d-flex align-center">
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
          <h4 v-if="$route.path === '/mpu'" class="cursor " style="color: #C0C080">
            MPU
          </h4>
            <h4 v-else class="cursor text-white" @click="$router.push('/mpu')">
                MPU
            </h4>
        </v-col>
        <v-col cols="1" class="d-flex align-center">
          <h4 v-if="$route.path === ('/info')" class="cursor " style="color: #C0C080">
            Info
          </h4>
            <h4 v-else class="cursor text-white" @click="$router.push('/info')">
                Info
            </h4>
        </v-col>

        <v-col cols="1" class="d-flex align-center">
          <h4 v-if="$route.path === ('/impressum')" class="cursor" style="color: #C0C080">
            Impressum
          </h4>
            <h4 v-else class="cursor text-white" @click="$router.push('/impressum')">
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
            <v-dialog width="500">
                <template v-slot:activator="{ props }">
                    <div  v-bind="props" style="max-width: 220px" class="cursor d-flex align-center justify-center button-rechts">
                        <h3>
                            Kontakt
                        </h3>
                    </div>
                </template>
                <template v-slot:default="{ isActive }">
                    <v-card class="pt-4 kontaktformular">
                        <v-row  style="width: 100%" class="d-flex justify-center mx-0">
                            <v-col  cols="10">
                                <h3>Bitte füllen Sie das Formular aus, und ich werde mich umgehend bei Ihnen melden.</h3>
                            </v-col>
                            <v-col  cols="10">
                                <v-text-field variant="outlined"  label="Vorname">

                                </v-text-field>
                            </v-col>
                            <v-col class="formularinhalte" cols="10">
                                <v-text-field variant="outlined"  label="Nachname">

                                </v-text-field>
                            </v-col>
                            <v-col class="formularinhalte" cols="10">
                                <v-text-field variant="outlined" label="Email">

                                </v-text-field>
                            </v-col>
                            <v-col class="formularinhalte" cols="10">
                                <v-text-field variant="outlined"  label="Handynummer">

                                </v-text-field>
                            </v-col>
                            <v-col class="formularinhalte" cols="10">
                                <v-textarea variant="outlined"  label="Nachricht">

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
    <v-row v-if="$store.state.mobile" style="width: 100%;" class="mx-0">
        <v-col  cols="1" style=" max-width: 90px" class="cursor" @click="$router.push('/')">
            <v-img @click="$router.push('/')"  class="logo-mobile" src="https://mpu-institut-saar.de/wp-content/uploads/2022/01/cropped-logo-web-transparent.png">
            </v-img>
        </v-col>
        <v-col @click="$router.push('/')" cols="7" class="cursor pl-0 d-flex ">
            <div>
                <h4 class="mb-n6">
                    MPU Vorbereitung
                </h4>
                <br >
                <p style="font-size: 10px" class="text-white">
                    B. Bodtländer Psychologischer Berater
                </p>
            </div>
        </v-col>
        <v-col class="d-flex align-center">
            <Icon style="font-size: 30px; color: rgba(255, 176, 1, 0.7)" icon="solar:map-arrow-right-bold" />
        </v-col>
    </v-row>
</template>


<script >
import { Icon } from '@iconify/vue';

export default {
    components:{Icon}
}
</script>

<style >
.cursor:hover{
    cursor: pointer;
    color: rgba(255, 176, 1, 0.7) !important;
    text-shadow: 1px 1px  black;
}
</style>