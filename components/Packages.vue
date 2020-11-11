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
                                                <v-icon color="">web</v-icon>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title>{{ $t(`packages[${index - 1}].asset1`) }}</v-list-item-title>
                                            </v-list-item-content>
                                            <v-list-item-action>
                                                <v-icon text="white" color="green">check_circle</v-icon>
                                            </v-list-item-action>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-avatar>
                                                <v-icon>{{ iconsSecondLine[index - 1] }}</v-icon>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title>{{ $t(`packages[${index - 1}].asset2`) }}</v-list-item-title>
                                            </v-list-item-content>
                                            <v-list-item-action>
                                                <v-icon color="green">check_circle</v-icon>
                                            </v-list-item-action>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-avatar>
                                                <v-icon>{{ iconsThirdLine[index -1] }}</v-icon>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title>{{ $t(`packages[${index - 1}].asset3`) }}</v-list-item-title>
                                            </v-list-item-content>
                                            <v-list-item-action>
                                                <v-icon color="green">check_circle</v-icon>
                                            </v-list-item-action>
                                        </v-list-item>
                                    </v-list>
                                    <br />
                                    <div class="text-center">
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <v-chip label color="pink" text-color="white"> <v-icon left>label</v-icon>CHF {{ prices[index - 1] }} </v-chip>
                                                </div>
                                                <div class="flip-card-back">
                                                    <v-chip label color="orange" text-color="white"> {{ $t('all_inclusive') }}<v-icon right>done</v-icon> </v-chip>
                                                </div>
                                            </div>
                                        </div>
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
export default {
    data() {
        return {
            prices: ['500', "1'500", "2'000+"],
            colors: ['#8ac5ff', '#64B5F6', '#1976d2'],
            iconsSecondLine: ['email', 'admin_panel_settings', 'code'],
            iconsThirdLine: ['search', 'functions', 'compare_arrows']
        }
    }
}
</script>

<style scoped>
.icon {
    color: rgba(0, 0, 0, 0.54);
}
.icon-success {
    color: var(--v-success-base);
}

/* Flip card */
.flip-card {
    background-color: transparent;
    /* width: 300px; */
    /* height: 300px; */
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-front {
    /* background-color: #bbb; */
    /* color: black; */
}

.flip-card-back {
    /* background-color: #2980b9; */
    /* color: white; */
    transform: rotateY(180deg);
}
</style>
