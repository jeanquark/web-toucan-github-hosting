<template>
    <v-main>
        <section>
            <!-- <client-only> -->
                <!-- <v-parallax :src="image1" height="600" class=""></v-parallax> -->
                <v-parallax
                    srcset="/images/image2-800-min.jpg 800w,
                            /images/image2-1200-min.jpg 1200w,
                            /images/image2-1600-min.jpg 1600w,
                            /images/image2-2200-min.jpg 2200w,
                            /images/image2-2600-min.jpg 2600w,
                            /images/image2-3200-min.jpg 3200w"
                    max-height="600"
                    loading="eager"
                    alt="peope working in office (cartoonish)"
                ></v-parallax>
                <!-- <v-parallax
                    lazy-src="https://picsum.photos/id/11/10/6"
                    src="https://picsum.photos/id/11/3200/600"
                    max-height="600"
                ></v-parallax> -->
            <!-- </client-only> -->
        </section>

        <v-container>
            <what-we-do></what-we-do>
        </v-container>

        <section>
            <!-- <client-only> -->
            <v-lazy>
                <!-- <v-parallax :src="image2" height="380"></v-parallax> -->
                <v-parallax srcset="/images/image3-800-min.jpg 800w,
                                    /images/image3-1200-min.jpg 1200w,
                                    /images/image3-1600-min.jpg 1600w,
                                    /images/image3-2200-min.jpg 2200w,
                                    /images/image3-2600-min.jpg 2600w,
                                    /images/image3-3200-min.jpg 3200w
                " height="380" loading="lazy" alt="people around desk in office (cartoonish)"></v-parallax>
            </v-lazy>
            <!-- </client-only> -->
        </section>

        <section>
            <our-packages></our-packages>
        </section>

        <section>
            <testimonials></testimonials>
        </section>
        <section>
            <v-row no-gutters justify="center" class="mb-5">
                <team></team>
                <contact></contact>
            </v-row>
        </section>
    </v-main>
</template>

<script>
import WhatWeDo from '~/components/WhatWeDo.vue'
import OurPackages from '~/components/Packages.vue'
import Testimonials from '~/components/Testimonials.vue'
import Team from '~/components/Team.vue'
import Contact from '~/components/Contact.vue'

export default {
    components: {
        WhatWeDo,
        OurPackages,
        Testimonials,
        Team,
        Contact
    },
    data() {
        return {}
    },
    computed: {
        // image1() {
        //     if (process.client) {
        //         const windowWidth = window ? window.innerWidth : null
        //         if (windowWidth < 800) {
        //             return 'images/image2-800-min.jpg'
        //         } else if (windowWidth < 1200) {
        //             return 'images/image2-1200-min.jpg'
        //         } else if (windowWidth <= 1600) {
        //             return 'images/image2-1600-min.jpg'
        //         } else if (windowWidth <= 2200) {
        //             return 'images/image2-2200-min.jpg'
        //         } else if (windowWidth <= 2600) {
        //             return 'images/image2-2600-min.jpg'
        //         } else {
        //             return 'images/image2-3200-min.jpg'
        //         }
        //         return 'images/image2-3200-min.jpg'
        //     }
        // },
        // image2() {
        //     if (process.client) {
        //         const windowWidth = window ? window.innerWidth : null
        //         if (windowWidth < 800) {
        //             return 'images/image3-800-min.jpg'
        //         } else if (windowWidth < 1200) {
        //             return 'images/image3-1200-min.jpg'
        //         } else if (windowWidth < 1600) {
        //             return 'images/image3-1600-min.jpg'
        //         } else if (windowWidth < 2200) {
        //             return 'images/image3-2200-min.jpg'
        //         } else if (windowWidth < 2600) {
        //             return 'images/image3-2600-min.jpg'
        //         } else {
        //             return 'images/image3-3200-min.jpg'
        //         }
        //         return 'images/image3-3200-min.jpg'
        //     }
        // }
    }
}
</script>

<style scoped></style>
