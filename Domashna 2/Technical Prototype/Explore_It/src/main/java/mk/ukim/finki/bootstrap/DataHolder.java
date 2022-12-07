package mk.ukim.finki.bootstrap;

import jakarta.annotation.PostConstruct;
import mk.ukim.finki.model.*;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataHolder {
    public static List<Atm> atms = new ArrayList<>();
    public static List<Catering> caterings = new ArrayList<>();
    public static List<FoodShop> foodShops = new ArrayList<>();
    public static List<Hotel> hotels = new ArrayList<>();
    public static List<Pub> pubs = new ArrayList<>();

    @PostConstruct
    public void init() {
        atms.add(new Atm(21.3900585, 42.0010817, "atm", "Комерцијална Банка АД Скопје"));
        atms.add(new Atm(21.3900911, 42.001081, "atm", "НЛБ - Тутунска Банка"));
        atms.add(new Atm(21.3925292, 42.0045813, "atm", "Шпаркасе Банка Македонија АД Скопје"));
        atms.add(new Atm(21.3946845, 42.0036936, "atm", "Стопанска Банка АД - Скопје"));
        atms.add(new Atm(21.4171593, 42.0058046, "atm", "Уни Банка"));


        caterings.add(new Catering(21.4182312, 41.9983382, "bakery", "Cake Boutique"));
        caterings.add(new Catering(21.4201393, 41.9993939, "bakery", "Вршник"));
        caterings.add(new Catering(21.4229234, 41.998251, "bakery", "Диман"));
        caterings.add(new Catering(22.2436716, 41.4097893, "greengrocer", "Пиљaрa Пaмпи"));
        caterings.add(new Catering(21.4025784, 41.9930311, "bakery", "Спаткарница Канела Прима"));


        foodShops.add(new FoodShop(21.4382827, 41.9754208, "convenience", "Томи"));
        foodShops.add(new FoodShop(21.4387489, 41.9754943, "bakery", "Фарина"));
        foodShops.add(new FoodShop(21.4314029, 41.9870802, "bakery", "Tony's Bakery"));
        foodShops.add(new FoodShop(22.1922843, 41.7376531, "butcher", "Бране Касапино"));

        hotels.add(new Hotel(21.4358015, 41.9761668, "hotel", "Hotel Imperial"));
        hotels.add(new Hotel(21.4362154, 41.9762321, "hotel", "Sun Hotel"));
        hotels.add(new Hotel(21.4295391, 41.9930093, "hotel", "Hotel Elsa"));
        hotels.add(new Hotel(21.4303313, 41.995617, "hotel", "Square"));
        hotels.add(new Hotel(21.4079869, 42.0153336, "hotel", "Вергина"));


        pubs.add(new Pub(21.4320378, 41.9957057, "pub", "Колектив"));
        pubs.add(new Pub(21.4340509, 41.9955386, "bar", "Етно-бар"));
        pubs.add(new Pub(21.4342829, 41.9954679, "pub", "Даблинер"));
        pubs.add(new Pub(21.4341686, 41.9955027, "pub", "Ало ало"));
        pubs.add(new Pub(21.4352156, 41.9951834, "pub", "Карпе дием"));
    }
}
