<template>
    <div class="footer-mobile">
        <v-row style="height: 100%; width: 100%" class=" ma-0">
            <v-col class="d-flex justify-center align-center pa-0">
                <Icon style="font-size: 20px"  icon="line-md:email" />
            </v-col>
            <v-divider class="border-opacity-100" :vertical="true"></v-divider>
            <v-col class="d-flex justify-center align-center pa-0">
                <Icon  style="font-size: 20px" icon="streamline:phone-telephone-android-phone-mobile-device-smartphone-iphone" />

            </v-col>
            <v-divider class="border-opacity-100" :vertical="true"></v-divider>
            <v-col class="d-flex justify-center align-center pa-0">
                <Icon  style="font-size: 20px" icon="tdesign:location" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default{
    components:{
        Icon
    }
}
</script>

<style scoped>
.footer-mobile{
    position: absolute;
    bottom: 10px;
    height: 40px;
    margin-left: 5%;
    border-radius: 40px;
    background-image:linear-gradient(to right, rgba(120, 104, 79, 0.60) 40%, rgba(255, 176, 1, 0.7) 100%) ;
    width: 90%;
}
</style>