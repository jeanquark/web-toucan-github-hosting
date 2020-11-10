# web-toucan

A <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a> static website. Includes contact form and auto deployment to GitHub Pages on every push to master branch through GitHub Actions. **Free Hosting and deployment!**.

![homepage](static/images/homepage.jpg)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

## Contact form configuration

Sending emails from static websites is not as straightforward as with server-based sites. It is necessary to make use of third party functions. In this case, we use <a href="https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server" target="_blank">Google Apps Mail</a> which allows sending Emails from static HTML page.
