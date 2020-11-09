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

            <form @submit.prevent="sendContactForm" ref="form">
                <v-text-field name="firstname" :label="`${$t('form.firstname')}`" :counter="32" @focus="onFocus" v-model="form.firstname"> </v-text-field>

                <v-text-field name="lastname" :label="`${$t('form.lastname')}`" :counter="32" @focus="onFocus" v-model="form.lastname"> </v-text-field>

                <v-text-field name="email" :label="`${$t('form.email')}`" @focus="onFocus" v-model="form.email"></v-text-field>

                <v-textarea name="message" rows="6" :label="`${$t('form.your_message')}`" @focus="onFocus" v-model="form.message"></v-textarea>
                <br />
                <div class="text-center" v-if="!messageSentSuccess && !messageSentError">
                    <v-btn color="secondary" type="submit" :loading="loading">{{ $t('form.submit') }}</v-btn>
                </div>
            </form>

            <v-alert type="success" v-if="messageSentSuccess">
                {{ $t('form.message_success') }}
            </v-alert>
            <v-alert type="error" prominent v-if="messageSentError">
                {{ $t('form.message_error') }}
            </v-alert>
        </v-card>
    </v-col>
</template>

<script>
var mailgun = require('mailgun.js')
var mg = mailgun.client({ username: 'api', key: process.env.NUXT_ENV_MAILGUN_PRIVATE_API_KEY, url: 'https://api.eu.mailgun.net' })
export default {
    data() {
        return {
            loading: false,
            messageSentSuccess: false,
            messageSentError: false,
            form: {
                firstname: '',
                lastname: '',
                email: '',
                message: ''
            },
            mailgunDestinationEmailAddress: process.env.NUXT_ENV_MAILGUN_DESTINATION_EMAIL_ADDRESS
        }
    },
    computed: {
    },
    methods: {
        onFocus () {
            console.log('onFocus')
            this.messageSentSuccess = false
            this.messageSentError = false
        },
        encodeHTML(s) {
            return s
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/"/g, '&quot;')
        },
        async sendContactForm() {
            console.log('sendContactForm: ', this.form)
            // console.log('Send contact form: ', mg)
            console.log('escape: ', this.encodeHTML(this.form.message))
            // this.loading = true
            // mg.messages
            //     .create('vlcf.ch', {
            //         from: 'Excited User <mailgun@sandbox-123.mailgun.org>',
            //         to: [process.env.NUXT_ENV_MAILGUN_DESTINATION_EMAIL_ADDRESS],
            //         subject: 'New contact form from web-toucan.com',
            //         text: 'Testing some Mailgun awesomness!',
            //         html: `Email sent on ${new Date()}.<br /><br />
            //             Here are the information sent:<br />
            //             firstname: <b>${this.encodeHTML(this.form.firstname)}</b><br />
            //             lastname: <b>${this.form.lastname}</b><br />
            //             email: <b>${this.form.email}</b><br />
            //             message: <b>${this.form.message}</b><br />
            //         `
            //         // html: `<span v-html="{{ this.form.firstname }}"></span>`
            //     })
            //     .then(msg => console.log(msg)) // logs response data
            //     .catch(err => console.log(err)) // logs any error

            try {
                this.loading = true
                await mg.messages.create('vlcf.ch', {
                    from: 'Excited User <mailgun@sandbox-123.mailgun.org>',
                    to: [process.env.NUXT_ENV_MAILGUN_DESTINATION_EMAIL_ADDRESS],
                    subject: 'New contact form from web-toucan.com',
                    text: 'Testing some Mailgun awesomness!',
                    html: `Email sent on ${new Date()}.<br /><br />
                        Here are the information sent:<br />
                        firstname: <b>${this.encodeHTML(this.form.firstname)}</b><br />
                        lastname: <b>${this.encodeHTML(this.form.lastname)}</b><br />
                        email: <b>${this.encodeHTML(this.form.email)}</b><br />
                        message: <b>${this.encodeHTML(this.form.message)}</b><br />
                    `
                })
                this.loading = false
                this.messageSentError = false
                this.messageSentSuccess = true
            } catch (error) {
                console.log('error: ', error)
                this.loading = false
                this.messageSentSuccess = false
                this.messageSentError = true
            }
        }
    }
}
</script>
