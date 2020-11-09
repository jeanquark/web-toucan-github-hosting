<template>
    <section>
        <v-row justify="center" class="my-5">
            <v-col cols="12" md="10" lg="8" class="my-3">
                <v-tabs centered dark icons-and-text  background-color="primary" height="100" v-model="tab">
                    <v-tabs-slider style="height: 5px;"></v-tabs-slider>

                    <v-tab v-for="index in testimonials.length" :key="index" :href="`#tab-${index}`" ripple class="white--text">
                        {{ testimonials[index - 1] ? testimonials[index - 1]['title'] : '' }}
                        <img :src="`images/testimonials/${testimonials[index - 1]['image-logo']}`" width="40" style="padding: 10px 0px;" v-if="testimonials[index - 1]" />
                    </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                    <v-tab-item v-for="index in testimonials.length" :key="index" :value="`tab-${index}`">
                        <v-card flat>
                            <v-row no-gutters v-if="testimonials[index - 1]">
                                <v-col cols="12" md="4" style="cursor: pointer;">
                                    <img :src="`images/testimonials/${testimonials[index - 1]['image']}`" width="100%" />
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
