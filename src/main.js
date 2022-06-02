import { createApp } from 'vue'
import VueImgix from '@imgix/vue'
import App from './App.vue'
import './index.css'

const app = createApp(App);
app.use(VueImgix, {
    domain: "tom.imgix.net",
    defaultIxParams: {
        auto: 'format,compress'
    },
}),

app.mount('#app')
