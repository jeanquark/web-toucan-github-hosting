<template>
    <v-main>
        <section>
            <client-only>
                <v-parallax :src="image1" height="600" class=""></v-parallax>
            </client-only>
        </section>

        <v-container>
            <what-we-do></what-we-do>
        </v-container>

        <section>
            <client-only>
                <v-parallax :src="image2" height="380"></v-parallax>
            </client-only>
        </section>

        <section>
            <our-packages></our-packages>
        </section>

        <section>
            <testimonials></testimonials>
        </section>
        <section>
            <v-row no-gutters justify="center">
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
        return {
        }
    },
    computed: {
        
        image1() {
            if (process.client) {
                // let windowWidth
                const windowWidth = window ? window.innerWidth : null
                if (windowWidth < 800) {
                    return '/images/image2-800-min.jpg'
                } else if (windowWidth < 1200) {
                    return '/images/image2-1200-min.jpg'
                } else if (windowWidth <= 1600) {
                    return '/images/image2-1600-min.jpg'
                } else if (windowWidth <= 2200) {
                    return '/images/image2-2200-min.jpg'
                } else if (windowWidth <= 2600) {
                    return '/images/image2-2600-min.jpg'
                } else {
                    return '/images/image2-3200-min.jpg'
                }
                return '/images/image2-3200-min.jpg'
            }
        },
        image2() {
            if (process.client) {
                const windowWidth = window ? window.innerWidth : null
                if (windowWidth < 800) {
                    return '/images/image3-800-min.jpg'
                } else if (windowWidth < 1200) {
                    return '/images/image3-1200-min.jpg'
                } else if (windowWidth < 1600) {
                    return '/images/image3-1600-min.jpg'
                } else if (windowWidth < 2200) {
                    return '/images/image3-2200-min.jpg'
                } else if (windowWidth < 2600) {
                    return '/images/image3-2600-min.jpg'
                } else {
                    return '/images/image3-3200-min.jpg'
                }
                return '/images/image3-3200-min.jpg'
            }
        }
    }
}
</script>

<style scoped>

</style>
