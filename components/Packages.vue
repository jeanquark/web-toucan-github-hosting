<template>
    <section>
        <v-row no-gutters wrap justify="center" class="my-5">
            <v-col cols="12" md="8" class="my-3">
                <v-row no-gutters wrap>
                    <v-col cols="12" md="4" v-for="index in this.$t('packages').length" :key="index">
                        <v-hover>
                            <v-card flat class="white--text" :color="colors[index - 1]" slot-scope="{ hover }" :class="`elevation-${hover ? 10 : 0}`" height="400">
                                <v-card-title primary-title class="justify-center">
                                    <div class="text-center" color="">
                                        <h3 class="headline mb-0">{{ $t(`packages[${index - 1}].title`) }}</h3>
                                    </div>
                                </v-card-title>
                                <v-card-text class="" style="padding: 30px;">
                                    <v-list subheader style="background-color: #d7ebff;">
                                        <v-list-item>
                                            <v-list-item-avatar>
                                                <!-- <font-awesome-icon :icon="['fas', 'pager']" size="2x" class="icon" /> -->
                                                <v-icon color="">web</v-icon>
                                                <!-- <v-icon>feedback</v-icon> -->
                                                <!-- <v-icon>mdi-domain</v-icon> -->
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title>{{ $t(`packages[${index - 1}].asset1`) }}</v-list-item-title>
                                            </v-list-item-content>
                                            <v-list-item-action>
                                                <!-- <font-awesome-icon :icon="['fas', 'check-circle']" size="2x" class="icon-success" /> -->
                                                <v-icon text="white" color="green">check_circle</v-icon>
                                            </v-list-item-action>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-avatar>
                                                <!-- <font-awesome-icon :icon="['fas', 'envelope']" size="2x" class="icon" /> -->
                                                <v-icon>email</v-icon>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title>{{ $t(`packages[${index - 1}].asset2`) }}</v-list-item-title>
                                            </v-list-item-content>
                                            <v-list-item-action>
                                                <!-- <font-awesome-icon :icon="['fas', 'check-circle']" size="2x" class="icon-success" /> -->
                                                <v-icon color="green">check_circle</v-icon>
                                            </v-list-item-action>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-avatar>
                                                <!-- <font-awesome-icon :icon="['fas', 'search']" size="2x" class="icon" /> -->
                                                <v-icon>search</v-icon>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title>{{ $t(`packages[${index - 1}].asset3`) }}</v-list-item-title>
                                            </v-list-item-content>
                                            <v-list-item-action>
                                                <!-- <font-awesome-icon :icon="['fas', 'check-circle']" size="2x" class="icon-success" /> -->
                                                <v-icon color="green">check_circle</v-icon>
                                            </v-list-item-action>
                                        </v-list-item>
                                    </v-list>
                                    <br />
                                    <div class="text-center">
                                        <!-- <vue-flip>
  <template v-slot:front>
    front
  </template>
  <template v-slot:back>
    back
  </template>
</vue-flip> -->
                                        <!-- <client-only>
        <vue-flip width="100%" :active-hover="true" transition="1s" class="">
            <div slot="front">
                <v-chip label color="pink" text-color="white"> <font-awesome-icon :icon="['fas', 'tag']" size="1x" />CHF 500 </v-chip>
            </div>
            <div slot="back">
                <v-chip label color="orange" text-color="white"> abc<font-awesome-icon :icon="['fas', 'check']" size="1x" /> </v-chip>
            </div> </vue-flip
    ></client-only> -->
                                        <!-- <client-only>
    <vue-flip active-click="true">
    <div slot="front">
        front
    </div>
    <div slot="back">
        back
    </div>
</vue-flip>
</client-only> -->

                                        <!-- <client-only> 

                                        <info-card
    id="info-card"
    frontType="graph"
    frontTitle="Some Numbers"
    :frontData="[3, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
    backTitle="Quote of the Day"
    backData='<i>Do you know why people like violence? It is because it feels good. Humans find violence deeply satisfying. But remove the satisfaction, and the act becomes hollow.</i><br><span class="u-pull-right">— Alan Turing</span>'
  ></info-card>
  </client-only> -->
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </section>
</template>

<script>
// import VueFlip from '~/components/VueFlip'
// import VueFlip from 'vue-flip'
// import FlipCard from 'vue-flip-card';
// import InfoCard from '~/plugins/vue-info-card'
export default {
    // components: { VueFlip }
    // components: { FlipCard }
    // components: { InfoCard },
    data() {
        return {
            colors: [
                '#8ac5ff',
                // '#6aaaff',
                '#64B5F6',
                '#1976d2'
            ]
        }
    }
}
</script>

<style scoped>
.icon {
    color: rgba(0,0,0,0.54);
}
.icon-success {
    color: var(--v-success-base);
}
</style>
