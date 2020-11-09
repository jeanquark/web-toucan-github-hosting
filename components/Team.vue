<template>
    <v-col cols="12" md="10" lg="4">
        <v-card flat>
            <v-card-title primary-title class="layout justify-center">
                <div class="headline">
                    {{ $t('company.title') }}
                </div>
            </v-card-title>
            <v-card-text>
                {{ $t('company.content') }}
            </v-card-text>
            <br />
            <v-expansion-panels accordion>
                <v-expansion-panel v-for="index in team_members.length" :key="index" style="box-shadow: none;">
                    <v-expansion-panel-header v-if="team_members[index - 1]">
                        <v-row no-gutters align="center">
                            <v-col cols="3">
                                <v-avatar :size="100" color="grey lighten-4">
                                    <img :src="`images/teams/${team_members[index - 1]['image']}`" alt="avatar" />
                                </v-avatar>
                            </v-col>
                            <v-col cols="9" style="text-align: center;">
                                <div>
                                    <span class="primary--text"> {{ team_members[index - 1]['name'] }} </span><br /><br /><span class="grey--text text--darken-2">
                                        {{ team_members[index - 1]['role'] }}
                                    </span>
                                </div>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        {{ team_members[index - 1]['content'] }}
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card>
    </v-col>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        team_members() {
            return this.$t('team_members')
        }
    }
}
</script>
