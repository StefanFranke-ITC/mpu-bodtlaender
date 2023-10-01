
<template>

    <v-row style="max-width: 100%" class="d-flex justify-center mx-0">
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
            <h4 class="cursor text-white" @click="$router.push('/mpu')">
                MPU
            </h4>
        </v-col>
        <v-col cols="1" class="d-flex align-center">
            <h4 class="cursor text-white" @click="$router.push('/preise')">
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

</template>


<script setup>

</script>

<style scoped>

</style>