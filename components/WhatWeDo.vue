<template>
    <section>
        <!-- Large screens -->
        <v-row no-gutters justify="center" class="hidden-sm-and-down">
            <v-col cols="12" sm="10" class="my-3">
                <v-container grid-list-xl>
                    <v-card flat class="transparent">
                        <v-layout row wrap>
                            <v-col cols="12" md="4" class="text-center">
                                <v-hover>
                                    <v-icon size="4em" slot-scope="{ hover }" :color="hover ? 'secondary' : 'primary'">laptop</v-icon>
                                </v-hover>
                            </v-col>
                            <v-col cols="12" md="4" class="text-center">
                                <v-hover>
                                <v-icon size="4em" slot-scope="{ hover }" :color="hover ? 'secondary' : 'primary'">palette</v-icon>
                                </v-hover>
                            </v-col>
                            <v-col cols="12" md="4" class="text-center">
                                <v-hover>
                                <v-icon size="4em" slot-scope="{ hover }" :color="hover ? 'secondary' : 'primary'">pie_chart</v-icon>
                                </v-hover>
                            </v-col>
                        </v-layout>
                        <v-layout row wrap>
                            <v-col cols="12" md="4" v-for="index in this.$t('activities').length" :key="index">
                                <div class="headline text-center">
                                    {{ $t(`activities[${index - 1}].title`) }}
                                </div>
                            </v-col>
                        </v-layout>
                        <v-layout row wrap>
                            <v-col cols="12" md="4" v-for="index in this.$t('activities').length" :key="index">
                                {{ $t(`activities[${index - 1}].content`) }}
                            </v-col>
                        </v-layout>
                    </v-card>
                </v-container>
            </v-col>
        </v-row>

        <!-- Small screens -->
        <v-row no-gutters class="hidden-md-and-up">
            <v-container grid-list-xl>
                <v-layout row wrap align-center>
                    <v-flex xs12 md4>
                        <v-card v-for="index in this.$t('activities').length" :key="index" class="elevation-0 transparent">
                            <v-card-text class="text-xs-center">
                                <v-icon>mdi_domain</v-icon>
                            </v-card-text>
                            <v-card-title primary-title class="layout justify-center">
                                <div class="headline">{{ $t(`activities[${index - 1}].title`) }}</div>
                            </v-card-title>
                            <v-card-text>
                                {{ $t(`activities[${index - 1}].content`) }}
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-row>
    </section>
</template>

<script>
export default {
    data() {
        return {}
    },
    computed: {
        availableLocales() {
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
        }
    }
}
</script>

<style scoped>

</style>
