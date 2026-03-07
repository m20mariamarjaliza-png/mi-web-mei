import './style.css' //
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <--- Fíjate que NO lleva llaves { }

const app = createApp(App)

app.use(router) // Aquí usamos la variable que acabamos de importar
app.mount('#app')