import { createApp } from 'vue'
import './style.less'
import App from './main.vue'
import { router } from './routes/routes.module';

const app = createApp(App)
app.use(router).mount('#app')
