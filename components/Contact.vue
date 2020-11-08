<template>
    <v-col cols="12" md="10" lg="4">
        <v-card flat class="" style="padding: 0px 40px;">
            <v-card-title primary-title class="layout justify-center">
                <div class="headline">
                    <!-- {{ $contact_form->translate($locale)->content1 }} -->
                    {{ $t('contact.title') }}
                </div>
            </v-card-title>
            <v-card-text class="text-center">
                <!-- {{ $contact_form->translate($locale)->content2 }} -->
                {{ $t('contact.content') }}
                <br /><br />
            </v-card-text>

            <div class="text-center">
                mailgunDestinationEmailAddress: {{ mailgunDestinationEmailAddress }}<br /><br />
                <v-btn dark @click="sendContactForm">Send contact form </v-btn>
            </div>

            <!-- <form @submit.prevent="sendContactForm" ref="form">
                <v-text-field
                    v-model="contact.firstname"
                    :counter="32"
                    :label="`${$t('form.firstname')}`"
                    name="firstname"
                >
                </v-text-field>

                <v-text-field
                    v-model="contact.lastname"
                    :counter="32"
                    :label="`${$t('form.lastname')}`"
                    name="lastname"
                    
                >
                </v-text-field>

                <v-text-field
                    v-model="contact.email"
                    :label="`${$t('form.email')}`"
                    name="email"
                ></v-text-field>

                <v-textarea
                    v-model="contact.message"
                    :label="`${$t('form.your_message')}`"
                    name="message"
                    rows="6"
                ></v-textarea>
                <br />
                <div class="text-center">
                    <v-btn color="success" type="submit" :disabled="disabled" :loading="loading">{{ $t('form.submit') }}</v-btn>
                </div>
            </form> -->
        </v-card>
    </v-col>
</template>

<script>
var mailgun = require('mailgun.js')
var mg = mailgun.client({ username: 'api', key: process.env.NUXT_ENV_MAILGUN_PRIVATE_API_KEY, url: 'https://api.eu.mailgun.net' })
export default {
    data() {
        return {
            mailgunDestinationEmailAddress: process.env.NUXT_ENV_MAILGUN_DESTINATION_EMAIL_ADDRESS
        }
    },
    computed: {
        disabled() {
            return false
        },
        loading() {
            return false
        }
    },
    methods: {
        sendContactForm() {
            console.log('Send contact form: ', mg)
            mg.messages
                .create('vlcf.ch', {
                    from: 'Excited User <mailgun@sandbox-123.mailgun.org>',
                    to: [process.env.NUXT_ENV_MAILGUN_DESTINATION_EMAIL_ADDRESS],
                    subject: 'Test Email from Mailgun',
                    text: 'Testing some Mailgun awesomness!',
                    html: `Email sent on ${new Date()}`
                })
                .then(msg => console.log(msg)) // logs response data
                .catch(err => console.log(err)) // logs any error
        }
    }
}
</script>
