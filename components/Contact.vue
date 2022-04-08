<template>
    <v-col cols="12" md="10" lg="4">
        <v-card flat class="" style="padding: 0px 40px">
            <v-card-title primary-title class="layout justify-center">
                <div class="headline">
                    {{ $t('contact.title') }}
                </div>
            </v-card-title>
            <v-card-text class="">
                {{ $t('contact.content') }}
                <br /><br />
            </v-card-text>

            <v-form ref="form" lazy-validation @submit.prevent="sendContactForm">
                <v-text-field
                    name="firstname"
                    :label="`${$t('form.firstname')}`"
                    :counter="32"
                    :rules="[
                        (v) => !!v || `${$t('form.firstname')} ${$t('validation.is_required')}`,
                        (v) => (v && v.length <= 32) || `${$t('form.firstname')} ${$t('validation.max_length')} 32 ${$t('validation.characters')}`,
                    ]"
                    @focus="onFocus"
                    v-model="form.firstname"
                >
                </v-text-field>

                <v-text-field
                    name="lastname"
                    :label="`${$t('form.lastname')}`"
                    :counter="32"
                    :rules="[
                        (v) => !!v || `${$t('form.lastname')} ${$t('validation.is_required')}`,
                        (v) => (v && v.length <= 32) || `${$t('form.lastname')} ${$t('validation.max_length')} 32 ${$t('validation.characters')}`,
                    ]"
                    @focus="onFocus"
                    v-model="form.lastname"
                >
                </v-text-field>

                <v-text-field
                    name="email"
                    :label="`${$t('form.email')}`"
                    :rules="[(v) => !!v || `${$t('form.email')} ${$t('validation.is_required')}`, (v) => /.+@.+\..+/.test(v) || `${$t('form.email')} ${$t('validation.is_valid')}`]"
                    @focus="onFocus"
                    v-model="form.email"
                ></v-text-field>

                <v-textarea
                    name="message"
                    rows="6"
                    :label="`${$t('form.your_message')}`"
                    :rules="[
                        (v) => !!v || `${$t('form.your_message')} ${$t('validation.is_required')}`,
                        (v) => (v && v.length <= 2048) || `${$t('form.your_message')} ${$t('validation.max_length')} 2048 ${$t('validation.characters')}`,
                    ]"
                    @focus="onFocus"
                    v-model="form.message"
                ></v-textarea>
                <div class="my-2 text-center">
                    <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />
                </div>
                <!-- <div class="text-center" v-if="!messageSentSuccess && !messageSentError"> -->
                <div class="my-2 text-center">
                    <v-btn color="secondary" type="submit" :disabled="!valid" :loading="loading">{{ $t('form.submit') }}</v-btn>
                </div>
            </v-form>

            <v-alert type="warning" v-if="messageInvalidCaptcha">
                {{ $t('form.message_invalid_recaptcha') }}
            </v-alert>
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
export default {
    async mounted() {},
    data() {
        return {
            loading: false,
            messageInvalidCaptcha: false,
            messageSentSuccess: false,
            messageSentError: false,
            form: {
                firstname: '',
                lastname: '',
                email: '',
                message: '',
            },
            valid: true,
        }
    },
    computed: {},
    methods: {
        onFocus() {
            this.messageInvalidCaptcha = false
            this.messageSentSuccess = false
            this.messageSentError = false
        },
        encodeHTML(s) {
            return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')
        },
        async sendContactForm() {
            try {
                const token = await this.$recaptcha.getResponse()
                console.log('ReCaptcha token:', token)
                const valid = this.$refs.form.validate()
                console.log('valid: ', valid)
                if (valid) {
                    this.loading = true
                    const res = await fetch('https://script.google.com/macros/s/AKfycbyUbXcwQHeGAjSrDHbIx84PcM1FCEs-S3SnwZjHKQ/exec', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: new URLSearchParams({
                            firstname: `${this.encodeHTML(this.form.firstname)}`,
                            lastname: `${this.encodeHTML(this.form.lastname)}`,
                            email: `${this.encodeHTML(this.form.email)}`,
                            message: `${this.encodeHTML(this.form.message)}`,
                        }),
                    })
                    await this.$recaptcha.reset()

                    if (res.status === 200) {
                        this.$refs.form.reset()
                        this.messageInvalidCaptcha = false
                        this.messageSentError = false
                        this.messageSentSuccess = true
                    }
                }
            } catch (error) {
                console.log('error: ', error)
                if (error == 'Failed to execute') {
                    this.messageInvalidCaptcha = true
                } else {
                    this.messageSentSuccess = false
                    this.messageSentError = true
                }
            } finally {
                this.loading = false
            }
        },
        onSuccess(token) {
            console.log('Succeeded:', token)
        },
        onExpired() {
            console.log('Expired')
        },
        onError(error) {
            console.log('Error happened:', error)
        },
    },
}
</script>
