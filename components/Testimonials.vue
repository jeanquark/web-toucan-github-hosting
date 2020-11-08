<template>
    <section>
        <v-row justify="center" class="my-5">
            <v-col cols="12" md="10" lg="8" class="my-3">
                <!-- <v-tabs centered icons-and-text backgroud-color="deep-purple accent-4" height="100" v-model="tab">
                    <v-tabs-slider color="primary lighten-1" style="height: 5px;"></v-tabs-slider>
                    <v-tab v-for="index in this.$t('testimonials').length" :key="index" ripple class="white--text">
                        {{ $t(`testimonials[${index - 1}].title`) }}
                        <img :src="`/images/testimonials/jbne-logo.png`" width="40" style="padding: 10px 0px;" />
                    </v-tab>
                    <v-tabs-items v-model="tab">
                        <v-tab-item v-for="index in this.$t('testimonials').length" :key="index">
                            <v-card flat>
                                <v-row wrap>
                                    <v-col cols="12" md="4" style="cursor: pointer;" @click="redirectTo('abc')">
                                        <img :src="`/images/testimonials/jbne.jpg`" width="100%" />
                                    </v-col>
                                    <v-col cols="12" md="8">
                                        <v-card-text style="line-height: 2em; padding: 40px;">
                                            "<i> {{ $t(`testimonials[${index - 1}].content`) }} </i>"
                                        </v-card-text>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                </v-tabs> -->

                <v-tabs centered dark icons-and-text  background-color="primary" height="100" v-model="tab">
                    <v-tabs-slider style="height: 5px;"></v-tabs-slider>

                    <v-tab v-for="index in testimonials.length" :key="index" :href="`#tab-${index}`" ripple class="white--text">
                        <!-- <div v-if="testimonials[index - 1]"> -->
                        {{ testimonials[index - 1] ? testimonials[index - 1]['title'] : '' }}
                        <img :src="`/images/testimonials/${testimonials[index - 1]['image-logo']}`" width="40" style="padding: 10px 0px;" v-if="testimonials[index - 1]" />
                        <!-- </div> -->
                    </v-tab>

                    

                    <!-- <v-tab href="#tab-2">
                        Favorites
                        <v-icon>mdi-heart</v-icon>
                    </v-tab>

                    <v-tab href="#tab-3">
                        Nearby
                        <v-icon>mdi-account-box</v-icon>
                    </v-tab> -->
                </v-tabs>

                <v-tabs-items v-model="tab">
                    <v-tab-item v-for="index in testimonials.length" :key="index" :value="`tab-${index}`">
                        <v-card flat>
                            <v-row no-gutters v-if="testimonials[index - 1]">
                                <v-col cols="12" md="4" style="cursor: pointer;" @click="redirectTo('abc')">
                                    <img :src="`/images/testimonials/${testimonials[index - 1]['image']}`" width="100%" />
                                </v-col>
                                <v-col cols="12" md="8">
                                    <v-card-text style="line-height: 2em; padding: 40px;">
                                        "<i> {{ testimonials[index - 1]['content'] }} </i>"
                                    </v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-col>
        </v-row>
    </section>
</template>

<script>
export default {
    data() {
        return {
            tab: null
        }
    },
    computed: {
        testimonials () {
            return this.$t('testimonials')
        }
    }
}
</script>
