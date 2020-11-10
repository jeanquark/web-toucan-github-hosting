<template>
    <v-app id="app" v-cloak>
        <v-toolbar color="white">
            <v-toolbar-title>
                <img src="/images/logo_small.png" alt="Web Toucan logo" width="150" />
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="text-center">
                <v-menu open-on-hover top offset-y class="text-center">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn text dark v-bind="attrs" v-on="on">
                            <img :src="`images/languages/${$i18n.locale}.png`" width="40" />
                        </v-btn>
                    </template>

                    <v-hover>
                        <v-list class="text-center" slot-scope="{ hover }">
                            <v-list-item v-for="locale in availableLocales" :key="locale.code" style="" :class="`${hover ? 'primary-color' : ''}`">
                                <nuxt-link :to="switchLocalePath(locale.code)" style="margin: 0 auto;">
                                    <v-list-item-title style="align-items: center; ">
                                        <img :src="`images/languages/${locale.code}.png`" width="30" style="" />
                                    </v-list-item-title>
                                </nuxt-link>
                            </v-list-item>
                        </v-list>
                    </v-hover>
                </v-menu>
            </v-toolbar-items>
        </v-toolbar>

        <nuxt />

        <v-footer :absolute="false" height="auto" color="primary">
            <v-row justify="center" wrap>
                <v-col cols="12" class="py-3 text-center white--text">
                    &copy;{{ new Date().getFullYear() }} — <strong>Web Toucan</strong><img src="images/swiss_flag.png" width="10px" style="vertical-align: top;" />
                </v-col>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            fixed: false
        }
    },
    computed: {
        availableLocales() {
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
        }
    },
    methods: {}
}
</script>

<style>
[v-cloak] > * {
    display: none;
}

[v-cloak]::before {
    content: '';
    /* background: url('images/loader.gif') center no-repeat; */
    background: var(--v-primary-base) center no-repeat;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>

<style scoped>
.primary-color {
    background: var(--v-primary-base);
}
.secondary-color {
    background: var(--v-secondary-base);
}
</style>
