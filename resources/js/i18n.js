import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from "@/js/locales/en.json";
import uk from "@/js/locales/ukr.json";
import ru from "@/js/locales/rus.json";
Vue.use(VueI18n)
 const messages = {
    en,
    uk,
    ru
}
const browserLanguage = navigator.language
console.log(browserLanguage)
const i18n = new VueI18n({
    locale: browserLanguage || '',
    messages,
    silentFallbackWarn: true,
})

export default i18n

