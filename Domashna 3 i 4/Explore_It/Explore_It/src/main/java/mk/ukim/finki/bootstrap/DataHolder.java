package mk.ukim.finki.bootstrap;


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

}
