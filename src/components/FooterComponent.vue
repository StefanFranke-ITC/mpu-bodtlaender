<template>
  <div class="footer-mobile">
    <v-row class=" ma-0" style="height: 100%; width: 100%">
      <v-col class="d-flex justify-center align-center pa-0">
        <a class="mt-1 text-black" href="mailto:Info@MPU-Institut-Saar.de" target="_blank">
          <Icon icon="line-md:email" style="font-size: 20px"/>
        </a>
      </v-col>
      <v-divider :vertical="true" class="border-opacity-100"></v-divider>
      <v-col class="d-flex justify-center align-center pa-0">
        <a class="mt-1 text-black" href="tel:+4915121225525" target="_blank">
          <Icon icon="streamline:phone-telephone-android-phone-mobile-device-smartphone-iphone"
                style="font-size: 20px"/>
        </a>
      </v-col>
      <v-divider :vertical="true" class="border-opacity-100"></v-divider>
      <v-col class="d-flex justify-center align-center pa-0">
        <a class="mt-1 text-black"
           href="https://www.google.com/maps/place/Institut+f%C3%BCr+MPU-Beratung+und+Suchtpr%C3%A4vention+St.Wendel+Saar/@49.4682475,7.1737616,17z/data=!3m1!5s0x4795c0274e5a43e3:0xd195be627346ce6b!4m15!1m8!3m7!1s0x4795c02751fedd21:0xa98259caf324f91d!2sAlter+Woog+13,+66606+St.+Wendel!3b1!8m2!3d49.4682475!4d7.1737616!16s%2Fg%2F11c25gpd9k!3m5!1s0x6f4b9a15b5480a27:0x7e39569ecef92420!8m2!3d49.4682475!4d7.1737616!16s%2Fg%2F11pvcv2d88?entry=ttu"
           target="_blank">
          <Icon icon="tdesign:location" style="font-size: 20px"/>
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {Icon} from '@iconify/vue';

export default {
  components: {
    Icon
  }
}
</script>

<style scoped>
.footer-mobile {
  position: absolute;
  bottom: 10px;
  height: 40px;
  margin-left: 5%;
  border-radius: 40px;
  background-image: linear-gradient(to right, rgba(120, 104, 79, 0.60) 40%, rgba(255, 176, 1, 0.7) 100%);
  width: 90%;
}
</style>