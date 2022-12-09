import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        debug: true,
        lng: "mk",
        fallbackLng: "mk",
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    type: "Type",
                    id: "ID",
                    mkd_lang_button: "Change language to Macedonian",
                    eng_lang_button: "Change language to English",
                    alb_lang_button: "Change language to Albanian",
                    user_position: "Your position",
                    show_atms: "Show Atms",
                    show_caterings: "Show Catering",
                    show_foodshops: "Show Food Shops",
                    show_hotels: "Show Hotels",
                    show_pubs: "Show Pubs",
                    clear_map: "Clear Map"
                }
            },
            mk: {
                translation: {
                    atm_button: "Прикажи банкомати",
                    type: "Тип",
                    id: "ИД",
                    mkd_lang_button: "Промени јазик во Македонски",
                    eng_lang_button: "Промени јазик во Англиски",
                    alb_lang_button: "Промени јазик во Албански",
                    user_position: "Ваша позиција",
                    show_atms: "Прикажи банкомати",
                    show_caterings: "Прикажи кетеринг услуги",
                    show_foodshops: "Прикажи продавници за храна",
                    show_hotels: "Прикажи хотели",
                    show_pubs: "Прикажи пабови",
                    clear_map: "Исчисти мапа"
                }
            },
            al: {
                translation: {
                    atm_button: "Trego bankomat",
                    type: "Lloji",
                    id: "ID",
                    mkd_lang_button: "Ndrysho gjuhën në maqedonisht",
                    eng_lang_button: "Ndrysho gjuhën në anglisht",
                    alb_lang_button: "Ndrysho gjuhën në shqip",
                    user_position: "Pozicioni juaj",
                    show_atms: "Shfaq ATM",
                    show_caterings: "Trego Catering",
                    show_foodshops: "Trego dyqanet e ushqimit",
                    show_hotels: "Trego hotelet",
                    show_pubs: "Shfaq Pabs",
                    clear_map: "Pastro hartën"
                }
            }
        }

    }).then(r => {
        // TODO: Promise Resolved
        console.log("i18n promise resolved");
});

export default i18n;