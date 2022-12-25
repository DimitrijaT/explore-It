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
                    contact: "Contact",
                    show_restaurants: "Show Restaurants",
                    show_bars: "Show Bars",
                    show_cafe: "Show Cafes",
                    show_fast_food: "Show Fast Food Restaurants",
                    send_to_g_maps: "Send to Google Maps",
                    empty_poi_list_search_error: "Search Failed.\nBefore searching you must select a POI category.",
                    short_description_about: "Explore It is a web application for locating the nearest places of interest within the Republic of Macedonia. Each user can search for different places of interest and see their exact location on a map. The application offers the ability to display ATMs, hotels, restaurants, bars, cafes and fast food restaurants on the map view. The motivation behind the application is to encourage and simplify tourism in our country accompanied by stimulating the development of small businesses.",
                    short_description_contact: "The team behind ExploreIT:",
                    page_404: "HTTP 404 - page not found.",
                    redirecting_404: "You will be redirected to the home page in 3 seconds."
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
                    show_hotels: "Прикажи хотели",
                    show_pubs: "Прикажи пабови",
                    clear_map: "Исчисти мапа",
                    search: "Пребарувај по име",
                    submit_search: "Испрати",
                    reset_search: "Ресетирај",
                    distance_from_location: "Оддалеченост од вашата локација",
                    home: "Почетна",
                    about: "За нас",
                    contact: "Контакт",
                    show_restaurants: "Прикажи ресторани",
                    show_bars: "Прикажи барови",
                    show_cafe: "Прикажи кафулиња",
                    show_fast_food: "Прикажи ресторани за брза храна",
                    send_to_g_maps: "Испрати до Google Maps",
                    empty_poi_list_search_error : "Пребарувањето е неуспешно.\nПотребно е прво да се избере катерорија на места од интерес.",
                    short_description_about: "Explore It е веб апликација за лоцирање на најблиски места од интерес во рамки на Република Македонија. Секој корисник може да пребарува различни места од интерес и да ја види нивната точна локација на мапа. Апликацијата нуди можност за прикажување на банкомати, хотели, ресторани, барови, кафулиња и ресторани за брза храна на погледот на мапа. Мотивацијата позади апликацијата е поттикнување и поедноставување на туризмот во нашата држава пропратено со стимулација на развојот на малите бизниси.",
                    short_description_contact: "Тимот позади ExploreIT:",
                    page_404: "HTTP 404 - страната не е пронајдена.",
                    redirecting_404: "За 3 секунди ќе бидете пренасочени кон почетната страна."
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
                    contact: "Kontaktoni",
                    show_restaurants: "Kontrolloni restorantet",
                    show_bars: "Shfaq shiritat",
                    show_cafe: "Trego kafene",
                    show_fast_food: "Shfaq restorantet e ushqimit të shpejtë",
                    send_to_g_maps: "Dërgo te Google Maps",
                    empty_poi_list_search_error: "Kërkimi dështoi.\n" +
                        "Përpara kërkimit duhet të zgjidhni një kategori POI.",
                    short_description_about: "Explore Është një ueb aplikacion për gjetjen e vendeve më të afërta të interesit brenda Republikës së Maqedonisë. Çdo përdorues mund të kërkojë për vende të ndryshme të interesit dhe të shohë vendndodhjen e tyre të saktë në një hartë. Aplikacioni ofron mundësinë për të shfaqur ATM-të, hotelet, restorantet, baret, kafenetë dhe restorantet e ushqimit të shpejtë në pamjen e hartës. Motivimi i aplikimit është nxitja dhe thjeshtimi i turizmit në vendin tonë, i shoqëruar nga stimulimi i zhvillimit të bizneseve të vogla.",
                    short_description_contact: "Ekipi që qëndron pas ExploreIT:",
                    page_404: "HTTP 404 - faqja nuk u gjet",
                    redirecting_404: "Do të ridrejtoheni në faqen kryesore për 3 sekonda."
                }
            }
        }

    }).then(() => {
        console.log("i18n promise resolved");
});

// export default i18n;