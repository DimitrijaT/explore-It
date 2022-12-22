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
                    mkd_lang_button: "Macedonian",
                    eng_lang_button: "English",
                    alb_lang_button: "Albanian",
                    user_position: "Your position",
                    show_atms: "Show Atms",
                    show_caterings: "Show Catering",
                    show_food_shops: "Show Food Shops",
                    show_hotels: "Show Hotels",
                    show_pubs: "Show Pubs",
                    clear_map: "Clear Map",
                    search: "Search by name",
                    submit_search: "Submit",
                    reset_search: "Reset",
                    distance_from_location: "Distance from your location",
                    home: "Home",
                    about: "About",
                    contact: "Contact"
                }
            },
            mk: {
                translation: {
                    atm_button: "Прикажи банкомати",
                    type: "Тип",
                    id: "ИД",
                    mkd_lang_button: "Македонски",
                    eng_lang_button: "Англиски",
                    alb_lang_button: "Албански",
                    user_position: "Ваша позиција",
                    show_atms: "Прикажи банкомати",
                    show_caterings: "Прикажи кетеринг услуги",
                    show_food_shops: "Прикажи продавници за храна",
                    show_hotels: "Прикажи хотели",
                    show_pubs: "Прикажи пабови",
                    clear_map: "Исчисти мапа",
                    search: "Пребарувај по име",
                    submit_search: "Испрати",
                    reset_search: "Ресетирај",
                    distance_from_location: "Оддалеченост од вашата локација",
                    home: "Почетна",
                    about: "За нас",
                    contact: "Контакт"
                }
            },
            al: {
                translation: {
                    atm_button: "Trego bankomat",
                    type: "Lloji",
                    id: "ID",
                    mkd_lang_button: "Maqedonisht",
                    eng_lang_button: "Anglisht",
                    alb_lang_button: "Shqip",
                    user_position: "Pozicioni juaj",
                    show_atms: "Shfaq ATM",
                    show_caterings: "Trego Catering",
                    show_food_shops: "Trego dyqanet e ushqimit",
                    show_hotels: "Trego hotelet",
                    show_pubs: "Shfaq Pabs",
                    clear_map: "Pastro hartën",
                    search: "Kërko sipas emrit",
                    submit_search: "Paraqisni",
                    reset_search: "Rivendos",
                    distance_from_location: "Largësia nga vendndodhja juaj",
                    home: "Shtëpi",
                    about: "Për Ne",
                    contact: "Kontaktoni"
                }
            }
        }

    }).then(() => {
        // TODO: Promise Resolved
        console.log("i18n promise resolved");
});

// export default i18n;